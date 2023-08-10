const oddNumbers = (nums) => {
  return nums.some(function(val){
    return val % 2 !== 0;
  })
}

const hasAZero = (nums) => {
  return nums.toString().split('').some(function(val){
    return val === '0';
  })
}

const onlyOddNumbers = (nums) => {
  return nums.every(function(val){
    return val % 2 !== 0;
  })
}

const noDuplicates = (arr) => {
  return arr.every(function(val){
    return arr.indexOf(val) === arr.lastIndexOf(val);
  })
}

const certainKey = (arr, key) => {
  return arr.every(function(val){
    return key in val;
  })
}

const certainValue = (arr, key, value) => {
  return arr.every(function(val){
    return val[key] === value;
  })
}