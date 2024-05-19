const CvErfaring: React.FC = () => {
  const erfaring = [
    {
      title: "Bjølsenhjemmet, Kokk (Logistikk)",
      startDate: "09.11",
      endDate: "12.20",
      description: `Som ansvarlig for matlogistikk og innkjøp på et sykehjem med 130 beboere fordelt på 16 avdelinger, jobbet jeg selvstendig i et tverrfaglig team. Min rolle omfattet tett samarbeid med alle avdelingene for å sikre sømløs drift og tilfredsstillelse av beboernes ernæringsbehov. Jeg etablerte gode relasjoner med både leverandører og internt personell for å optimalisere innkjøpsprosesser og kostnadseffektivitet. Min leder satte pris på min proaktive tilnærming. Dette gjorde meg til en pålitelig problemløser i teamet. Jeg ble sett på som en handlingsorientert medarbeider som var i stand til å drive prosjekter fra idé til implementering.`,
    },
    {
      title: "Folkets Café, Kokk",
      startDate: "06.11",
      endDate: "08.11",
      description: `Som den eneste kokken i oppstarten av Folkets Café, hadde jeg en integrert rolle i den daglige driften av kjøkkenet.`,
    },
    {
      title: "Ekit, Lager/produkttesting",
      startDate: "06.05",
      endDate: "01.08",
      description: `Jobbet med teamet på produkttesting og lagerstyring. Delvis Boston USA og Storbritannia.`,
    },
    {
      title: "Eidesvik AS, Forpleiningssjef (Stuert)",
      startDate: "04.99",
      endDate: "09.05",
      description: `Min karriere har ledet meg til jobb over hele verden, spesielt offshore på seismikk- og supply-båter. I denne rollen håndterte jeg alle logistikkoppgaver knyttet til mat og husholdningsartikler og stod for matlagingen. Jeg hadde også personalansvar.`,
    },
    {
      title: "Restauranter i Stavanger/Haugesund",
      startDate: "08.97",
      endDate: "04.99",
      description: `Kokkeyrket er mangfoldig og stiller høye krav til en rekke ferdigheter. Disse spenner fra teknisk kunnskap i matlaging til bra kommunikasjon, planlegging og evnen til å prestere under press. Jeg har hatt gleden av å jobbe på restauranter som Harry Pepper, Phileas Fogg og Flor&Fjære. Dette yrket byr på mange utfordringer, som gjør det komplekst, men er også utrolig givende.`,
    },
    {
      title: "CCC Catering, Kokkelærling",
      startDate: "08.95",
      endDate: "08.97",
      description: `Som kokkelærling må man gjennom en rekke faser for å bli en fullverdig kokk, og denne perioden er tiden hvor man setter ut i praksis det man lærte på kokkeskolen under veiledning av erfarne kokker, hvor lærlingen får praktisk erfaring med matlaging og planlegging.`,
    },
  ];

  return (
    <div className=" overflow-auto max-h-96">
      {erfaring.map((job, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold mb-1 text-gray-800 dark:text-gray-200">
            {job.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {job.startDate} - {job.endDate}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {job.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CvErfaring;
