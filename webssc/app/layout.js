// import Navbar from "./navbar";
// import Footer from "./footer";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <>
//       <head>
//         <title>SSC NIT Jamshedpur</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="ssclogo.png" type="image/x-icon"></link>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//       </head>
//       <html lang="en">
//         <body className="min-h-screen flex flex-col">
//           <Navbar />
//           <main className="flex-grow pt-16">{children}</main>
//           <Footer />
//         </body>
//       </html>
//     </>
//   );
// }


// new added code 
// "use client";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import Navbar from "./navbar";
// import Footer from "./footer";
// import "./globals.css";

// export default function RootLayout({ children }) {
//   const [showLaunchPage, setShowLaunchPage] = useState(true);
//   const pathname = usePathname();

//   // Check if we're on the home page and should show launch page
//   const isHomePage = pathname === "/";
//   const shouldShowNavFooter = !isHomePage || !showLaunchPage;

//   // Listen for launch completion
//   useEffect(() => {
//     const handleLaunchComplete = () => {
//       setShowLaunchPage(false);
//     };

//     // Add event listener for launch completion
//     window.addEventListener('launchComplete', handleLaunchComplete);
    
//     return () => {
//       window.removeEventListener('launchComplete', handleLaunchComplete);
//     };
//   }, []);

//   return (
//     <>
//       <head>
//         <title>SSC NIT Jamshedpur</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <link rel="icon" href="ssclogo.png" type="image/x-icon"></link>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//       </head>
//       <html lang="en">
//         <body className="min-h-screen flex flex-col">
//           {shouldShowNavFooter && <Navbar />}
//           <main className={shouldShowNavFooter ? "flex-grow pt-16" : "flex-grow"}>
//             {children}
//           </main>
//           {shouldShowNavFooter && <Footer />}
//         </body>
//       </html>
//     </>
//   );
// }


"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import "./globals.css";

export default function RootLayout({ children }) {
  const [showLaunchPage, setShowLaunchPage] = useState(true);
  const pathname = usePathname();

  // Check if we're on the home page
  const isHomePage = pathname === "/";
  
  // Show navbar/footer when:
  // 1. NOT on home page (other pages always show layout)
  // 2. OR on home page but launch is complete (showLaunchPage = false)
  const shouldShowNavFooter = !isHomePage || !showLaunchPage;

  // Listen for launch completion
  useEffect(() => {
    const handleLaunchComplete = () => {
      setShowLaunchPage(false);
    };

    // Only add listener if we're on home page
    if (isHomePage) {
      window.addEventListener('launchComplete', handleLaunchComplete);
    }
    
    return () => {
      if (isHomePage) {
        window.removeEventListener('launchComplete', handleLaunchComplete);
      }
    };
  }, [isHomePage]);

  // Reset launch page state when navigating away from home
  useEffect(() => {
    if (!isHomePage) {
      setShowLaunchPage(true); // Reset for next visit to home
    }
  }, [isHomePage]);

  return (
    <html lang="en">
      <head>
        <title>SSC NIT Jamshedpur</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="ssclogo.png" type="image/x-icon"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        {shouldShowNavFooter && <Navbar />}
        <main className={shouldShowNavFooter ? "flex-grow pt-16" : "flex-grow"}>
          {children}
        </main>
        {shouldShowNavFooter && <Footer />}
      </body>
    </html>
  );
}