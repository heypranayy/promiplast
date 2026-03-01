import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import MyProvider from "./redux/MyProvider";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--poppins-400",
});

/*
⚠️ IMPORTANT:
Do NOT export metadata here since it was previously duplicated.
Keep it commented or move to page.tsx if needed.
*/

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="cotDxIihN6pajU2KJ3wcUwKTutPuDM95scxTXiHwxWo"
        />

        {/* Favicons */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
      </head>

      <body
        className={`${roboto.className} ${poppins.variable} bg-[#FAFAFA] overflow-hidden w-full`}
      >
        {/* Google Analytics GA4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-Z2F00SKKJP"
          strategy="afterInteractive"
        />

        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2F00SKKJP');
            `,
          }}
        />

        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
