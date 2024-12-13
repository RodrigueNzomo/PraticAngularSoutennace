import {
  Component,
  OnInit,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild('barChart') barChartRef!: ElementRef;
  @ViewChild('pieChart1') pieChart1Ref!: ElementRef;
  @ViewChild('pieChart2') pieChart2Ref!: ElementRef;

  constructor() {
    // Enregistrement des composants de Chart.js
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    // Vous pouvez ajouter une initialisation ou des appels API ici si nécessaire
  }

  ngAfterViewInit(): void {
    // Vérifiez que les éléments sont correctement définis avant d'initialiser les graphiques
    if (this.barChartRef && this.pieChart1Ref && this.pieChart2Ref) {
      this.createBarChart();
      this.createPieChart1();
      this.createPieChart2();
    }
  }

  // Fonction pour créer un graphique en barres
  createBarChart(): void {
    new Chart(this.barChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [
          {
            label: 'Sales',
            data: [65, 59, 80, 81, 56],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  // Fonction pour créer un premier graphique circulaire
  createPieChart1(): void {
    new Chart(this.pieChart1Ref.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [
          {
            data: [300, 50, 100],
            backgroundColor: ['red', 'blue', 'yellow'],
            borderColor: 'white',
            borderWidth: 1,
          },
        ],
      },
    });
  }

  // Fonction pour créer un deuxième graphique circulaire
  createPieChart2(): void {
    new Chart(this.pieChart2Ref.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Green', 'Orange', 'Purple'],
        datasets: [
          {
            data: [200, 150, 250],
            backgroundColor: ['green', 'orange', 'purple'],
            borderColor: 'white',
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
