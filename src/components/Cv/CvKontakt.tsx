import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const header = {
  image: "avatar.jpeg",
  altText: "Portrait of Heine Günther",
  name: "Heine Günther",
  title: "fra kokk til koder",
  address: {
    street: "Sponstuveien 8, 1263 Oslo",
    email: "heine.gunther@gmail.com",

    phone: "+47 991 14 767",
  },
};

const CvKontakt: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <Avatar className="w-24 h-24">
        <AvatarImage src={header.image} alt={header.altText} />
        <AvatarFallback>HG</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-bold mt-4">{header.name}</h1>
      <h2 className="text-lg text-gray-600">{header.title}</h2>
      <address className="mt-4 text-center not-italic">
        <p>{header.address.street}</p>
        <p>
          Epost:{" "}
          <a href={`mailto:${header.address.email}`} className="text-blue-500">
            {header.address.email}
          </a>
        </p>

        <p>
          Mobil:{" "}
          <a href={`tel:${header.address.phone}`} className="text-blue-500">
            {header.address.phone}
          </a>
        </p>
      </address>
    </div>
  );
};

export default CvKontakt;
