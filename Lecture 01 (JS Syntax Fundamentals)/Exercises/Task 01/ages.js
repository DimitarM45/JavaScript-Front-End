function printAgeCategory(age) {
    let ageCategory;

    if (age >= 0 && age <= 2) ageCategory = "baby";
    else if (age >= 3 && age <= 13) ageCategory = "child";
    else if (age >= 14 && age <= 19) ageCategory = "teenager";
    else if (age >= 20 && age <= 65) ageCategory = "adult";
    else if (age >= 66) ageCategory = "elder";
    else ageCategory = "out of bounds";

    console.log(ageCategory);
}
