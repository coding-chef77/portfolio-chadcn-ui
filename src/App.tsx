import Navbar from "./components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import CvPage from "./pages/CvPage/CvPage";

const App = () => {
  return (
    <div>
      <TooltipProvider>
        <Navbar />
        <CvPage />
      </TooltipProvider>
    </div>
  );
};

export default App;
