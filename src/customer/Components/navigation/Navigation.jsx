import { Fragment, useState } from "react";
import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useSelector , useDispatch} from "react-redux";
import {
  logoutUser
} from "../../../state/action-creators/userActions";
// import sub4sale from'...../public/sub4sale.png'
const navigation = {
  pages: [
    { name: "Home", href: "/" },
    { name: "About", href: "/aboutUs" },
    { name: "Pricing", href: "/pricing" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.user.amount);
  const loginStatus = useSelector((state) => state.user.loginStatus);
  const handleLogout = () => {
    // Dispatch the logoutUser action
    dispatch(logoutUser());
  };
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                <div className="flex px-4 pb-2 pt-5">
                  <button
                    type="button"
                    className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                {/* Links */}
                <Tab.Group as="div" className="mt-2">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8 px-4"></Tab.List>
                  </div>
                </Tab.Group>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        to={page.href}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                  {loginStatus === false ? (
                    <div className="flow-root">
                      <Link
                        to="/login"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Sign in
                      </Link>
                    </div>
                  ) : (
                    
                    <div className="flow-root">
                      <Link
                        to="/"
                        onClick={handleLogout}
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                  {loginStatus === false ? (
                    <div className="flow-root">
                      <Link
                        to="signUp"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Create account
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                  {loginStatus === true ? (
                    <div className="flow-root">
                      <Link
                        to="/dashboard"
                        className="-m-2 block p-2 font-medium text-gray-900"
                      >
                        Dashboard
                      </Link>
                    </div>
                  ) : (
                    ""
                  )}
                  

                  <div className="flow-root">
                    <Link
                      to="#"
                      className="-m-2 block p-2 font-medium text-gray-900"
                    >
                      {console.log("loginStatus is : " + loginStatus)}
                      Balance {amount} LoginStatus {loginStatus.toString()}
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
          Join now with 50 % off
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      to={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {loginStatus === false ? (
                    <Link
                      to="/login"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </Link>
                  ) : (
                    <Link
                      to="/"
                      onClick={handleLogout}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Logout
                    </Link>
                  )}

                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  {loginStatus===false?(<Link
                    to="/signUp"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Create account
                  </Link>):("")}
                  {/*{ name: "Dashboard", href: "/dashboard" }, */}
                  {loginStatus===true?(<Link
                    to="/dashboard"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    Dashboard
                  </Link>):("")}
                  <Link
                    to="#"
                    className="text-sm font-medium text-gray-700 hover:text-gray-800"
                  >
                    {console.log("loginStatus is : " + loginStatus)}
                    Balance {amount} LoginStatus {loginStatus.toString()}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
