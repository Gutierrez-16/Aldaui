import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDownIcon, ChevronRightIcon } from "./icons/icon";

interface SidebarProps {
  isSidebarCollapsed?: boolean;
  menuItems: MenuItem[];
  children?: React.ReactNode;
}

interface MenuItem {
  title: string;
  icon: React.ElementType;
  path: string;
  subItems?: { title: string; path: string }[];
}

const Sidebar = ({ isSidebarCollapsed, menuItems, children }: SidebarProps) => {
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const location = useLocation();

  const toggleExpand = (title: string) => {
    setExpandedItems((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <aside
      className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white border-r transition-all duration-300 z-40  ${
        isSidebarCollapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex flex-col h-full dark:bg-black ">
        <div className="flex-1 py-4 overflow-y-auto scrollbar-hide">
          {menuItems.map((item, index) => (
            <div key={index} className="px-3 mb-2">
              <button
                onClick={() => item.subItems && toggleExpand(item.title)}
                className={`flex items-center w-full px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-white${
                  isActive(item.path) ? "bg-gray-200 text-blue-600" : ""
                }`}
              >
                <item.icon
                  className={`w-5 h-5 min-w-[1.25rem]  ${
                    isSidebarCollapsed ? "mx-auto" : ""
                  }`}
                />
                {!isSidebarCollapsed && (
                  <span className="ml-3">{item.title}</span>
                )}
                {item.subItems && !isSidebarCollapsed && (
                  <span className="ml-auto">
                    {expandedItems[item.title] ? (
                      <ChevronDownIcon className="w-4 h-4" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4" />
                    )}
                  </span>
                )}
              </button>

              {item.subItems && expandedItems[item.title] && (
                <div
                  className={`ml-8 mt-1 space-y-1 ${
                    isSidebarCollapsed ? "hidden" : "block"
                  }`}
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <Link key={subIndex} to={subItem.path}>
                      <button
                        className={`block w-full px-3 py-1 text-sm text-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-500 dark:text-white${
                          isActive(subItem.path)
                            ? "bg-gray-200 dark:bg-gray-500 text-blue-600 dark:text-white"
                            : ""
                        }`}
                      >
                        {subItem.title}
                      </button>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div
          className={`mt-auto border-t ${
            isSidebarCollapsed ? "flex justify-center" : "p-4"
          }`}
        >
          {children}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
