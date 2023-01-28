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
        <div className="mt-10 w-full flex flex-col items-center">
            <div className="w-full max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg ">
                <h1 className="text-4xl font-bold">Wet Data</h1>
                <h2 className="mt-20 text-sm leading-relaxed">
                    
                    <iframe className="mb-10 w-full aspect-video ..." src="https://player.vimeo.com/video/738968974?h=b0466de37d"></iframe>
                    Wet Data visualizes the process in which digital data is stored into Cloud and used as materialistic form.
                    <br/><br/>According to ‘Friedrich Kittler’ it is already true in this time that we are dependent variables of technology. Functions of the central nervous system of man have been technically implemented. Namely, a teleprinter as an artificial mouth, a telephone as an artificial ear. Humans are no longer natural individuals, but rather large network servers and program structures. Therefore, Kittler looks at the “information machine” of human from the point of view of the media, because the media persistently determine the human way of thinking and perceiving. While people are connected to digital devices like smartphones, their behavior is changing in the course of digitalization.
                    <br/><br/>As an “information machine” of human, and also connected with digital devices, I constantly produce a lot of data through my five senses and automatically store in a cloud. The huge amount of devices in the data centers, whose power consumption is equivalent to that of a small town, hide behind the beautiful and gentle name “cloud”. The data left behind in the Cloud will not disappear until someone deletes it.
                    <br/><br/>Like physical garbage floating on the sea, the digital data are increasingly deteriorating the environment, but it is difficult to recognize the unseen consequence. There may be many reasons, but I thought the biggest reason was the invisibility of its material for these data. Therefore, I’ve attempted to visualize the process and the output of digital data into the materialistic form.
                </h2>
                <img className="w-full mt-7" src={'/wetdata/01.jpg'}></img>
                <img className="w-full mt-4" src={'/wetdata/02.jpg'}></img>
                <h2 className="mt-7 text-sm leading-relaxed">
                This work consists of two parts, first is a website where you can simply upload your photos. Second is an interactive part where the uploading photos are melted down on the screen and also at the same time the motors drop water.
                </h2>
                <img className="w-full mt-7" src={'/wetdata/03.jpg'}></img>
                <img className="w-full mt-4" src={'/wetdata/04.jpg'}></img>
                <img className="w-full mt-4" src={'/wetdata/05.jpg'}></img>
                <img className="w-full mt-4" src={'/wetdata/06.jpg'}></img>
                <h2 className="mt-7 text-sm leading-relaxed">
                The photos that are sent to the website in real time are stored in the Google cloud. Then the data are created as a link and again uploaded to the installation. In this process, these data become metaphorically wet and eventually melted due to the temperature difference between the data center and the exhibition room.
                </h2>
                <h2 className="mt-7 text-sm font-bold">References</h2>
                <ul className="ml-5 mt-7 text-sm list-disc leading-relaxed">
                    <li>Friedrich Kittler – Ausschreibungssystem, GFT, Interview mit Stefan Heidenreich</li>
                    <li>Nina Lager Vestberg – There is no cloud</li>
                </ul>
                
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
