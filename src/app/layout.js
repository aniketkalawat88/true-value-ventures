import Footer from "./_components/footer";
import Navbar from "./_components/navbar";
import Whatsapp from "./_components/whats-app";
import "./globals.css";

export const metadata = {
  title: "True Value Ventures - Responsible Global Partners",
  description: "Responsible Global Partners export and import market",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`relative`}>
        
    <link  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"  rel="stylesheet"/>
        <link  href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"  rel="stylesheet"/>
        <Navbar />
        <Whatsapp />
        {children}
        <Footer />
      </body>
    </html>
  );
}
