import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: 'p[highlight]',
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor')
  color = 'transparent';

  ngOnInit() {
    this.color = this.baseColor;
  }

  @Input('background-color')
  backgroundColor = 'yellow';

  @Input('base-color')
  baseColor = 'transparent';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.color = this.backgroundColor;
  }
}

const p = document.querySelector('p');
const directive = new HighlightDirective();

//Directive Angular pour la mise en surbrillance des éléments
// Introduction
// Dans cet article, nous allons explorer une directive Angular personnalisée qui permet de mettre en surbrillance des éléments de type <p> lorsque l'utilisateur survole ces éléments. Cette directive utilise des décorateurs Angular pour manipuler le style des éléments de manière dynamique.

// Key Concepts
// Avant de plonger dans le code, il est essentiel de comprendre quelques concepts clés :

// Directives : Ce sont des classes qui permettent de manipuler le DOM en ajoutant des comportements ou des styles à des éléments.
// @HostBinding : Ce décorateur permet de lier une propriété d'une directive à une propriété d'un élément hôte.
// @HostListener : Ce décorateur permet d'écouter les événements sur l'élément hôte.
// @Input : Ce décorateur permet de recevoir des valeurs d'entrée dans la directive.
// Code Structure
// La directive HighlightDirective est définie avec plusieurs propriétés et méthodes :

// Sélecteur : La directive est appliquée aux éléments <p> qui possèdent l'attribut highlight.
// Propriétés :
// color : Utilisée pour définir la couleur de fond de l'élément.
// backgroundColor : Couleur de surbrillance par défaut (jaune).
// baseColor : Couleur de fond par défaut (transparent).
// Méthodes :
// ngOnInit() : Méthode du cycle de vie qui initialise la couleur de fond.
// onMouseEnter() : Méthode qui change la couleur de fond lorsque la souris entre dans l'élément.
// Explication du Code
// Importations : Les modules nécessaires d'Angular sont importés pour créer la directive.
// @Directive : Le décorateur définit que cette classe est une directive et spécifie le sélecteur.
// @HostBinding : La propriété color est liée à la propriété style.backgroundColor de l'élément hôte, permettant de changer dynamiquement la couleur de fond.
// @Input : Les propriétés backgroundColor et baseColor permettent de personnaliser les couleurs de surbrillance et de base respectivement.
// @HostListener : La méthode onMouseEnter est déclenchée lorsque la souris entre dans l'élément, changeant la couleur de fond à backgroundColor.
// Conclusion
// La directive HighlightDirective est un excellent exemple de la puissance des directives Angular pour manipuler le DOM de manière dynamique. En utilisant des décorateurs comme @HostBinding et @HostListener, nous pouvons créer des interactions utilisateur enrichissantes et personnalisées. Cette approche permet de rendre les applications Angular plus interactives et engageantes, tout en maintenant un code propre et modulaire.
