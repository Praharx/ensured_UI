'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card-header';
import type { Tables } from '@/types/db';
// import { getStripe } from '@/utils/stripe/client';
import { checkoutWithStripe } from '@/utils/stripe/server';
import { getErrorRedirect } from '@/utils/helpers';
import { User } from '@supabase/supabase-js';
import { useRouter, usePathname } from 'next/navigation';
import { Moon } from 'lucide-react';
import pricingPlans from '@/config/pricing';
import { dummyPricing } from '@/config/pricing';
import { useToast } from '../ui/use-toast';

type Subscription = Tables<'subscriptions'>;
type Product = Tables<'products'>;
type Price = Tables<'prices'>;
interface ProductWithPrices extends Product {
  prices: Price[];
}
interface PriceWithProduct extends Price {
  products: Product | null;
}
interface SubscriptionWithProduct extends Subscription {
  prices: PriceWithProduct | null;
}

interface Props {
  user: User | null | undefined;
  products: ProductWithPrices[];
  subscription: SubscriptionWithProduct | null;
}

type BillingInterval = 'lifetime' | 'year' | 'month';

export default function PricingRounded({
  user,
  products,
  subscription
}: Props) {
  const intervals = Array.from(
    new Set(
      products.flatMap((product) =>
        product?.prices?.map((price) => price?.interval)
      )
    )
  );
  const router = useRouter();
  const {toast} = useToast()
  const [billingInterval, setBillingInterval] =
    useState<BillingInterval>('month');
  const [priceIdLoading, setPriceIdLoading] = useState<string>();
  const currentPath = usePathname();

  const handleStripeCheckout = async (price: Price) => {
    setPriceIdLoading(price.id);

    if (!user) {
      setPriceIdLoading(undefined);
      return router.push('/signup');
    }

    const { errorRedirect, sessionId } = await checkoutWithStripe(
      price,
      currentPath
    );

    if (errorRedirect) {
      setPriceIdLoading(undefined);
      return router.push(errorRedirect);
    }

    if (!sessionId) {
      setPriceIdLoading(undefined);
      return router.push(
        getErrorRedirect(
          currentPath,
          'An unknown error occurred.',
          'Please try again later or contact a system administrator.'
        )
      );
    }

    // const stripe = await getStripe();
    // stripe?.redirectToCheckout({ sessionId });

    setPriceIdLoading(undefined);
  };

  const displayProducts = products.length ? products : dummyPricing;

  if (!displayProducts.length) {
    return (
      <section className="container mx-auto" id="pricing">
        <div className="max-w-6xl px-4 py-8 mx-auto sm:py-24 sm:px-6 lg:px-8">
          <div className="sm:flex sm:flex-col sm:align-center"></div>
          <p className="text-4xl font-extrabold text-white sm:text-center sm:text-6xl">
            No subscription pricing plans found. Create them in your{' '}
            <a
              className="text-pink-500 underline"
              href="https://dashboard.stripe.com/products"
              rel="noopener noreferrer"
              target="_blank"
            >
              Stripe Dashboard
            </a>
            .
          </p>
        </div>
      </section>
    );
  } else {
    return (
      <section className="container mx-auto" id="pricing">
        <div className="flex flex-col items-center justify-center w-full min-h-screen py-10 ">
          <h1 className="text-3xl font-bold text-center">
            PRICING
          </h1>
          <span className="-mt-1 text-2xl font-bold text-center">coz builders are broke</span>
          <p className="mt-2 text-center text-muted-foreground mb-4">
            Not charging much but just little enough to keep us afloat:))
          </p>
          <Card className="w-full max-w-md mb-2">
            <CardHeader>
              <CardTitle>Solana Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-2 ">
                  <div className="text-lg font-medium mt-2">GnKxPb5...fsPipHT</div>
                  <svg 
                    onClick={() => {
                      navigator.clipboard.writeText('GnKxPb5MBsFysJFVVM5xbyo2WD9DNRvmL2vThfsPipHT').then(() => {
                        // Trigger a sonar or feedback here
                        toast({
                          title: "Copied to clipboard successfully!",
                          description: "you can pay now!",
                        })
                        console.log('Copied to clipboard successfully!');
                      });
                    }}
                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
                  </svg>

                </div>
                <div className="w-32 h-32 bg-gray-200 rounded-md">
                  <img src="/sol_scan.png" alt="solana" className="w-full h-full object-contain" />
                </div>
                <div className="text-lg font-medium mt-2">Amount: 10 USDC</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }
}

function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}