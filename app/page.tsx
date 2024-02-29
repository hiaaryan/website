import { IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import SideNav from "@/app/components/SideNav";

export default function Home() {
  return (
    <main>
      <div className="w-full lg:flex">
        <SideNav />
        <div id="work" className="flex flex-col gap-3 p-3 lg:w-2/3">
          <div className="group/athletico flex flex-col gap-3">
            <Link
              href="/projects/athletico"
              className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
            >
              <Image
                alt="athletico"
                src={"/athletico/Frame 2.gif"}
                fill
                className="!static invert"
              />
              <div className="absolute bottom-0 hidden w-full items-center justify-between px-4 py-3 text-white lg:group-hover/athletico:flex">
                <p>
                  athletico&#8482; <br />
                  Run. Grind. Win.
                </p>
                <p className="flex flex-col items-end text-right">
                  <IconArrowUpRight className="-mr-1 h-3 lg:h-4" />
                  01.2024
                </p>
              </div>
            </Link>
          </div>
          <div className="group/beep flex flex-col gap-3">
            <Link
              href="/projects/beep-beep"
              className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
            >
              <Image
                alt="beep-beep"
                src={"/beep-beep/Frame 4.png"}
                fill
                className="!static"
              />
              <div className="absolute bottom-0 hidden w-full items-center justify-between px-4 py-3 text-white  lg:group-hover/beep:flex">
                <p>
                  Beep Beep <br />
                  Beepin Great Ads.
                </p>
                <p className="flex flex-col items-end text-right">
                  <IconArrowUpRight className="-mr-1 h-3 lg:h-4" />
                  12.2023
                </p>
              </div>
            </Link>
          </div>
          <div className="group/flotek flex flex-col gap-3">
            <Link
              href="/projects/flotek"
              className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
            >
              <Image
                alt="flotek"
                src={"/flotek/Frame 12.png"}
                fill
                className="!static"
              />
              <div className="absolute bottom-0 hidden w-full items-center justify-between px-4 py-3 text-white  lg:group-hover/flotek:flex">
                <p>
                  FLOTEK&#8482; <br />
                  Great Currrents of Innovation.
                </p>
                <p className="flex flex-col items-end text-right">
                  <IconArrowUpRight className="-mr-1 h-3 lg:h-4" />
                  10.2023
                </p>
              </div>
            </Link>
          </div>
          <div className="group/melea flex flex-col gap-3">
            <Link
              href="/projects/melea"
              className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
            >
              <Image
                alt="melea"
                src={"/melea/Frame 12.png"}
                fill
                className="!static"
              />
              <div className="absolute bottom-0 hidden w-full items-center justify-between px-4 py-3 text-white lg:group-hover/melea:flex">
                <p>
                  Melea <br />
                  Ethical, Timeless Fashion.
                </p>
                <p className="flex flex-col items-end text-right">
                  <IconArrowUpRight className="-mr-1 h-3 lg:h-4" />
                  07.2023
                </p>
              </div>
            </Link>
          </div>
          <div className="group/exp flex flex-col gap-3">
            <Link
              href="/"
              className="relative h-full w-full !cursor-pointer hover:cursor-pointer"
            >
              <Image
                alt="melea"
                src={"/experimental/Poster Mockup 2.png"}
                fill
                className="!static"
              />
              <div className="absolute bottom-0 hidden w-full items-center justify-between px-4 py-3 text-white lg:group-hover/exp:flex">
                <p>
                  The Graphic Lab <br />
                  Personal, Passion Designs.
                </p>
                <p className="flex flex-col items-end text-right">
                  <IconArrowUpRight className="-mr-1 h-3 lg:h-4" />
                  Coming Soon XX.20XX
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
