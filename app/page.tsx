import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import image1 from "../public/pheelz.png";
import image2 from "../public/ayra.png";
import image3 from "../public/pheelz-2.png";
import image4 from "../public/image-1.png";
import image5 from "../public/image-2.png";
import image6 from "../public/image-3.png";
import image8 from "../public/image-8.png";
import image9 from "../public/image-9.png";
import middle from "../public/middle.png";
// import Image from './ne'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${styles.main} w-full justify-center`}>
      {/* hero section */}
      <div className="h-[calc(100vh-150px)] flex items-center w-full pl-[100px]">
        <div className="flex flex-1 flex-col border border-int-red">
          {/* <div> */}
          <p className=" text-white font-semibold text-[50px] font-bartina">
            Join Nigeria&lsquo;s Thriving Music Community with Industry Nite
          </p>
          <p className="font-satoshi text-[rgba(255,255,255,0.4)] text-2xl font-medium">
            Connect with Artists and Fans Today!
          </p>
          {/* </div> */}
          <div className="flex pt-6 gap-9">
            <button className="h-[4.438rem] text-[16px] w-[16.25rem] bg-int-red text-white font-satoshi hover:scale-105">
              Get Started
            </button>
            <button className="h-[4.438rem] text-[16px] w-[16.25rem] border-2 border-white text-white font-satoshi hover:scale-105">
              Learn more
            </button>
          </div>
        </div>
        <div className="flex flex-1 border h-full"></div>
      </div>
      {/* section two */}
      <div className="w-full border pt-[7.5rem] pb-[6rem] bg-[#FFFFFF] px-[100px]">
        <p className="font-bartina text-semibold text-[60px] text-[#1C1F33]">
          What to get from Industry nite
        </p>

        <div className="grid grid-cols-3 gap-11">
          <div className="w-full mt-20 h-[472px] max-w-[378px] bg-[#1B1E32] px-10 pt-10">
            <div className="w-[90px] h-[90px] rounded-full bg-[#FFDDDA]"></div>
            <p className="text-[rgba(255,255,255,0.75)] text-6 py-[30px]">
              Showcase your work
            </p>
            <p className="text-[rgba(255,255,255,0.4)]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tellus mi, finibus eu arcu sit amet, semper vulputate felis. Duis
              .
            </p>
          </div>
          <div className="w-full mt-20 h-[472px] max-w-[378px] bg-[#1B1E32] px-10 pt-10">
            <div className="w-[90px] h-[90px] rounded-full bg-[#FFDDDA]"></div>
            <p className="text-[rgba(255,255,255,0.75)] text-6 py-[30px]">
              Connect with Industry Experts
            </p>
            <p className="text-[rgba(255,255,255,0.4)] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tellus mi, finibus eu arcu sit amet, semper vulputate felis. Duis
              .
            </p>
          </div>
          <div className="w-full mt-20 h-[472px] max-w-[378px] bg-[#1B1E32] px-10 pt-10">
            <div className="w-[90px] h-[90px] rounded-full bg-[#FFDDDA]"></div>
            <p className="text-[rgba(255,255,255,0.75)] text-6 py-[30px]">
              Learn from Industry Leaders
            </p>
            <p className="text-[rgba(255,255,255,0.4)] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              tellus mi, finibus eu arcu sit amet, semper vulputate felis. Duis
              .
            </p>
          </div>
        </div>
      </div>
      {/* section 3 */}
      {/* <div className="bg-[linear-gradient(221.81deg,#1C1F33_15.38%,#0A0B15_84.11%)] pt-[5.5rem] pb-[10rem] px-[100px]"> */}
      <div className="w-full pt-[7.5rem] pb-[6rem] bg-[linear-gradient(221.81deg,#1C1F33_15.38%,#0A0B15_84.11%)] px-[100px]">
        <p className="text-white font-bartina text-[50px]">
          Industry Nite Upcoming
        </p>
        <div className="grid grid-cols-3 gap-11">
          <div className="w-full">
            <Image src={image1} alt={"flyer"} />
          </div>
          <div className="w-full">
            <Image src={image2} alt={"flyer"} />
          </div>
          <div className="w-full">
            <Image src={image3} alt={"flyer"} />
          </div>
        </div>
      </div>
      {/* sentiom 4 */}
      <div className="w-full py-[130px] bg-white flex flex-col items-center justify-center ">
        <p className="text-[50px] text-[#1C1F33] font-bartina w-full max-w-[550px] text-center">
          Are you an artiste? Showcase your talent to a global audience
        </p>
        <div className="flex mt-20 gap-9">
          <button className="h-[71px] w-[260px] bg-int-red text-white font-satoshi hover">
            Get Started
          </button>
          <button className="h-[71px] w-[260px] text-int-red border-2 border-int-red font-satoshi">
            Learn more
          </button>
        </div>
      </div>
      {/* section 5 */}
      <div className="w-full bg-[#1C1F33] px-[100px] pt-[90px] pb-[207px]">
        <p className="text-white font-bartina text-[50px] font-semibold">
          Gallery: Industry Nite 2022
        </p>
        <div className="w-full h-[382px] mt-10 flex gap-[29px] items-center">
          <div className="flex flex-1 h-full">
            <Image
              src={image4}
              alt={"gallery-image"}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-2 h-full relative">
            <div className="absolute top-0 left-0 w-full bg-[rgba(255,34,12,0.63)] grid place-content-center h-full text-white ">
              <p className="font-bartina text-[50px] font-semibold">
                LONDON 2022
              </p>
            </div>
            <Image
              src={middle}
              alt={"gallery-image"}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-1 h-full">
            <Image
              src={image6}
              alt={"gallery-image"}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="w-full flex gap-7 mt-9 h-[382px]">
          <div className="flex flex-1 h-full">
            <Image
              src={image8}
              alt={"gallery-image"}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-2 h-full">
            <Image
              src={image9}
              alt={"gallery-image"}
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
      {/* section 6 */}
      {/* <div className="w-full flex gap-7 h-[382px]">
        <div className="flex flex-1 h-full w-[40%]">
          <Image src={image4} alt={"gallery-image"} className="w-full h-full" />
        </div>
        <div className="flex flex-2 h-full w-[60%]">
          <Image src={image4} alt={"gallery-image"} className="w-full h-full" />
        </div>
      </div> */}
    </main>
  );
}
