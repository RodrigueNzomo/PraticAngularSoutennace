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
    const t = [""];
    t.filter((e) => e.includes());
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

  static searchStudent(query) {
    // Methode qui permet d'obtenir tous les Student dans le stockage local
    const listeStudentString = localStorage.getItem("student");
    if (listeStudentString) {
      var listeStudent = listeStudentString.split("&%&%@");
      listeStudent = listeStudent.filter((e) =>
        e.toLowerCase().includes(query.toLowerCase())
      );

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

  static showSearchResultOnDom(query) {
    // Supprime et affiche le resultat de la recherche sur l'interface
    const list_Student_table = document.getElementById("list_student_table");
    while (list_Student_table.firstChild) {
      list_Student_table.removeChild(list_Student_table.firstChild);
    }
    for (const element of Student.searchStudent(query)) {
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
}
const searchInput = document.getElementById("exampleDataList");

const searchQuery = localStorage.getItem("searchQuery");
if (searchQuery) {
  searchInput.value = searchQuery;
  localStorage.removeItem("searchQuery");
  Student.showSearchResultOnDom(searchQuery);
} else {
  Student.showAllStudenteOnDom();
}

document.getElementById("delete_student_link").onclick = (e) => {
  const selectedInput = document.querySelector(".form-check-input:checked");

  if (selectedInput) {
    Student.removeStudentOnDom(selectedInput.getAttribute("student_matricule"));
myappendAlert("Étudiant supprimé avec succès !", "success");

  } else {
    e.preventDefault();
  }
};

document.getElementById("search_btn").onclick = (e) => {
  if (searchInput.value) {
    localStorage.setItem("searchQuery", searchInput.value);
    window.location.href = "index.html";
  }
};

document.getElementById("update_student_link").onclick = (e) => {
  const selectedInput = document.querySelector(".form-check-input:checked");
  if (selectedInput) {
    localStorage.setItem(
      "student_to_modify",
      selectedInput.getAttribute("student_matricule")
    );
  } else {
    e.preventDefault();
  }
};



const success_message = localStorage.getItem("success_message");


const myalertPlaceholder = document.getElementById("liveAlertPlaceholder");
const myappendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  myalertPlaceholder.append(wrapper);
};


if (success_message) {
    myappendAlert(success_message, "success");
  localStorage.removeItem("success_message")
}