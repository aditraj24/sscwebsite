import Navbar from "./navbar";
import Footer from "./footer";
import "./globals.css";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
