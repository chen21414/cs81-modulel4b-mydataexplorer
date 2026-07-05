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
