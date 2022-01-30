const getAverage = (array) => {
  let sum = 0;
  array.forEach((number) => (sum += number));
  const average = sum / array.length;
  return average;
};

const getMin = (array) => {
  let min = array[0];
  array.forEach((number) => {
    if (min > number) {
      min = number;
    }
  });
  return min;
};

const getMax = (array) => {
  let max = array[0];
  array.forEach((number) => {
    if (max < number) {
      max = number;
    }
  });
  return max;
};

const getLength = (array) => array.length;

const analyzeArray = (array) => {
  const average = getAverage(array);
  const min = getMin(array);
  const max = getMax(array);
  const length = getLength(array);
  return {
    average,
    min,
    max,
    length,
  };
};

export default analyzeArray;
