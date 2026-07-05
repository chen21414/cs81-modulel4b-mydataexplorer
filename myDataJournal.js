// GitHub Repo URL: https://github.com/chen21414/cs81-modulel4b-mydataexplorer

// I predict Wednesday had the most screen time.
// I predict Friday had the best focus level.
// I think more caffeine does not always mean better focus.

const weekData = [
  { day: "Monday", sleepHours: 7, screenTime: 6, mood: "productive", caffeineIntake: 2, focusLevel: 8 },
  { day: "Tuesday", sleepHours: 6.5, screenTime: 7, mood: "tired", caffeineIntake: 3, focusLevel: 6 },
  { day: "Wednesday", sleepHours: 6, screenTime: 8.5, mood: "stressed", caffeineIntake: 4, focusLevel: 5 },
  { day: "Thursday", sleepHours: 7.5, screenTime: 5.5, mood: "calm", caffeineIntake: 1, focusLevel: 8 },
  { day: "Friday", sleepHours: 8, screenTime: 4.5, mood: "productive", caffeineIntake: 1, focusLevel: 9 },
  { day: "Saturday", sleepHours: 8.5, screenTime: 6.5, mood: "relaxed", caffeineIntake: 1, focusLevel: 7 },
  { day: "Sunday", sleepHours: 7, screenTime: 5, mood: "relaxed", caffeineIntake: 0, focusLevel: 7 }
];

function findHighestScreenTime(data) {
  let highestDay = data[0];

  for (let day of data) {
    if (day.screenTime > highestDay.screenTime) {
      highestDay = day;
    }
  }

  return highestDay;
}

function averageSleep(data) {
  let totalSleep = 0;

  for (let day of data) {
    totalSleep += day.sleepHours;
  }

  return totalSleep / data.length;
}

function mostFrequentMood(data) {
  let moodCounts = {};

  for (let day of data) {
    if (moodCounts[day.mood]) {
      moodCounts[day.mood]++;
    } else {
      moodCounts[day.mood] = 1;
    }
  }

  let mostCommonMood = "";
  let highestCount = 0;

  for (let mood in moodCounts) {
    if (moodCounts[mood] > highestCount) {
      highestCount = moodCounts[mood];
      mostCommonMood = mood;
    }
  }

  return mostCommonMood;
}

function findBestFocusDay(data) {
  let bestDay = data[0]; //Starts by assuming the first day is the best.

  for (let day of data) {
    if (day.focusLevel > bestDay.focusLevel) {
      bestDay = day;
    }
  }

  return bestDay;
}

function correlateCaffeineToFocus(data) {
  let highCaffeineFocus = 0;
  let highCaffeineDays = 0;
  let lowCaffeineFocus = 0;
  let lowCaffeineDays = 0;

  for (let day of data) {
    if (day.caffeineIntake >= 3) {
      highCaffeineFocus += day.focusLevel;
      highCaffeineDays++;
    } else {
      lowCaffeineFocus += day.focusLevel;
      lowCaffeineDays++;
    }
  }

  let highAverage = highCaffeineFocus / highCaffeineDays;
  let lowAverage = lowCaffeineFocus / lowCaffeineDays;

  if (highAverage > lowAverage) {
    return "More caffeine seems to help focus.";
  } else {
    return "More caffeine does not seem to improve focus.";
  }
}

let highestScreenDay = findHighestScreenTime(weekData);
let bestFocusDay = findBestFocusDay(weekData);

console.log("Analyzing Mike's Data Journal...");
console.log("Most screen time: " + highestScreenDay.day + " (" + highestScreenDay.screenTime + " hrs)");
console.log("Average sleep: " + averageSleep(weekData).toFixed(1) + " hrs");
console.log("Most frequent mood: " + mostFrequentMood(weekData));
console.log("Best focus day: " + bestFocusDay.day + " (" + bestFocusDay.focusLevel + "/10)");
console.log("Does more caffeine mean better focus? " + correlateCaffeineToFocus(weekData));
