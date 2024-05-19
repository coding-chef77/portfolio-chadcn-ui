import * as React from "react";
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
import CvKontakt from "@/components/Cv/CvKontakt";
import CvUtdanning from "@/components/Cv/CvUtdanning";
import CvProfil from "@/components/Cv/CvProfil";

type CvSectionProps = {
  title: string;
  content: React.ReactNode;
};

const CvSection: React.FC<CvSectionProps> = ({ title, content }) => (
  <Dialog>
    <DialogTrigger className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
      {title}
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="text-2xl font-bold ">{title}</DialogTitle>
      </DialogHeader>
      <DialogDescription>{content}</DialogDescription>
    </DialogContent>
  </Dialog>
);

const CvPage: React.FC = () => (
  <div className="flex flex-wrap justify-center items-center gap-4 p-4">
    <CvSection title="Kontakt info" content={<CvKontakt />} />
    <CvSection title="Utdanning" content={<CvUtdanning />} />
    <CvSection title="Erfaring" content={<CvErfaring />} />
    <CvSection title="Kompetanse" content={<CvKompetanse />} />
    <CvSection title="Om Meg" content={<CvProfil />} />
  </div>
);

export default CvPage;
