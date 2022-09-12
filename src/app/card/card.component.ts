import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable, Subscription, tap, timer } from 'rxjs';

interface APIImageData {
    artist: string;
    url: string;
}

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
    @Output() removeItemEvent = new EventEmitter<void>();

    cardTitle: string | undefined;
    sub: Subscription | undefined;
    img: string | undefined;
    loading = false;
    constructor(private http: HttpClient) { }


    ngOnInit(): void {
        timer(0, 10000).subscribe(() => this.loadCard());
        // this.loadCard();
    }

    ngOnDestroy(): void {
        if (this.sub !== undefined) {
            this.sub.unsubscribe();
        }
    }

    loadCard(): void {
        this.img = "https://picsum.photos/400/400?" + Math.random() * 1000000
        // this.loading = true;
        // this.img = undefined;
        // this.cardTitle = undefined;

        // console.log("loadcard")
        // this.sub = this.http.get<APIImageData>("https://api.catboys.com/img?" + Math.random() * 10000)
        //     .subscribe((x) => {
        //         this.cardTitle = x.artist;
        //         this.img = x.url;
        //         this.loading = false;
        //     });
    }

    removeCard(): void {
        this.removeItemEvent.emit();
    }
}
