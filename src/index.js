const path = require("path");

// returns default icon
const getDefaultIcon = () => {
  const defaultIconPath = path.join(__dirname, "../icons", "default_icon.webp");
  return defaultIconPath;
};

// returns icon by name for a given icon set
const getIconByName = (iconSetName, iconName) => {
  // Remove the colon and range percentage from the suffix
  const sanitizedIconName = iconName
    .replace(/:\s?\d+-\d+%/g, "")
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "_");

  const iconPath = path.join(
    __dirname,
    "../icons",
    iconSetName,
    `${sanitizedIconName}.webp`
  );
  return iconPath;
};

// returns iconn by command for a given icon set
const getIconByCommand = (iconSetName, iconCommand) => {
  const iconPath = path.join(
    __dirname,
    "../icons",
    iconSetName,
    `${iconCommand}.webp`
  );
  return iconPath;
};

const weatherIcons = {
  getDefaultIcon,
  getIconByName,
  getIconByCommand,
};

module.exports = weatherIcons;
