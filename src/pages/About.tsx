import { useCallback, useState } from "react";
import AboutTypeWriter from "../components/typewriter/PagesTitle.typewriter";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import { LinkTab as Tab } from "../components/ui/tab/Tab";
import Footer from "../components/footer";
// import { useTheme } from "../hooks";

const About = () => {
  // const { theme } = useTheme();
  const [isTyping, setIsTyping] = useState(true);
  const finishTyping = useCallback(() => setIsTyping(false), [setIsTyping]);
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // event.type can be equal to focus with selectionFollowsFocus.
    if (event.type !== "click") {
      setValue(newValue);
    }
  };
  return (
    <>
      <div id="title" className="w-full flex absolute mt-24 justify-center">
        <div className="absolute container items-center justify-center flex">
          <AboutTypeWriter text={"About Me"} finishHandler={finishTyping} />
        </div>
        {!isTyping && (
          <div className='font-["arial"] font-bold py-20 border-2 w-[80%] mt-24 flex flex-row animate-fade'>
            {/* <div className="text-left text-4xl basis-1/2 border-2">
              {context.aboutTitle}
            </div>
            <div className="text-left text-lg basis-1/2">
              {context.aboutIntroduction}
            </div> */}
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
          </div>
        )}
      </div>
      <Footer  />
    </>
  );
};

export default About;
