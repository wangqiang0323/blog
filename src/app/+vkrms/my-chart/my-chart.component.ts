import { Component, OnInit } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
import * as highcharts from 'highcharts';

@Component({
    selector: 'app-my-chart',
    templateUrl: './my-chart.component.html',
    styleUrls: ['./my-chart.component.styl']
})
export class MyChartComponent implements OnInit {
    optionsOne: Object;
    optionsTwo: Object;
    optionsThree: Object;
    optionsFour: Object;


    constructor(private jsonp: Jsonp) { }

    ngOnInit() {
        // this.setOptionsOne();
        this.setOptionsTwo();
        this.setOptionsThree();
    }

    // setOptionsOne() {
    //     this.jsonp.request('http://datas.org.cn/jsonp?filename=json/usdeur.json&callback=JSONP_CALLBACK').subscribe(res => {
    //         this.optionsOne = {
    //             timezoneOffset: -8,
    //             chart: {
    //                 zoomType: 'x'
    //             },
    //             title: {
    //                 text: '美元兑欧元汇率走势图'
    //             },
    //             subtitle: {
    //                 text: document.ontouchstart === undefined ?
    //                     '鼠标拖动可以进行缩放' : '手势操作进行缩放'
    //             },
    //             xAxis: {
    //                 type: 'datetime',
    //                 dateTimeLabelFormats: {
    //                     millisecond: '%H:%M:%S.%L',
    //                     second: '%H:%M:%S',
    //                     minute: '%H:%M',
    //                     hour: '%H:%M',
    //                     day: '%m-%d',
    //                     week: '%m-%d',
    //                     month: '%Y-%m',
    //                     year: '%Y'
    //                 }
    //             },
    //             tooltip: {
    //                 dateTimeLabelFormats: {
    //                     millisecond: '%H:%M:%S.%L',
    //                     second: '%H:%M:%S',
    //                     minute: '%H:%M',
    //                     hour: '%H:%M',
    //                     day: '%Y-%m-%d',
    //                     week: '%m-%d',
    //                     month: '%Y-%m',
    //                     year: '%Y'
    //                 }
    //             },
    //             yAxis: {
    //                 title: {
    //                     text: 'Exchange rate'
    //                 }
    //             },
    //             legend: {
    //                 enabled: false
    //             },
    //             plotOptions: {
    //                 area: {
    //                     fillColor: {
    //                         linearGradient: {
    //                             x1: 0,
    //                             y1: 0,
    //                             x2: 0,
    //                             y2: 1
    //                         },
    //                         stops: [
    //                             [0, highcharts.getOptions().colors[0]],
    //                             [1, highcharts.Color(highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
    //                         ]
    //                     },
    //                     marker: {
    //                         radius: 2
    //                     },
    //                     lineWidth: 1,
    //                     states: {
    //                         hover: {
    //                             lineWidth: 1
    //                         }
    //                     },
    //                     threshold: null
    //                 }
    //             },
    //             series: [{
    //                 type: 'area',
    //                 name: '美元兑欧元',
    //                 data: res.json()
    //             }]
    //         };
    //     });

    // }

    setOptionsTwo() {
        this.jsonp.request('https://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=JSONP_CALLBACK').subscribe(res => {
            this.optionsTwo = {
                title: { text: 'AAPL Stock Price' },
                series: [{
                    name: 'AAPL',
                    data: res.json(),
                    tooltip: {
                        valueDecimals: 2
                    }
                }]
            };
        });
    }

    setOptionsThree() {
        this.optionsThree = {
            chart: { type: 'spline' },
            title: { text: 'dynamic data example' },
            series: [{ data: [2, 3, 5, 8, 13] }]
        };

    }

    setOptionsFour() {
        this.optionsFour = {

        }
    }

    saveInstance(chartInstance) {
        setInterval(() => chartInstance.series[0].addPoint(Math.random() * 10), 1000);
    }

    onChartSelection(e) {

    }

}
