import { Outfit,Ovo } from "next/font/google";
import "./globals.css";


const outfit = Outfit({ 
  subsets: ["latin"],
  weight:["400","500","600","700"]
});

const ovo = Ovo({ 
  subsets: ["latin"],
  weight:["400"]
});

export const metadata = {
  title: "Kathiravan Vellaisamy",
  description: "A modern portfolio website built with Next.js and Tailwind CSS to showcase my skills and projects as I re-enter the IT industry after a career break.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
       
        {children}
      </body>
    </html>
  );
}
