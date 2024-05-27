const CvKompetanse: React.FC = () => {
  const kompetanse = {
    faglig: [
      "Tidsstyring",
      "IT og Programmering",
      "Kundeservice",
      "ChatGPT",
      "HMS",
      "Problemløsning",
      "Teamarbeid",
      "Brukeropplevelse",
    ],
    personlig: [
      "Strukturert",
      "Pålitelig",
      "Lærevillig",
      "Selvstendig",
      "Inkluderende",
      "Imøtekommende",
      "Ansvarsfull",
      "Kommunikasjon",
    ],
    spraak: ["Norsk - Morsmål", "Engelsk - Flytende"],
  };

  return (
    <div className="overflow-auto max-h-96">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Faglig
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {kompetanse.faglig.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Personlig
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {kompetanse.personlig.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">
          Språk
        </h3>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
          {kompetanse.spraak.map((item, index) => (
            <li key={index} className="mb-1">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CvKompetanse;
