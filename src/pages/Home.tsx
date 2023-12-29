import { context } from "../utils/constants";
import Initiation from "../components/typewriter/Initiation.typewriter";
import { Download } from "../components/ui/react-icons";
import Footer from "../components/footer";
import SecondaryLinkButton from "../components/linkButtons/Secondary.linkButton";
import PrimaryLinkButton from "../components/linkButtons/Primary.linkButton";
import { useTheme } from "../hooks";

const Home = () => {
  const { style } = useTheme();

  return (
    <>
      <div
        className={`z-0 center font-["arial"] font-bold text-2xl h-full flex-col gap-y-5 hover:cursor-default w-[100%] lg:w-[50%] overflow-hidden ${style.leftBgColor}`}
      >
        <Initiation />
        <p className="max-w-md text-6xl">{context.introduction as string}</p>
        <p
          className={`max-w-md mx-3 text-sm lg:text-xs font-light ${style.descriptionTextColor} text-justify tracking-wider`}
        >
          {context.description as string}
        </p>
        <div className="text-base mt-5">
          <div className="col gap-y-1 w-full items-center">
            <div className="row center gap-x-3 transition-opacity ease-in duration-700">
              <PrimaryLinkButton
                to="about"
                description="Get Started"
                element={{ text: "Get Started" }}
              />
              <SecondaryLinkButton
                to="/files/resume_LeeHoKwong.pdf"
                description="Resume"
                download={true}
                target="_blank"
                element={{
                  text: "View My Resume",
                  icon: <Download className="ml-1" size={15} />,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
