import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
        {/* </Provider> */}
      </body>
    </html>
  );
}
