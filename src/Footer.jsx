import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#011740]">
      <div className="bg-[#011740] mx-auto w-[70rem] flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <p className="footerText">
            Leverage technology to streamline credit-linked insurance
          </p>
          <p className="fsubtext">
            Share a few quick details to understand how we can best help.
          </p>
          <button className="letsTalk">
            Lets Talk{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="7"
              height="12"
              fill="none"
              viewBox="0 0 7 12"
            >
              <path
                fill="#003DB8"
                d="M5.75 5.408a.75.75 0 000 1.5v-1.5zm.53 1.28a.75.75 0 000-1.06L1.507.853a.75.75 0 00-1.06 1.061l4.242 4.243L.447 10.4a.75.75 0 101.06 1.061L6.28 6.688zm-.53.22v-1.5 1.5z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="bg-white  w-[1230px] mt-20 boxshadonw">
          <div className="mx-[60px] py-[12px] flex items-end justify-end border-b-[1px] border-[#9F9F9F]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="192"
              height="76"
              fill="none"
              viewBox="0 0 192 76"
            >
              <path
                fill="url(#pattern0_17_2547)"
                d="M0.25 0.193H191.5V75.943H0.25z"
              ></path>
              <defs>
                <pattern
                  id="pattern0_17_2547"
                  width="1"
                  height="1"
                  patternContentUnits="objectBoundingBox"
                >
                  <use
                    transform="matrix(.00259 0 0 .00654 0 0)"
                    xlinkHref="#image0_17_2547"
                  ></use>
                </pattern>
                <image
                  id="image0_17_2547"
                  width="387"
                  height="153"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYMAAACZCAYAAADNXlZbAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAABxoSURBVHhe7Z0HtFTF/ccHDVgRbAn2xBZR0FhAIwKKYkM9Ro0iIYiKR4961Nhjjd1jSWyJDRN7wRYrIUZjVGIjJkGKKNZYsGBBLCDq/33mzfU/LG/37du9984t3885e3Z33vKWd79z5zfzm9/vN52+bcEIIYQoNQu5ZyGEECVGxkAIIYSMgRBCCBkDIYQQLcgYCCGEkDEQQgghYyCEEKIFGQMhhBAyBkIIIWQMhBBCtCBjIIQQQsZACCGEjIEQQogWZAyEEELIGAghhJAxEEII0YKMgRBCCBkDIYQQMgZCCCFakDEQQgghYyCEEELGQAghRAsyBkIIIWQMhBBCyBgIIYRoQcZACCGEjIEQQggZAyGEEC3IGAghhJAxEEIIYUynb1twr0WTzJ0718ycOdN8+umnZtasWfM9R69nz55t5syZYxZZZBGz5JJLmqWWWsp07drVPqLXPPNYdtllTefOnd1vFyGoV1OQntlHelZHxqBJPvroIzNlyhQzefJk89VXX9nORiei0yyxxBK200TvefAaQ4BBoNNFnZDXdMTPPvvsuw7ZpUsX+1hvvfXso3v37u5bRZL4ms6bN89qFQ0C/gARPfMAf0DxB5boPQMH2q+77rrSM0WkZ33IGDTA//73PzNp0iTbwehYPXv2NOuss45ZY4013CfiY/r06eaFF16wj0UXXdR2vF69epmVV17ZfULEAZoyWESacnOj61prreU+EQ8vvfTSd9+z2GKLfTeQSM94kZ4dR8agTl5//XXz7LPPmqlTp5pu3brZwZ9Hjx493CeSZ8aMGfb7eTAzoeP17dvXrLLKKu4ToiOg6YQJE+yNvPTSS9vBgmu6wgoruE8kyzvvvPPdQPLJJ5/YQaRPnz7Ss0GkZ3PIGLTDe++9Zx588EHTqVMns+aaa1oDEC0jQ4IxwCgwM+H/NmTIELP88su7n4paRJouvPDCZu2117YDRmhNcT0wiEybNs2+33HHHaVnnUjPeJAxqAKDLR3sjTfeMNtuu62dZWQVOt1f//pXs9pqq5mddtrJ7lWIBUHTsWPHWk132GEHO3PLIrgg+X+iJ0ZeeraN9IwXGYMKvv76a3P//febiRMnWiOw4YYbup9kn3/961/moYcesv9nOt1CCylyGND0gQceMP/973/toLHJJpu4n2Qb3JIMIhtttJGdWUrPVqRnMsgYeDCQ/v3vf7dGYPPNN3et+WP8+PF2pbD11lubbbbZxrWWk0hTbr4tttjCteaLxx57zA4iaImmZUZ6JoeMQQts9owZM8Zu9AwaNMi15p+HH37YvPnmm2avvfayYXNlAk1vv/12s+qqq1rjXgTGjRtno2T23HNP6VkAsqZn6Y0BGzx33HGHOeyww2zMcNH48ssvzSWXXGI7HJtrZYAw3LvuusscddRRhdMUPS+44ALpWRCypGepjQHLzZdfftmMGDHCtRSX6667zsZYb7nllq6lmDz66KPmlVdeMfvtt59rKSajR4+2g8eAAQNcSzGRnulRWmNwyy232OzD7bbbzrUUH/yUX3zxhRk6dKhrKRZoSg4I/uQyQKADGeu4AYuI9EyXUhqD3/3ud3bzaYMNNnAt5eHf//63efLJJ80RRxzhWooBmg4cONBGapQJIsieeOIJc/jhh7uWYiA909ezVLFqxCUfd9xxZvfddy+lIQDCTnfddVdz/PHH2zoreSfSlNVO2QYO2Hjjjc0ee+whPQtCSD1LszKgk918881m5MiRNmO37BCrzT7C8OHDrbssj6AproQDDjig9Jqi5zXXXGOGDRsmPQtACD1LszI488wzZQg8SN3fZ599zFlnneVa8geaauBoBT33339/6VkQQuhZCmOA//GQQw5RJ6uADnfggQeaiy66yLXkBzRl30Oa/j/oeeihh5qLL77YteQH6bkgaetZeDcRy04KzJV1j6Ae2FR+9dVXcxNlhKYUDMxTqZA0YROSkGli1/OA9KxNWnoWemVAHgH+NhmC2nATUov9H//4h2vJLsSdE26ogaM6bEIuvvjituxB1pGe7ZOWnoU1BmQtkqxSpjyCZqDgF9nYlMTOKpGmZYk7bwaq16Lniy++6Fqyh/SsnzT0LKQxoI7JnXfeaX75y1+6FlEPbLDfeuutNqoja0SaFj0TNU7YjKXmlvQsBknrWcg9g6uuusrsvffehaw1lDTUSqHDjRo1yrVkg6uvvtqWDZGmHYOM85tuukl6FoQk9SzcyuBvf/ubrWyoTtYYnLO84oormkceeaS1IQNQtviHP/yhNG0A9oKoxis9i0GSehbKGJCowUUqUhnqEFBnnfMQsrBoRFMCAQYPHuxaREdh30x6Foek9Fz4Ny2417nnvvvus0ff6UDx5unSpYs9ru/HP/6xawkDxbvWX399u9oTjRPpGbpMsvSMhyT0LMzKgE0VjsHL8wllWaJfv37mueeeM59//rlrSR80/c9//pPbE62yBKWRiVeXnsUgCT0LYww4E1VhpPHCUp6ZXCgefPBBhR3GCOHD3CehkJ7xEreehTAG77//vnnjjTeUuBIzHDROZvLMmTNdS3pEmublsPM80LdvX+lZIOLWsxDGgNmrVgXJwHmzIWaTfKdmkfETanUgPZMhTj1zbwxef/11s9BCC5mePXu6FhEnbMjPmzfPHtydFmhKkS6+W8RL7969zTfffCM9C0KceuY+6YzD7FdYYQXTp08f1yLi5umnnzYffPCB+dnPfuZakoXM1JVXXtlsuummrkXEyT//+U/z3nvv2UOO0iALerLRSikHCr7hsiK58u2333Y/rR/+DiJ5evToYdZYYw17rji5OSGJS8/crwymTJliKx6K5OD6Tp482b1LHjRdd9113TsRN1zbsuiJP51DrYig55mJDfWQGjEE8Oabb9p/zwB8ww03mFNOOcVOSGfNmuU+kT5x6ZlrY8DSiIqHXbt2dS0iCbjGVH996623XEtyoGn37t1T13TOnDm2DAc396WXXpqqGyVtuL5F1xNee+01exYA4axJ8swzz9jvadTANEtceubaTfSXv/zF7hdsueWWriVdWJp9//vfd+8aZ/r06Xa28e6775rOnTvb38nyM0vJc2R2c63ZUE4SNOUabL311q4lHe655x4zfvx49661LMfJJ59s/y9FhJIQ3PpF1fOdd96xB+ZUQqmV5Zdf3iy77LK2P3cUMqhxmfLgO3wor8EBPfzutIlDz1wbg9/+9rf28Gj8d2mDz/Hcc8+139+rVy/X2jE4VAYRqy0x6bREC1RmGfL5uXPnmuWWW861JA+znj//+c+2sycJmlJkkH2gNLnsssts6KMPfyuDRxFhFol74/DDD3ctyRBCTwIezj//fPPRRx+5FmP69+9vy6xQ2ycuPvvsM5s78eyzz7oWY8eiI4880r1Ljzj0zK2bCKEZkEMYAiAVnE5HyWfqsncUhGNjrZavkY2u66+/3owbN86uHDh8hjCy8847z3z11VfuU+nAoEjn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"
                ></image>
              </defs>
            </svg>
          </div>
          {/* grid  */}
          <div className="flex items-start  justify-start gap-[136px] mx-[60px] py-[32px] border-b-[1px] border-[#9F9F9F]">
            <div className="flex flex-col gap-y-[10px]">
              <div className="grid grid-cols-3 gap-[123px]">
                <div className="ftd">Products</div>
                <div className="ftd">Industries</div>
                <div className="ftd">Other links</div>
              </div>
              <div className="grid grid-cols-3 gap-[123px]">
                <div className="fth">Retail Insurance</div>
                <div className="fth">Insurance Brokers</div>
                <div className="fth">About us </div>
              </div>
              <div className="grid grid-cols-3 gap-[123px]">
                <div className="fth">LendPro</div>
                <div className="fth">Banks</div>
                <div className="fth">Careers</div>
              </div>
              <div className="grid grid-cols-3 gap-[123px]">
                <div className="fth">EmbedPro</div>
                <div className="fth">NBFCS</div>
                <div className="fth">News & Media </div>
              </div>
              <div className="grid grid-cols-3 gap-[123px]">
                <div className="fth">Console</div>
                <div className="fth">Fintech</div>
                <div className="fth">APIs</div>
              </div>
              <div className="grid grid-cols-3 gap-[123px]">
                <div className="fth"></div>
                <div className="fth">Embedded Insurance</div>
                <div className="fth">Case studies </div>
              </div>
              <div className="grid grid-cols-3 gap-[123px]">
                <div className="fth"></div>
                <div className="fth"></div>
                <div className="fth">Blogs</div>
              </div>
              <div className="grid grid-cols-3 gap-[123px]">
                <div className="fth"></div>
                <div className="fth"></div>
                <div className="fth">FAQs</div>
              </div>
            </div>
            <div>
              <p className="ftd">Get in touch</p>
              <div className="relative pb-[20px]">
                <input
                  type="text"
                  className="myInput"
                  placeholder="Info@youremailid"
                />
                <div className="absolute top-[32%] left-[0%]">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    fill="none"
                    viewBox="0 0 23 23"
                  >
                    <path
                      fill="#292D32"
                      fillRule="evenodd"
                      d="M4.143 5.103c-.638.592-1.065 1.552-1.065 3.059a.703.703 0 01-1.406 0c0-1.775.51-3.158 1.514-4.09.993-.923 2.362-1.301 3.877-1.301h9.375c1.514 0 2.883.378 3.876 1.301 1.004.932 1.514 2.315 1.514 4.09v6.562c0 1.775-.51 3.158-1.514 4.09-.993.922-2.362 1.3-3.877 1.3H7.063a.703.703 0 110-1.405h9.375c1.299 0 2.274-.325 2.92-.926.638-.592 1.065-1.552 1.065-3.059V8.162c0-1.507-.427-2.467-1.064-3.06-.647-.6-1.622-.925-2.92-.925H7.063c-1.299 0-2.274.325-2.92.926z"
                      clipRule="evenodd"
                    ></path>
                    <path
                      fill="#292D32"
                      fillRule="evenodd"
                      d="M16.987 8.192a.703.703 0 01-.11.988l-2.936 2.344c-1.222.973-3.17.973-4.391 0l-.002-.001-2.925-2.344a.703.703 0 11.88-1.097l2.923 2.343c.71.564 1.93.564 2.639 0l2.934-2.344a.703.703 0 01.988.11zM1.672 15.662c0-.389.315-.704.703-.704H8a.703.703 0 110 1.407H2.375a.703.703 0 01-.703-.703zM1.672 11.912c0-.389.315-.704.703-.704h2.813a.703.703 0 110 1.407H2.374a.703.703 0 01-.703-.703z"
                      clipRule="evenodd"
                      opacity="0.4"
                    ></path>
                  </svg>
                </div>
              </div>
              <div className="relative">
                <input type="text" className="myInput" placeholder="Phone no" />
                <div className="absolute top-[35%] left-[0%]">
                  {" "}
                  <svg
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.7352 2.24463L13.434 2.32224C17.2303 2.74381 20.2295 5.73889 20.6552 9.53522L20.7336 10.234L19.3361 10.3907L19.2577 9.69192C18.9053 6.54888 16.422 4.06895 13.2789 3.7199L12.5801 3.64229L12.7352 2.24463Z"
                      fill="#292D32"
                    />
                    <path
                      opacity="0.4"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12.8013 5.52002L13.4916 5.65409C15.4336 6.03131 16.9508 7.54996 17.3289 9.49112L17.4633 10.1812L16.083 10.4502L15.9486 9.76001C15.6799 8.38055 14.6021 7.30232 13.2235 7.03454L12.5332 6.90047L12.8013 5.52002Z"
                      fill="#292D32"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.07376 2.09229L9.75526 7.14926L8.13812 9.95782C8.19561 10.1273 8.28802 10.3713 8.42569 10.6619C8.70641 11.2542 9.1704 12.0291 9.90123 12.76C10.6754 13.5342 11.497 14.0418 12.1257 14.3553C12.4385 14.5114 12.7009 14.618 12.8819 14.6848L15.6824 13.0723L20.8741 16.9007L20.5711 17.4419C19.7036 18.9918 18.5963 20.0992 17.0462 20.9668L16.9011 21.048L16.735 21.0556C12.1612 21.265 8.22834 18.7779 5.58162 15.6995C4.25373 14.155 3.22737 12.4383 2.58856 10.7859C1.95459 9.14599 1.67947 7.50869 1.93424 6.14649L1.95657 6.02709L2.01767 5.9221C2.89402 4.41624 4.0254 3.29373 5.52442 2.41449L6.07376 2.09229ZM12.9594 15.4516C12.7734 16.1298 12.7733 16.1297 12.773 16.1296L12.7715 16.1292L12.7689 16.1284L12.7615 16.1264L12.7388 16.1198C12.7201 16.1143 12.6945 16.1065 12.6625 16.0964C12.5985 16.076 12.5086 16.0459 12.397 16.0048C12.1741 15.9227 11.8632 15.7959 11.4981 15.6138C10.7694 15.2503 9.8132 14.6607 8.90687 13.7543C8.03654 12.884 7.48723 11.9653 7.15494 11.2641C6.98846 10.9128 6.87522 10.6137 6.80268 10.3985C6.76637 10.2908 6.74016 10.2039 6.72249 10.1418C6.71365 10.1106 6.70694 10.0856 6.70217 10.0673L6.69643 10.0448L6.69461 10.0374L6.69396 10.0347L6.69369 10.0336C6.69363 10.0334 6.69346 10.0326 7.37745 9.86978L6.69346 10.0326L6.62875 9.76095L8.08101 7.23878L5.69892 3.96671C4.70452 4.64383 3.9293 5.46682 3.29659 6.52193C3.14264 7.51894 3.34025 8.83038 3.90022 10.2788C4.47751 11.7722 5.41771 13.3518 6.64794 14.7828C9.08312 17.615 12.5685 19.7733 16.504 19.6571C17.5706 19.0353 18.369 18.286 19.0243 17.2838L15.5876 14.7496L13.0561 16.2072L12.773 16.1296L12.9594 15.4516Z"
                      fill="#292D32"
                    />
                  </svg>
                </div>
              </div>
              <button className="conBtn">
                Contact us{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="8"
                  height="12"
                  fill="none"
                  viewBox="0 0 8 12"
                >
                  <path
                    fill="#fff"
                    d="M6.5 5.693a.75.75 0 000 1.5v-1.5zm.53 1.28a.75.75 0 000-1.06L2.257 1.14a.75.75 0 00-1.06 1.06l4.242 4.243-4.242 4.242a.75.75 0 001.06 1.061L7.03 6.973zm-.53.22v-1.5 1.5z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/*  */}
          <p className="copyRight mx-[60px] py-[22px]">
            © 2024 Webomindapps. Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
