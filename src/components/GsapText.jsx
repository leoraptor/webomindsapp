import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const GsapText = () => {
  const data = [
    { img: "1.png" },
    { img: "2.png" },
    { img: "3.png" },
    { img: "4.png" },
    { img: "5.png" },
    { img: "6.png" },
    { img: "7.png" },
    { img: "8.png" },
    { img: "9.png" },
    { img: "10.png" },
  ];
  const [isIn, setIsIn] = useState(false);

  const divRefs = useRef([]);
  const target = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".para",
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3 }
    );
  }, []);

  useGSAP(() => {
    gsap.to(".mydiv", { skewY: -10 });
  }, []);

  if (isIn) {
    gsap.fromTo(
      ".stag",
      { y: 20, opacity: 0, delay: 2 },
      { y: 0, opacity: 1, stagger: 0.3, duration: 2 }
    );
    gsap.fromTo(
      ".ustag",
      { y: 0, opacity: 1, stagger: 0.3, duration: 2 },
      { y: 20, opacity: 0, delay: 2 }
    );
  } else {
    gsap.fromTo(
      ".stag",
      { y: 0, opacity: 1, stagger: 0.3, duration: 2 },
      { y: 20, opacity: 0, delay: 2 }
    );
    gsap.fromTo(
      ".ustag",
      { y: 20, opacity: 0, delay: 2 },
      { y: 0, opacity: 1, stagger: 0.3, duration: 2 }
    );
  }
  const timeline = useRef(gsap.timeline({ paused: true }));

  const handleClick = (index) => {
    timeline.current.clear();

    const targetRect = target.current.getBoundingClientRect();
    const myDivRect = divRefs.current[index].getBoundingClientRect();
    const targetCenterX =
      targetRect.left + targetRect.width / 2 - myDivRect.width / 2;
    const targetCenterY =
      targetRect.top + targetRect.height / 2 - myDivRect.height / 2;

    let isInsideTargetDiv = true;

    if (isInsideTargetDiv && !isIn) {
      setIsIn(true);
      timeline.current.to(divRefs.current[index], {
        x: targetCenterX - myDivRect.left,
        y: targetCenterY - myDivRect.top,
        duration: 1,
        skewY: 0,
        ease: "power1.inOut",
      });

      timeline.current.to(
        window,
        {
          duration: 2,
          scrollTo: {
            y: targetRect.top + window.scrollY - 200,
            autoKill: false,
          },
        },
        0
      );
    } else {
      setIsIn(false);
      timeline.current.to(divRefs.current[index], {
        x: 0,
        y: 0,
        duration: 1,
        skewY: -10,
        ease: "power1.inOut",
        scrollTo: {
          y: targetRect.bottom + window.scrollY,
          autoKill: false,
        },
      });

      timeline.current.to(
        window,
        {
          duration: 1,
          scrollTo: {
            y: 600,
            autoKill: false,
          },
        },
        0
      );
    }
    timeline.current.play();
  };

  return (
    <div className="flex items-start justify-start flex-col">
      <div className="cards">
        <p className="opacity-0 translate-y-10 ustag headerText3 absolute right-0">
          Distribute and manage insurance business in <span>one platform</span>
        </p>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              // src={item.img}
              ref={(el) => (divRefs.current[index] = el)}
              className={`card mydiv card-${index + 1} para`}
              onClick={() => handleClick(index)}
            ></div>
          );
        })}
      </div>
      {/* target div  */}
      <div
        className={`flex items-center justify-between w-[70rem] mx-auto mt-[100px] } `}
      >
        <div ref={target} className="h-[441px] w-[484px]"></div>
        <div
          className={`flex flex-col items-end justify-end stag opacity-0 translate-y-10`}
        >
          <div className="headerText">
            Distribute and manage insurance business in{" "}
            <span>one platform</span>
          </div>
          <div className="subText  ">
            Manage your insurance business seamlessly using Riskcovry's
            assurance platform. Increase revenue, expand product offerings.
          </div>
          <div className="seeDemoBtn  ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default GsapText;
