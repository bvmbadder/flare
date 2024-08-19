type PropType = {
  icon: string;
  title: string;
  body: string;
};
const UtilityCard = ({ body, icon, title }: PropType) => {
  return (
    <div className="flex flex-col gap-5 items-center md:py-10 p-5 rounded-2xl border border-[#F4F4F4]">
      <img src={icon} alt="" />
      <div className="text-2xl text-black text-center">{title}</div>
      <div className="text-grey text-sm text-center mt-auto">{body}</div>
    </div>
  );
};

export default UtilityCard;
