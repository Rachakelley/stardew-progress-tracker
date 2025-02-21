import React from "react";

interface PlayerSummaryProps {
 //  name?: string;
 //  gender?: string;
 //  farmName?: string;
 //  favoriteThing?: string;
 //  petType?: string;
 //  petBreed?: number;
 maxHealth?: number;
 maxStamina?: number;
 maxItems?: number;

 farming?: number;
 mining?: number;
 combat?: number;
 foraging?: number;
 fishing?: number;
 luck?: number;
 money?: number;
}

const PlayerSummary: React.FC<PlayerSummaryProps> = ({
 //  name,
 //  gender,
 //  farmName,
 //  favoriteThing,
 //  petType,
 //  petBreed,
 maxHealth = 0,
 maxStamina = 0,
 maxItems: inventoryLimit = 0,
 farming,
 mining,
 combat,
 foraging,
 fishing,
 luck,
 money,
}): React.ReactNode => {
 return (
  <div className="flex flex-row gap-8 mt-8">
   <table className="table-auto border-collapse border border-gray-400">
    <thead>
     <tr>
      <th className="px-4 py-2"></th>
      <th className="px-4 py-2">Skill</th>
      <th className="px-4 py-2">Level</th>
     </tr>
    </thead>
    <tbody>
     {[
      {
       name: "Farming",
       value: farming,
       icon:
        "https://stardewvalleywiki.com/mediawiki/images/thumb/8/82/Farming_Skill_Icon.png/32px-Farming_Skill_Icon.png",
      },
      {
       name: "Mining",
       value: mining,
       icon:
        "https://stardewvalleywiki.com/mediawiki/images/thumb/2/2f/Mining_Skill_Icon.png/32px-Mining_Skill_Icon.png",
      },
      {
       name: "Combat",
       value: combat,
       icon:
        "https://stardewvalleywiki.com/mediawiki/images/thumb/c/cf/Combat_Skill_Icon.png/32px-Combat_Skill_Icon.png",
      },
      {
       name: "Foraging",
       value: foraging,
       icon:
        "https://stardewvalleywiki.com/mediawiki/images/thumb/f/f1/Foraging_Skill_Icon.png/32px-Foraging_Skill_Icon.png",
      },
      {
       name: "Fishing",
       value: fishing,
       icon:
        "https://stardewvalleywiki.com/mediawiki/images/thumb/e/e7/Fishing_Skill_Icon.png/32px-Fishing_Skill_Icon.png",
      },
     ].map((skill) => (
      <tr key={skill.name}>
       <td className="border px-4 py-2">
        <img src={skill.icon} alt={`${skill.name} Icon`} />
       </td>
       <td className="border px-4 py-2">{skill.name}</td>
       <td className="border px-4 py-2">{skill.value ?? 0}</td>
      </tr>
     ))}
    </tbody>
   </table>

   <table className="table-auto border-collapse border border-gray-400">
    <thead>
     <tr>
      <th className="px-4 py-2"></th>
      <th className="px-4 py-2">Skill</th>
      <th className="px-4 py-2">Level</th>
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
       <td className="border px-4 py-2">
        <img src={property.icon} alt={`${property.name} Icon`} />
       </td>
       <td className="border px-4 py-2">{property.name}</td>
       <td className="border px-4 py-2">{property.value ?? 0}</td>
      </tr>
     ))}
    </tbody>
   </table>
  </div>
 );
};

export default PlayerSummary;
