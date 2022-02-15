// Code your solution here
function findMatching(array, string) {
  // Return matching list of drivers, case insensitive
  return array.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
}

function fuzzyMatch(array, string) {
  // Return list of drivers whose names begin with the
  // letters contained in 'string'
  return array.filter((driver) => driver.startsWith(string));
}

function matchName(arrayObjects, string) {
  // Each driver object contains 'name' and 'hometown'
  // Return each element whose 'name' matches 'string'
  return arrayObjects.filter((driver) => driver.name === string);
}
