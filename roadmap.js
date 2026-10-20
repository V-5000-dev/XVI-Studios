const STATUS_LABELS = {
    completed: "Completed",
    progress: "In Progress",
    planned: "Planned",
    considering: "Considering"
}
const projects = [
  {
    title: "Towers",
    description: "Variety of towers, with upgrades, ranging in price, ability, functionality, and use case.",
    status: "completed",
  },
  {
    title: "Tower Functionality",
    description: "Purchase, place, destroy, and upgrade towers. Towers can target enemies, shoot and reload.",
    status: "completed",
  },
{
    title: "Tower Selection",
    description: "Select the towers to wish to use for a certain run. Selected towers are added to the shop, where you can then place them on the map",
    status: "progress",
  },
  {
    title: "Further Tower Functionality",
    description: "Player can select which enemy to target, sorting by total health.",
    status: "considering",
  },
  {
    title: "Armor Mechanics",
    description: "Towers and enemies have armor ratings instead of just damage and health. Enemies take 25% less damage for each armor pen a tower is missing.",
    status: "completed",
  },
  {
    title: "Enemies",
    description: "Variety of enemies to challenge players, ranging in health, speed, armor level, and special mechanics.",
    status: "progress",
  },
  {
    title: "Enemy Functionality",
    description: "Enemies can follow the path of the map, take damage, die, and deal damage to the player upon reaching the edge of the map.",
    status: "completed",
  },
  {
    title: "Further Enemy Functionality",
    description: "Certain enemies can have speical abilites or mechanics. ",
    status: "planned",
  },
    {
    title: "Shop and Economy",
    description: "Towers can be purshased from the shop. Purchases and upgrades cost money, destorying towers refunds some of the money.",
    status: "completed",
  },
  {
    title: "Maps",
    description: "Variety of maps, some easier or harder than others, with different aesthetics, path lengths, and restrictions.",
    status: "planned",
  },
  {
    title: "Map Mechanics",
    description: "Move around your camera, zoom in and out. You cannot place towers on the enemy path or on certain tiles.",
    status: "completed",
  },
  {
    title: "Saving/Loading",
    description: "Self-explanatory.",
    status: "planned",
  },
  {
    title: "Progression",
    description: "Progress through ranks by playing matches and unlock new towers.",
    status: "planned",
  },
  {
    title: "Tutorial / Reference Guide",
    description: "A way to understand what you're doing.",
    status: "planned",
  },
];
const roadmap = document.getElementById("roadmap");
roadmap.innerHTML = projects.map(p => `        <div class = "roadmap-box">
          <div class = "roadmap-box-title">
            <h3>${p.title}</h3>
            </div>
            <h5>${p.description}</h5>
            <div class="roadmap-status roadmap-status--${p.status}">
            <h4>${STATUS_LABELS[p.status]}</h4>
          </div>
          </div>` ).join("");