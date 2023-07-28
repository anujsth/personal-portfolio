import { VideoProps } from "./Video.type";

const Video = ({
  url,
  width,
  border,
  variant = "square",
  borderColor = "blue",
  ...props
}: VideoProps) => {
  return (
    <div className="w-full h-full   ">
      <video
        width={width}
        controls
        className={`${
          border && `border-4  ${variant === "rounded" && "rounded-lg"}`
        }`}
        style={{ borderColor: borderColor }}
        {...props}
      >
        <source src={url} />
      </video>
    </div>
  );
};

export default Video;
