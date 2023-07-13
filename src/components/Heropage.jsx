import React from "react";

const Heropage = () => {
  return (
    <main>
      <section>
        <div
          id="mainhkome"
          className=" sm:flex justify-between mt-16 items-center">
          <div
            id="fortextinfo"
            className=" text-white w-[50%] items-center justify-center text-center sm:text-start mx-auto m-10 sm:m-0">
            <h1 className=" text-3xl sm:text-3xl md:text-5xl lg:text-7xl font-bold mb-5">
              Programming <br />{" "}
              <span id="textstockef" className=" text-[#40C3E1]">
                {" "}
                Just Got Fun
              </span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              perspiciatis nostrum error earum officiis magnam, facere minus
              quidem fuga eligendi?
            </p>
            <button className=" bg-[#5D43F6] hover:bg-[#6E1FEA] transition-all py-3 px-5 rounded-lg mt-5">
              Explore more ▶️{" "}
            </button>
          </div>

          <div id="mainpageimg" className=" ml-8">
            <img
              src="https://www.programming-hero.com/img/header-banner-phone.png"
              alt=""
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Heropage;
