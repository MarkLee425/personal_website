import { Link } from "react-router-dom";
import PrimaryLinkButton from "../linkButtons/Primary.linkButton";
import { Send } from "../ui/react-icons";
import { experienceBio } from "../../utils/constants";
import { useTheme } from "../../hooks";

const EducationTimeline = () => {
  const { style } = useTheme();
  const { current, past } = experienceBio;
  return (
    <div className="min-[1000px]:w-[50%] md:w-[70%] sm:w-[80%] min-[400px]:w-[90%] min-[300px]:w-[95%] text-justify overflow-x-hidden">
      <ol
        className={`z-20 relative border-s ${style.borderColor.timeline} h-fit`}
      >
        <div id="space" className="w-screen py-10" />
        {current && (
          <li
            className={`border-2 ${style.borderColor.block} min-[1350px]:blur-[3px] hover:blur-none rounded-xl ms-4 mb-20 p-0.5 hover:border-none hover:animate-borderGradient hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-400 hover:bg-[length:100%_100%] hover:inline-block hover:bg-white`}
          >
            <div
              className={`${style.bgColor.primary} rounded-xl block pt-5 pb-8 pl-5 pr-8 h-full w-full`}
            >
              <div
                className={`z-30 absolute p-1.5 rounded-full mt-1.5 -start-1.5 border ${style.bgColor.dot.secondary}`}
              />
              <time
                className={`mb-4 text-sm font-normal leading-none ${style.textColor.orange.primary} w-full flex`}
              >
                Present
              </time>
              <p
                className={`text-lg font-semibold ${style.textColor.primary} ${style.textColor.orange.hover} w-fit flex leading-3`}
              >
                {current.position}
              </p>
              <Link
                to={current.href ?? ""}
                className={`text-xs font-thin ${style.textColor.quaternary} ${style.textColor.orange.hover} flex mt-1.5 mb-2 w-fit`}
              >
                {current.company}
              </Link>
              {current.description.map((description) => (
                <p
                  className={`text-justify font-normal text-sm ${style.textColor.tertiary} pt-3`}
                >
                  {description}
                </p>
              ))}
              <div className="flex mt-5">
                <PrimaryLinkButton
                  to={"/skills"}
                  description="View More Tech Skills"
                  element={{
                    text: "View More",
                    icon: <Send />,
                  }}
                />
              </div>
            </div>
          </li>
        )}
        {past &&
          past.map((each) => (
            <li
              className={`border rounded-xl ms-4 mb-20 p-0.5 min-[1350px]:blur-[3px] hover:blur-none hover:border-none hover:animate-borderGradient hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-400 hover:bg-[length:100%_100%] hover:inline-block hover:bg-white`}
              key={each.company}
            >
              <div
                className={`${style.bgColor.primary} rounded-xl block pt-5 pb-8 pl-5 pr-8 h-full w-full`}
              >
                <div
                  className={`z-30 absolute p-1.5 rounded-full mt-1.5 -start-1.5 border ${style.bgColor.dot.secondary}`}
                />
                <time
                  className={`mb-4 text-sm font-normal leading-none ${style.textColor.secondary} ${style.textColor.orange.hover} flex`}
                >
                  {each.start} - {each.end}
                </time>
                <p
                  className={`text-lg font-semibold ${style.textColor.primary} ${style.textColor.orange.hover} w-fit flex leading-3`}
                >
                  {each.position}
                </p>
                <Link
                  to={each.href ?? ""}
                  className={`text-xs font-thin ${style.textColor.quaternary} ${style.textColor.orange.hover} flex mt-1.5 mb-2 w-fit`}
                >
                  {each.company}
                </Link>
                {each.description.map((description) => (
                  <p
                    className={`text-justify font-normal text-sm ${style.textColor.tertiary} pt-3`}
                    key={description}
                  >
                    {description}
                  </p>
                ))}
              </div>
            </li>
          ))}
        <div id="space" className="w-screen py-10" />
      </ol>
    </div>
  );
};

export default EducationTimeline;
