import React from "react";
import background from "../assets/BackgroundImage.png";
import profile from "../assets/anotherMe.png";
import netflixLogo from "../assets/netflix.png";
import googleLogo from "../assets/google.png";
import paypalLogo from "../assets/paypal.png";
import skypeLogo from "../assets/skype.png";
import amazonLogo from "../assets/amazon.png";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";

const Header = () => {
  const controls = useAnimation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);
  const scale = useTransform(scrollY, [0, 600], [1, 2]);
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: [100, 0],
        opacity: [0, 1],
        transition: { duration: 1, ease: "easeOut" },
      });
    } else {
      controls.stop();
    }
  }, [controls, inView]);

  return (
    <header className="relative text-white bg-[#050505] bg-cover bg-center font-body pt-6 pb-10">
      <div className="flex justify-center items-center">
        <nav className="fixed py-2 z-50 bg-white bg-opacity-10 mt-2 rounded-full w-fit backdrop-blur-3xl px-10 border border-green-400 border-opacity-30">
          <ul className="flex justify-center items-center space-x-12">
            <li className="duration-300 ease-out hover:text-green-400">Home</li>
            <li className="duration-300 ease-out hover:text-green-400">
              About Me
            </li>
            <li className="duration-300 ease-out hover:text-green-400">
              Education
            </li>
            <li className="duration-300 ease-out hover:text-green-400">
              Skills
            </li>
            <li className="duration-300 ease-out hover:text-green-400">
              Projects
            </li>
          </ul>
        </nav>
      </div>
      <div className="spotlight" ref={ref} animate={controls}>
        <div className="flex flex-col relative px-4 pt-10 pb-10 z-10">
          <div className="flex flex-row justify-center gap-10 mt-20">
            <div className="w-96 h-96"></div>
            <div className="w-96 h-96"></div>
            <div className="w-96 h-96"></div>
            <div className="grid grid-cols-[35px_35px_35px_35px_35px_35px_35px_35px_35px_35px_35px] grid-rows-[35px_35px_35px_35px_35px_35px_35px_35px_35px_35px_35px] z-20">
              <div className="w-72 h-72 bg-green-400 rounded-2xl row-start-1 col-start-3"></div>
              <div className="w-72 h-72 border-white border-4 rounded-2xl ml-5 mt-5"></div>
              <div className="w-[300px] h-[300px] col-start-2 row-start-2 overflow-hidden rounded-3xl z-20 duration-1000 ease-out">
                <img className="" src={profile} alt="Rubuto Yvan" />
              </div>
            </div>
            <div className="pb-14">
              <h5 className="text-2xl font-bold">
                <a href="https://git.io/typing-svg">
                  <img
                    src="https://readme-typing-svg.herokuapp.com?font=Poppins&weight=700&size=40&duration=4000&pause=1000&color=FFFFFF&width=1000&height=100&lines=Hello+There+I'm+Rubuto+Yvan;I'+m+a+FullStack+Developer"
                    alt="Typing SVG"
                  />
                </a>
              </h5>
              <h1 className="w-full py-6 text-5xl text-green-400 font-bold">
                Full Stack Developer
              </h1>
              <p className="text-gray-300 mt-4 text-md font-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas tincidunt felis nec augue vestibulum, sit amet cursus
                sapien feugiat. Curabitur sagittis convallis nisl, vel accumsan
                eros tincidunt in. Donec sodales, metus ac varius lobortis,
                lacus lorem volutpat urna, sed viverra arcu odio in justo.
              </p>
            </div>
            <div className="w-96 h-96"></div>
            <div className="w-96 h-96"></div>
            <div className="w-96 h-96"></div>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-8 falling-text">
            <img src={netflixLogo} alt="Netflix" className="h-8" />
            <img src={googleLogo} alt="Google" className="h-8" />
            <img src={paypalLogo} alt="PayPal" className="h-8" />
            <img src={skypeLogo} alt="Skype" className="h-8" />
            <img src={amazonLogo} alt="Amazon" className="h-8" />
          </div>
        </div>
        <div className="flex flex-row justify-center gap-5 falling-text">
          <div className="flex justify-center items-center flex-col w-52 h-52 border border-gray-400 px-5 py-5 bg-white bg-opacity-15 backdrop-filter backdrop-blur-3xl rounded-2xl duration-200 hover:scale-95 hover:border-green-400">
            <h1 className="text-6xl items-center text-green-400">1+</h1>
            <p className="opacity-70 font-light pt-3">Years</p>
            <p>Experience</p>
          </div>
          <div className="flex justify-center flex-col items-center w-52 h-52 border px-5 py-5 bg-white bg-opacity-15 backdrop-filter backdrop-blur-3xl rounded-2xl border-gray-400 duration-200 hover:scale-95 hover:border-green-400">
            <h1 className="text-6xl items-center text-green-400">21+</h1>
            <p className="opacity-70 font-light pt-3">Github</p>
            <p className="font-bold">Repositories</p>
          </div>
          <div className="flex justify-center flex-col items-center w-52 h-52 border px-5 py-5 bg-white bg-opacity-15 backdrop-filter backdrop-blur-3xl rounded-2xl border-gray-400 duration-200 hover:scale-95 hover:border-green-400">
            <h1 className="text-6xl items-center text-green-400">71+</h1>
            <p className="opacity-70 font-light pt-3">Friendly</p>
            <p className="font-bold">Connections</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
