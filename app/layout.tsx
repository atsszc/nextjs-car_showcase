import "./globals.css";

import { Footer, Navbar } from "@/components";


export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link
          rel="icon"
          href="/carlogo.png?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
