type PropType = {
  backgroundImage: string;
  title: string;
  category: string;
};
const NewsCard = ({ category, backgroundImage, title }: PropType) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className="aspect-w-16 aspect-h-9 h-[200px] bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      <div className="text-black text-xl mt-2 mb-8">{title}</div>
      <div className="text-pry text-xs font-light bg-[#F7ECEF] rounded-full p-2 px-4 w-fit mt-auto">
        {category}
      </div>
    </div>
  );
};

export default NewsCard;
