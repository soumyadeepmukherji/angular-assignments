import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, registerables } from 'chart.js';

Chart.register(...registerables)
@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements AfterViewInit, OnDestroy{

   @ViewChild('userChart')
  userChart!: ElementRef<HTMLCanvasElement>;

  @ViewChild('bubbleChart')
  bubbleChart!: ElementRef<HTMLCanvasElement>;

  @ViewChild('pieChat')
  pieChat!: ElementRef<HTMLCanvasElement>;

  @ViewChild('lineChat')
  lineChat!: ElementRef<HTMLCanvasElement>;

  @ViewChild('scatterChart')
  scatterChat!: ElementRef<HTMLCanvasElement>;

  @ViewChild('doughnutChart')
  doughnutChart!: ElementRef<HTMLCanvasElement>;

  chart?: Chart<'bar'>

  BubbleChart?: Chart<'bubble'>

  PieChart?: Chart<'pie'>

  LineChart?: Chart<'line'>

  ScatterChart?: Chart<'scatter'>

  DoughnutChart?: Chart<'doughnut'>

  ngAfterViewInit(): void {
    this.createChart()
  }

  createChart(): void{
    const config: ChartConfiguration<'bar'> = {
      type: 'bar',
      data:{
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

        datasets: [
          {
            label: 'Registered Users',
            data: [12, 19, 8, 15, 25, 30],
            backgroundColor: '#3b82f6',
            borderRadius: 6,
            barThickness: 35
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,

        plugins: {
          legend: {
            display: false,
            position: 'top'
          },

          title: {
            display: true,
            text: 'Monthly User Registrations'
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              precision: 0
            }
          }
        }
      }
    }

    const config2: ChartConfiguration<'bubble'> = {
        type: 'bubble',
        data:{
          datasets: [{
            label: 'First Dataset',
            data: [{
              x: 21,
              y: 29,
              r: 15
            },
            {
              x: 30,
              y: 21,
              r: 12
            } 
            ,{
              x: 40,
              y: 10,
              r: 10
            }],
            backgroundColor: 'rgb(255, 99, 132)'
          }]
        },
        options: {
          plugins: {
            legend: {
              display: false
            }
          }
        }
    }

    const config3: ChartConfiguration<'pie'> = {
      type: 'pie',
      data: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
      },
      options: {
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    }

    const config4: ChartConfiguration<'line'> = {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My DataSet',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: '#000',
          tension: 0
        }]
      }
    }

    const config5: ChartConfiguration<'scatter'> = {
      type: 'scatter',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'Scatter Dataset',
          data: [{
            x: -10,
            y: 0
          }, {
            x: 0,
            y: 10
          }, {
            x: 10,
            y: 5
          }, {
            x: 0.5,
            y: 5.5
          }],
          backgroundColor: 'rgb(255, 99, 132)',
          pointRadius: 6
        },
        {
          label: 'Scatter Data2',
          data: [{
            x: -6,
            y: 1
          },
          {
            x: -2,
            y: 5
          },
          {
            x:4,
            y:7
          }
        ],
        backgroundColor: 'rgb(13, 239, 243)',
        pointRadius:8
        }
      ],
      }
    }

    const config6: ChartConfiguration<'doughnut'> = {
      type: 'doughnut',
      data: {
        labels: [
          'Vilote',
          'Blue',
          'Purple'
        ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(150, 10, 244)',
          'rgb(54, 162, 235)',
          'rgb(237, 11, 214)'
        ],
        hoverOffset: 4
      }]
      },
    }

    this.chart = new Chart( this.userChart.nativeElement,config);
    this.BubbleChart = new Chart(this.bubbleChart.nativeElement,config2);
    this.PieChart = new Chart(this.pieChat.nativeElement,config3)
    this.LineChart = new Chart(this.lineChat.nativeElement,config4)
    this.ScatterChart = new Chart(this.scatterChat.nativeElement,config5)
    this.DoughnutChart = new Chart(this.doughnutChart.nativeElement,config6)
  }

  ngOnDestroy(): void {
    this.chart?.destroy()
  }
}
