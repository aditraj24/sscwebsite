import Navbar from "./navbar";
import Footer from "./footer";
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
