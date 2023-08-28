import { useMemo, useState } from "react";
import { Dialog, Disclosure, Popover } from "@headlessui/react";
import {
  AlignRightOutlined,
  ArrowRightOutlined,
  CaretDownOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
const textAboutUs = (
  <div className="p-3">
    <Link to="/mission">
      <div className="p-2">Mission</div>
    </Link>
    <Link to="/vission">
      <div className="p-2">Vission</div>
    </Link>
  </div>
);

const textGallery = (
  <div className="p-3">
    <Link to="/image-gallery">
      <div className="p-2">Image gallery</div>
    </Link>
    <Link to="/video-gallery">
      <div className="p-2">Video gallery</div>
    </Link>
  </div>
);

const textAdmin = (
  <div className="p-3">
    <Link to="/head-master-speech">
      <div className="p-2">Head master</div>
    </Link>
    <Link to="/ass-head-master-speech">
      <div className="p-2">Ass. Head master</div>
    </Link>
    <Link to="/teacher-list-show">
      <div className="p-2">Teacher list</div>
    </Link>
  </div>
);

const buttonWidth = 70;
const gap = 8;
const btnProps = {
  style: {
    width: buttonWidth,
  },
};
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#" },
  { name: "Contact sales", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const options = ["Show", "Hide", "Center"];
  const [arrow, setArrow] = useState("Show");
  const mergedArrow = useMemo(() => {
    if (arrow === "Hide") {
      return false;
    }
    if (arrow === "Show") {
      return true;
    }
    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <img
              className="h-12 w-auto"
              src="/uploads/govt-log.png"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AlignRightOutlined className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Home
          </Link>
          <Tooltip placement="bottom" title={textAboutUs} arrow={mergedArrow}>
            <Link
              to="/about-us"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              About us
              <span className="inline-block -mt-[5px] ml-2">
                <CaretDownOutlined style={{ fontSize: "18px" }} />
              </span>
            </Link>
          </Tooltip>

          <Tooltip placement="bottom" title={textAdmin} arrow={mergedArrow}>
            <div
              role="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Administration
              <span className="inline-block -mt-[5px] ml-2">
                <CaretDownOutlined style={{ fontSize: "18px" }} />
              </span>
            </div>
          </Tooltip>

          <Tooltip placement="bottom" title={textGallery} arrow={mergedArrow}>
            <div
              role="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Gallery
              <span className="inline-block -mt-[5px] ml-2">
                <CaretDownOutlined style={{ fontSize: "18px" }} />
              </span>
            </div>
          </Tooltip>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact us
          </Link>
          <Link
            to="/notices"
            {...btnProps}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Notices
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AlignRightOutlined className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Product
                        <ArrowRightOutlined
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About us
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact us
                </Link>
                <Link
                  to="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Notices
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
