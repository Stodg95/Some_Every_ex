describe("#oddNumbers", function() {
  it("returns true if there is at least one odd number in the array", function() {
    expect(oddNumbers([1, 2, 3, 4, 4, 6, 8])).toEqual(true);
  });
  it("returns false if there are no odd numbers in the array", function() {
    expect(oddNumbers([2, 2, 4, 6, 8, 10])).toEqual(false);
  });
});

describe("#hasAZero", function() {
  it("returns true if the number contains at least one 0", function() {
    expect(hasAZero(44736453879209252)).toEqual(true);
  });
  it("returns false if the number does not have any zeros", function() {
    expect(hasAZero(1762537845)).toEqual(false);
  });
});

describe("#onlyOddNumbers", function() {
  it("returns true if every number in the array is odd", function() {
    expect(onlyOddNumbers([1, 1, 3, 5, 3, 7])).toEqual(true);
  });
  it("returns false if there is one or more even numbers ", function() {
    expect(onlyOddNumbers([1, 1, 2, 3, 3, 5, 7])).toEqual(false);
  });
});

describe("#noDuplicates", function() {
  it("returns true if there are no duplicates in the array", function() {
    expect(noDuplicates([1, 2, 3, 4, 7, 1])).toEqual(false);
  });
  it("returns false if there are duplicates in the array", function() {
    expect(noDuplicates([1, 2, 3, 4, 5, 7, 9])).toEqual(true);
  });
});

describe("#certainKey", function() {
  let arr = [
    { first: "Samantha", last: "Hall", isCatOwner: true },
    { first: "Robert", last: "Goodwin"},
    { first: "Jody", last: "Hopkins" },
    { first: "Bobby", last: "Smith", isCatOwner: true }
  ];
  it("returns true if every object in the array contains a certain key", function() {
    expect(certainKey(arr, "first")).toEqual(true);
  });
  it("returns false if every object in the array does not contain a certain key", function() {
    expect(certainKey(arr, "isCatOwner")).toEqual(false);
  });
});

describe("#certainValue", function() {
  let arr = [
    { title: "Instructor", first: "Samantha", last: "Hall", isCatOwner: true },
    { title: "Instructor", first: "Robert", last: "Goodwin"},
    { title: "Instructor", first: "Jody", last: "Hopkins" },
    { title: "Instructor", first: "Bobby", last: "Smith", isCatOwner: true }
  ];
  it("returns true if every object in an array has the same value for some key", function() {
    expect(certainValue(arr, "title", "Instructor")).toEqual(true);
  });
  it("returns false if every object in an array does not have the same value for some key", function() {
    expect(certainValue(arr, "first", "Samantha")).toEqual(false);
  });
});