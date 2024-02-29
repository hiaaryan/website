import Image from "next/image";
import { IconArrowUpRight } from "@tabler/icons-react";
import SideNav from "@/app/components/SideNav";

export default function athletico() {
  return (
    <main>
      <div className="w-full">
        <SideNav />
        <div className="absolute top-0 -z-10 min-h-dvh w-full bg-white">
          <video
            className="absolute top-0 h-full w-full object-cover object-center"
            autoPlay
            muted
            playsInline
            loop
          >
            <source src="/athletico/Frame 1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="lg:flex">
          <div className="hidden w-1/3 lg:block"></div>
          <div className="flex flex-col px-3 lg:w-2/3">
            <div className="flex h-full flex-col justify-center gap-6 py-12">
              <div className="flex w-full items-center justify-between">
                <p>
                  athletico&#8482; <br />
                  Run. Grind. Win.
                </p>
                <p className="flex flex-col items-end text-right">
                  <IconArrowUpRight className="-mr-1 h-3 lg:h-4" />
                  01.2024
                </p>
              </div>
              <p className="text-pretty text-justify lg:w-1/2 lg:text-left">
                athletico is a dynamic sports company specializing in
                high-quality athletic supplements like whey and hydration
                products, along with a network of state-of-the-art gyms and
                training centers across the nation. <br />
                <br />
                The visual identity developed is centered around the theme of
                &apos;hunger for sports&apos;, reflecting our passion for
                athleticism and a forward-thinking, sporty spirit that resonates
                with young athletes.
              </p>
            </div>
            <div className="flex h-full flex-col justify-center gap-6">
              <div className="flex w-full items-center justify-between text-white">
                <div className="relative flex h-full w-full flex-col gap-3 pb-3">
                  <Image
                    alt="athletico"
                    src={"/athletico/Moodboard.png"}
                    fill
                    className="!static invert"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 1.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 2.gif"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 4.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 5.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 6.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 10.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 7.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 8.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 9.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 11.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 12.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 13.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 14.png"}
                    fill
                    className="!static"
                  />
                  <Image
                    alt="athletico"
                    src={"/athletico/Frame 15.png"}
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
