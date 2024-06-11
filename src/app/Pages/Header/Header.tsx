import React from "react";

export default function Header() {
  return (
    <div className="glass-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink">
              <a href="/" className="font-bold text-2xl text-black">
                Stockholm.
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-4">
              <a href="/" className="text-black rounded-lg p-2">
                About
              </a>
              <a href="/" className="text-black rounded-lg p-2">
                Docs
              </a>
              <a href="/" className="text-black rounded-lg p-2">
                Team
              </a>
              <a
                href="/"
                className="font-bold text-xl text-black hover:bg-black hover:text-white rounded-lg p-2"
              >
                Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
