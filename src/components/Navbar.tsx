import { useTheme } from "@/hooks/useTheme";
import { FiPaperclip } from "react-icons/fi";
import { HiMiniSun, HiMiniMoon } from "react-icons/hi2";
import { SiGithub, SiLinkedin } from "react-icons/si";

function ThemeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();
  return (
    <button
      onClick={() => toggleDarkMode()}
      className="size-10 p-2  hover:text-amber-500  dark:hover:text-amber-400"
    >
      {isDarkMode ? (
        <HiMiniMoon className="h-full w-full" />
      ) : (
        <HiMiniSun className="h-full w-full" />
      )}
    </button>
  );
}

export default function Navbar() {
  return (
    <header className="bg-background sticky top-0 z-10 w-full">
      <div className="flex h-16 items-center px-4 sm:px-8 lg:px-44">
        <div className="mx-auto w-full max-w-3xl space-y-20">
          <div className="flex justify-between">
            <div className="flex flex-1 items-center justify-start">
              {/* Link and site name/icon */}
              <a className="text-primary size-10 p-2" href="/">
                <FiPaperclip className="size-full" />
              </a>
              <h1 className="text-primary text-2xl font-bold">HG</h1>
            </div>
            <div className="flex flex-1 items-center justify-end">
              <nav className="flex items-center space-x-1">
                <ThemeToggle />
                <a
                  href="https://www.linkedin.com/in/heine-g%C3%BCnther/"
                  target="_blank"
                  className="size-10 p-2 text-primary hover:text-[#0077B5]  dark:hover:text-[#0077B5]"
                >
                  <SiLinkedin className="h-full w-full" />
                </a>
                <a
                  href="https://github.com/coding-chef77"
                  target="_blank"
                  className="size-10 p-2 text-primary hover:text-[#4078c0]  dark:hover:text-[#4078c0]"
                >
                  <SiGithub className="h-full w-full" />
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
