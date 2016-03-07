// add scripts

console.log("sanity check!");

function letterGrader(grade) {
  if (grade > 89 && grade < 101) {
    return 'A'
  } else if (grade > 79 && grade < 90) {
    return 'B'
  } else if (grade > 69 && grade < 80) {
    return 'C'
  } else if (grade > 59 && grade < 70) {
    return 'D'
  } else if (grade < 60) {
    return 'F'
  }
}
