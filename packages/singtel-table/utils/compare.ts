//
export const compare = function (prop: string, sortDirections: any) {
  return (obj1: any, obj2: any) => {
    let val1 = obj1[prop];
    let val2 = obj2[prop];
    if (!isNaN(Number(val1)) && !isNaN(Number(val2))) {
      val1 = Number(val1);
      val2 = Number(val2);
    }
    // sort ascend
    if (sortDirections.includes('ascend')) {
      console.log('ascend');
      return sortAscend(val1, val2);
    }
    // sort descend
    if (sortDirections.includes('descend')) {
      return sortDescend(val1, val2);
    }
  };
};
//  sort ascend
export const sortAscend = function (val1: any, val2: any) {
  if (val1 < val2) {
    return -1;
  } else if (val1 > val2) {
    return 1;
  } else {
    return 0;
  }
};
//  sort descend
export const sortDescend = function (val1: any, val2: any) {
  if (val1 > val2) {
    return -1;
  } else if (val1 < val2) {
    return 1;
  } else {
    return 0;
  }
};
