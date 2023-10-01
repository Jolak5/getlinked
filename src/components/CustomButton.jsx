const CustomButton = ({ customStyle, title }) => {
  return (
    <button className={`py-2 px-2  rounded-md text-white border-[1px] btn-gradient ${customStyle} border-none`}>
      {title}
    </button>
  );
};

export default CustomButton;
