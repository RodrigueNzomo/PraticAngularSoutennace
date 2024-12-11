const listStudent = [
  {
    matricule: "0972846",
    first_name: "Kaffo",
    last_name: "Ramiro",
    email: "sonnyrakaffo@gmail.com",
    phone_number: "+237 672 279 946",
    address: "Yaoundé",
    gender: "Male",
    born_date: "09/09/2000",
  },
  {
    matricule: "08796332",
    first_name: "Nzomo",
    last_name: "Rodrigue",
    email: "rodriguenzomo@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Congo",
    gender: "Male",
    born_date: "09/09/2000",
  },
  {
    matricule: "0982396",
    first_name: "Dialo",
    last_name: "Fatima",
    email: "fatimadia@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Female",
    born_date: "+234 634 982 082",
  },
  {
    matricule: "0987396",
    first_name: "Alhoui",
    last_name: "Sabiha",
    email: "sabihaaloui@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Female",
    born_date: "+234 824 982 082",
  },
  {
    matricule: "0498000",
    first_name: "Isabelle",
    last_name: "Isabelle",
    email: "isabelle@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Female",
    born_date: "+234 824 909 111",
  },
  {
    matricule: "0787093",
    first_name: "Giovani",
    last_name: "Giovani",
    email: "giovani@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Male",
    born_date: "+234 820 882 089",
  },
  {
    matricule: "0498000",
    first_name: "Isabelle",
    last_name: "Isabelle",
    email: "isabelle@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Female",
    born_date: "+234 824 909 111",
  },
  {
    matricule: "0972846",
    first_name: "Kaffo",
    last_name: "Ramiro",
    email: "sonnyrakaffo@gmail.com",
    phone_number: "+237 672 279 946",
    address: "Yaoundé",
    gender: "Male",
    born_date: "09/09/2000",
  },
  {
    matricule: "08796332",
    first_name: "Nzomo",
    last_name: "Rodrigue",
    email: "rodriguenzomo@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Congo",
    gender: "Male",
    born_date: "09/09/2000",
  },
  {
    matricule: "0982396",
    first_name: "Dialo",
    last_name: "Fatima",
    email: "fatimadia@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Female",
    born_date: "+234 634 982 082",
  },
  {
    matricule: "0987396",
    first_name: "Alhoui",
    last_name: "Sabiha",
    email: "sabihaaloui@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Female",
    born_date: "+234 824 982 082",
  },
  {
    matricule: "0498000",
    first_name: "Isabelle",
    last_name: "Isabelle",
    email: "isabelle@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Female",
    born_date: "+234 824 909 111",
  },
  {
    matricule: "0787093",
    first_name: "Giovani",
    last_name: "Giovani",
    email: "giovani@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Male",
    born_date: "+234 820 882 089",
  },
  {
    matricule: "0498000",
    first_name: "Isabelle",
    last_name: "Isabelle",
    email: "isabelle@gmail.com",
    phone_number: "+225 609 387 293",
    address: "Yaoundé",
    gender: "Female",
    born_date: "+234 824 909 111",
  },
];

const listCours = [
  {
    theme: "Génie logiciel",
    hour: 30,
  },
  {
    theme: "Informatique de gestion",
    hour: 30,
  },
  {
    theme: "UX Design",
    hour: 30,
  },
  {
    theme: "Base de données",
    hour: 30,
  },
  {
    theme: "Développement Web",
    hour: 30,
  },
  {
    theme: "Developpement mobile",
    hour: 30,
  },
  {
    theme: "Big Data",
    hour: 30,
  },
  {
    theme: "Introduction à l'intélligence artificielle",
    hour: 30,
  },
  {
    theme: "Data Science",
    hour: 30,
  },
  {
    theme: "Gestion de projet Informatique",
    hour: 30,
  },
  {
    theme: "Algorithme et programmation",
    hour: 30,
  },
  {
    theme: "Sécurité Informatique",
    hour: 30,
  },
];

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
}

class Cours {
  constructor(theme, hour) {
    this.theme = theme;
    this.hour = hour;
  }

  static getAllCours() {
    // Methode qui permet d'obtenir tous les cours dans le stockage local
    const listeCoursString = localStorage.getItem("cours");
    if (listeCoursString) {
      const listeCours = listeCoursString.split("&%&%@");
      return listeCours.map((cours) => {
        const oneCourseList = cours.split("^*^*^");
        return new Cours(oneCourseList[0], oneCourseList[1]);
      });
    } else {
      return [];
    }
  }

  static removeCours(theme) {
    // Methode qui permet de retirer un cours de la base de donnée local
    const listCours = Cours.getAllCours();
    const courseTheme = listCours.findIndex((e) => e.theme == theme);
    if (courseTheme != -1) {
      listCours.splice(courseTheme, 1);
      return true;
    } else {
      return false;
    }
  }

  static addCours(listCours) {
    // Methode qui permet d'ajouter des cours dans le stockage local
    const exesitingCours = Cours.getAllCours();
    listCours.push(exesitingCours);
    const listCombine = listCours.map((e) => [e.theme, e.hour].join("^*^*^"));
    localStorage.setItem("cours", listCombine.join("&%&%@"));
  }

  static populateFakeCours(listCours) {
    // Methode qui permet d'ajouter des cours dans le stockage local initialement
    const listCombine = listCours.map((e) => [e.theme, e.hour].join("^*^*^"));
    localStorage.setItem("cours", listCombine.join("&%&%@"));
  }
}

Student.setStudent(listStudent);

Cours.populateFakeCours(listCours);

const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
const appendAlert = (message, type) => {
  const wrapper = document.createElement("div");
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    "</div>",
  ].join("");

  alertPlaceholder.append(wrapper);
};

const nextBtn = document.getElementById("next_btn");

nextBtn.onclick = (e) => {
  const firstNameInput = document.getElementById("first_name");
  const lastNameInput = document.getElementById("last_name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const addressInput = document.getElementById("address");
  const phoneNmuberInput = document.getElementById("phone_number");
  const passwordConfirmInput = document.getElementById("password_confirm");

  if (passwordInput.value != passwordConfirmInput.value) {
    e.preventDefault();
    appendAlert("Vos mots de passe ne correspondent pas !", "danger");
  } else if (
    [
      firstNameInput.value,
      lastNameInput.value,
      emailInput.value,
      passwordInput.value,
      addressInput.value,
      phoneNmuberInput.value,
      passwordConfirmInput.value,
    ].includes("")
  ) {
    appendAlert("Veuillez remplir tous les champs !", "danger");
    e.preventDefault();
  }
  localStorage.setItem("account_create", "1");
  localStorage.setItem("first_name", firstNameInput.value);
  localStorage.setItem("last_name", lastNameInput.value);
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("password", passwordInput.value);
  localStorage.setItem("address", addressInput.value);
  localStorage.setItem("phone_number", phoneNmuberInput.value);
  localStorage.setItem("password_confirm", passwordConfirmInput.value);
};
