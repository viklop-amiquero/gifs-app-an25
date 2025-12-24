import { Component, inject } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gif-service';

@Component({
    selector: 'app-search-page',
    imports: [GifList],
    templateUrl: './search-page.html',
    styleUrl: './search-page.css',
})
export default class SearchPage {
    gifService = inject(GifService);

    onSearch(query: string) {
        this.gifService.searchGifs(query);
    }
}
