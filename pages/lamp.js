import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cursor from "../components/Cursor";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import ProjectResume from "../components/ProjectResume";
import Button from "../components/Button";
import { useTheme } from "next-themes";
// Data
import { showResume } from "../data/portfolio.json";
import data from "../data/portfolio.json";


const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
    if (!showResume) {
      router.push("/");
    }
  }, []);

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
      <Header isBlog />
        <div className="mt-10 w-full flex flex-col items-center">
            <div className="w-full max-w-4xl p-20 mob:p-5 desktop:p-20 rounded-lg ">
                <h1 className="text-4xl font-bold">A Nap Lamp</h1>
                <h2 className="mt-20 text-sm leading-relaxed">
                    
                    <iframe className="mb-10 w-full aspect-video ..." src="https://www.youtube.com/embed/GxSLktuXKRg"></iframe>
                    Electrical appliances are inevitably set up with on-off switch. This fact has led to the thought of how to give man-machine interface more fun. 
                    <br/><br/>Subsequently, I started to plan to develop a device without an on/off button, which reacts only as you move with it.
                </h2>
                <img className="w-full mt-7" src={'/lamp/00.jpg'}></img>
                <h2 className="mt-7 text-sm leading-relaxed">
                When a person is near the lamp, the lamp is turned on. It senses the distance of movement with servo motor and accordingly repeats fade IN- fade OUT. If there is nobody near the lamp, it is switched off. This state is called "the lamp takes a nap". But at the big noise e.g. clapping hands or something is scattered, the lamp wakes up again. When near the lamp is quiet again, it is switched off.
                </h2>
                <img className="w-full mt-4" src={'/lamp/01.png'}></img>
                <img className="w-full mt-4" src={'/lamp/02.png'}></img>
                <img className="w-full mt-7" src={'/lamp/03.jpeg'}></img>
                <h2 className="mt-7 text-sm leading-relaxed">
                This work is literally a lamp for taking a nap. The human body sensor, 12v light bulb, and motor are controlled by Arduino. The motor repeats rotational motion, and the structures connected to it move as if breathing.
                </h2>
                <img className="w-full mt-4" src={'/lamp/04.jpg'}></img>
                <img className="w-full mt-4" src={'/lamp/05.jpg'}></img>
                <iframe className="mt-4 mb-10 w-full aspect-video ..." src="https://www.youtube.com/embed/JbTK6g6paqA"></iframe>
                
                
            </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Resume;
