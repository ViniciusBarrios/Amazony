import { Metadata } from "next";
import Script from "next/script";

import ServerStylesheet from "./ServerStylesheet";

export const metadata: Metadata = {
  title: "Rosa Amazônica - Site Oficial",
};

export default ({ children }: { children: JSX.Element }) => (
  <html lang="pt-br">
    <head>
      <meta
        name="facebook-domain-verification"
        content="ccuwzedctluemhmixoy5jbjye9k5o5"
      />

      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');`,
        }}
      />
    </head>
    <body>
      <ServerStylesheet>{children}</ServerStylesheet>
    </body>
  </html>
);
