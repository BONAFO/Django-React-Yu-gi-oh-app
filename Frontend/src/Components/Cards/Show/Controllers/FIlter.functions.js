const values_dict = (key, filter) => {
  switch (key) {
    case "rank":
      delete filter.card_link_min;
      delete filter.card_link_max;
      break;

    case "stars":
      delete filter.stars_min;
      delete filter.stars_max;
      break;
    case "scale":
      delete filter.pendulum_scales_min;
      delete filter.pendulum_scales_max;
      break;
    case "attribute":
      delete filter.attribute;
      break;

    case "atk":
      delete filter.card_atk_min;
      delete filter.card_atk_max;
      break;

    case "def":
      delete filter.card_def_min;
      delete filter.card_def_max;
      break;
    case "special":
      ["rank", "stars", "scale", "attribute", "atk", "def"].map((k) =>
        values_dict(k, filter)
      );
      break;

    default:
      break;
  }

  return filter;
};

export const clear_values = (to_clear_values = [], filter) => {
  to_clear_values.map((val) => {
    filter = values_dict(val, filter);
  });

  return filter;
};
