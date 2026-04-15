import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Promiplast",
  description: "Thank you for contacting Promiplast.",
  alternates: {
    canonical: "/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4">
      <div className="max-w-xl w-full text-center bg-white rounded-2xl shadow-md p-8 space-y-4">
        <h1 className="text-3xl font-semibold text-gray-800">Thank You</h1>
        <p className="text-gray-600">
          Your form has been submitted successfully. We will contact you soon.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="inline-block bg-[#EDB932] px-6 py-2 text-sm tracking-wide text-gray-800 rounded-md hover:opacity-90 transition-all duration-300"
          >
            Go To Home
          </Link>
        </div>
      </div>
    </main>
  );
}
