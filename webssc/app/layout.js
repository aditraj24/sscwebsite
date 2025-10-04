import Navbar from "./navbar";
import Footer from "./footer";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <>
      <head>
        <title>SSC NIT Jamshedpur</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="ssclogo.png" type="image/x-icon"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <html lang="en">
        <body className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}


