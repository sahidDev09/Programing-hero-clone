import React from "react";

const HeroInfo = () => {
  return (
    <section>
      <div>
        <div
          id="perendiv"
          className=" mt-[6rem] rounded-lg text-white grid sm:grid-cols-4 container mx-auto text-center pt-16 px-4 bg-[#211548d3] font-bold text-xl">
          <div className=" hover:scale-[105%] transition-all mb-10">
            <span className=" py-7 items-center sm:text-3xl font-extrabold justify-center px-7 rounded-full bg-[#3AABF4]">
              1M
            </span>
            <h2 className=" mt-9 text-center text-1xl">Users</h2>
          </div>

          <div className=" hover:scale-[105%] transition-all mb-10">
            <span className="py-7 items-center text-3xl font-extrabold justify-center px-6 rounded-full bg-[#F54866]">
              4.8
            </span>
            <h2 className="mt-9 text-center text-1xl">Playstore Rating</h2>
          </div>

          <div className=" hover:scale-[105%] transition-all mb-10">
            <span className="py-7 items-center text-3xl font-extrabold justify-center px-6 rounded-full bg-[#542FD9]">
              C#
            </span>
            <h2 className="mt-9 text-center text-1xl">Code.org win</h2>
          </div>

          <div className=" hover:scale-[105%] transition-all mb-10">
            <span className="py-7 items-center text-3xl font-extrabold justify-center px-2 rounded-full bg-[#F9B73F]">
              33k+
            </span>
            <h2 className="mt-9 text-center text-1xl">Review</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroInfo;
