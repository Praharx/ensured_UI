'use client';
import { useEffect, useState } from 'react';
import {
  StripeSvg,
  NextjsSvg,
  SupabaseSvg,
  VercelSvg,
  GithubSvg
} from '@/components/svg';

export default function LogoCloud() {
  const [primaryColor, setPrimaryColor] = useState('');

  useEffect(() => {
    // Get the computed style of the primary color
    const rootStyles = getComputedStyle(document.documentElement);
    const primaryColorValue = rootStyles.getPropertyValue('--primary');
    setPrimaryColor(primaryColorValue.trim());
  }, []);

  return (
    <div className="w-full">
      <p className="mt-12 text-xs uppercase text-primary text-center font-bold tracking-[0.3em]">
        GRYFFIN IS BUILT FOR
      </p>
      <div className="flex w-full justify-between my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:gap-6">
        <div className="flex-1 flex justify-center mr-10">
          <a
            href="https://www.anchor-lang.com/"
            aria-label="Next.js Link"
            className="flex flex-row items-center justify-center gap-1"
          >
            <img src="/anchor.png" alt="Anchor" className="size-6" />
            <span className="font-[700] text-2xl">ANCHOR</span>
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <a href="https://www.seahorse.dev/" aria-label="stripe.com Link" className="flex flex-row items-center justify-center gap-2">
            <img src="/SEAHORSE.png" alt="POSEDION" className="size-8 -ml-8" />
            <span className="font-[700] -ml-2 text-2xl">SEAHORSE</span>
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <a
            href="https://github.com/regolith-labs/steel"
            aria-label="Steel Link"
            className="flex flex-row items-center justify-center gap-1"
          >
            <span className="font-[700] text-2xl">STEEL</span>
          </a>
        </div>
        <div className="flex-1 flex justify-center mr-2">
          <a href="https://solana.com/" aria-label="supabase.io Link" className="-mr-6 -ml-6 flex flex-row items-center justify-center">
            <img src="/NATIVE.png" alt="POSEDION" className="size-10 -mr-4" />
            <span className="font-[700] text-2xl ml-2 -mt-1">
              NATIVE
            </span>
          </a>
        </div>
        <div className="flex-1 flex justify-center">
          <a
            href="https://github.com/mithraiclabs/poseidon"
            className="flex flex-row justify-center "
            aria-label="github.com Link"
          >
            <img src="/POSEDION.png" alt="POSEDION" className="size-12 -mt-2" />
            <span className="font-[700] -ml-3 text-2xl font-italic">POSEDION</span>
          </a>
        </div>
      </div>
    </div>
  );
}
