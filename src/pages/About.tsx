import { useCallback, useState } from "react";
import AboutTypeWriter from "../components/typewriter/PagesTitle.typewriter";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";
// import { LinkTab as Tab } from "../components/ui/tab/Tab";
import Footer from "../components/footer";
import { QUOTES } from "../utils/constants";
import { useTheme } from "../hooks";

const About = () => {
  const { style } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const finishTyping = useCallback(() => setIsTyping(false), [setIsTyping]);
  // const [value, setValue] = useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   // event.type can be equal to focus with selectionFollowsFocus.
  //   if (event.type !== "click") {
  //     setValue(newValue);
  //   }
  // };
  return (
    <>
      <div id="title" className="w-full flex absolute mt-48 justify-center">
        <div className="absolute container items-center justify-center flex">
          <AboutTypeWriter text={"About Me"} finishHandler={finishTyping} />
        </div>
        {!isTyping && (
          <div className="animate-fade absolute mt-[4.5rem] w-full px-3 pb-32 cursor-default">
            <p
              className={`font-["arial"] font-thin flex text-xs tracking-tighter justify-center ${style.descriptionTextColor}`}
            >
              {QUOTES.experience}
            </p>
            {/* <div className="text-left text-4xl basis-1/2 border-2">
              {context.aboutTitle}
            </div>
            <div className="text-left text-lg basis-1/2">
              {context.aboutIntroduction}
            </div> */}
            {/* <div>
              <Box sx={{ width: "100%" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="nav tabs example"
                >
                  <Tab label="Page One" href="/drafts" />
                  <Tab label="Page Two" href="/trash" />
                  <Tab label="Page Three" href="/spam" />
                </Tabs>
              </Box>
            </div> */}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default About;
