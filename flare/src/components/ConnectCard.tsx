import Button from "./ui/button";

type PropType = {
  icon: string;
  header: string;
  subHeader: string;
  body: string;
  onClick: () => void;
};
const ConnectCard = ({ body, header, icon, subHeader, onClick }: PropType) => {
  return (
    <div className="rounded-3xl flex flex-col items-center gap-5 p-5 bg-blackBG md:w-[40%]">
      <img src={icon} alt="" className=" pt-10 max-w-[150px] align-middle" />
      <div className="uppercase text-2xl text-white">{header}</div>
      <div className="uppercase text-2xl text-center text-grey">
        {subHeader}
      </div>
      <div className="text-center text-sm text-grey">{body}</div>
      <Button
        backgroundColor="transparent"
        color="white"
        label="Connect Wallet"
        onClick={onClick}
        loading={false}
        borderColor="white"
      />
    </div>
  );
};

export default ConnectCard;
