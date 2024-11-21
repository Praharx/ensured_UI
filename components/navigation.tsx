'use client';

import * as React from 'react';
import Link from 'next/link';
import { MainNavItem } from 'types';
import { cn } from '@/lib/utils';
import { MobileNav } from '@/components/mobile-nav';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';


interface CircularNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
  user?: boolean;
}

export default function CircularNavigation({
  items,
  children,
  user
}: CircularNavProps) {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);

  return (
    <nav className="flex flex-wrap items-center min-w-[45vw] justify-between w-full md:w-fit p-2 md:p-1 gap-4 md:gap-20 md:bg-zinc-50 md:dark:bg-zinc-900 md:rounded-full md:px-8 md:border-2 md:border-muted/30 md:dark:border-muted/80 md:shadow-md mx-auto mt-4 backdrop-blur-sm md:backdrop-blur-none">
      <div className="flex items-center">
        <span className="text-lg md:text-xl font-extrabold tracking-tightest">GRYFFIN.</span>
      </div>
      <div className="flex items-center">
      {items?.length ? (
        <div className="flex space-x-6 items-center">
          {items?.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? '#' : item.href}
              className={cn(
                'text-primary transition-colors hover:text-foreground/80',
                item.disabled && 'cursor-not-allowed opacity-80'
              )}
            >
              {item.title}
            </Link>
          ))}
        </div>
      ) : null}
       <div className="hidden ml-4 mt-1 md:block">
          <ModeToggle />
        </div>
      </div>
      {showMobileMenu && items && (
        <div className="absolute top-full left-0 right-0 w-full md:hidden mt-2">
          <MobileNav items={items}>{children}</MobileNav>
        </div>
      )}
    </nav>
  );
}