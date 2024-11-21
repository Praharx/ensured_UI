'use client'
import { useState } from "react"
import React from 'react'

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { createClient } from '@supabase/supabase-js'
import { useToast } from "@/components/ui/use-toast"
import { CoolMode } from "@/components/magicui/cool-mode";
import axios from 'axios'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)

const AnimatedUnderline = ({ children, href, className }: { children: React.ReactNode; href: string; className?: string }) => (
  <a 
    href={href} 
    className={`${className} relative overflow-hidden group`}
  >
    {children}
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-current transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></span>
  </a>
);

export default function FooterPrimary() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()
  const [twitter, setTwitter] = useState('')
  const handleSubmit = async (e: any) => {
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
    
  }

  return (
    <footer className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h1 className="text-2xl font-extrabold mb-4">Connect</h1>
            <h3 className="text-lg font-bold mb-4">Builder 1(Zeref)</h3>
            <ul className="space-y-2">
              <li>
                <AnimatedUnderline href="https://x.com/0xzrf" className="text-primary">
                  X
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="https://github.com/0xzrf" className="text-primary">
                  Github
                </AnimatedUnderline>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 mt-10">Builder 2(Joon)</h3>
            <ul className="space-y-2">
              <li>
                <AnimatedUnderline href="https://x.com/joonx05" className="text-primary">
                  X
                </AnimatedUnderline>
              </li>
              <li>
                <AnimatedUnderline href="https://github.com/joonx05" className="text-primary">
                  Github
                </AnimatedUnderline>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">
              Join our waitlist
            </h3>
            <p className="text-primary mb-4">
              Gryffin is an AI Copilot and debugger specifically designed for Solana development. Dont give a second thought, join in the movement.
            </p>
            <form onSubmit={handleSubmit} className="flex">
              <div className="flex items-center w-full border border-gray-300 rounded-md focus-within:outline-none">
                <Input 
                  type="text" 
                  placeholder="@yourtwitterhandle" 
                  className="w-full text-sm relative z-20 border-none" 
                  required 
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                />
                <CoolMode>
                  <Button type="submit" className="my-1 bg-black text-white rounded-md mr-1 ">
                    <ArrowRightIcon className="h-5 w-5" />
                  </Button>
                </CoolMode>
              </div>
            </form>
          </div>
        </div>
        <div className="border-t mt-10 pt-6 flex flex-col items-center md:flex-row justify-between">
          <div className="flex items-center space-x-2">
            <LogInIcon className="h-6 w-6" />
            <span className="text-xl font-bold">GRYFFIN.</span>
          </div>
          <p className="text-gray-500 mt-4 md:mt-0">Come join the journey</p>
        </div>
      </div>
    </footer>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function LogInIcon(props: any) {
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
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
}
