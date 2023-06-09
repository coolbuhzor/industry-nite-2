import "./globals.css";
import Image from "next/image";
import logo from "@/public/logo.svg";
import Link from "next/link";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

// import logo from "";
export const metadata = {
  title: "Industry Nite",
  description: "industry nite web address",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});
const Oddval = localFont({
  src: [
    {
      path: "./fonts/Oddval-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/Oddval-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/Oddval-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Oddval-Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Oddval-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Oddval-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Oddval-Light.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-Oddval",
});
const Satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },

    {
      path: "./fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Light.otf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-Satoshi",
});
const bartina = localFont({
  src: [
    {
      path: "./fonts/bartina-bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/bartina-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/bartina-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/bartina-light.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/bartina-thin.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-bartina",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${Oddval.variable} ${Satoshi.variable} ${bartina.variable} ${inter.variable}`}
    >
      <body className="bg-[linear-gradient(221.81deg,#1C1F33_15.38%,#0A0B15_84.11%)]">
        <header className="w-full flex pt-[53px] justify-between items-center px-[122px] ">
          <Image src={logo} alt={"logo"} />
          <div className="flex items-center gap-6">
            <Link href={"#"} className="text-int-red text-[20px]">
              Home
            </Link>
            <Link href={"#"} className="text-white text-[20px]">
              Explore
            </Link>
            <Link href={"/artiste"} className="text-white text-[20px]">
              Artiste
            </Link>
            {/* <Link href={"#"} className="text-white text-[20px]">
              More
            </Link> */}
          </div>

          <div className=" flex gap-5">
            <button className="w-[156px] h-[46px] bg-int-red text-white hover:scale-105">
              Sign in
            </button>
            <button className="w-[156px] h-[46px] bg-transparent border-2 border-white text-white hover:scale-105">
              Sign in
            </button>
          </div>
        </header>

        {children}
        <footer className="bg-[linear-gradient(221.81deg,#1C1F33_15.38%,#0A0B15_84.11%)] w-full h-[1045px] px-[100px] pt-[192px] pb-[160px]">
          <Image src={logo} alt={"logo"} />
          <div className="flex w-full justify-between mt-4">
            <div className="flex w-full max-w-[388px] text-white">
              <p className="font-satoshi text-[18px]">
                Industry Nite is Nigeria’s foremost talent community and
                platform for upcoming and established creatives looking to
                connect with other talents in the industry while creating an
                unforgettable experience for the public.
              </p>
            </div>
            <div className="flex ">
              <ul>
                <li className="font-satoshi text-white text-lg font-black">
                  Explore
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Albums
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Trending tracks
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Playlists
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Artiste
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Events
                </li>
              </ul>
            </div>
            <div className="flex">
              <ul>
                <li className="font-satoshi text-white text-lg font-black">
                  Discover
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Events
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Shows
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Concerts
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Tours
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Artiste
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Charts
                </li>
              </ul>
            </div>
            <div className="flex">
              <ul>
                <li className="font-satoshi text-white text-lg font-black">
                  Learn
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Interviews
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Courses
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Tutorials
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Campaigns
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Investment
                </li>
              </ul>
            </div>
            <div className="flex ">
              <ul>
                <li className="font-satoshi text-white text-lg font-black">
                  Legal
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Terms of use
                </li>
                <li className="font-satoshi text-white text-base font-medium">
                  Privacy policy
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full mt-[50px] pb-[150px] border-b border-int-red">
            <p className="font-black text-2xl text-white">Connect with us</p>
            <div className="flex w-[164px] justify-between items-center mt-4">
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.065 17.9972V9.80117H8.83L9.241 6.59217H6.065V4.54817C6.065 3.62217 6.323 2.98817 7.652 2.98817H9.336V0.127169C8.51664 0.0393602 7.69305 -0.00303802 6.869 0.000169166C4.425 0.000169166 2.747 1.49217 2.747 4.23117V6.58617H0V9.79517H2.753V17.9972H6.065Z"
                  fill="white"
                />
              </svg>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.95 5.324C17.9399 4.56662 17.7981 3.81678 17.531 3.108C17.2993 2.51015 16.9455 1.9672 16.4922 1.51383C16.0388 1.06046 15.4958 0.706651 14.898 0.475C14.1983 0.212357 13.4592 0.0703413 12.712 0.0550001C11.75 0.0120001 11.445 0 9.003 0C6.561 0 6.248 6.70552e-08 5.293 0.0550001C4.54616 0.0704541 3.80735 0.212468 3.108 0.475C2.51006 0.706489 1.96702 1.06024 1.51363 1.51363C1.06024 1.96702 0.706489 2.51006 0.475 3.108C0.211831 3.80713 0.0701232 4.54611 0.056 5.293C0.013 6.256 0 6.561 0 9.003C0 11.445 -7.45058e-09 11.757 0.056 12.713C0.071 13.461 0.212 14.199 0.475 14.9C0.706878 15.4978 1.0609 16.0406 1.51444 16.4938C1.96798 16.947 2.51106 17.3006 3.109 17.532C3.80643 17.8052 4.54537 17.9574 5.294 17.982C6.257 18.025 6.562 18.038 9.004 18.038C11.446 18.038 11.759 18.038 12.714 17.982C13.4612 17.9673 14.2004 17.8256 14.9 17.563C15.4977 17.3311 16.0405 16.9772 16.4938 16.5238C16.9472 16.0705 17.3011 15.5277 17.533 14.93C17.796 14.23 17.937 13.492 17.952 12.743C17.995 11.781 18.008 11.476 18.008 9.033C18.006 6.591 18.006 6.281 17.95 5.324ZM8.997 13.621C6.443 13.621 4.374 11.552 4.374 8.998C4.374 6.444 6.443 4.375 8.997 4.375C10.2231 4.375 11.399 4.86207 12.266 5.72905C13.1329 6.59603 13.62 7.7719 13.62 8.998C13.62 10.2241 13.1329 11.4 12.266 12.267C11.399 13.1339 10.2231 13.621 8.997 13.621ZM13.804 5.282C13.6624 5.28213 13.5222 5.25434 13.3913 5.20021C13.2605 5.14608 13.1416 5.06668 13.0414 4.96655C12.9413 4.86643 12.8619 4.74754 12.8078 4.61669C12.7537 4.48584 12.7259 4.3456 12.726 4.204C12.726 4.0625 12.7539 3.92239 12.808 3.79166C12.8622 3.66093 12.9415 3.54215 13.0416 3.44209C13.1416 3.34204 13.2604 3.26267 13.3912 3.20852C13.5219 3.15437 13.662 3.1265 13.8035 3.1265C13.945 3.1265 14.0851 3.15437 14.2158 3.20852C14.3466 3.26267 14.4654 3.34204 14.5654 3.44209C14.6655 3.54215 14.7448 3.66093 14.799 3.79166C14.8531 3.92239 14.881 4.0625 14.881 4.204C14.881 4.8 14.399 5.282 13.804 5.282Z"
                  fill="white"
                />
              </svg>
              <svg
                width="23"
                height="19"
                viewBox="0 0 23 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.706 2.18952C21.871 2.55952 20.974 2.80952 20.031 2.92252C21.004 2.34031 21.7319 1.42398 22.079 0.344518C21.1648 0.887508 20.1643 1.26971 19.121 1.47452C18.4194 0.725384 17.4901 0.228845 16.4773 0.0619924C15.4646 -0.10486 14.4251 0.0673099 13.5202 0.551771C12.6154 1.03623 11.8958 1.80588 11.4732 2.74122C11.0505 3.67656 10.9485 4.72527 11.183 5.72452C9.33069 5.63151 7.51863 5.15007 5.86442 4.31142C4.21022 3.47278 2.75084 2.29568 1.581 0.856519C1.181 1.54652 0.951 2.34652 0.951 3.19852C0.950554 3.96551 1.13943 4.72076 1.50088 5.39725C1.86232 6.07374 2.38516 6.65056 3.023 7.07652C2.28328 7.05298 1.55987 6.8531 0.913 6.49352V6.55352C0.912925 7.62926 1.28503 8.6719 1.96618 9.50451C2.64733 10.3371 3.59557 10.9084 4.65 11.1215C3.96378 11.3072 3.24434 11.3346 2.546 11.2015C2.8435 12.1271 3.423 12.9365 4.20337 13.5164C4.98374 14.0963 5.92592 14.4177 6.898 14.4355C5.24783 15.7309 3.20989 16.4336 1.112 16.4305C0.740381 16.4306 0.369076 16.4089 0 16.3655C2.12948 17.7347 4.60834 18.4613 7.14 18.4585C15.71 18.4585 20.395 11.3605 20.395 5.20452C20.395 5.00452 20.39 4.80252 20.381 4.60252C21.2923 3.94349 22.0789 3.12741 22.704 2.19252L22.706 2.18952Z"
                  fill="white"
                />
              </svg>

              <svg
                width="25"
                height="23"
                viewBox="0 0 25 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.28625 8.01435H13.9287V10.1419C14.5975 8.91825 16.3125 7.81885 18.8888 7.81885C23.8275 7.81885 25 10.2545 25 14.7235V23H20V15.7412C20 13.1962 19.3313 11.7611 17.6287 11.7611C15.2675 11.7611 14.2863 13.3078 14.2863 15.7401V23H9.28625V8.01435ZM0.7125 22.8045H5.7125V7.81885H0.7125V22.8045ZM6.42875 2.9325C6.42894 3.31807 6.34582 3.69982 6.18423 4.05558C6.02265 4.41133 5.78581 4.73399 5.4875 5.0048C4.883 5.55752 4.06476 5.8669 3.2125 5.865C2.36174 5.86447 1.54539 5.55588 0.94 5.00595C0.642764 4.73422 0.406732 4.4112 0.24543 4.0554C0.0841268 3.6996 0.000723915 3.31801 0 2.9325C0 2.15395 0.3375 1.40875 0.94125 0.85905C1.54611 0.308382 2.3628 -0.000344092 3.21375 2.87804e-07C4.06625 2.87804e-07 4.88375 0.30935 5.4875 0.85905C6.09 1.40875 6.42875 2.15395 6.42875 2.9325Z"
                  fill="white"
                />
              </svg>
              <svg
                width="25"
                height="17"
                viewBox="0 0 25 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.5006 2.51196C23.3647 2.02719 23.1 1.5883 22.7346 1.24196C22.3589 0.884962 21.8984 0.629595 21.3966 0.499959C19.5186 0.00495878 11.9946 0.00495889 11.9946 0.00495889C8.85795 -0.0307285 5.72205 0.126233 2.60462 0.474959C2.10281 0.614172 1.64318 0.875246 1.26662 1.23496C0.896617 1.59096 0.628617 2.02996 0.488617 2.51096C0.15231 4.3227 -0.0110908 6.1623 0.000617183 8.00496C-0.0113828 9.84596 0.151617 11.685 0.488617 13.499C0.625617 13.978 0.892617 14.415 1.26362 14.768C1.63462 15.121 2.09662 15.376 2.60462 15.511C4.50762 16.005 11.9946 16.005 11.9946 16.005C15.1353 16.0407 18.2752 15.8837 21.3966 15.535C21.8984 15.4053 22.3589 15.15 22.7346 14.793C23.0999 14.4467 23.3643 14.0077 23.4996 13.523C23.8447 11.7119 24.0125 9.87155 24.0006 8.02796C24.0266 6.17656 23.859 4.32752 23.5006 2.51096V2.51196ZM9.60262 11.429V4.58196L15.8626 8.00596L9.60262 11.429Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          <div className="w-full flex justify-center pt-4">
            <p className="text-white">
              ©2023 (Industry Nite) All right reserved{" "}
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
