import CvErfaring from "@/components/Cv/CvErfaring";
import CvKompetanse from "@/components/Cv/CvKompetanse";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const CvPage = () => (
  <div className="flex justify-center items-center gap-4 h-screen">
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Kompetanse
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">
            Kompetanse
          </DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <CvKompetanse />
        </DialogDescription>
      </DialogContent>
    </Dialog>
    <Dialog>
      <DialogTrigger className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Erfaring
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold">Erfaring</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <CvErfaring />
        </DialogDescription>
      </DialogContent>
    </Dialog>
  </div>
);

export default CvPage;
