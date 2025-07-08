import { PropsWithChildren } from 'react';
import '@/styles/globals.css';
import { ThemeProvider } from './theme-provider';

export const dynamic = 'force-dynamic';

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children
}: PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>
          C&M Heating & Cooling - Professional HVAC Services in Massachusetts | 30+ Years Experience
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <!--  Social tags   --> */}
        <meta
          name="keywords"
          content="HVAC, heating, cooling, air conditioning, furnace repair, AC installation, Massachusetts, Giovanni Montefusco, emergency HVAC service, Lowell, Lawrence, Andover, Haverhill"
        />
        <meta name="description" content="Professional HVAC services in Massachusetts with 30+ years experience. C&M Heating & Cooling offers air conditioning, heating, installation, repair and maintenance. Licensed & insured. Call (978) 360-3367 for same-day service." />
        {/* <!-- Schema.org markup for Google+ --> */}
        <meta itemProp="name" content="C&M Heating & Cooling - Professional HVAC Services Massachusetts" />
        <meta
          itemProp="description"
          content="Professional HVAC services in Massachusetts with 30+ years experience. Air Quality & Comfort Specialist offering installation, repair and maintenance."
        />
        <meta
          itemProp="image"
          content="https://www.cmhvacllc.com/images/hvac-service.jpg"
        />
        {/* <!-- Twitter Card data --> */}
        <meta name="twitter:card" content="summary" />
        <meta
          name="twitter:title"
          content="C&M Heating & Cooling - Professional HVAC Services Massachusetts"
        />
        <meta
          name="twitter:description"
          content="Professional HVAC services with 30+ years experience. Licensed & insured. Call (978) 360-3367"
        />
        <meta
          name="twitter:image"
          content="https://www.cmhvacllc.com/images/hvac-service.jpg"
        />
        {/* <!-- Open Graph data --> */}
        <meta
          property="og:title"
          content="C&M Heating & Cooling - Professional HVAC Services Massachusetts"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cmhvacllc.com" />
        <meta
          property="og:image"
          content="https://www.cmhvacllc.com/images/hvac-service.jpg"
        />
        <meta
          property="og:description"
          content="Professional HVAC services with 30+ years experience. Air Quality & Comfort Specialist. Licensed & insured. Call (978) 360-3367"
        />
        <meta
          property="og:site_name"
          content="C&M Heating & Cooling"
        />
        <link rel="canonical" href="https://www.cmhvacllc.com" />
        <link rel="icon" href="/img/favicon.ico" />
      </head>
      <body id={'root'} className="loading bg-white">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main id="skip">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
