const stringSimilarity = require("string-similarity");

function calculateMatch(lostItem, foundItem) {

  if (!lostItem.item || !foundItem.item) return 0;
  if (!lostItem.location || !foundItem.location) return 0;

  const nameScore = stringSimilarity.compareTwoStrings(
    lostItem.item.toLowerCase(),
    foundItem.item.toLowerCase()
  );

  const locationScore = stringSimilarity.compareTwoStrings(
    lostItem.location.toLowerCase(),
    foundItem.location.toLowerCase()
  );

  const finalScore = (nameScore + locationScore) / 2;

  return finalScore;
}

module.exports = calculateMatch;