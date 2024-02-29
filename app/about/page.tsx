import Image from "next/image";
import SideNav from "@/app/components/SideNav";

export default function Home() {
  return (
    <main>
      <div className="w-full lg:flex">
        <SideNav />
        <div className="flex flex-col justify-between gap-3 p-3 lg:w-2/3">
          <div className="flex items-start justify-start lg:w-2/3">
            <div className="flex h-full w-full flex-col gap-4">
              <div className="relative h-20 w-full">
                <Image
                  alt="aaryan's photo"
                  src={"/aaryan.jpeg"}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative h-20 w-full">
                <Image
                  alt="aaryan's photo"
                  src={"/aaryan.jpeg"}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
              <div className="relative h-20 w-full">
                <Image
                  alt="aaryan's photo"
                  src={"/aaryan.jpeg"}
                  fill
                  objectFit="cover"
                  objectPosition="center"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center lg:w-2/3">
            <div className="flex h-full flex-col justify-center gap-6">
              <div className="text-pretty text-justify">
                Hello there! I am Aaryan. Aaryan Kapoor. I am a creative brand
                &lsquo;artisan&lsquo; and an adult fan of LEGO (AFOL). I always
                liked to build &amp; fiddle and that&#39;s what led me to the
                world of design. I strongly believe that design has the power to
                change everything. This is why I have a true passion for
                crafting emotive (& sometimes crazy) brand experiences that
                forge powerful connections with target audiences.
                <br />
                <br /> Plus, collaborating with risk taking brands and agencies
                to create unique and memorable brand experiences thrills me. I
                am currently on the lookout for new internship opportunities to
                work with brands that are looking to make a difference in the
                world.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
