import { Link } from "react-router-dom";
import PrimaryLinkButton from "../linkButtons/Primary.linkButton";
import { Certificate, Download, Send } from "../ui/react-icons";
import { educationBio } from "../../utils/constants";
import { useTheme } from "../../hooks";

const EducationTimeline = () => {
  const { style } = useTheme();
  const bioToArray = Object.entries(educationBio);
  return (
    <div className="min-[780px]:w-[50%] md:w[60%] sm:w-[70%] min-[400px]:w-[90%] min-[300px]:w-[95%] text-justify overflow-x-hidden">
      <ol className={`z-20 relative border-s ${style.timelineColor} h-fit`}>
        <div id="space" className="w-screen py-10" />
        {bioToArray.map(([key, value], i) => (
          <li
            className={`border ${
              value?.end ? "" : `border-2 ${style.blockBorderColor}`
            } min-[1350px]:blur-[3px] hover:blur-none rounded-xl ms-4 mb-20 p-0.5 hover:border-none hover:animate-borderGradient hover:bg-gradient-to-r hover:from-purple-500 hover:to-orange-400 hover:bg-[length:100%_100%] hover:inline-block hover:bg-white`}
            key={i}
          >
            <div
              className={`${style.bgColor} rounded-xl block pt-5 pb-8 pl-5 pr-8 h-full w-full`}
            >
              <div
                className={`z-30 absolute p-1.5 rounded-full mt-1.5 -start-1.5 border ${style.dotSecondaryBackgroundColor}`}
              />
              <time
                className={`mb-4 text-sm font-normal leading-none ${
                  value?.end ? style.secondaryTextColor : "text-orange-500"
                } hover:text-orange-400 flex`}
              >
                {value?.end ? `${value.start}- ${value.end}` : "Present"}
              </time>
              {key === "certificate" ? (
                <Link
                to={value.href}
                  className={`text-lg font-semibold ${style.textColor} hover:text-orange-400 w-fit flex leading-5 justify-center align-middle items-center`}
                >
                  {value.title}
                  {key === "certificate" ? (
                    <Certificate size={20} className="ml-2 max-lg:hidden" />
                  ) : (
                    ""
                  )}
                </Link>
              ) : (
                <Link
                  to={value.href}
                  className={`text-lg font-semibold ${style.textColor} hover:text-orange-400 w-fit flex leading-5 justify-center align-middle items-center`}
                >
                  {value.title}
                  {key === "certificate" ? (
                    <Certificate size={20} className="ml-2 max-lg:hidden" />
                  ) : (
                    ""
                  )}
                </Link>
              )}

              {value?.issued_at && (
                <p
                  className={`text-xs font-thin ${style.subTextColor} hover:text-orange-400 flex mt-1.5 ${value?.major ? "" : "mb-2"}`}
                >
                  Issued At: {value.issued_at}
                </p>
              )}

              {value?.major && (
                <Link
                  to={value.major.href ?? ""}
                  className={`text-xs font-thin ${style.subTextColor} hover:text-orange-400 flex mt-1.5 w-fit mb-2`}
                >
                  <p>{value.major.name}</p>
                </Link>
              )}

              {value.description.map((each) => (
                <p
                  className={`text-justify font-normal text-sm ${style.descriptionTextColor} pt-3`}
                  key={each}
                >
                  {each}
                </p>
              ))}

              {!value?.end && (
                <div className="flex mt-5">
                  <PrimaryLinkButton
                    download={key !== "university" ? true : false}
                    target={key !== "university" ? "_blank" : undefined}
                    to={
                      key === "university"
                        ? "/skills"
                        : "/files/microsoft-ai900.certificate.pdf"
                    }
                    description="View More Tech Skills"
                    element={{
                      text: key === "university" ? "View More" : "Certificate",
                      icon: key === "university" ? <Send /> : <Download />,
                    }}
                  />
                </div>
              )}
            </div>
          </li>
        ))}
        <div id="space" className="w-screen py-10" />
      </ol>
    </div>
  );
};

export default EducationTimeline;
