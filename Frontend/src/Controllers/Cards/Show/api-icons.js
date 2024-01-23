const race_uri =
  "https://images.ygoprodeck.com/images/cards/icons/race/{ICON}.png";

const attr_uri = "https://images.ygoprodeck.com/images/cards/{ICON}.jpg";

const race_icons = [
  "Aqua",
  "Field",
  "Beast",
  "Beast-Warrior",
  "Continuous",
  "Creator-God",
  "Cyberse",
  "Counter",
  "Divine-Beast",
  "Dragon",
  "Equip",
  "Fairy",
  "Fiend",
  "Fish",
  "Illusion",
  "Insect",
  "Machine",
  "Normal",
  "Plant",
  "Psychic",
  "Pyro",
  "Quick-Play",
  "Reptile",
  "Rock",
  "Sea Serpent",
  "Spellcaster",
  "Thunder",
  "Warrior",
  "Winged Beast",
  "Wyrm",
  "Zombie",
  "Ritual",
];

export const build_icon = ({ label, type_icon }) => {
  //   return base.replace("{ICON}", icons[i]);

  if (type_icon == "race") {
    const i = race_icons.filter(
      (icon) =>
        icon.toLowerCase().replaceAll("-", "").replaceAll(" ", "") ===
        label.toLowerCase().replaceAll("-", "").replaceAll(" ", "")
    )[0];
   if(i !== undefined){
     return race_uri.replace("{ICON}", i);
   }
  } else if (type_icon == "attr") {

    const i = attr_icons.filter(
      (icon) =>
        icon.toLowerCase().replaceAll("-", "").replaceAll(" ", "") ===
        label.toLowerCase().replaceAll("-", "").replaceAll(" ", "")
    )[0];
   if(i !== undefined){

     return attr_uri.replace("{ICON}", i.toUpperCase());
   }
  }
};

const attr_icons = [
  "dark",
  "divine",
  "earth",
  "fire",
  "water",
  "light",
  "wind",
];
