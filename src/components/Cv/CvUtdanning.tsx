const CvUtdanning: React.FC = () => {
  const utdanning = [
    {
      title: "Frontend-utvikling, Noroff",
      startDate: "03.21",
      endDate: "03.23",
      description: `
      I min utdanning fikk jeg innføring i relevante bransjeverktøy som
      anvendes innen webutvikling.`,
    },
    {
      title: "Bachelor ernæring, Atlantis MH",
      startDate: "08.08",
      endDate: "06.11",
      description: `
      Bachelor i ernæring er et studium som gir ernæringsfaglig
      grunnkompetanse. Studiet inkluderer også helsekommunikasjon, og
      gir ferdigheter innen kostvurdering og veiledning i et
      forebyggende perspektiv.`,
    },
    {
      title: "Kokkeskole, Karmsund/Godalen VGS",
      startDate: "08.93",
      endDate: "06.95",
      description: `Grunnfag kokk/servitør og VK1 kokkelinje.`,
    },
  ];

  return (
    <div className=" overflow-auto max-h-96">
      {utdanning.map((education, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">
            {education.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {education.startDate} - {education.endDate}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {education.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CvUtdanning;
