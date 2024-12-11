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
      Cours.setCours(listCours);
      return true;
    } else {
      return false;
    }
  }

  static addCours(listCours) {
    // Methode qui permet d'ajouter des cours dans le stockage local
    const exesitingCours = Cours.getAllCours();
    const maListe = listCours.concat(exesitingCours);
    const listCombine = maListe.map((e) => [e.theme, e.hour].join("^*^*^"));
    localStorage.setItem("cours", listCombine.join("&%&%@"));
  }

  static updateCourse(initialCourseTheme, newCourse) {
    // Methode qui permet de mattre à jour un cours dans la base de données locale
    try {
      Cours.removeCours(initialCourseTheme);
      Cours.addCours([newCourse]);
      return true;
    } catch (error) {
      return false;
    }
  }

  static setCours(listCours) {
    // Methode qui permet d'ajouter des cours dans le stockage local en ecrasant les données qui y existaient déjà
    const listCombine = listCours.map((e) => [e.theme, e.hour].join("^*^*^"));
    localStorage.setItem("cours", listCombine.join("&%&%@"));
  }

  static showAllCourseOnDom() {
    // Supprime et re-affiche tous les cours de la base de données local sur l'interface
    const list_cours_table = document.getElementById("list_cours_table");
    while (list_cours_table.firstChild) {
      list_cours_table.removeChild(list_cours_table.firstChild);
    }
    for (const element of Cours.getAllCours()) {
      const myTd = document.createElement("tr");
      myTd.innerHTML = `<th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" cours_theme="${element.theme}"></th>
                      <td>${element.theme}</td>
                      <td>${element.hour}</td>`;
      list_cours_table.append(myTd);
    }
  }

  static searchCourse(query) {
    // Methode qui permet de rechercher tous les cours dans le stockage local
    const listeCoursString = localStorage.getItem("cours");
    if (listeCoursString) {
      var listeCours = listeCoursString.split("&%&%@");
      listeCours = listeCours.filter((e) =>
        e.toLowerCase().includes(query.toLowerCase())
      );

      return listeCours.map((cours) => {
        const oneCoursList = cours.split("^*^*^");
        return new Cours(
          oneCoursList[0],
          oneCoursList[1],
        );
      });
    } else {
      return [];
    }
  }


  static showSearchResultOnDom(query) {
    // Supprime et affiche le resultat de la recherche sur l'interface
    const list_course_table = document.getElementById("list_cours_table");
    while (list_course_table.firstChild) {
      list_course_table.removeChild(list_course_table.firstChild);
    }
    for (const element of Cours.searchCourse(query)) {
      const myTd = document.createElement("tr");
      myTd.innerHTML = `<th scope="row"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" cours_theme="${element.theme}"></th>
                      <td>${element.theme}</td>
                      <td>${element.hour}</td>`;
      list_course_table.append(myTd);
    }
  }

  static removeCourseOnDom(theme) {
    const selectedCourseInput = document.querySelector(
      `input[cours_theme="${theme}"]`
    );
    const selectedTr = selectedCourseInput.parentElement.parentElement;
    const list_cours_table = document.getElementById("list_cours_table");
    list_cours_table.removeChild(selectedTr);
    Cours.removeCours(theme);
  }
}


const searchInput = document.getElementById("exampleDataList");

const searchQuery = localStorage.getItem("coursSearchQuery");
if (searchQuery) {
  searchInput.value = searchQuery;
  localStorage.removeItem("coursSearchQuery");
  Cours.showSearchResultOnDom(searchQuery);
} else {
  Cours.showAllCourseOnDom();
}



document.getElementById("delete_course_link").onclick = (e) => {
  const selectedInput = document.querySelector(".form-check-input:checked");

  if (selectedInput) {
    Cours.removeCourseOnDom(selectedInput.getAttribute("cours_theme"));
  } else {
    e.preventDefault();
  }
};

document.getElementById("update_course_link").onclick = (e) => {
  const selectedInput = document.querySelector(".form-check-input:checked");
  if (selectedInput) {
    localStorage.setItem(
      "cours_to_modify",
      selectedInput.getAttribute("cours_theme")
    );
  } else {
    e.preventDefault();
  }
};


document.getElementById("search_btn").onclick = (e) => {
  if (searchInput.value) {
    localStorage.setItem("coursSearchQuery", searchInput.value);
    window.location.href = "index.html";
  }
};
