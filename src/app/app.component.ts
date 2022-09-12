import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    loading = false;
    cards: any[];


    constructor() {
        this.cards = Array(8).fill(0).map((x, i) => i);
        console.log(this.cards)
    }

    ngOnInit() { }

    addItems(count = 1) {
        this.cards.push(Array(count).fill(0).map((x, i) => i));
    }

    removeItems(count = 1) {
        this.cards.splice(0, count);
    }

    removeItemAtIndex(idx: number) {
        this.cards.splice(idx, 1);
    }

    // startTimer() {
    //     this.stopTimer();
    //     this.timer = timer(0, 10000).subscribe(() => this.loadData(5));
    //     this.timerRunning = true;
    // }
    // stopTimer() {
    //     this.timerRunning = false;
    //     this.timer?.unsubscribe();
    // }

    // clearData() {
    //     this.dataSource = [];
    //     // this.table.renderRows();
    // }


    // loadData(count: number, clear = false) {
    //     if (clear) {
    //         this.clearData();
    //     }

    //     // if (this.dataSource.length > count * 3) {
    //     //     this.dataSource = this.dataSource.slice(count);
    //     // }
    //     this.loading = true;
    //     let observables = Array.from({ length: count }, () => this.http.get<APIImageData>("https://api.catboys.com/img?" + Math.random() * 10000));

    //     merge(...observables)
    //         .subscribe(
    //             d => {
    //                 this.dataSource.push(d);
    //                 // this.table.renderRows();
    //                 // this.loading = false;
    //                 console.log(d);
    //                 // console.log(this.dataSource);
    //             },
    //             undefined,
    //             () => { this.loading = false }
    //         )
    // }
}



