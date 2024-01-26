import { capitalizate } from "./Capitalize";

// CHANGIN THE DB NAME OF THE CARD TYPE TO ONE MORE YUGIOH PLAYER
export const card_type_traslate = (element) => {
  element.name = element.name.replace("m-", "monster ");
  element.name = element.name.replace("e-", "extra deck monster ");
  if (element.name == "t") {
    element.name = "trap";
  }

  if (element.name == "s") {
    element.name = "spell";
  }

  element.name = capitalizate(element.name);
  return <option value={element.id}>{element.name}</option>;
};

// FINDING AN ID IN AN DETERMINATED ARR
export const get_id_by_filter = (name, arr) => {
  let id = arr.filter((ar) => ar.name == name)[0];
  if (id == undefined) {
    return -1;
  } else {
    return id.id;
  }
};

// FILTERING THE RACE-CARD (ONLY SHOWING THE CARD RACE OF THE TYPE CARD)
export const filtrate_races = (race, card_type) => {
  if (card_type.trap) {
    if (race.card_family.toLowerCase().includes("t")) {
      return <option value={race.id}>{capitalizate(race.name)}</option>;
    }
  } else if (card_type.spell) {
    if (race.card_family[0].toLowerCase() == "s") {
      return <option value={race.id}>{capitalizate(race.name)}</option>;
    }
  } else {
    if (race.card_family.toLowerCase().includes("m")) {
        return <option value={race.id}>{capitalizate(race.name)}</option>;
      }
  }
};

