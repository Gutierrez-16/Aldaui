import { useState, useEffect } from "react";
import { ChevronDownIcon } from "./icons/icon";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  navigation: {
    name: string;
    current?: boolean;
    icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    badge?: string;
    items?: { name: string; path: string }[];
    sections?: { title: string; items: { name: string; path: string }[] }[];
  }[];
}

export default function ManiSidebar({
  className = "",
  isOpen,
  onClose,
  navigation,
}: SidebarProps) {
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const activeSections = navigation.reduce((acc, section) => {
      if (section.items?.some((item) => location.pathname === item.path)) {
        acc.push(section.name);
      }
      if (section.sections?.some((subsection) =>
        subsection.items.some((item) => location.pathname === item.path)
      )) {
        acc.push(section.name);
      }
      return acc;
    }, [] as string[]);
    
    setOpenSections(activeSections);
  }, [location, navigation]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleSection = (sectionName: string) => {
    setOpenSections((prev) =>
      prev.includes(sectionName)
        ? prev.filter((name) => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const SidebarContent = () => (
    <nav className="h-full overflow-y-auto scrollbar-hide">
      <div className="space-y-1 p-4">
        {navigation.map((section) => (
          <div key={section.name} >
            <button
              onClick={() => toggleSection(section.name)}
              className={`flex w-full items-center justify-between rounded-md px-2 py-2 text-sm 
                ${
                  section.current
                    ? "text-primary dark:text-primary"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
            >
              <div className="flex items-center gap-2">
                {section.icon && <section.icon className="h-4 w-4" />}
                <span className="font-medium">{section.name}</span>
              </div>
              {section.badge ? (
                <span className="ml-2 rounded bg-primary px-1.5 py-0.5 text-xs text-white">
                  {section.badge}
                </span>
              ) : (section.items?.length ?? 0) > 0 || (section.sections?.length ?? 0) > 0 ? (
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    openSections.includes(section.name) ? "rotate-180" : ""
                  }`}
                />
              ) : null}
            </button>

            {openSections.includes(section.name) && (
              <div className="mt-1 pl-6">
                {section.items?.length
                  ? section.items.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className={`block rounded-md px-2 py-1.5 text-sm ${
                          isActive(item.path)
                            ? "bg-primary text-white"
                            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => isMobile && onClose()}
                      >
                        {item.name}
                      </Link>
                    ))
                  : null}

                {section.sections?.length
                  ? section.sections.map((subsection) => (
                      <div key={subsection.title} className="mb-2 ">
                        <div className="px-2 py-2 text-xs font-bold text-primary uppercase tracking-wider dark:text-primary">
                          {subsection.title}
                        </div>
                        <div className="space-y-1">
                          {subsection.items.map((item, index) => (
                            <Link
                              key={index}
                              to={item.path}
                              className={`block rounded-md px-2 py-1.5 text-sm ${
                                isActive(item.path)
                                  ? "bg-primary text-white"
                                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                              }`}
                              onClick={() => isMobile && onClose()}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))
                  : null}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );

  return isMobile ? (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? "block" : "hidden"}`}
      onClick={onClose}
    >
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out dark:bg-black ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <SidebarContent />
      </div>
    </div>
  ) : (
    <aside
      className={`fixed top-16 h-full left-0 w-64 min-h-screen bg-white border-r shadow-lg dark:bg-black dark:border-gray-700 ${className}`}
    >
      <SidebarContent />
    </aside>
  );
}
