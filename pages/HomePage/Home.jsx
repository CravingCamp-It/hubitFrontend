import React from "react";
import { BsFillPlayCircleFill, BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";
import Image from "next/image";

function Home({ image }) {
  const dots = [
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
    { dot: <GoPrimitiveDot /> },
  ];
  return (
    <div className="bg-gray-100  px-20 lg:py-20 xl:py-24 xxl:py-28 ">
      <div className="pt-16">
        <div className="flex gap-3 items-center mb-3">
          <div className="text-main border p-1 text-xl border-main rounded-full">
            <BsFacebook />
          </div>
          <div className="text-main border p-1 text-xl border-main rounded-full">
            <IoLogoWhatsapp />
          </div>
          <div className="text-main border p-1 text-xl border-main rounded-full">
            <AiFillTwitterCircle />
          </div>
          <div className="text-main border p-1 text-xl border-main rounded-full">
            <AiFillInstagram />
          </div>
        </div>
        <div className="Poppins text-main font-semibold lg:text-2xl xl:text-4xl xxl:text-4xl capitalize">
          best training institute in nepal
        </div>
      </div>
      <div className="grid  lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2  xl:gap-24 xxl:gap-32 3xl:gap-72 4xl:gap-80 ">
        <div
          className=" row-start-2 lg:row-start-1 xl:row-start-1 xxl:row-start-1 mt-80 py-10
       lg:mt-0 lg:py-5 xl:py-8 xl:mt-0 xxl:mt-0 xxl:py-4"
        >
          <div className="Poppins text-base py-4  text-gray-600 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            reprehenderit maxime aut, deserunt, dignissimos ducimus expedita
            harum saepe, corrupti ullam in quia iusto neque odio assumenda
            exercitationem ad quidem magnam.
          </div>
          <div className="w-full  flex gap-8 items-center pt-5 sm:pt-0">
            <div
              className="border  hover:scale-105 transition-all
               ease-in-out duration-300 border-main w-fit px-5 py-2
                rounded-3xl text-main cursor-pointer Poppins font-medium
                 capitalize"
            >
              explore more ...
            </div>
            <div className="flex gap-3 text-main items-center">
              <div className="text-4xl animate-pulse cursor-pointer">
                <BsFillPlayCircleFill />
              </div>
              <div className="font-normal  text-lg ">Watch now</div>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" flex-col items-center    relative">
            <div
              className="bg-main  flex  ml-52 lg:ml-40 relative z-50 
            -mt-8 md:mt-32 xl:-mt-14 borderRadiusHome "
            ></div>
            <div className="flex flex-row  ">
              <div
                className="w-11/12  z-50 absolute md:-top-5 -top-44 lg:-top-30 lg:left-24 left-16
               xxl:left-20 xl:left-24 xl:-top-20 xxl:-top-64
                3xl:-top-36  4xl:-top-52 "
              >
                {" "}
                <Image
                  src={image}
                  alt={image}
                  placeholder="blur"
                  blurDataURL={image}
                  height={50}
                  width={50}
                  layout="responsive"
                  className=""
                />{" "}
              </div>
              <div
                className="grid absolute  gap-1 left-32 text-gray-400 lg:top-32 lg:left-24 md:top-64
               md:ml-2  xl:top-24 xl:ml-2 xxl:ml-2 xxl:top-24  grid-cols-4"
              >
                {dots.map((val, i) => {
                  return (
                    <div key={i} className="text-xl">
                      {val.dot}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
