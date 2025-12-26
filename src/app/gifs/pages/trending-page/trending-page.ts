import { Component, inject } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gif-service';

@Component({
    selector: 'app-trending-page',
    imports: [GifList],
    templateUrl: './trending-page.html',
    styleUrl: './trending-page.css',
})
export default class TrendingPage {
    // imagesUrl = signal<string[]>(imageUrls);
    // imagesUrl = signal(imageUrls);

    gifService = inject(GifService);
}
