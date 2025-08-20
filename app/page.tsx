import Header from "@/components/Header";
import CheckoutButton from "@/components/CheckoutButton";
import Footer from "@/components/Footer";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import ExampleApp from "@/components/ExampleApp";

const features = [
  {
    title: "Authentication",
    description: "Clerk is wired up for sign ups and sessions out of the box.",
  },
  {
    title: "Payments",
    description: "Stripe Checkout is pre-configured so you can charge users quickly.",
  },
  {
    title: "Database",
    description: "Supabase gives you a Postgres database with an instant API.",
  },
];

export default function Home() {
  return (
    <div>
      <SignedIn>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">
            {/* Hero */}
            <section className="bg-gradient-to-b from-gray-900 to-black py-32 pb-12 text-center">
              <h1 className="mx-auto max-w-2xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
                Build your SaaS, fast.
              </h1>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
                A minimal starter with auth, payments, and database ready so you can
                focus on your product.
              </p>
              <div className="mt-14 pb-12 flex justify-center">
                <CheckoutButton />
              </div>
            </section>


            {/* Features */}
            <section className="relative overflow-hidden py-12 pt-12">
              {/* Section soft glow */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-15 blur-3xl"></div>
              </div>

              {/* Subtle animated conic gradient */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(at_top_right,_indigo_500,_purple_500,_pink_500,_indigo_500)] opacity-10 blur-3xl animate-[spin_24s_linear_infinite]"></div>

              <div className="relative z-10">
                <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                  {features.map((feature) => (
                    <div key={feature.title} className="text-center">
                      <h3 className="relative mx-auto inline-block text-xl font-semibold text-white">
                        <span className="absolute -inset-1 -z-10 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-25 blur"></span>
                        <span className="relative">{feature.title}</span>
                      </h3>
                      <p className="mt-2 text-gray-400">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Centered Example app (make it pretty) */}
            <section className="py-32 pb-42 text-center flex justify-center items-center">

              <ExampleApp />
            </section>

            {/* Call to action */}
            <section className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900 py-20 text-center">
              {/* Soft edge glow using the same colors as the card */}
              <div className="pointer-events-none absolute inset-0 z-0">
                <div className="absolute -inset-1 rounded-[32px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-35 blur-2xl"></div>
              </div>

              {/* Subtle animated conic gradient behind the section */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[conic-gradient(at_top_right,_indigo_500,_purple_500,_pink_500,_indigo_500)] opacity-30 blur-3xl animate-[spin_16s_linear_infinite]"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white">Ready to build?</h2>
                <p className="mx-auto mt-4 max-w-md text-gray-400">
                  Grab the starter and start shipping features today.
                </p>
                <div className="mt-8 flex justify-center">
                  <CheckoutButton />
                </div>
              </div>
            </section>
          </main>
          <Footer />
        </div>
      </SignedIn>
      <SignedOut>
        <div className="flex min-h-screen flex-col">
          <Header />
        </div>
      </SignedOut>



    </div>
  );
}

