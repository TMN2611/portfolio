import React from "react";

export default function SkillTable({ table }) {
  return (
    <div key={table.id} className="col c-12 m-6 l-6">
      <div className="skill-table">
        <h1 className="skill-table__header">{table.title}</h1>
        <ul className="skill-table__list">
          {table.skills.map((skill, index) => (
            <li key={index} className={"skill-table__item"}>
              <h3 className="skill-table__item__type">{skill.type}</h3>
              <p className="skill-table__item__list">{skill.list}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
