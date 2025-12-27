import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gif-service';

@Component({
    selector: 'app-trending-page',
    templateUrl: './trending-page.html',
    styleUrl: './trending-page.css',
})
export default class TrendingPage {
    gifService = inject(GifService);

    scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

    onScroll(event: Event) {
        const scrollDiv = this.scrollDivRef()?.nativeElement;

        if (!scrollDiv) return;

        const scrollTop = scrollDiv.scrollTop;
        const clientHeight = scrollDiv.clientHeight;
        const scrollHeight = scrollDiv.scrollHeight;
        const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

        if (isAtBottom) {
            // Todo siguiente página de gifs
            this.gifService.loadTrendingGifs();
        }
    }
}
