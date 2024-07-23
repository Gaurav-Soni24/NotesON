import "./globals.css";
import { Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['400', '700'], // You can specify the font weights you want to use
  subsets: ['latin'], // You can specify the subsets you want to use
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
