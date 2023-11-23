import Link from "next/link"
import { CommandDialogDemo } from "./CommandDialogDemo"
import { ModeToggle } from "./ui/ModeToggle"
import { Button } from "./ui/button"
import { GitHubLogoIcon, BackpackIcon } from "@radix-ui/react-icons"

export default function Navigation() {
  return (
    <nav className="flex w-full items-center justify-between py-4">
      <div />
      <div className="flex w-full gap-2 sm:w-fit">
        <CommandDialogDemo />
        <ModeToggle />

        <div
          aria-label="Premium_Mode"
          className="shrink-0"
          title="Bạn đang sử dụng tài khoản dành cho doanh nghiệp, có thể sử dụng và tạo nhiều API keys cùng lúc."
        >
          <Button variant={"secondary_nohover"} className="h-9"
            style={{
              'cursor': 'default',
            }}
            tabIndex={-1}
          >
            <BackpackIcon className="h-4 w-4 md:mr-1" />
            <span className="hidden md:block">Phiên bản doanh nghiệp</span>
          </Button>
        </div>

        <Link
          passHref
          prefetch={false}
          aria-label="support-this-project"
          title="Ủng hộ dự án này bằng cách cho mình ⭐ trên GitHub."
          href={"https://github.com/hoangxuanlam2007/2day4cast"}
          target="_blank"
          rel="noreferrer"
          className="shrink-0"
        >
          <Button variant={"default"} className="h-9">
            <GitHubLogoIcon className="h-4 w-4 md:mr-1" />
            <span className="hidden md:block">Ủng hộ dự án này</span>
          </Button>
        </Link>
      </div>
    </nav>
  )
}
