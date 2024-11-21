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
    <div>
      <p className="mt-12 text-xs uppercase text-primary text-center font-bold tracking-[0.3em]">
        GRYFFIN IS BUILT FOR
      </p>
      <div className="grid grid-cols-1 place-items-center justify-center my-12 space-y-4 sm:mt-8 sm:space-y-0 md:mx-auto md:max-w-2xl sm:grid sm:gap-6 sm:grid-cols-5">
        <div className="flex items-center justify-center h-15 w-24">
          <a href=" https://www.anchor-lang.com/" aria-label="Next.js Link" className='flex flex-row items-center justify-center gap-1'> 
            <img src="/anchor.png" alt="Anchor" className="size-6" />
            <span className="font-[700] text-2xl">ANCHOR</span>
          </a>
        </div>
        <div className="flex items-center justify-center h-15 w-24">
          <a
            href="https://github.com/regolith-labs/steel"
            aria-label="Steel Link"
          >
            <span className="font-[700] text-2xl">STEEL</span>
          </a>
        </div>
        <div className="flex items-center justify-center h-12 w-24">
          <a href="https://www.seahorse.dev/" aria-label="stripe.com Link">
          <span className="font-[700] text-2xl">SEAHORSE</span>
          </a>
        </div>
        <div className="flex items-center justify-center h-15 w-24">
          <a href="https://solana.com/" aria-label="supabase.io Link">
          <span className="font-[700] text-2xl min-w-[10vw]">Solana native</span>
          </a>
        </div>
        <div className="flex items-center justify-center h-15 w-24">
          <a
            href="https://github.com/mithraiclabs/poseidon
"
            aria-label="github.com Link"
          >
            <span className="font-[700] font-italic">Poseidon</span>
          </a>
        </div>
      </div>
    </div>
  );
}
