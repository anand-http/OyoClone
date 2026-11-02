import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/context";


const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "OYO : India's Best Online Hotel Booking Site For Sanatized Stay",
  description: "This is a online hotel booking site for sanatized stay",
};

export default async function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>

      <body className={inter.className}>
        <AppProvider >
          {children}
        </AppProvider>
      </body>

    </html>
  );
}
