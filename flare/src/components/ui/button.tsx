import { ButtonPropType } from "./types";

const Button = ({
  backgroundColor,
  icon: Icon,
  label,
  loading,
  color,
  disabled,
  onClick,
  borderColor,
}: ButtonPropType) => {
  return (
    <button
      className={`rounded-full text-white p-3 px-8 cursor-pointer flex justify-center items-center   w-fit gap-5 border whitespace-nowrap ${
        color === "green" ? " text-pry" : ""
      }`}
      style={{
        color,
        backgroundColor,
        borderColor,
      }}
      onClick={onClick}
      type="submit"
      disabled={loading || disabled}
    >
      {Icon && (
        // <img src={icon} className="w-[30px] h-[30px] mr-2 stroke-white" />
        <Icon />
      )}
      {label}
    </button>
  );
};

export default Button;
