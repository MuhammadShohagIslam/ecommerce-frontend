import StoreContextProvider from "@/contexts/StoreContextProvider";
import ReduxProvider from "@/lib/Providers/ReduxProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Aladin-E-Commerce",
    description: "Aladin-E-Commerce is the seller and buyer project!",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={"bg-[#F8F8FF]"}>
                <Toaster
                    position="top-center"
                    containerStyle={{
                        zIndex: 9999999999999
                    }}
                />
                <StoreContextProvider>
                    <ReduxProvider>{children}</ReduxProvider>
                </StoreContextProvider>
            </body>
        </html>
    );
}
