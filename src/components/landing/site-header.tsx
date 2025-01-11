import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { AldauiIcon, GitHubIcon, SearchIcon, BarsIcon } from "../icons/icon";
import { Button } from "../ui/button";
import { ModeToggle } from "./mode-toggle";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

interface SiteHeaderProps {
  onToggleSidebar?: () => void;
}

export function SiteHeader({ onToggleSidebar }: SiteHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearchToggle = () => {
    setSearchOpen(!searchOpen);
  };

  const handleCloseSearch = () => {
    setSearchOpen(false);
  };

  useEffect(() => {
  }, [location.pathname]);

  return (
    <header
      className={`sm:py-2 px-4 py-4 sticky top-0 z-50 w-full ${isScrolled ? "border-b" : ""
        } bg-surface backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center dark:bg-black`}
    >
      <div className="container flex h-14 items-center">
        <Link to="/" className="h-14 w-14 flex items-center justify-center">
          <AldauiIcon className="h-14 w-14 text-primary" />
        </Link>
        <span className="hidden font-bold sm:inline-block text-black text-xl ml-2 dark:text-slate-50">
          Alda
        </span>
        <span className="hidden font-bold sm:inline-block text-primary text-xl uppercase">
          Ui
        </span>
      </div>

      <div className="flex items-center space-x-2">
        {location.pathname.startsWith("/ui") && (
          <button
            onClick={onToggleSidebar}
            className="mr-2 rounded-md p-2  lg:hidden"
            >
            <BarsIcon className="h-6 w-6  dark:text-white" />
          </button>
        )}

        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="inline-flex items-center whitespace-nowrap"
            size="sm"
            onClick={handleSearchToggle}
          >
            <SearchIcon className="mr-2 h-4 w-4" />
            Search docs...
            <kbd className="ml-4 dark:border-transparent pointer-events-none hidden h-5 select-none items-center gap-1 rounded border sm:flex">
              <span className="text-xs ">⌘</span>K
            </kbd>
          </Button>

          <Button size="sm" variant="outline">
            <a href="https://github.com/Gutierrez-16/Aldaui">
              <GitHubIcon className="h-6 w-6" />
            </a>
          </Button>

          <ModeToggle />
        </div>
      </div>

      <SearchBar isOpen={searchOpen} onClose={handleCloseSearch} />
    </header>
  );
}
