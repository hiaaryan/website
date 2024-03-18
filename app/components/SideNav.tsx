import { IconArrowDownRight, IconArrowNarrowRight } from "@tabler/icons-react";
import Link from "next/link";

export default function SideNav() {
  return (
    <div className="z-30 h-dvh lg:w-1/3">
      <div className="z-30 flex h-full flex-col justify-between p-3 lg:fixed lg:w-1/3 lg:pr-0">
        <div className="flex flex-col text-left">
          <div className="flex items-center text-left">
            A <IconArrowNarrowRight className="-ml-0.5 h-3 lg:h-4" /> K
          </div>
          <div>Brand Artisan.</div>
        </div>
        <div className="hidden text-9xl font-medium lg:block">24®</div>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col">
            <Link
              className="w-fit hover:translate-x-1 hover:transform"
              href="/#work"
            >
              Work
            </Link>
            <Link
              className="w-fit hover:translate-x-1 hover:transform"
              href="/about"
            >
              About
            </Link>
          </div>
          <div className="flex flex-col">
            <Link
              className="w-fit hover:translate-x-1 hover:transform"
              href="https://linkedin.com/in/hiaaryan"
              target="_blank"
            >
              LinkedIn
            </Link>
            <Link
              className="w-fit hover:translate-x-1 hover:transform"
              href="/resume.pdf"
              target="_blank"
            >
              Resume
            </Link>
            <Link
              className="w-fit hover:translate-x-1 hover:transform"
              href="mailto:hi.aaryankapoor@gmail.com"
            >
              Email
            </Link>
          </div>
          <div className="flex w-full justify-between">
            <div>2024 Aaryan Kapoor.</div>
            <div className="flex items-center">
              Scroll Enabled
              <IconArrowDownRight className="h-3 lg:h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
