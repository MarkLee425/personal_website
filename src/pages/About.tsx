import { useCallback, useState } from "react";
import AboutTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import { QUOTES } from "../utils/constants";
import { useTheme } from "../hooks";
import buttons from "../components/ui/buttons";
import { Link } from "react-router-dom";

const About = () => {
  const { style } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const [onFocus, setOnFocus] = useState(false);
  const finishTyping = useCallback(() => setIsTyping(false), [setIsTyping]);
  return (
    <>
      <div
        id="title"
        className="w-full flex absolute mt-48 justify-center over-x-hidden"
      >
        <div className="absolute container items-center justify-center flex">
          <AboutTypeWriter text={"About Me"} finishHandler={finishTyping} />
        </div>
        {!isTyping && (
          <div className="animate-fade absolute mt-[4.5rem] w-full px-3 pb-32 cursor-default">
            <p
              className={`font-["arial"] font-thin flex text-xs tracking-tighter justify-center ${style.descriptionTextColor}`}
            >
              {QUOTES.about}
            </p>
            <div
              className="mt-20 rounded-[4rem] border justify-center border-purple-500 shadow-lg shadow-purple-400 w-[60%] min-[1000px]:ml-[20%] max-[1000px]:w-[80%] max-[1000px]:ml-[10%] max-[500px]:w-[100%] max-[500px]:ml-0 pt-16"
              onMouseEnter={() => setOnFocus(true)}
              onMouseLeave={() => setOnFocus(false)}
            >
              <div className="flex w-full h-full">
                <div className="w-[50%] flex flex-col justify-center items-center align-middle max-[900px]:w-[90%] max-[500px]:w-[100%]">
                  <h1
                    className={`pb-16 text-4xl font-serif font-extrabold tracking-wider text-center`}
                  >
                    Who am I?
                  </h1>
                  <div
                    className={`w-[80%] text-md ${style.descriptionTextColor}`}
                  >
                    <div className="ml-4">
                      <p>
                        <strong
                          className={`text-base ${style.textColor} ${
                            onFocus ? "text-orange-400" : ""
                          }`}
                        >
                          I'm MARK LEE
                        </strong>
                        , a self-taught but dedicated and passionate{" "}
                        <strong
                          className={`text-base ${style.textColor} ${
                            onFocus ? "text-orange-400" : ""
                          }`}
                        >
                          Software Engineer
                        </strong>
                      </p>
                      <p className="mt-2">
                        Interested in{" "}
                        <strong
                          className={`text-base ${style.textColor} ${
                            onFocus ? "text-orange-400" : ""
                          }`}
                        >
                          Distributed Network & DevOps Operations
                        </strong>
                        .
                      </p>
                      <p className="mt-2">
                        Obsessed in learning{" "}
                        <strong
                          className={`text-base ${style.textColor} ${
                            onFocus ? "text-orange-400" : ""
                          }`}
                        >
                          New Technologies
                        </strong>
                        .
                      </p>
                    </div>
                    <h1
                      className={`text-2xl font-sans text-center pb-8 pt-20 font-bold ${style.textColor} tracking-wider`}
                    >
                      Expertise
                    </h1>
                    <div
                      className={`flex max-[500px]:flex-col max-[500px]:gap-y-4 max-[500px]:gap-x-4 justify-evenly w-full ${
                        onFocus ? "text-orange-400" : ""
                      }`}
                    >
                      <div className="flex flex-row gap-x-2 max-[500px]:gap-x-4 justify-center">
                        <buttons.FrontendButton />
                        <buttons.BackendButton />
                      </div>
                      <div className="flex flex-row gap-x-2 max-[500px]:gap-x-4 justify-center">
                        <buttons.FullStackButton />
                        <buttons.DatabaseButton />
                      </div>
                    </div>
                    <h2
                      className={`text-2xl font-sans text-center pb-3 pt-20 font-bold ${style.textColor} tracking-wider`}
                    >
                      Some may describe Me as:
                    </h2>
                    <ul className="list-disc ml-10">
                      <li>
                        <strong className={`text-base text-orange-400`}>
                          Fast & Diligent learner
                        </strong>
                      </li>
                      <li>
                        <p>
                          <strong className={`text-base text-orange-400`}>
                            Dedicated
                          </strong>{" "}
                          &{" "}
                          <strong className={`text-base text-orange-400`}>
                            Focus
                          </strong>{" "}
                          engineer
                        </p>
                      </li>
                      <li>
                        <p>
                          Technical focused{" "}
                          <strong className={`text-base text-orange-400`}>
                            Problem-solver
                          </strong>
                        </p>
                      </li>
                      <li>
                        <p>
                          Good{" "}
                          <strong className={`text-base text-orange-400`}>
                            Listener
                          </strong>
                        </p>
                      </li>
                      <li>
                        <strong className={`text-base text-orange-400`}>
                          Multitask expert
                        </strong>
                      </li>
                      <li>
                        <strong className={`text-base text-orange-400`}>
                          Collaborative engineer
                        </strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="w-[50%] flex justify-center items-center align-middle max-[900px]:hidden">
                  <img
                    src="/icon_2.PNG"
                    height={"50%"}
                    width={"50%"}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="w-full mt-10 flex">
                {/* <PrimaryLinkButton
                to="contact"
                description="Get In Touch"
                className="w-[50%] py-4 rounded-bl-[4rem] bg-orange-100 hover:bg-orange-200 text-orange-500 border-b-purple-500 border-b-1 border-l-1 border-l-purple-500"
                element={{ text: "Get In Touch" }}
              />
              <SecondaryLinkButton
                to="/files/resume_LeeHoKwong.pdf"
                description="Resume"
                download={true}
                target="_blank"
                className="w-[50%] py-4 rounded-br-[4rem] bg-orange-500 hover:bg-orange-600 text-white border-b-purple-500 border-b-1 border-r-1 border-r-purple-500"
                element={{
                  text: "View My Resume",
                  icon: <Download className="ml-1" size={15} />,
                }}
              /> */}
                <Link
                  to={"/contact"}
                  className="justify-center text-center w-[50%] py-4 rounded-bl-[4rem] bg-orange-100 hover:bg-orange-200 text-orange-500 border-b-purple-500 border-b-1 border-l-1 border-l-purple-500"
                >
                  Get In Touch
                </Link>
                <Link
                  to={"/files/resume_LeeHoKwong.pdf"}
                  className="justify-center text-center w-[50%] py-4 rounded-br-[4rem] bg-orange-500 hover:bg-orange-600 text-white border-b-purple-500 border-b-1 border-r-1 border-r-purple-500"
                  download={true}
                  target="_blank"
                >
                  View My Resume
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
