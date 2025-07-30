import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import logo from "../assets/phendex_logo.png";
import { classNames } from "../utils/productUtils";
import { useActiveSection } from "../hooks/useActiveSection";

// Navigation items without static current state
const NAVIGATION_ITEMS = [
  { name: "Overview", href: "#overview" },
  { name: "Products", href: "#products" },
  { name: "Contact Us", href: "#contact" },
];

/**
 * Navigation bar component with responsive mobile menu and dynamic active state
 */
export function NavigationBar() {
  const activeSection = useActiveSection();

  const isActive = (href: string) => {
    const section = href.replace("#", "");
    return activeSection === section;
  };

  return (
    <Disclosure as="nav" className="bg-white shadow z-50 sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex justify-center align-center mt-1">
                  <Image src={logo} alt="Phendex Logo" priority />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="mr-12 pr-12 flex items-baseline space-x-4">
                  {NAVIGATION_ITEMS.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        isActive(item.href)
                          ? "bg-green-900 text-white"
                          : "text-green-700 hover:bg-green-900/40 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"
                      )}
                      aria-current={isActive(item.href) ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6"></div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-green-800 p-2 text-white hover:bg-green-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-200">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {NAVIGATION_ITEMS.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    isActive(item.href)
                      ? "bg-green-900 text-white"
                      : "text-green-700 hover:bg-green-900 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium transition-colors duration-200"
                  )}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
