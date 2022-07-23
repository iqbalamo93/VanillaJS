days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const getSleepHours = (day) => {
    switch (day) {
        case "Monday":
            return 8;
        case "Tuesday":
            return 7;
        case "Wednesday":
            return 8;
        case "Thursday":
            return 9;
        case "Friday":
            return 5;
        case "Saturday":
            return 10;
        case "Sunday":
            return 7;
                }
};

const getActualSleepHours = () => {
    let totalSleep = 0;
        for (let i = 0; i <= 6; i++) {
            totalSleep += getSleepHours(days[i]);
        }
    return totalSleep;
    };

console.log(getActualSleepHours());

const getIdealSleepHours = () => 7*8


const calculateSleepDebt = () =>{
    let actualSleepHours  = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()

    let debt = actualSleepHours-idealSleepHours;

    if(debt==0){console.log('Perfect')}
    else if(debt>0){console.log(`Surplus.. ${debt}`)}
    else {console.log(`Deficit..${debt}`)}
}

calculateSleepDebt()
