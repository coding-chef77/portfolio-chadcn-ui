import { Card, CardDescription, CardHeader, CardTitle } from "../ui/card";

const CvKompetanse = () => (
  <Card className="max-w-lg mx-auto p-4 border rounded-lg shadow-lg">
    <CardDescription className="space-y-6">
      {[
        {
          title: "Faglig",
          items: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
        },
        {
          title: "Personlig",
          items: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
        },
        { title: "Språk", items: ["Language 1", "Language 2", "Language 3"] },
      ].map((category, index) => (
        <div key={index}>
          <h4 className="text-xl font-semibold">{category.title}</h4>
          <ul className="list-none space-y-1">
            {category.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </CardDescription>
  </Card>
);

export default CvKompetanse;
