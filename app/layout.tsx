import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
// import { Provider } from "react-redux";
// import { store } from "./redux/store";
import Footer from "./components/footer";

import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FCODES",
  description: "FCODES IT SERVICES THAT YOU CAN TRUST",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Provider store={store}> */}
        <Navbar isLoggedIn={false} onLogout={true} />
        {children}

        <Footer />
        {/* </Provider> */}
      </body>
    </html>
  );
}
