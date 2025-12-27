import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifService } from '../../services/gif-service';
import { ScrollStateService } from '../../shared/services/scroll-state-service';

@Component({
    selector: 'app-trending-page',
    templateUrl: './trending-page.html',
    styleUrl: './trending-page.css',
})
export default class TrendingPage implements AfterViewInit {
    gifService = inject(GifService);
    scrollStateService = inject(ScrollStateService);

    scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

    ngAfterViewInit(): void {
        const scrollDiv = this.scrollDivRef()?.nativeElement;

        if (!scrollDiv) return;

        scrollDiv.scrollTop = this.scrollStateService.trendingScrollState();
    }

    onScroll(event: Event) {
        const scrollDiv = this.scrollDivRef()?.nativeElement;

        if (!scrollDiv) return;

        const scrollTop = scrollDiv.scrollTop;
        const clientHeight = scrollDiv.clientHeight;
        const scrollHeight = scrollDiv.scrollHeight;
        const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;

        this.scrollStateService.trendingScrollState.set(scrollTop);

        if (isAtBottom) {
            // Todo siguiente página de gifs
            this.gifService.loadTrendingGifs();
        }
    }
}
