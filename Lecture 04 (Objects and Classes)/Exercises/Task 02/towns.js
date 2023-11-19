function getTownObj(townsInfo) {
  let towns = [];

  for (let i = 0; i < townsInfo.length; i++) {
    let [townName, townLatitude, townLongitude] = townsInfo[i].split(" | ");

    let town = {
      name: townName,
      latitude: parseFloat(townLatitude).toFixed(2),
      longitude: parseFloat(townLongitude).toFixed(2),
    };

    towns.push(town);
  }

  towns.forEach((town) => {
    console.log(
      `{ town: '${town.name}', latitude: '${town.latitude}', longitude: '${town.longitude}' }`
    );
  });
}
