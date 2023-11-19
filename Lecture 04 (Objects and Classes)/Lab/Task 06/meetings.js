function scheduleMeetings(scheduleInfo) {
    let schedule = {};

    for (let i = 0; i < scheduleInfo.length; i++) {
        let [weekday, personName] = scheduleInfo[i].split(" ");

        if (schedule.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            schedule[weekday] = personName;

            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (const key in schedule) {
        if (Object.hasOwnProperty.call(schedule, key)) {
            console.log(`${key} -> ${schedule[key]}`);
        }
    }
}