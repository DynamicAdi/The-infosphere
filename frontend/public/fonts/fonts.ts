import { Poppins, Montserrat } from "next/font/google";


export const primary = Montserrat({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--font-mon",
})

export const secondary = Poppins({
    weight: ['300', '400', '500', '600', '700', '800'],
    subsets: ["latin"],
    variable: "--font-pop",
})