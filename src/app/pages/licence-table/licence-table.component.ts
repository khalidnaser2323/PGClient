import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Chart } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { ServiceHandlerProvider } from '../../services/service-handler/service-handler';
import { Constants } from '../../Constants';
import { Location } from '@angular/common';

@Component({
    selector: 'app-licence-table',
    templateUrl: './licence-table.component.html',
    styleUrls: ['./licence-table.component.css']
})
export class LicenceTableComponent implements OnInit {
    ctx: any;
    chart = [];
    licenseData: LicenseModel = {
        overView: "",
        tableData: []
    };
    pillarId: string;
    cardId: string;
    templateId: string;
    pillarName: string;
    cardTitle: string;
    templateTitle: string;
    @Input('params') params: { name: string, pillar: string, card: string, tmp: string };
    @Input() zoomContent: boolean;

    @ViewChild('myCanvas') canvasRef: ElementRef;
    constructor(
        private route: ActivatedRoute,
        public serviceHandler: ServiceHandlerProvider,
        private _location: Location
    ) {
        // this.route.params.subscribe(params => {
        //     console.log(params);
        //     this.pillarId = params.pillar;
        //     this.cardId = params.card;
        //     this.templateId = params.tmp;
        //     this.pillarName = params.name;
        //     this.getCardDetails(this.pillarId, this.cardId);
        // });

    }

    ngOnInit() {
        this.pillarId = this.params.pillar;
        this.cardId = this.params.card;
        this.templateId = this.params.tmp;
        this.pillarName = this.params.name;
        this.getCardDetails(this.pillarId, this.cardId);
    }
    backClicked() {
        this._location.back();
    }
    getCardDetails(pillarId: string, cardId: string) {
        const url = Constants.BASE_URL + "section/" + pillarId + "/" + cardId;
        this.serviceHandler.runService(url, "GET").subscribe((cardDetails) => {
            console.log("Get card details response");
            console.log(cardDetails);
            debugger;
            if (cardDetails && cardDetails.templates && cardDetails.templates[this.templateId] && cardDetails.templates[this.templateId].payload && cardDetails.templates[this.templateId].payload.data) {
                this.licenseData = cardDetails.templates[this.templateId].payload.data;
                this.cardTitle = cardDetails.title;
                this.templateTitle = cardDetails.templates[this.templateId].title;
                this.showChart();
            }
        }, err => {
            console.log("Get card details error");
            console.error(err);
            window.alert("OOPS! something went wrong");
        });
    }
    showChart() {
        this.ctx = this.canvasRef.nativeElement.getContext('2d');
        let chartLabels: Array<string> = [];
        let chartData: Array<string> = [];
        for (let row of this.licenseData.tableData) {
            chartLabels.push(row.OrderDate);
            chartData.push(row.TotalCost);
        }
        this.chart = new Chart(this.ctx, {
            type: 'line',
            data: {
                labels: chartLabels,
                datasets: [{
                    lineTension: '0',

                    label: 'TotalCost',
                    data: chartData
                    ,
                    backgroundColor: [
                        'rgba(00, 99, 132, 0.2)',
                    ],
                    fill: false,
                    borderColor: [
                        'rgba(0, 51, 0,1)',
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }
}
