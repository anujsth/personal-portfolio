import { InfoProps } from "./Info.type";

const Info = ({ children, text }: InfoProps) => {
  return (
    <div className="flex space-x-4 text-gray-300 text-base items-center mt-4 cursor-pointer">
      <div className="hover:text-green-500">{children}</div>
      <p>{text}</p>
    </div>
  );
};

export default Info;
