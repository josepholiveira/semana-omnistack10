module.exports = function parseStringasArray(arrayAsString) {
  return arrayAsString.split(",").map(tech => tech.trim());
};
