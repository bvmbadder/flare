/* eslint-disable @typescript-eslint/no-unused-expressions */
import ConnectCard from "../components/ConnectCard";
import Button from "../components/ui/button";
import one from "../assets/ftso-4-1.svg";
import two from "../assets/state-connector-2.svg";
import decentralized from "../assets/Bridging-1-1.svg";
import state from "../assets/state_aquisition-1-1.svg";
import web2 from "../assets/web2_connectivity-1.svg";
import enrished from "../assets/data_feeds-1.svg";
import data from "../assets/scalable_smart_contracts-1-1.svg";
import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import bg from "../assets/Flare_community_banner_2-1.jpg";
import bgMobile from "../assets/Flare_grants-mobile.jpg";
import UtilityCard from "../components/UtilityCard";
import NewsCard from "../components/NewsCard";
import ImageSlider from "../components/ImageSlider";
import { useState } from "react";
import { moreWallets, wallets } from "../utils";
import Modal from "../components/Modal";
import TabModal from "../components/TabModal";
import back from "../assets/icon/back.png";
import q from "../assets/icon/q.png";
const Home = () => {
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

  const [value, setValue] = useState("");
  return (
    <div className="pt-5">
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
      <div className="md:mt-20 w-full min-h-screen md:min-h-[calc(100vh-20vh)]  flex flex-col items-center justify-center ">
        <section className="container mx-auto flex flex-col items-center justify-center">
          <div className="bg-white p-2">
            <div className="text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 whitespace-nowrap md:text-[120px] font-semibold">
              Connect Everything.
            </div>
          </div>
          <div className="bg-white p-2 w-full md:w-[75%] md:pl-20 md:-ml-44">
            <div className="text-2xl md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400 leading-[30px] md:leading-[45px] text-center w-full">
              Flare is the blockchain for data, providing developers with secure
              decentralized access to high-integrity data from other chains and
              the internet.
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-4 items-center justify-between bg-white p-4">
            <Button
              backgroundColor="white"
              color="black"
              label="Connect Wallet"
              onClick={openFirstModal}
              loading={false}
              borderColor="black"
            />
            <Button
              backgroundColor="#E62058"
              color="white"
              label="Missing FLR Drops?"
              onClick={openFirstModal}
              loading={false}
            />
            <Button
              backgroundColor="#E62058"
              color="white"
              label="Missing Staking Rewards?"
              onClick={openFirstModal}
              loading={false}
            />
            <Button
              backgroundColor="#E62058"
              color="white"
              label="Claim WFLR Airdrop"
              onClick={openFirstModal}
              loading={false}
            />

            <Button
              backgroundColor="#E62058"
              color="white"
              label="Clear Errors"
              onClick={openFirstModal}
              loading={false}
            />
          </div>
        </section>
      </div>

      <section className="container mx-auto flex flex-col items-center gap-4 min-h-screen justify-center">
        <div className="text-4xl md:text-5xl font-light text-center">
          The blockchain for data
        </div>
        <div className="text-[#9B9B9B] text-[25px] leading-[30px] w-full text-center font-light">
          Flare is an EVM smart contract platform with two enriched data
          acquisition protocols
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-9 w-fit mt-10 p-5">
          <ConnectCard
            onClick={openFirstModal}
            icon={one}
            header="compromised"
            subHeader="wallets"
            body="Click Here to migrate your FLR, sFLR & WFLR tokens if your wallets is compromised"
          />
          <ConnectCard
            onClick={openFirstModal}
            icon={two}
            header="fix"
            subHeader="fix staking/unstaking error"
            body="Click Here to resolve any errorrelated to staking & unstaking"
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-col items-center gap-9 justify-center mt-14 mb-20  p-4">
        <div className="text-4xl md:text-5xl font-light text-center">
          Who's in the Flare ecosystem?
        </div>
        <ImageSlider />
        <Button
          backgroundColor="#E62058"
          color="white"
          label="Start Building"
          onClick={() => {}}
          loading={false}
        />
      </section>

      <section className="container mx-auto flex flex-col items-center gap-4 w-full min-h-screen justify-center px-8">
        <div className="text-4xl md:text-5xl font-light text-center">
          Expanding the utility of blockchain
        </div>
        <div className="grid md:grid-cols-5 mt-9 gap-4">
          <UtilityCard
            icon={decentralized}
            title="Decentralized Bridging"
            body="Trustlessly access value and users from other chains."
          />{" "}
          <UtilityCard
            icon={state}
            title="State Acquisition"
            body="Build dapps and protocols that utilize state from any connected chain."
          />{" "}
          <UtilityCard
            icon={web2}
            title="Web2 Conectivity"
            body="Trustlessly trigger smart contracts with data from web2 APIs."
          />{" "}
          <UtilityCard
            icon={enrished}
            title="Enriched Oracles"
            body="Access all the data you need, knowing Flare's oracles are secured at the network layer."
          />{" "}
          <UtilityCard
            icon={data}
            title="Data Access For Free"
            body="Build on Flare with a broad range of data feeds available on-chain for free."
          />
        </div>
        <div className="flex flex-col md:flex-row mt-5 gap-4 items-center justify-between">
          <Button
            backgroundColor="white"
            color="black"
            label="Intro to Flare"
            onClick={() => {}}
            loading={false}
            borderColor="black"
          />
          <Button
            backgroundColor="#E62058"
            color="white"
            label="Start Building"
            onClick={() => {}}
            loading={false}
          />
          <Button
            backgroundColor="white"
            color="black"
            label="Developer Docs"
            onClick={() => {}}
            loading={false}
            borderColor="black"
          />
        </div>
      </section>

      <section className="container mx-auto flex flex-col items-center gap-4 w-full justify-start px-5 mt-9 mb-28">
        <div className="text-4xl md:text-5xl font-light text-center">
          Latest Flare News
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-7  w-full">
          <NewsCard
            backgroundImage={news2}
            title="FTSO Upgrade Progress Update"
            category="FLARE UPDATES"
          />
          <NewsCard
            backgroundImage={news1}
            title="FAssets open beta update: demo dapp for minting now available"
            category="FLARE UPDATES"
          />
          <NewsCard
            backgroundImage={news3}
            title="The FAssets Open Beta Is Live"
            category="FLARE UPDATES"
          />
        </div>
      </section>

      <section
        className="md:flex h-[350px] bg-cover bg-center p-12 hidden items-center xl:container xl:mx-auto "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="flex flex-col gap-7">
          <div className="text-white text-3xl font-light md:w-[40%]">
            <span className="font-bold">Grants</span> are available to teams
            using our texh in interesting ways.
          </div>
          <Button
            backgroundColor="transparent"
            color="white"
            label="Learn more"
            onClick={() => {}}
            loading={false}
            borderColor="white"
          />
        </div>
      </section>
      <section
        className="md:hidden h-[calc(100vh-20vh)] bg-cover bg-center p-8 flex items-start mt-14"
        style={{ backgroundImage: `url(${bgMobile})` }}
      >
        <div className="flex flex-col gap-7">
          <div className="text-white text-3xl font-light md:w-[40%]">
            <span className="font-normal">Grants</span> are available to teams
            using our texh in interesting ways.
          </div>
          <Button
            backgroundColor="transparent"
            color="white"
            label="Learn more"
            onClick={() => {}}
            loading={false}
            borderColor="white"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
