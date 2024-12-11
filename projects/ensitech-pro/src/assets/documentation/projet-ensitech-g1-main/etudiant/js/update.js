class Student {
  constructor(
    matricule,
    first_name,
    last_name,
    email,
    phone_number,
    address,
    gender,
    born_date
  ) {
    this.matricule = matricule;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.phone_number = phone_number;
    this.address = address;
    this.gender = gender;
    this.born_date = born_date;
  }

  static getAllStudent() {
    // Methode qui permet d'obtenir tous les Student dans le stockage local
    const listeStudentString = localStorage.getItem("student");
    if (listeStudentString) {
      const listeStudent = listeStudentString.split("&%&%@");
      return listeStudent.map((student) => {
        const oneStudenteList = student.split("^*^*^");
        return new Student(
          oneStudenteList[0],
          oneStudenteList[1],
          oneStudenteList[2],
          oneStudenteList[3],
          oneStudenteList[4],
          oneStudenteList[5],
          oneStudenteList[6],
          oneStudenteList[7]
        );
      });
    } else {
      return [];
    }
  }

  static removeStudent(matricule) {
    // Methode qui permet de retirer un Student de la base de donnée local
    const listStudent = Student.getAllStudent();
    const studentIndex = listStudent.findIndex((e) => e.matricule == matricule);
    if (studentIndex != -1) {
      listStudent.splice(studentIndex, 1);
      Student.setStudent(listStudent);
      return true;
    } else {
      return false;
    }
  }

  static genererMatricule() {
    // Générer un nombre aléatoire entre 10000000 et 99999999
    const matricule = Math.floor(Math.random() * 90000000) + 10000000;

    return matricule.toString(); // Convertir le nombre en chaîne de caractères
  }

  static addStudent(listStudent) {
    // Methode qui permet d'ajouter des Student dans le stockage local
    const exesitingStudent = Student.getAllStudent();
    const maListe = listStudent.concat(exesitingStudent);
    const listCombine = maListe.map((e) =>
      [
        e.matricule,
        e.first_name,
        e.last_name,
        e.email,
        e.phone_number,
        e.address,
        e.gender,
        e.born_date,
      ].join("^*^*^")
    );
    localStorage.setItem("student", listCombine.join("&%&%@"));
  }

  static updateStudente(initialStudentTheme, newStudent) {
    // Methode qui permet de mattre à jour un Student dans la base de données locale
    try {
      Student.removeStudent(initialStudentTheme);
      Student.addStudent([newStudent]);
      return true;
    } catch (error) {
      return false;
    }
  }

  static setStudent(listStudent) {
    // Methode qui permet d'ajouter des Student dans le stockage local en ecrasant les données qui y existaient déjà
    const listCombine = listStudent.map((e) =>
      [
        e.matricule,
        e.first_name,
        e.last_name,
        e.email,
        e.phone_number,
        e.address,
        e.gender,
        e.born_date,
      ].join("^*^*^")
    );
    localStorage.setItem("student", listCombine.join("&%&%@"));
  }

  static showAllStudenteOnDom() {
    // Supprime et re-affiche tous les Student de la base de données local sur l'interface
    const list_Student_table = document.getElementById("list_student_table");
    while (list_Student_table.firstChild) {
      list_Student_table.removeChild(list_Student_table.firstChild);
    }
    for (const element of Student.getAllStudent()) {
      const myTd = document.createElement("tr");
      myTd.innerHTML = `<th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" student_matricule="${element.matricule}"></th>
              <td>${element.matricule}</td>
              <td>${element.last_name}</td>
              <td>${element.first_name}</td>
              <td>${element.email}</td>
              <td>${element.phone_number}</td>
            </tr>`;
      list_Student_table.append(myTd);
    }
  }

  static removeStudentOnDom(matricule) {
    const selectedStudenteInput = document.querySelector(
      `input[student_matricule="${matricule}"]`
    );
    const selectedTr = selectedStudenteInput.parentElement.parentElement;
    const list_Student_table = document.getElementById("list_student_table");
    list_Student_table.removeChild(selectedTr);
    Student.removeStudent(matricule);
  }

  static getStudentByMatricule(matricule) {
    // Methode qui permet de retirer un étudiant de la base de donnée local
    const listStudent = Student.getAllStudent();
    const studentIndex = listStudent.findIndex((e) => e.matricule == matricule);
    if (studentIndex != -1) {
      return listStudent[studentIndex];
    }
  }
}

const student_matricule = localStorage.getItem("student_to_modify");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email = document.getElementById("email");
const phone_number = document.getElementById("phone_number");
const address = document.getElementById("address");
const born_date = document.getElementById("born_date");
const gender = document.getElementById("gender");
let student;
if (student_matricule) {
  const student = Student.getStudentByMatricule(student_matricule);
  first_name.value = student.first_name;
  last_name.value = student.last_name;
  email.value = student.email;
  phone_number.value = student.phone_number;
  address.value = student.address;
  born_date.value = student.born_date;
  gender.value = student.gender;
}

document.getElementById("update_student_link").onclick = (e) => {
  const newStudent = new Student(
    student.matricule,
    first_name.value,
    last_name.value,
    email.value,
    phone_number.value,
    address.value,
    gender.value,
    born_date.value
  );
  Student.updateStudente(student_matricule, newStudent);
  localStorage.setItem("success_message", "Mise à jour éffectuée avec succès !")
  localStorage.removeItem("student_to_modify");
};
