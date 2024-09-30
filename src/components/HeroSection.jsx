import React from "react";

const HeroSection = () => {
  return (
    <section>
      <div className="w-[70rem] mx-auto h-screen flex items-center justify-between gap-[60px]">
        <div className="flex flex-col items-start justify-start">
          <p className="headerText2">
            Distribute and manage insurance business in{" "}
            <span>one platform</span>
          </p>
          <p className="subText2">
            Manage your insurance business seamlessly using Riskcovry's
            assurance platform. Increase revenue, expand product offerings.
          </p>
          <button className="seeDemoBtn2 mt-[15px]">
            Schedule Demo{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              fill="none"
              viewBox="0 0 7 12"
            >
              <path
                fill="#fff"
                d="M5.338 5.398a.71.71 0 000 1.42v-1.42zm.502 1.213a.71.71 0 000-1.005l-4.52-4.52A.71.71 0 10.315 2.091l4.018 4.018-4.018 4.018A.71.71 0 001.32 11.13l4.52-4.52zm-.502.208v-1.42 1.42z"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <img src="bg.png" alt=".." />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
