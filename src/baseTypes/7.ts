/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Weekdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: Weekdays): boolean {
  if (day < 5) {
    return true;
  }
  return false;
}

// console.log(isWeekend(Weekdays.Monday));
// console.log(isWeekend(Weekdays.Saturday));
