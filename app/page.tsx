import Image from 'next/image';
import { SignedIn,UserButton } from '@clerk/nextjs';
import { Hero } from '@/components/landing/hero';
export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero/>
      {/*<Features />
      <HowItWorks /> */}

      <SignedIn>
        <div className="fixed top-4 right-4">
          <UserButton />
        </div>
      </SignedIn>

      {/* <Pricing />
      <CTA /> */}
    </main>
  );
}
