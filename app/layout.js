import Navbar from "./navbar";
import Footer from "./footer";
import "./globals.css";

// export default function RootLayout({ children }) {
//   return (
//     <html>
//       <body className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-grow pt-16">{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
