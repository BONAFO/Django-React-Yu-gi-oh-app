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


  
  if(label !== undefined){
    label = label.name
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

const pendulum_icon = "data:image/webp;base64,UklGRuwEAABXRUJQVlA4WAoAAAAQAAAAPwAAPwAAQUxQSB8BAAABfyAQSFLYH3iFiEgdIAWgrUo583Fn7wG0ASzZDQ2gAUTQADSYIcFEsAJIASvgbgd5/91zJkFE/x25kdRARfCGK/AIdHvMF24fTbNdctDrjaxZ1Uly2PQPT5P3tIajyUe5pis5IuvRYnZMC03+maUS1yY9Jj+jTkI6DMdC5FfcRcA5hbGYP81/ChS5rimNpZzfWjdFVpGsHveUx3IqjZHw4LT61wqt0QM8elVRpzmGb90m7t2W/e3IbQgdr4X4xEunv+00rdy4+PZFqJcvQLr9x2pTgEdTfHJI7fV6V2oAWVyBt7gaECCpIr+9O1EDQEz4v4Ar8JxrG1JbufoBjZxiG+X6oI6ntE3IrbmW3ogqYNILZzwkb5GFK3C4ji4PAABWUDggpgMAAPASAJ0BKkAAQAA+bSyQRaQioZr4vZhABsS1AF9BAKxfJzNXxUN8vDvOHFlugeh3b1XbZvL/7MWvpnJ4X1fFzjsPlIhHOQoqinnv9D9hfOPRc+vf9jfYr/TNymyHYg2cMgZppVZh2crGuNvN6xJVlG9512Dujt2ZjjyQoTb7376onG4qONj89GfoqyObDTOXdEDEUv4N7vduhXzMpYrGAAAA/v6lNlZFrTMt7+bMDGQUuPz1EqyE6zYHCpvT+f4LYiIMtVa1h4YduzQmfi4/iicb4eTrfbkTvPx9vdUSdsDo6l1HVtQzWQaQReDIz3z2UYu3pxdI3K5YTWORu/3zl5/u3pwNhnHFkkOwiVDq1RuxRb8IdFD7BuCIlAg7znBWHm+SxYEOkYH0K/LkoXf3mi+j0rvzhJ8PY/4BzjIOKz0/OfeFFEqV5qrgoPHK/zk19mX+eAn8zz2e1E2M+1teaiDyauJQnbjhM11vT07B6GevZ5ZaLkYmw3LsoluqsZsrx33EJaIGL758igmiN1dk2ItY+5NhDXdVDdPwwPaYpiLKYSU9gVlOR24yoNttFEfPLwpdNcEPj8ubUFaBkxyZCOY+pnuL3lyDcV1Mg1Oi42tdxhBudDifDNhq3pXCVKEmrZ6IZPvu3DhM5c39lHf/nZo7r++JEdAE4+Zo6q8rm6kYB+mitPVPLI7Arz0vPP7D9SOQKa1jdbzkWUTOxO/vThPFpMqD1OvQ7SLJmGp990y0ejBukW6je7c3WzQfXPs5N2pTzIqzJchovb/kXwpYreFsi5rvFCkr71JGokBpXEWS/HcsvH+MctPzocMlJqsl/dFWXvVcZfRnC2OWzGK6rPKbEBq/5O3s6Bte0W1Rjl/uCAYVa6MLva578Xi5AfVd/ps+pBBSJN6mzzjeUloeHx7xLeWqtuat+5eOI8aZXfGqsmb3xGu3mUZ/FJdgL6S4HU4go9kgJ6bOA+aDx5Ul53uc3dTzZJqm+AlqjaPC8NKtTPwP5NuEfDmEWbCph5UgIBURniSie5nXJ7AKqTd7KS02eUbx0Fr5QWcPw/IoTUa7Yu2QqQSooE1F5WKU2L6ghuFtsK3pjoSnFY5EgPEO/2ICXgsu543YNwG+29c2GAHfbmkLsg7rYhpkgaWL+5nd091bJPyM8C+5elLKzduNg3mZ0ALbzyrQOFTv4TDmaEpVb6gFYeyLBLdC6QwZxkBLpsxbUwqzVbs4cQNhb84her+58CWPoAA=";