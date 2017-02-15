function findMissing(firstArray, secondArray) {

	var missingNumber1 = firstArray.find((number) => secondArray.indexOf(number) === -1);
  var missingNumber2 = secondArray.find((number) => firstArray.indexOf(number) === -1);

  var missingNumbers = [missingNumber1 || 0, missingNumber2 || 0];

  if (missingNumbers[0] === 0 || missingNumbers[1] === 0) {
  	return missingNumbers[1];
  }

  return missingNumbers;
}

module.exports = findMissing;
