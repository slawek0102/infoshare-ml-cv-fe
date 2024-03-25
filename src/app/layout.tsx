import { Inter } from "next/font/google";
import Menu from "../components/Manu";
import "./globals.css";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Menu />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
