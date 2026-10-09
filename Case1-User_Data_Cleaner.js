const names = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

const cleanedNames = names.trim();

const namesArray = cleanedNames.split(",");

const formattedNames = namesArray.map((name) => {
  return name.trim().toLowerCase();
});

const result = formattedNames.join(" | ");

console.log(cleanedNames);
console.log(namesArray);
console.log(formattedNames);
console.log(result);