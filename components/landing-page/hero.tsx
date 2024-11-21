'use client';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Star } from 'lucide-react';
import Particles from '@/components/magicui/particles';
import axios from 'axios'
import Ripple from '@/components/magicui/ripple';
import AnimatedGradientText from '@/components/magicui/animated-shiny-text';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useToast } from '../ui/use-toast';

import { useState, useEffect, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog';

export default function HeroSection() {
  const { theme } = useTheme();
  const {toast} = useToast()
  const [twitter, setTwitter] = useState('')

  return (
    <section className="relative w-full overflow-hidden min-h-[90vh] -mt-4">
      <div className="absolute inset-0 z-0">
        <Particles
          className="absolute inset-0 min-h-screen"
          quantity={300}
          ease={80}
          color={theme === 'dark' ? '#FFFFFF' : '#000000'}
          refresh
        />
        <Ripple />
      </div>
      <div className="container mt-24 mx-auto px-4 py-12 md:py-16 lg:py-32">
        <div className="relative z-10 flex max-w-[64rem] flex-col items-center gap-4 text-center mx-auto">
          <Link href={siteConfig.links.twitter} className="w-fit">
            <div
              className={cn(
                '-mt-8 mb-3 group rounded-full border border-black/5 bg-neutral-100 text-base text-secondary transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
              )}
            >
              <AnimatedGradientText className="inline-flex items-center justify-center px-4 py-2 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                🎉 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{' '}
                <span
                  className={cn(
                    `inline animate-gradient bg-gradient-to-r from-[#b76a24] via-[#6a24b7] to-[#b76a24] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
                  )}
                >
                  Follow the progress on X
                </span>
                <ArrowRightIcon className="ml-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div>
          </Link>

          <h1 className="font-heading font-bold tracking-tight text-2xl sm:text-4xl md:text-5xl lg:text-6xl -mt-4">
            AI co-pilot to help you ship at <br />{' '}
            <span className="mt-1 flex gap-3 justify-center">
              <span className="font-extrabold ml-4">SOLANA</span>speed
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-14 -ml-3"
              >
                <path
                  fillRule="evenodd"
                  d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </h1>
          <div className="max-w-[42rem] font-bold tracking-tight text-primary sm:text-xl sm:leading-8 rounded-full p-2">
            Get intelligent code completions and integrated debugging—all in one
            place.
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <AlertDialog>
              <AlertDialogTrigger
                className={cn(
                  buttonVariants({ size: 'xl' }),
                  'rounded-full border-2 border-primary dark:border-white text-bold text-white'
                )}
              >
                Join the waitlist
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Join the Waitlist</AlertDialogTitle>
                  <AlertDialogDescription>
                    Please enter your Twitter account to join the waitlist.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    // Handle form submission
                    toast({
                      title: "Thanks for joining the waitlist!",
                      description: "We will reach out to you soon"
                    })
                    try {
                      await axios.post('https://email-bs.onrender.com', null, {
                        params: {
                          email: twitter,
                          message: 'joined',
                          type: 'waiting',
                        }
                      });
                      
                    } catch (err) {
                      console.log(err)
                    }
                    // Show sonar or any other feedback
                    
                  }}
                >
                  <div className="flex flex-col space-y-4">
                    <input
                      type="text"
                      name="twitter"
                      placeholder="@yourtwitterhandle"
                      className="rounded-md border border-gray-300 p-2"
                      onChange={(e) => setTwitter(e.target.value)}
                      required
                    />
                    <div className="flex justify-end space-x-2">
                      <AlertDialogCancel >Cancel</AlertDialogCancel>
                      <button
                        type="submit"
                        className="rounded-full border-2 border-primary dark:border-white dark:text-white text-bold text-black px-4 py-2"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </AlertDialogContent>
            </AlertDialog>
            {/* <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'xl' }),
                'rounded-full border-2 border-primary dark:border-white text-semibold'
              )}
            >
              GitHub <GitHubLogoIcon className="ml-2" />
            </Link> */}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full">
            {/* <AvatarCircles numPeople={155} avatarUrls={avatarUrls} /> */}
            {/* <div className="flex flex-col mt-2"> */}
            {/* <div className="flex flex-row justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-200 text-yellow-300 size-5"
                  />
                ))}
              </div>
              <span className="text-xs font-semibold">
                Join 160+ developers
              </span> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
