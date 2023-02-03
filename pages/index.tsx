import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import { useState } from "react";

interface FormData {
  title: string;
  subtitle: string;
  backgroundColor: string;
  textBackground: string;
  bgColDir: number;
  textColDir: number;
  font: string;
  imagePosition: string;
  textImagePosition: string;
}

const isLink = (text: string) => {
  let url;
  try {
    url = new URL(text);
  } catch {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
};

const isGradient = (text: string) => !isLink(text) && text.includes(",");

const inputStyle =
  "px-2 py-1 my-2 ml-2 rounded-xl border-2 dark:border-gray-700";
const labelStyle = "px-2 py-1 mx-2 my-2";
const linkStyle = "text-blue-600 hover:text-blue-700 dark:text-blue-500";

const Home: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "My name",
    subtitle: "Occupation",
    backgroundColor: "darkblue",
    textBackground: "cyan, lime",
    bgColDir: 90,
    textColDir: 90,
    font: "system-ui",
    imagePosition: "center",
    textImagePosition: "center",
  });

  return (
    <div className="my-8 w-[1080px] mx-auto">
      <Head>
        <title>Create A Banner</title>
      </Head>

      <Banner
        title={formData.title}
        subtitle={formData.subtitle}
        backgroundColor={formData.backgroundColor}
        textBackground={formData.textBackground}
        bgColDir={formData.bgColDir}
        textColDir={formData.textColDir}
        font={formData.font}
        imagePosition={formData.imagePosition}
        textImagePosition={formData.textImagePosition}
      />

      <form className="py-10 grid grid-cols-2">
        <div className="px-6">
          <label className={labelStyle} htmlFor="title">
            Title:
            <input
              className={inputStyle}
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </label>
        </div>

        <div className="px-6">
          <label className={labelStyle} htmlFor="subtitle">
            Subtitle:
            <input
              className={inputStyle}
              type="text"
              id="subtitle"
              value={formData.subtitle}
              onChange={(e) =>
                setFormData({ ...formData, subtitle: e.target.value })
              }
            />
          </label>
        </div>

        <div className="px-6">
          <label className={labelStyle} htmlFor="backgroundColor">
            Background:
            <input
              className={inputStyle}
              type="text"
              id="backgroundColor"
              value={formData.backgroundColor}
              onChange={(e) =>
                setFormData({ ...formData, backgroundColor: e.target.value })
              }
            />
          </label>
        </div>

        {isLink(formData.backgroundColor) ? (
          <div className="px-6">
            <label className={labelStyle} htmlFor="imagePosition">
              Image position:
              <select
                className={inputStyle}
                id="imagePosition"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    imagePosition: e.target.value,
                  })
                }
              >
                <option value="center">Center</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
              </select>
            </label>
          </div>
        ) : isGradient(formData.backgroundColor) ? (
          <div className="px-6">
            <label className={labelStyle} htmlFor="bgColDir">
              Background gradient direction:
              <input
                className={inputStyle}
                type="number"
                id="bgColDir"
                value={formData.bgColDir}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    bgColDir: parseInt(e.target.value),
                  })
                }
              />
            </label>
          </div>
        ) : (
          <div></div>
        )}

        <div className="px-6">
          <label className={labelStyle} htmlFor="textBackground1">
            Text color:
            <input
              className={inputStyle}
              type="text"
              id="textBackground1"
              value={formData.textBackground}
              onChange={(e) =>
                setFormData({ ...formData, textBackground: e.target.value })
              }
            />
          </label>
        </div>

        {isLink(formData.textBackground) ? (
          <div className="px-6">
            <label className={labelStyle} htmlFor="textImagePosition">
              Image position:
              <select
                className={inputStyle}
                id="textImagePosition"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    textImagePosition: e.target.value,
                  })
                }
              >
                <option value="center">Center</option>
                <option value="top">Top</option>
                <option value="bottom">Bottom</option>
              </select>
            </label>
          </div>
        ) : isGradient(formData.textBackground) ? (
          <div className="px-6">
            <label className={labelStyle} htmlFor="textColDir">
              Text gradient direction:
              <input
                className={inputStyle}
                type="number"
                id="textColDir"
                value={formData.textColDir}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    textColDir: parseInt(e.target.value),
                  })
                }
              />
            </label>
          </div>
        ) : (
          <div></div>
        )}

        <div className="px-6">
          <label className={labelStyle} htmlFor="font">
            Text font:
            <input
              className={inputStyle}
              type="text"
              id="font"
              value={formData.font}
              onChange={(e) =>
                setFormData({ ...formData, font: e.target.value })
              }
            />
          </label>
        </div>
      </form>
      <p className="text-center my-4 max-w-[720px] mx-auto leading-7">
        Only valid web safe{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.w3schools.com/cssref/css_colors.php"
          className={linkStyle}
        >
          CSS colors
        </a>{" "}
        and{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.w3schools.com/css/css_font_websafe.asp"
          className={linkStyle}
        >
          CSS fonts
        </a>{" "}
        are guaranteed to work.
        <br />
        <br />
        For the background and text color, you can separate colors with commas
        (,) in order to use a gradient as a background. You can also use an
        image url for an image background.
      </p>
      <p className="text-center my-8">
        by{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://eesa.zahed.ca"
          className={linkStyle}
        >
          Eesa Zahed
        </a>
      </p>
    </div>
  );
};

export { isLink, isGradient };
export type { FormData };
export default Home;
