function gradingStudents(grades) {
    // Write your code here
    const newGrades = [];
    for (let i = 0; i < grades.length; i++) {
        const nextGrade = Math.ceil(grades[i] / 5) * 5;

        if (grades[i] < 38) {
            newGrades[i] = grades[i];
        } else if (nextGrade - grades[i] < 3) {
            newGrades[i] = nextGrade;
        } else {
            newGrades[i] = grades[i];
        }
    }
    return newGrades;

}


const r = gradingStudents([73, 67, 38, 33]);
console.log(r);