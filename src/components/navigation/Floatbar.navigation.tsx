import Experience from "../../pages/Experience";
import { About, Certificate, Code, Contact, Work } from "../ui/react-icons";

const Floatbar = () => (
  <div className="fixed z-30 border-2 border-white bottom-20 w-fit min-w-[100px] flex flex-row justify-between py-2 px-2 gap-x-5">
    <button className="rounded hover:bg-white">
      <About size={20} />
    </button>
    <button className="rounded hover:bg-white">
      <Work size={20} />
    </button>
    <button className="rounded hover:bg-white">
      <Certificate size={20} />
    </button>
    <button className="rounded hover:bg-white">
      <Code size={20} />
    </button>
    <button className="rounded hover:bg-white">
      <Contact size={20} />
    </button>
  </div>
);

export default Floatbar;
