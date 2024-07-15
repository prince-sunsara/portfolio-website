import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center">
          <div>
            <Image
              src={"/prince.jpg"}
              alt="Prince Sunsara"
              height={192}
              width={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
            />
            <span className="text-4xl">👋</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
