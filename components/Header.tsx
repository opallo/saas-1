'use client';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between p-6">
      <h1 className="text-xl font-semibold">SaaS App</h1>
      <nav className="flex items-center gap-4">
        <SignedIn>
          <div className="relative">
            <UserButton
              showName={false}
              userProfileMode="modal"
              afterSwitchSessionUrl="/"
            />
            <div className="pointer-events-none absolute right-0 top-full mt-2 flex flex-col items-center text-xs text-white">
              <span className="text-4xl leading-none">↑</span>
              <span>Auth built-in!</span>
            </div>
          </div>
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </nav>
    </header>
  );
};

export default Header;

