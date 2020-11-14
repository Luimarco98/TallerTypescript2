"use strict";
var Course = /** @class */ (function () {
    function Course(name, professor, credits) {
        this.name = name;
        this.credits = credits;
        this.professor = professor;
    }
    return Course;
}());
var dataCourses = [
    new Course("Ingeniería de Sw", "Pablo Picasso", 4),
    new Course("Futbol 1", "Freddy Rincón", 2),
    new Course("Algoritmos", "Carlos Fuentes", 2),
    new Course("Estructuras de Datos", "Yesid D", 1),
    new Course("Futbol 2", "James R", 6)
];
var coursesTbody = document.getElementById('courses');
var btnfilterByName = document.getElementById("button-filterByName");
var inputSearchBox = document.getElementById("search-box");
// const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;
btnfilterByName.onclick = function () { return applyFilterByName(); };
// equivalentes
// btnfilterByName.addEventListener("click", () => applyFilterByName());
renderCoursesInTable(dataCourses);
// totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`
function renderCoursesInTable(courses) {
    console.log('Desplegando cursos');
    courses.forEach(function (course) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>" + course.name + "</td>\n                           <td>" + course.professor + "</td>\n                           <td>" + course.credits + "</td>";
        coursesTbody.appendChild(trElement);
    });
}
function applyFilterByName() {
    var text = inputSearchBox.value;
    text = (text == null) ? '' : text;
    clearCoursesInTable();
    var coursesFiltered = searchCourseByName(text, dataCourses);
    renderCoursesInTable(coursesFiltered);
}
function searchCourseByName(nameKey, courses) {
    return nameKey === '' ? dataCourses : courses.filter(function (c) {
        return c.name.toLocaleLowerCase().match(nameKey.toLocaleLowerCase());
    });
}
function getTotalCredits(courses) {
    var totalCredits = 0;
    courses.forEach(function (course) { return totalCredits = totalCredits + course.credits; });
    return totalCredits;
}
function clearCoursesInTable() {
    while (coursesTbody.hasChildNodes()) {
        if (coursesTbody.firstChild != null) {
            coursesTbody.removeChild(coursesTbody.firstChild);
        }
    }
}
