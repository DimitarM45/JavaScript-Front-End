function calculateExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let isHelmetBroken = false;
    let isSwordBroken = false;

    let totalBrokenHelmets = 0;
    let totalBrokenSwords = 0;
    let totalBrokenShields = 0;
    let totalBrokenArmorsets = 0;

    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 == 0) {
            isHelmetBroken = true;

            totalBrokenHelmets++;
        }

        if (i % 3 == 0) {
            isSwordBroken = true;

            totalBrokenSwords++;
        } 

        if (isHelmetBroken && isSwordBroken) {
            isShieldBroken = true;

            totalBrokenShields++;
        }
        
        if (totalBrokenShields != 0 && totalBrokenShields % 2 == 0) {
            totalBrokenArmorsets++;
        }

        isHelmetBroken = false;
        isSwordBroken = false;
    }

    let totalHelmetPrice = totalBrokenHelmets * helmetPrice;
    let totalSwordPrice = totalBrokenSwords * swordPrice;
    let totalShieldPrice = totalBrokenShields * shieldPrice;
    let totalarmorPrice = totalBrokenArmorsets * armorPrice;

    let totalExpenses = totalHelmetPrice + totalSwordPrice + totalShieldPrice + totalarmorPrice;

    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

calculateExpenses(23,
    12.50,
    21.50,
    40,
    200
    );
    