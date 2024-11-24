import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/remix";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 flex flex-col">
      {/* Header */}
      <header className="bg-[#1A1A1A] shadow-lg py-4 px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#1E90FF] rounded-full"></div>
          <span>
            <span className="text-[#FFD700]">Stock</span>
            <span className="text-[#1E90FF]">Verse</span>
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-8">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#insights" className="hover:text-white">
            Insights
          </a>
          <a href="#join" className="hover:text-white">
            Join Us
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton fallbackRedirectUrl="/client" signUpFallbackRedirectUrl="/client">
              <button className="bg-[#1E90FF] hover:bg-[#1565C0] text-white font-semibold py-2 px-4 rounded-md">
                Log In
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-8 py-16">
        {/* Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-6">
            Dominate the Market with{" "}
            <span className="text-[#FFD700]">StockVerse</span>
          </h1>
          <p className="text-lg text-gray-400 mb-8">
            The ultimate platform for tracking, managing, and maximizing your
            investments in real time. Take control of your financial future.
          </p>
          <SignedOut>
            <SignInButton fallbackRedirectUrl="/client" signUpFallbackRedirectUrl="/client">
              <button className="bg-[#FFD700] hover:bg-[#FFC300] text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg">
                Get Started
              </button>
            </SignInButton>
          </SignedOut>
        </div>

        {/* Image/Visual Content */}
        <div className="flex-shrink-0">
          <img
            src="/image.png"
            alt="Stock Graph"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg object-contain"
          />

        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-[#1A1A1A] py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-[#222222] rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-[#FFD700] mb-4">
              Live Stock Prices
            </h3>
            <p className="text-gray-400">
              Stay informed with real-time updates and market insights at your
              fingertips.
            </p>
          </div>
          <div className="p-6 bg-[#222222] rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-[#1E90FF] mb-4">
              AI-Powered Analytics
            </h3>
            <p className="text-gray-400">
              Leverage cutting-edge AI tools to optimize your investment
              strategies.
            </p>
          </div>
          <div className="p-6 bg-[#222222] rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-[#32CD32] mb-4">
              Personalized Portfolio
            </h3>
            <p className="text-gray-400">
              Create a tailored dashboard to track your favorite stocks and
              metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-16 px-8 bg-gradient-to-r from-[#121212] to-[#1A1A1A]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">
            Market Insights at a Glance
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            Discover trends and patterns in the stock market with our intuitive
            visualization tools.
          </p>
          <img
            src="https://via.placeholder.com/800x400?text=Market+Insights"
            alt="Market Insights"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section id="join" className="bg-[#222222] py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-100 mb-6">
            Join <span className="text-[#FFD700]">StockVerse</span> Today
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Unlock powerful tools and insights to maximize your investments.
          </p>
          <SignedOut>
            <SignInButton fallbackRedirectUrl="/client" signUpFallbackRedirectUrl="/client">
              <button className="bg-[#1E90FF] hover:bg-[#1565C0] text-white font-bold py-3 px-8 rounded-md shadow-md">
                Sign Up Now
              </button>
            </SignInButton>
          </SignedOut>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A1A1A] py-6 text-center text-sm text-gray-500 border-t border-gray-700">
        <p>© 2024 StockVerse. All rights reserved.</p>
      </footer>
    </div>
  );
}
