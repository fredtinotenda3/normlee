"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    // Surface the error for debugging. Hook up error reporting here if added later.
    console.error(error);
  }, [error]);

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-heading font-extrabold text-secondary mb-4">
          Something went wrong
        </h1>
        <p className="text-gray-600 mb-10">
          We couldn&apos;t load this page. Please try again, or contact us directly if the problem continues.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button
            type="button"
            onClick={() => unstable_retry()}
            className="rounded-lg bg-primary-strong px-6 py-3 font-heading font-bold text-white hover:bg-primary-strong-hover transition-colors"
          >
            Try again
          </button>
          <Link
            href="/contact"
            className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-heading font-bold text-secondary hover:border-primary-strong hover:text-primary-strong transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
