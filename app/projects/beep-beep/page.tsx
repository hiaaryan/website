import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import SideNav from "@/app/components/SideNav";

export default function BeepBeep() {
  return (
    <main>
      <div className="w-full">
        <SideNav />
        <div className="absolute top-0 -z-10 min-h-dvh w-full bg-white">
          <video
            className="absolute top-0 hidden h-full w-full object-cover object-center lg:block"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/beep-beep/Frame 1.mp4" type="video/mp4" />
          </video>
          <Image
            alt="beep-beep"
            src={"/beep-beep/Frame 0.png"}
            fill
            className="top-0 block h-full w-full object-cover object-center lg:hidden"
          />
        </div>
        <div className="lg:flex">
          <div className="hidden w-1/3 lg:block"></div>
          <div className="flex flex-col px-3 lg:w-2/3">
            <div className="flex h-full flex-col justify-center gap-6 py-12">
              <div className="flex w-full items-center justify-between text-white">
                <p>
                  Beep Beep&#8482; <br />
                  Beepin Great Ads.
                </p>
                <p className="flex flex-col items-end text-right">
                  <IconArrowUpRight className="-mr-1 h-3 lg:h-4" />
                  12.2023
                </p>
              </div>
              <p className="text-pretty text-justify lg:w-1/2 lg:text-left">
                Beep Beep is a vibrant and innovative creative media design
                agency for communication, design, and ad strategy. Beep
                Beep&apos;s brand elements, mascot, and visual identity reflect
                its bold, fun, and charming essence.
                <br />
                <br />
                Specializing in creating engaging and professional content, Beep
                Beep stands out in the industry with its creative flair and
                ability to deliver compelling marketing solutions that resonate
                with clients and audiences alike.
              </p>
            </div>
            <div className="flex h-full flex-col justify-center gap-6">
              <div className="flex w-full items-center justify-between text-white">
                <div className="relative flex h-full w-full flex-col gap-3 pb-3">
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 1.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 3.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 4.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 5.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 6.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 8.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 7.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 9.png"}
                    fill
                    className="!static"
                  />
                  <video
                    className="hidden h-full w-full object-cover object-center lg:block"
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src="/beep-beep/Frame 10.mp4" type="video/mp4" />
                  </video>
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 10.png"}
                    fill
                    className="!static block lg:hidden"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 12.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 11.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 13.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 14.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="beep-beep"
                    src={"/beep-beep/Frame 15.png"}
                    fill
                    className="!static"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
