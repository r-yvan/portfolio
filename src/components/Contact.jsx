import achievement from "../assets/achievement.png";
import React from "react";

const Contact = () => {
  return (
    <section className="flex flex-col text-white pt-5 pb-10 px-10 bg-[#050505] font-body">
      <div>
        <h2 className="text-5xl font-bold text-center mb-8">
          Let's <span className="text-green-400">Talk</span>
        </h2>
      </div>
      <div className="flex flex-row gap-12 justify-center">
        <div className="flex flex-row items-center">
          <div className="flex flex-col rounded-xl p-10 pt-5 w-96 gap-5">
            <div className="flex flex-row items-center gap-4 ">
              <img src={achievement} alt="" className="w-10 h-10" />
              <p className="text-3xl font-semibold">Social Media</p>
            </div>
            <div className="flex flex-col gap-2 pl-5">
              <div>
                <a href="" className="text-sm font-light">
                  https://www.linkedin.com
                </a>
              </div>
              <div>
                <a href="" className="text-sm font-light">
                  https://www.github.com/r-yvan/r-yvan
                </a>
              </div>
              <div>
                <a href="" className="text-sm font-light">
                  https://www.instagram.com/nr_ivan011
                </a>
              </div>
              <div>
                <a href="" className="text-sm font-light">
                  https://www.discord.com/rivan
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-xl p-10 pt-5 w-96 gap-5">
            <div className="flex flex-row items-center gap-4">
              <img src={achievement} alt="" className="w-10 h-10" />
              <h3 className="text-3xl font-semibold">Contacts</h3>
            </div>
            <div className="flex flex-col gap-2 pl-5">
              <div>
                <a className="text-sm font-light" href="">
                  yvankiliye.rubuto@gmail.com
                </a>
              </div>
              <div>
                <a className="text-sm font-light" href="">
                  linkedin.com/
                </a>
              </div>
              <div className="text-sm font-light">+250788876325</div>
              <div className="text-sm font-light">Kigali, Rwanda</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-[#0a0a0a] p-10 gap-2 justify-center rounded-xl">
          <p className="text-2xl font-bold p-4">
            Send Me an <span className="text-green-400">Email</span>
          </p>
          <form action="" className="flex flex-col gap-3">
            <input
              className="bg-inherit rounded-lg p-3 border border-white border-opacity-10 outline-none"
              type="text"
              placeholder="Email"
            />
            <input
              className="bg-inherit rounded-lg p-3 border border-white border-opacity-10 outline-none"
              type="text"
              placeholder="Password"
            />
            <textarea
              className="bg-inherit rounded-lg p-3 border border-white border-opacity-10 outline-none"
              type="text"
              placeholder="Text"
            />
            <input
              className="bg-inherit rounded-lg p-3 border border-white border-opacity-10 outline-none"
              type="text"
              placeholder="Contacts"
            />
            <div className="flex justify-center">
              <button className="bg-green-600 py-2 rounded-lg w-32">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
