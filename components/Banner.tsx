import type { NextPage } from "next";
import type { FormData } from "../pages/index";

const Banner: NextPage<FormData> = ({
  title,
  subtitle,
  backgroundColor,
  textBackground,
  bgColDir,
  textColDir,
}) => {
  return (
    <div
      className="w-[720px] h-[240px] lg:w-[1080px] lg:h-[360px] m-auto grid place-items-center text-center"
      id="banner"
      style={
        backgroundColor?.includes("https://") ||
        backgroundColor?.includes("http://")
          ? {
              backgroundImage: `url(${backgroundColor})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }
          : backgroundColor?.includes(",")
          ? {
              backgroundImage: `linear-gradient(${bgColDir}deg, ${backgroundColor})`,
            }
          : { backgroundColor: backgroundColor }
      }
    >
      <h1
        className="text-6xl lg:text-8xl font-bold m-8 bg-clip-text text-transparent"
        style={
          textBackground?.includes("https://") ||
          textBackground?.includes("http://")
            ? {
                backgroundImage: `url(${textBackground})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }
            : textBackground?.includes(",")
            ? {
                backgroundImage: `linear-gradient(${textColDir}deg, ${textBackground})`,
              }
            : { backgroundColor: textBackground }
        }
      >
        {title}
        <br />
        <span className="text-4xl">{subtitle}</span>
      </h1>
    </div>
  );
};

export default Banner;
