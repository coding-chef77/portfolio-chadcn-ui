import Navbar from "./components/Navbar";
import { TooltipProvider } from "@/components/ui/tooltip";
import ContactPage from "./pages/ContactPage/ContactPage";

const App = () => {
  return (
    <div>
      <TooltipProvider>
        <Navbar />
        <ContactPage />
      </TooltipProvider>
    </div>
  );
};

export default App;
