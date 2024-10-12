import React from "react";
import profile from "../assets/me.png";
import upt from "../assets/upt.png";

const Clients = () => {
  const testimonials = [
    {
      name: "John Doe",
      comment: "Great Developer! His Skills are very insane!!",
      image: "john-image.png",
    },
    {
      name: "Mike Peter",
      comment: "Amazing work! I can't imagine what he did, he is an Alien!!",
      image: "mike-image.png",
    },
    {
      name: "Mike Peter",
      comment: "Amazing work! I can't imagine what he did, he is an Alien!!",
      image: "mike-image.png",
    },
    {
      name: "Mike Peter",
      comment: "Amazing work! I can't imagine what he did, he is an Alien!!",
      image: "mike-image.png",
    },
    {
      name: "Mike Peter",
      comment: "Amazing work! I can't imagine what he did, he is an Alien!!",
      image: "mike-image.png",
    },
  ];

  return (
    <div className="bg-[#0a0a0a] text-white pt-5 pb-10 h-[360px]">
      <div className="flex justify-center z-20">
        <h2 className="text-5xl font-bold z-20">
          <span className="text-green-400">Clients'</span> Testimonies
        </h2>
      </div>
      <div className="flex h-full items-center">
        <div className="flex gap-5 h-fit flex-nowrap overflow-x-auto for-scrollbar">
          {testimonials.map((testimonial, index) => (
            <div
              className="flex flex-row flex-shrink-0 rounded-xl border border-white border-opacity-10 duration-200 ease-out hover:border-green-400 hover:scale-95 hover:border-opacity-100 bg-[#151515] backdrop-blur-3xl pl-4 pr-4 pt-4 shadow-lg w-96"
              key={index}
            >
              <div className="grid grid-cols-[15px_15px_15px_15px_15px_15px_15px_15px_15px_15px] grid-rows-[15px_15px_15px_15px_15px_15px_15px_15px_15px_15px]">
                <div className="w-28 h-28 bg-green-400 rounded-xl row-start-1 col-start-1"></div>
                <div className="w-28 h-28 border-white border-4 rounded-xl mt-1"></div>
                <div className="w-28 h-28 col-start-1 ml-2 row-start-2 overflow-hidden rounded-xl z-20">
                  <img className="" src={profile} alt="Rubuto Yvan" />
                </div>
              </div>
              <div className="ml-1">
                <p className="text-lg font-semibold text-green-400 mb-3">
                  {testimonial.name}
                </p>
                <p className="text-white text-opacity-40">{testimonial.comment}</p>
              </div>
              <div className="absolute right-1 bottom-2 h-28 w-28">
                <img src={upt} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
