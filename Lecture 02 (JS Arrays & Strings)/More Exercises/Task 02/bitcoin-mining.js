function calculateBoughtBitcoin(goldMined) {
    let bitcoinBought = 0;
    let balance = 0;

    let firstDayBought = 0;

    const goldPricePerGram = 67.51;
    const bitcoinPrice = 11949.16;

    for (let i = 0; i < goldMined.length; i++) {
        if ((i + 1) % 3 == 0) goldMined[i] -= goldMined[i] * 0.3;
        
        balance += goldMined[i] * goldPricePerGram;

        while (balance >= bitcoinPrice) {
            if (bitcoinBought == 0) firstDayBought = i + 1;

            bitcoinBought++;

            balance -= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinBought}`);

    if (bitcoinBought > 0) console.log(`Day of the first purchased bitcoin: ${firstDayBought}`);

    console.log(`Left money: ${balance.toFixed(2)} lv.`);
}
