function createCats(catInfo) {
  class Cat {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    name;

    age;

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }

  for (let i = 0; i < catInfo.length; i++) {
    let [catName, catAge] = catInfo[i].split(" ");

    let cat = new Cat(catName, catAge);

    cat.meow();
  }
}
