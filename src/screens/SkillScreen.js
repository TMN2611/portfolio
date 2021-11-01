import SkillTable from "../component/SkillTable";
const dataSkill = [
  {
    id: 1,
    title: "Designer",
    skills: [{ type: "Software", list: "Photoshop, illustrator" }],
  },
  {
    id: 2,
    title: "Developer",
    skills: [
      { type: "Language", list: "Html, css, Javascript, Sass" },
      {
        type: "Library, Framework",
        list: "React, React Native, Bootstrap",
      },
      { type: "Source Management", list: "Git, Github" },

      { type: "Google Platform", list: "Firebase" },
    ],
  },
];
export default function SkillScreen() {
  return (
    <div className="skill">
      <div className="section__title" style={{ justifyContent: "center" }}>
        <span></span>
        <h3>Kỹ năng</h3>
      </div>
      <div className="section__skill">
        <div className="row">
          {dataSkill.map((table) => (
            <SkillTable key={table.id} table={table} />
          ))}
        </div>
      </div>
    </div>
  );
}
