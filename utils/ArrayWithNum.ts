export const ArrayWithNum = (num: number) => {
  const newArray = [];
  for (let i = 0; i < num; i++) {
    newArray.push(i + 1);
  }
  return newArray;
};
