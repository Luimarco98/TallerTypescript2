class Course {
  name: string;
  credits: number;
  professor: string;

  constructor(name: string, professor: string, credits: number) {
    this.name = name;
    this.credits = credits;
    this.professor = professor;
  }
}

const dataCourses = [
  new Course("Ingeniería de Sw", "Pablo Picasso", 4),
  new Course("Futbol 1", "Freddy Rincón", 2),
  new Course("Algoritmos", "Carlos Fuentes", 2),
  new Course("Estructuras de Datos", "Yesid D", 1),
  new Course("Futbol 2", "James R", 6)
]


let coursesTbody: HTMLElement = document.getElementById('courses')!;
const btnfilterByName: HTMLElement = document.getElementById("button-filterByName")!;
const inputSearchBox: HTMLInputElement = <HTMLInputElement>document.getElementById("search-box")!;
// const totalCreditElm: HTMLElement = document.getElementById("total-credits")!;


btnfilterByName.onclick = () => applyFilterByName();
// equivalentes
// btnfilterByName.addEventListener("click", () => applyFilterByName());

renderCoursesInTable(dataCourses);

// totalCreditElm.innerHTML = `${getTotalCredits(dataCourses)}`


function renderCoursesInTable(courses: Course[]): void {
  console.log('Desplegando cursos');
  courses.forEach((course) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${course.name}</td>
                           <td>${course.professor}</td>
                           <td>${course.credits}</td>`;
    coursesTbody.appendChild(trElement);
  });
}




function applyFilterByName() {
  let text = inputSearchBox.value;
  text = (text == null) ? '' : text;
  clearCoursesInTable();
  let coursesFiltered: Course[] = searchCourseByName(text, dataCourses);
  renderCoursesInTable(coursesFiltered);
}

function searchCourseByName(nameKey: string, courses: Course[]) {
  return nameKey === '' ? dataCourses : courses.filter(c =>
    c.name.toLocaleLowerCase().match(nameKey.toLocaleLowerCase()));
}


function getTotalCredits(courses: Course[]): number {
  let totalCredits: number = 0;
  courses.forEach((course) => totalCredits = totalCredits + course.credits);
  return totalCredits;
}

function clearCoursesInTable() {
  while (coursesTbody.hasChildNodes()) {
    if (coursesTbody.firstChild != null) {
      coursesTbody.removeChild(coursesTbody.firstChild);

    }
  }
}