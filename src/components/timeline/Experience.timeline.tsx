import { Link } from "react-router-dom";
import { TThemeProps } from "../../controllers/ThemeColor.controller";
import PrimaryLinkButton from "../linkButtons/Primary.linkButton";
import { Send } from "../ui/react-icons";
import { experienceBio } from "../../utils/constants";
import { memo } from "react";

type TEducationTimeline = {
  style: TThemeProps;
};

const EducationTimeline = memo(({ style }: TEducationTimeline) => {
  const {
    textColor,
    descriptionTextColor,
    subTextColor,
    timelineColor,
    secondaryTextColor,
    dotSecondaryBackgroundColor,
  } = style;
  const { current, past } = experienceBio;
  return (
    <div className="min-[780px]:w-[50%] md:w[60%] sm:w-[70%] min-[400px]:w-[90%] min-[300px]:w-[95%] text-justify overflow-x-hidden">
      <ol className={`z-20 relative border-s ${timelineColor} h-fit`}>
        <div id="space" className="w-screen py-10" />
        {current && (
          <li
            className={`border-2 ${style.blockBorderColor} rounded-xl ms-4 mb-20 p-0.5 hover:border-none hover:animate-borderGradient hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-400 hover:bg-[length:100%_100%] hover:inline-block hover:bg-white`}
          >
            <div
              className={`${style.bgColor} rounded-xl block pt-5 pb-8 pl-5 pr-8 h-full w-full`}
            >
              <div
                className={`z-30 absolute p-1.5 rounded-full mt-1.5 -start-1.5 border ${dotSecondaryBackgroundColor}`}
              />
              <time
                className={`mb-4 text-sm font-normal leading-none text-orange-400 w-full flex`}
              >
                Present
              </time>
              <p
                className={`text-lg font-semibold ${textColor} hover:text-orange-400 w-fit flex leading-3`}
              >
                {current.position}
              </p>
              <Link
                to={current.href ?? ""}
                className={`text-xs font-thin ${subTextColor} hover:text-orange-400 flex mt-1.5 mb-5 w-fit`}
              >
                {current.company}
              </Link>
              {current.description.map((description) => (
                <p
                  className={`text-justify font-normal text-sm ${descriptionTextColor} mb-1.5`}
                >
                  {description}
                </p>
              ))}
              <div className="flex mt-5">
                <PrimaryLinkButton
                  style={style}
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
          past.map((each, i) => (
            <li
              className={`border rounded-xl ms-4 mb-20 p-0.5 hover:border-none hover:animate-borderGradient hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-400 hover:bg-[length:100%_100%] hover:inline-block hover:bg-white`}
              key={i}
            >
              <div
                className={`${style.bgColor} rounded-xl block pt-5 pb-8 pl-5 pr-8 h-full w-full`}
              >
                <div
                  className={`z-30 absolute p-1.5 rounded-full mt-1.5 -start-1.5 border ${dotSecondaryBackgroundColor}`}
                />
                <time
                  className={`mb-4 text-sm font-normal leading-none ${secondaryTextColor} hover:text-orange-400 flex`}
                >
                  {each.start} - {each.end}
                </time>
                <p
                  className={`text-lg font-semibold ${textColor} hover:text-orange-400 w-fit flex leading-3`}
                >
                  {each.position}
                </p>
                <Link
                  to={each.href ?? ""}
                  className={`text-xs font-thin ${subTextColor} hover:text-orange-400 flex mt-1.5 mb-5 w-fit`}
                >
                  {each.company}
                </Link>
                {each.description.map((description) => (
                  <p
                    className={`text-justify font-normal text-sm ${descriptionTextColor} mb-1.5`}
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
});

export default EducationTimeline;
