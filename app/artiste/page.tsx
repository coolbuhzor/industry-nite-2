import React from "react";
import frame1 from "@/public/frame-1.png";
import Image from "next/image";
import liked from "@/public/liked.svg";
import play from "@/public/play.svg";
const Artiste = () => {
  return (
    <main className="w-full ">
      <section className="w-full min-h-screen bg-[linear-gradient(103.02deg,rgba(235,67,53,0.03)_9.39%,#3E2432_47.61%,#EB4335_239.78%)]">
        {/* cards */}
        <p className="text-center text-white font-semibold text-2xl py-6">
          Listen to Our Artist
        </p>
        {/* <div className="w-full border border-red-500 px-[100px] pt-8 py-10 "> */}
        <div className="w-full xl:px-[100px]">
          <div className="flex justify-between gap-5 flex-wrap">
            <div className="min-h-[353px] flex flex-wrap flex-1 bg-[#1C1F33] pb-3">
              <Image
                src={frame1}
                alt="artiste image"
                className="max-w-[340px]"
              />
              <div className="flex flex-col flex-1 pt-10 pl-4 pr-2">
                <p className="font-inter text-white text-xl font-[800]">
                  James Frank Jr
                </p>
                <p className="font-inter font-[400] text-[16px] text-white pt-6">
                  Lorem ipsum dolor sit amet consectetur. Proin habitant egestas
                  adipiscing vitae nisi blandit augue aliquet. Elit viverra
                  nullam mi luctus in.
                </p>
                <div className="w-full flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <Image src={liked} alt="liked icon" />
                    &nbsp;
                    <p className="font-inter text-base text-white font-bold">
                      0 Likes
                    </p>
                  </div>
                  <p className="font-inter text-base text-white underline font-bold">
                    View Artist
                  </p>
                </div>
                <div className="flex flex-col justify-between h-full mt-5">
                  <p className="text-white font-semibold text-lg">
                    Listen to Jowo
                  </p>
                  <div className="flex justify-between items-center gap-3">
                    <Image src={play} alt="play-icon" />
                    <div className="w-full h-2 bg-white rounded-[16px] "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="min-h-[353px] flex flex-wrap flex-1 bg-[#1C1F33] pb-3">
              <Image
                src={frame1}
                alt="artiste image"
                className="max-w-[340px]"
              />
              <div className="flex flex-col flex-1 pt-10 pl-4 pr-2">
                <p className="font-inter text-white text-xl font-[800]">
                  James Frank Jr
                </p>
                <p className="font-inter font-[400] text-[16px] text-white pt-6">
                  Lorem ipsum dolor sit amet consectetur. Proin habitant egestas
                  adipiscing vitae nisi blandit augue aliquet. Elit viverra
                  nullam mi luctus in.
                </p>
                <div className="w-full flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <Image src={liked} alt="liked icon" />
                    &nbsp;
                    <p className="font-inter text-base text-white font-bold">
                      0 Likes
                    </p>
                  </div>
                  <p className="font-inter text-base text-white underline font-bold">
                    View Artist
                  </p>
                </div>
                <div className="flex flex-col justify-between h-full mt-5">
                  <p className="text-white font-semibold text-lg">
                    Listen to Jowo
                  </p>
                  <div className="flex justify-between items-center gap-3">
                    <Image src={play} alt="play-icon" />
                    <div className="w-full h-2 bg-white rounded-[16px] "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-10 border justify-between mt-[50px]">
            <div className="w-full max-w-[362px] pb-3 bg-[#1C1F33]">
              <Image
                src={frame1}
                alt="artiste image"
                className="h-[340px] w-full"
              />
              <div className="flex flex-col flex-1 pt-10 pl-4 pr-2 ">
                <p className="font-inter text-white text-xl font-[800]">
                  James Frank Jr
                </p>
                <p className="font-inter font-[400] text-[16px] text-white pt-6">
                  Lorem ipsum dolor sit amet consectetur. Proin habitant egestas
                  adipiscing vitae nisi blandit augue aliquet. Elit viverra
                  nullam mi luctus in.
                </p>
                <div className="w-full flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <Image src={liked} alt="liked icon" />
                    &nbsp;
                    <p className="font-inter text-base text-white font-bold">
                      0 Likes
                    </p>
                  </div>
                  <p className="font-inter text-base text-white underline font-bold">
                    View Artist
                  </p>
                </div>
                <div className="flex flex-col justify-between h-full mt-5">
                  <p className="text-white font-semibold text-lg">
                    Listen to Jowo
                  </p>
                  <div className="flex justify-between items-center gap-3 mt-4">
                    <Image src={play} alt="play-icon" />
                    <div className="w-full h-2 bg-white rounded-[16px] "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[362px] pb-3 bg-[#1C1F33]">
              <Image
                src={frame1}
                alt="artiste image"
                className="h-[340px] w-full"
              />
              <div className="flex flex-col flex-1 pt-10 pl-4 pr-2 ">
                <p className="font-inter text-white text-xl font-[800]">
                  James Frank Jr
                </p>
                <p className="font-inter font-[400] text-[16px] text-white pt-6">
                  Lorem ipsum dolor sit amet consectetur. Proin habitant egestas
                  adipiscing vitae nisi blandit augue aliquet. Elit viverra
                  nullam mi luctus in.
                </p>
                <div className="w-full flex items-center justify-between mt-2 ">
                  <div className="flex items-center">
                    <Image src={liked} alt="liked icon" />
                    &nbsp;
                    <p className="font-inter text-base text-white font-bold">
                      0 Likes
                    </p>
                  </div>
                  <p className="font-inter text-base text-white underline font-bold">
                    View Artist
                  </p>
                </div>
                <div className="flex flex-col justify-between h-full mt-5">
                  <p className="text-white font-semibold text-lg">
                    Listen to Jowo
                  </p>
                  <div className="flex justify-between items-center gap-3 mt-4">
                    <Image src={play} alt="play-icon" />
                    <div className="w-full h-2 bg-white rounded-[16px] "></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-[362px] pb-3 bg-[#1C1F33]">
              <Image
                src={frame1}
                alt="artiste image"
                className="h-[340px] w-full"
              />
              <div className="flex flex-col flex-1 pt-10 pl-4 pr-2 ">
                <p className="font-inter text-white text-xl font-[800]">
                  James Frank Jr
                </p>
                <p className="font-inter font-[400] text-[16px] text-white pt-6">
                  Lorem ipsum dolor sit amet consectetur. Proin habitant egestas
                  adipiscing vitae nisi blandit augue aliquet. Elit viverra
                  nullam mi luctus in.
                </p>
                <div className="w-full flex items-center justify-between mt-2">
                  <div className="flex items-center">
                    <Image src={liked} alt="liked icon" />
                    &nbsp;
                    <p className="font-inter text-base text-white font-bold">
                      0 Likes
                    </p>
                  </div>
                  <p className="font-inter text-base text-white underline font-bold">
                    View Artist
                  </p>
                </div>
                <div className="flex flex-col justify-between h-full mt-5">
                  <p className="text-white font-semibold text-lg">
                    Listen to Jowo
                  </p>
                  <div className="flex justify-between items-center gap-3 mt-4">
                    <Image src={play} alt="play-icon" />
                    <div className="w-full h-2 bg-white rounded-[16px] "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </section>
    </main>
  );
};

export default Artiste;
