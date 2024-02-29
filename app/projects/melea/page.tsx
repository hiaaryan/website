import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import SideNav from "@/app/components/SideNav";

export default function Melea() {
  return (
    <main>
      <div className="w-full">
        <SideNav />
        <div className="absolute top-0 -z-10 min-h-dvh w-full bg-white">
          <Image
            alt="melea"
            src={"/melea/Frame 12.png"}
            fill
            className="top-0 h-full w-full object-cover object-center"
          />
        </div>
        <div className="lg:flex">
          <div className="hidden w-1/3 lg:block"></div>
          <div className="flex flex-col px-3 lg:w-2/3">
            <div className="flex h-full flex-col justify-center gap-6 py-12">
              <div className="flex w-full items-center justify-between text-white">
                <p>
                  Melea&#8482; <br />
                  Great Currents of Innovation.
                </p>
                <p className="flex flex-col items-end text-right">
                  <IconArrowUpRight className="-mr-1 h-3 lg:h-4" />
                  07.2023
                </p>
              </div>
              <p className="text-pretty text-justify lg:w-1/2 lg:text-left">
                Melea is a sustainable fashion startup by two women who love the
                planet. They were moved by fast fashion companies exploiting the
                resources and hence decided to create a fashion brand as a B
                Corp.
                <br />
                <br />
                Melea&apos;s brand identity displays and elegant and friendly
                personality acquiring the colours of nature, which emits an
                emotion of loving the planet. The logo and typography have also
                been provided with a contrast.
              </p>
            </div>
            <div className="flex h-full flex-col justify-center gap-6">
              <div className="flex w-full items-center justify-between text-white">
                <div className="relative flex h-full w-full flex-col gap-3 pb-3">
                  <video
                    className="h-full w-full object-cover object-center"
                    autoPlay
                    muted
                    playsInline
                    loop
                  >
                    <source src="/melea/Frame 1.mp4" type="video/mp4" />
                  </video>
                  <Image
                    alt="melea"
                    src={"/melea/Frame 2.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 3.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 4.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 5.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 6.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 7.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 8.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 9.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 10.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 11.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 12.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 13.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 14.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="melea"
                    src={"/melea/Frame 15.png"}
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
