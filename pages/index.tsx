import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/Banner";
import { useState } from "react";

interface FormData {
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textBackground?: string;
  bgColDir?: number;
  textColDir?: number;
}

const Home: NextPage = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "My name",
    subtitle: "Occupation",
    backgroundColor: "darkblue",
    textBackground: "cyan, lime",
    bgColDir: 90,
    textColDir: 90,
  });

  return (
    <div className="my-8 w-[720px] lg:w-[1080px] mx-auto">
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
      />

      <form className="py-10 grid grid-cols-2 md:grid-cols-3">
        <div className="px-6">
          <label className="block px-2 py-1 mx-2 my-2" htmlFor="title">
            Title:
            <input
              className="block px-2 py-1 my-2 rounded-xl border-2 dark:border-gray-700"
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
          <label className="block px-2 py-1 mx-2 my-2" htmlFor="subtitle">
            Subtitle:
            <input
              className="block px-2 py-1 my-2 rounded-xl border-2 dark:border-gray-700"
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
          <label
            className="block px-2 py-1 mx-2 my-2"
            htmlFor="backgroundColor"
          >
            Background:
            <input
              className="block px-2 py-1 my-2 rounded-xl border-2 dark:border-gray-700"
              type="text"
              id="backgroundColor"
              value={formData.backgroundColor}
              onChange={(e) =>
                setFormData({ ...formData, backgroundColor: e.target.value })
              }
            />
          </label>
        </div>

        <div className="px-6">
          <label className="block px-2 py-1 mx-2 my-2" htmlFor="bgColDir">
            Background gradient direction:
            <input
              className="block px-2 py-1 my-2 rounded-xl border-2 dark:border-gray-700"
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

        <div className="px-6">
          <label
            className="block px-2 py-1 mx-2 my-2"
            htmlFor="textBackground1"
          >
            Text color:
            <input
              className="block px-2 py-1 my-2 rounded-xl border-2 dark:border-gray-700"
              type="text"
              id="textBackground1"
              value={formData.textBackground}
              onChange={(e) =>
                setFormData({ ...formData, textBackground: e.target.value })
              }
            />
          </label>
        </div>

        <div className="px-6">
          <label className="block px-2 py-1 mx-2 my-2" htmlFor="textColDir">
            Text gradient direction:
            <input
              className="block px-2 py-1 my-2 rounded-xl border-2 dark:border-gray-700"
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
      </form>
      <p className="text-center my-8">
        by{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://eesa.zahed.ca"
          className="text-blue-600 dark:text-blue-500"
        >
          Eesa Zahed
        </a>
      </p>
    </div>
  );
};

export type { FormData };
export default Home;
