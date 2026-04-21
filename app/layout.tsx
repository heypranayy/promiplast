import { Poppins } from "next/font/google";
import { Roboto } from "next/font/google";
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
        {/* Google tag (single global install for all pages) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Z2F00SKKJP"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Z2F00SKKJP');
              gtag('config', 'AW-18080754106');
            `,
          }}
        />

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
        <MyProvider>{children}</MyProvider>
      </body>
    </html>
  );
}
