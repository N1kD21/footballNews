'use strict';

async function searchInArray(arrayStaroe, arrayNovoe) {
  const otvet = [];
  for (let i = 0; i < arrayNovoe.length; i++) {
    const otvet1 = arrayStaroe.find((itemStaroeArray) => arrayNovoe[i].immage === itemStaroeArray.immage);
    if (otvet1 === undefined) otvet.push(arrayNovoe[i]);
  }
  return otvet;
}

module.exports = searchInArray;
