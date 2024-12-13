import { Component } from '@angular/core';
import { StatistiquesService } from '../statistiques.service';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent {
  statistiques: any;

  constructor(private statistiquesService: StatistiquesService) { }

  ngOnInit(): void {
    // Appeler le service pour récupérer les données statiques
    this.statistiquesService.getStatistiques().subscribe((data) => {
      this.statistiques = data;
    });
  }
}
