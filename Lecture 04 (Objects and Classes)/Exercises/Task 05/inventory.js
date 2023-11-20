function printHeroes(heroesDataArr) {
  let heroes = [];

  for (let i = 0; i < heroesDataArr.length; i++) {
    let [heroName, heroLevel, heroItems] = heroesDataArr[i].split(" / ");

    let hero = {
        name: heroName,
        level: heroLevel,
        items: heroItems
    }

    heroes.push(hero);
  }

  heroes.sort((a, b) => a.level - b.level);

  for (let i = 0; i < heroes.length; i++) {
    console.log(`Hero: ${heroes[i].name}`);
    console.log(`level => ${heroes[i].level}`);
    console.log(`items => ${heroes[i].items}`)
  }
}
