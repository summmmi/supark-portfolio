import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Socials from "../components/Socials";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import data from "../data/portfolio.json";


const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />

        <div className="mt-20">
          <div className="mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className="text-3xl text-bold">Impressum.</h1>
            <h1 className="mt-10 text-xl text-bold">Sunmi Park</h1>
            <h1 className="mt-5 text-m text-bold">Holtenaurstrasse</h1>
            <h1 className="text-m text-bold">28219 Bremen</h1>
            <h1 className="text-m ">E-Mail : <a className="text-teal-400" href="mailto:supark@hfk-bremen.de">supark@hfk-bremen.de</a></h1>
            <h1 className="text-m text-bold">Telefon : 0177 5115747</h1>
            <div className="mt-10 grid grid-cols-1 mob:grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-2 justify-between gap-10">
              <h1 className="text-xl text-bold">Copyright</h1><h1 className="text-xl text-bold">Liability for links</h1>
              <p className="text-m opacity-75">Our offer contains links to external websites of third parties, on whose contents we have no influence. Therefore, we cannot assume any liability for these external contents. The respective provider or operator of the pages is always responsible for the content of the linked pages. The linked pages were checked for possible legal violations at the time of linking. Illegal contents were not recognizable at the time of linking. However, a permanent control of the contents of the linked pages is not reasonable without concrete evidence of a violation of the law. If we become aware of any infringements, we will remove such links immediately.</p>
              <p className="text-m opacity-75">The content and works created by the site operators on these pages are subject to German copyright law. Duplication, processing, distribution, or any form of commercialization of such material beyond the scope of the copyright law shall require the prior written consent of its respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this site was not created by the operator, the copyrights of third parties are respected. In particular, third-party content is identified as such. Should you nevertheless become aware of a copyright infringement, please inform us accordingly. If we become aware of any infringements, we will remove such content immediately.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
