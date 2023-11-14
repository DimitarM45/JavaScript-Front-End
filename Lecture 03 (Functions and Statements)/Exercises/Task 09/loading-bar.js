function printLoadingBar(percentage) {
    let barProgress = percentage / 10;
    let barUnloadedPart = 10 - barProgress;

    let loadingBar = `${percentage}% `;

    if (percentage === 100) {
        loadingBar += "Complete!" + "\n" + "[%%%%%%%%%%]";
    } else {
        loadingBar += `[${"%".repeat(barProgress)}${".".repeat(barUnloadedPart)}]`;
        loadingBar += "\n" + "Still loading...";
    }

    console.log(loadingBar);
}   
