import type { NextPage } from "next";
import { FormData, isGradient, isLink } from "../pages/index";

const Banner: NextPage<FormData> = ({
  title,
  subtitle,
  backgroundColor,
  textBackground,
  bgColDir,
  textColDir,
  font,
  imagePosition,
  textImagePosition,
}) => {
  return (
    <div
      className="w-[1080px] h-[360px] m-auto grid place-items-center text-center"
      id="banner"
      style={
        isLink(backgroundColor)
          ? {
              backgroundImage: `url(${backgroundColor})`,
              backgroundPosition: imagePosition,
              backgroundSize: "cover",
            }
          : isGradient(backgroundColor)
          ? {
              backgroundImage: `linear-gradient(${bgColDir}deg, ${backgroundColor})`,
            }
          : { backgroundColor: backgroundColor }
      }
    >
      <h1
        className={`text-8xl font-bold m-8 ${
          (isLink(textBackground) || isGradient(textBackground)) &&
          "bg-clip-text text-transparent"
        }
        `}
        style={{
          fontFamily: font,
          ...(isLink(textBackground)
            ? {
                backgroundImage: `url(${textBackground})`,
                backgroundPosition: textImagePosition,
                backgroundSize: "cover",
              }
            : isGradient(textBackground)
            ? {
                backgroundImage: `linear-gradient(${textColDir}deg, ${textBackground})`,
              }
            : { color: textBackground }),
        }}
      >
        {title}
        <br />
        <span className="text-4xl">{subtitle}</span>
      </h1>
    </div>
  );
};
export default Banner;
