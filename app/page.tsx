import Header from "@/components/Header";
import CheckoutButton from "@/components/CheckoutButton";
import Footer from "@/components/Footer";
import ExampleApp from "@/components/ExampleApp";
import Link from "next/link";

const features = [
  {
    title: "Authentication",
    description:
      "Clerk handles sign up, sign in, and session management out of the box.",
  },
  {
    title: "Payments",
    description:
      "Stripe Checkout is pre-configured so you can charge users quickly.",
  },
  {
    title: "Database",
    description:
      "Supabase gives you a Postgres database with an instant API.",
  },
  {
    title: "Developer tools",
    description:
      "TypeScript, ESLint, and Tailwind CSS provide a productive environment.",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-gradient-to-b from-gray-900 to-black py-32 text-center">
          <h1 className="mx-auto max-w-3xl text-5xl font-bold tracking-tight text-white sm:text-6xl">
            The foundation for your next SaaS
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Ship faster with authentication, payments, and database already
            configured so you can focus on your product.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
            >
              Sign up
            </Link>
            <Link
              href="/sign-in"
              className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
            >
              Sign in
            </Link>
            <CheckoutButton />
          </div>
        </section>

        {/* Features */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="text-3xl font-bold text-white">What’s inside</h2>
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center">
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-4 text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example app */}
        <section className="bg-gray-950 py-24 text-center">
          <h2 className="text-3xl font-bold text-white">Try it out</h2>
          <p className="mx-auto mt-4 max-w-md text-gray-400">
            A tiny todo list to demonstrate the stack in action.
          </p>
          <div className="mt-8 flex justify-center">
            <ExampleApp />
          </div>
        </section>

        {/* Call to action */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-24 text-center">
          <h2 className="text-3xl font-bold text-white">Start building today</h2>
          <p className="mx-auto mt-4 max-w-md text-gray-400">
            Use the starter to explore Clerk auth, Stripe payments, and Supabase
            database in one integrated stack.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/sign-up"
              className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
            >
              Create account
            </Link>
            <Link
              href="/sign-in"
              className="rounded-md bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20"
            >
              Sign in
            </Link>
            <CheckoutButton />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

