/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import menu, close, and dropdown icons
import logo from "../assets/Artboard-1-1.svg";
import Button from "../components/ui/button";
import Footer from "../layout/Footer";
import { moreWallets, wallets } from "../utils";
import Modal from "../components/Modal";
import TabModal from "../components/TabModal";
import back from "../assets/icon/back.png";
import q from "../assets/icon/q.png";
import { socials } from "../layout/utils";

// Define the type for the openDropdowns state
type OpenDropdownsType = {
  [key: number]: boolean;
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<OpenDropdownsType>({});

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = (index: number) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  const [formTab, setFormTab] = useState(false);
  const onSetFormTabOpen = (value: string) => {
    setValue(value);
    closeFirstModal();
    setFormTab(true);
  };
  const onSetFormTabClose = () => {
    setFormTab(false);
    openFirstModal();
  };

  const onSetFormTabOpen2 = (value: string) => {
    setValue(value);
    closeSecondModal();
    setFormTab(true);
  };
  const onSetFormTabClose2 = () => {
    setFormTab(false);
    openSecondModal();
  };

  const [isFirstModalOpen, setFirstModalOpen] = useState<boolean>(false);
  const [isSecondModalOpen, setSecondModalOpen] = useState<boolean>(false);

  const openFirstModal = () => setFirstModalOpen(true);
  const closeFirstModal = () => setFirstModalOpen(false);

  const openSecondModal = () => {
    closeFirstModal();
    setSecondModalOpen(true);
  };
  const closeSecondModal = () => setSecondModalOpen(false);

  const backToFirstModal = () => {
    closeSecondModal();
    setFirstModalOpen(true);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWallets = moreWallets.filter((wallet) =>
    wallet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const navLink = [
    {
      to: "/learn",
      name: "learn",
      dropdownLinks: [
        { name: "Documentation", to: "/learn/documentation" },
        { name: "Tutorials", to: "/learn/tutorials" },
      ],
    },
    {
      to: "/build",
      name: "build",
      dropdownLinks: [
        { name: "Tools", to: "/build/tools" },
        { name: "Resources", to: "/build/resources" },
      ],
    },
    {
      to: "/use",
      name: "use",
      dropdownLinks: [
        { name: "Products", to: "/use/products" },
        { name: "Services", to: "/use/services" },
      ],
    },
    {
      to: "/operate",
      name: "operate",
      dropdownLinks: [
        { name: "Guidelines", to: "/operate/guidelines" },
        { name: "Best Practices", to: "/operate/best-practices" },
      ],
    },
    {
      to: "/connect",
      name: "connect",
      dropdownLinks: [
        { name: "Community", to: "/connect/community" },
        { name: "Events", to: "/connect/events" },
      ],
    },
  ];

  const [value, setValue] = useState("");

  return (
    <>
      {formTab && (
        <TabModal
          isOpen={formTab}
          onClose={isFirstModalOpen ? onSetFormTabClose : onSetFormTabClose2}
          value={value}
        />
      )}
      <Modal
        icon={q}
        isOpen={isFirstModalOpen}
        title="Connect Wallet"
        closeModal={closeFirstModal}
      >
        <div className="flex flex-col">
          <ul className="p-4">
            {wallets.map((wallet) => (
              <li
                className="flex items-center justify-between font-[400] text-sm text-white mb-2 cursor-pointer hover:bg-gray-600 p-2 rounded-full bg-[#252626] relative"
                key={wallet.id}
                onClick={() => {
                  wallet.id == 4
                    ? openSecondModal()
                    : onSetFormTabOpen(wallet.name);
                }}
              >
                <div className="flex items-center">
                  <img
                    className="rounded-full mr-2 w-10 h-10"
                    src={wallet.icon}
                    alt=""
                  />
                  <span className="text-md">{wallet.name}</span>
                </div>
              </li>
            ))}
          </ul>
          <div className="text-xs text-gray-500 text-center p-5 bg-[#252626] rounded-b-3xl">
            By connecting your wallet, you agree to our{" "}
            <span className="text-white">Terms of Service</span>
          </div>
        </div>
      </Modal>
      <Modal
        icon={back}
        isOpen={isSecondModalOpen}
        title="All wallets"
        closeModal={closeSecondModal}
        backToFirstModal={backToFirstModal}
      >
        <div className="p-4">
          <input
            type="search"
            placeholder="Search wallet"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2  rounded-full mb-4 outline-green-400 pl-5  bg-[#252626]"
          />
          <div className="grid grid-cols-4 gap-2 overflow-auto scrollbar-none max-h-96">
            {filteredWallets.map((wallet) => (
              <div
                key={wallet.name}
                onClick={() => {
                  onSetFormTabOpen2(wallet.name);
                }}
                className="flex flex-col cursor-pointer text-xs items-center justify-between bg-[#252626] p-1 rounded-2xl"
              >
                <img
                  src={wallet.icon}
                  alt={wallet.name}
                  className="w-11 h-11 rounded-full"
                />
                <div className="text-white mt-2 w-full text-center font-Wix text-xs truncate">
                  {wallet.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>
      <header className="fixed top-0 w-full items-center py-6 bg-white">
        <div className="container mx-auto">
          <div className="flex items-center px-7 justify-between">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="w-24" />
            </NavLink>
            <div className="hidden md:block">
              <ul className="flex list-none gap-9 capitalize font-normal text-blackBG">
                {navLink.map((item) => (
                  <li key={item.to} className="relative group">
                    <span className="cursor-pointer">{item.name}</span>

                    {/* Dropdown */}
                    <div className="absolute left-0 mt-2 py-2 minwf bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300 z-50 hidden">
                      {item.dropdownLinks.map((link, index) => (
                        <NavLink
                          key={index}
                          to={link.to}
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                        >
                          {link.name}
                        </NavLink>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:flex items-center gap-14 hidden">
              <BiSearch className="w-7 h-7" />
              <Button
                backgroundColor="white"
                color="black"
                label="Connect Wallet"
                onClick={openFirstModal}
                loading={false}
                borderColor="black"
              />
            </div>
            <div className="md:hidden flex items-center">
              {/* Mobile menu toggle button */}
              <button onClick={toggleMenu}>
                {menuOpen ? (
                  <FaTimes className="w-7 h-7 text-pry bg-pry" />
                ) : (
                  <FaBars className="w-7 h-7 text-pry" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-white z-40 transition-transform transform ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="container mx-auto px-7 py-6 h-full flex flex-col">
            <div className="flex justify-between items-center">
              <NavLink to="/">
                <img src={logo} alt="Logo" className="w-24" />
              </NavLink>
              <button onClick={toggleMenu}>
                <FaTimes className="w-7 h-7 text-pry" />
              </button>
            </div>
            <div className="flex-1 flex flex-col gap-6  mt-20 overflow-y-auto">
              <ul className="space-y-4">
                {navLink.map((item, index) => (
                  <li key={item.to} className="relative">
                    <div
                      className="flex justify-between items-center cursor-pointer"
                      onClick={() => toggleDropdown(index)}
                    >
                      <NavLink
                        to={item.to}
                        className="text-lg capitalize font-light"
                      >
                        {item.name}
                      </NavLink>
                      {openDropdowns[index] ? (
                        <FaChevronUp className="ml-2 text-grey" />
                      ) : (
                        <FaChevronDown className="ml-2 text-grey" />
                      )}
                    </div>
                    {openDropdowns[index] && (
                      <ul className="mt-2 pl-4 space-y-2">
                        {item.dropdownLinks.map((link, idx) => (
                          <li key={idx}>
                            <NavLink
                              to={link.to}
                              className="block text-grey font-light hover:text-gray-900"
                              onClick={toggleMenu} // Close the menu after clicking a link
                            >
                              {link.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              <div className="border border-black rounded-md flex items-center gap-3 p-3 mt-4">
                <BiSearch className="w-7 h-7" />
                <input
                  type="text"
                  className="border-none bg-transparent"
                  placeholder="search name..."
                />
              </div>

              <button
                className="rounded-full w-full text-lg font-light
                 text-white p-4  px-8 cursor-pointer flex justify-center items-center bg-black  whitespace-nowrap my-6"
                onClick={openFirstModal}
              >
                Connect Wallet
              </button>
              <div className="flex items-center gap-5 bg-black">
                {socials.map((item, index) => (
                  <a href="/" key={index}>
                    <img
                      src={item}
                      alt=""
                      className="w-6 md:w-9 h-6 md:h-w-9"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
      <Footer />
    </>
  );
};

export default Header;
