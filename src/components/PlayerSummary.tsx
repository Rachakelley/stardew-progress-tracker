import React from "react";
import { formatPlayTime } from "../utils";

interface PlayerSummaryProps {
 name?: string;
 maxHealth?: number;
 maxStamina?: number;
 maxItems?: number;
 skills?: { name: string; level: number; currentExp: number; icon: string }[];
 luck?: number;
 money?: number;
 playTime?: number;
}

const PlayerSummary: React.FC<PlayerSummaryProps> = ({
 name,
 maxHealth = 0,
 maxStamina = 0,
 maxItems: inventoryLimit = 0,
 skills = [],
 luck,
 money,
 playTime = 0,
}): React.ReactNode => {
 const TableIcon: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <img
   src={src}
   className="w-8 h-8 min-w-[2rem] min-h-[2rem] object-scale-down drop-shadow-lg"
   width={32}
   height={32}
   alt={alt}
  />
 );
 const tableStyle =
  "h-12 border-b border-gray-200 px-4 py-2 pl-8 text-left font-medium text-gray-600 dark:border-gray-600 dark:text-gray-200";

 const skillExperienceByLevel = [
  100, 380, 770, 1300, 2150, 3300, 4800, 6900, 10000, 15000,
 ];

 const skillsData = skills.map((skill) => {
  const experienceToNextLevel =
   skill.level === 10
    ? 0
    : skillExperienceByLevel[skill.level] - skill.currentExp;

  const experienceToMaxLevel =
   skill.level === 10
    ? 0
    : skillExperienceByLevel[skillExperienceByLevel.length - 1] -
      skill.currentExp;

  return {
   name: skill.name,
   icon: skill.icon,
   level: skill.level,
   experience: skill.currentExp,
   experienceToNextLevel,
   experienceToMaxLevel,
  };
 });

 return (
  <div>
   <h2 className="text-md drop-shadow-lg text-center mt-4">
    {`Total Playtime: ${formatPlayTime(playTime)}`}
   </h2>
   <h2 className="text-lg drop-shadow-lg text-center m-4">
    {`Farmer ${name}`}
   </h2>

   <div className="flex gap-1 rounded-xl bg-gray-950/5 p-1 inset-ring inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
    <div className="overflow-auto px-8 w-fit rounded-lg bg-white outline outline-white/5 dark:bg-gray-950/50">
     <div className="flex flex-row gap-2 mb-8 mt-4 overflow-hidden">
      <table className="table-auto border-collapse text-sm">
       <thead>
        <tr>
         <th className={tableStyle}></th>
         <th className={`min-w-8 ${tableStyle}`}>Skill</th>
         <th className={`min-w-8 ${tableStyle}`}>Level</th>
         <th className={`min-w-8 ${tableStyle}`}>XP</th>
         <th className={`min-w-36 ${tableStyle}`}>XP to Next Lvl</th>
         <th className={`min-w-36 ${tableStyle}`}>XP to Max Lvl</th>
        </tr>
       </thead>
       <tbody>
        {skillsData.map((skill) => (
         <tr key={skill.name}>
          <td className={tableStyle}>
           <TableIcon src={skill.icon} alt={`${skill.name} Icon`} />
          </td>
          <td className={tableStyle}>{skill.name}</td>
          <td className={tableStyle}>{skill.level}</td>
          <td className={tableStyle}>{skill.experience}</td>
          <td className={tableStyle}>{skill.experienceToNextLevel}</td>
          <td className={tableStyle}>{skill.experienceToMaxLevel}</td>
         </tr>
        ))}
       </tbody>
      </table>

      <table className="table-auto border-collapse text-sm">
       <thead>
        <tr>
         <th className={tableStyle}></th>
         <th className={tableStyle}>Skill</th>
         <th className={tableStyle}>Level</th>
        </tr>
       </thead>
       <tbody>
        {[
         {
          name: "Max Health",
          value: maxHealth,
          icon:
           "https://stardewvalleywiki.com/mediawiki/images/thumb/9/94/Health.png/32px-Health.png",
         },
         {
          name: "Max Energy",
          value: maxStamina,
          icon:
           "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a9/Energy.png/32px-Energy.png",
         },
         {
          name: "Inventory Limit",
          value: inventoryLimit,
          icon:
           "https://stardewvalleywiki.com/mediawiki/images/thumb/a/a9/Inventory_Icon.png/32px-Inventory_Icon.png",
         },
         {
          name: "Luck",
          value: luck,
          icon:
           "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f0/Luck.png/24px-Luck.png",
         },
         {
          name: "Gold",
          value: money,
          icon:
           "https://stardewvalleywiki.com/mediawiki/images/thumb/1/10/Gold.png/24px-Gold.png",
         },
        ].map((property) => (
         <tr key={property.name}>
          <td className={tableStyle}>
           <TableIcon src={property.icon} alt={`${property.name} Icon`} />
          </td>
          <td className={tableStyle}>{property.name}</td>
          <td className={tableStyle}>{property.value ?? 0}</td>
         </tr>
        ))}
       </tbody>
      </table>
     </div>
    </div>
   </div>
  </div>
 );
};

export default PlayerSummary;
