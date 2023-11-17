import Link from "next/link"
import { CommandDialogDemo } from "./CommandDialogDemo"
import { ModeToggle } from "./ui/ModeToggle"
import { Button } from "./ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Navigation() {
  return (
    <nav className="flex w-full items-center justify-between py-4">
      <div />
      <div className="flex w-full gap-2 sm:w-fit">
        <CommandDialogDemo />
        <ModeToggle />
        <Link
          passHref
          prefetch={false}
          aria-label="Xin 1 sao >.<"
          href={"https://github.com/hoangxuanlam2007/2day4cast"}
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
        >
          <Button variant={"default"} className="h-9">
            <GitHubLogoIcon className="h-4 w-4 md:mr-1" />
            <span className="hidden md:block">Ủng hộ dự án của mình</span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
