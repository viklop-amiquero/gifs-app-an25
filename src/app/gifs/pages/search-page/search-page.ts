import { Component, inject, signal } from '@angular/core';
import { GifList } from '../../components/gif-list/gif-list';
import { Gif } from '../../interfaces/gif.interface';
import { GifService } from '../../services/gif-service';

@Component({
    selector: 'app-search-page',
    imports: [GifList],
    templateUrl: './search-page.html',
    styleUrl: './search-page.css',
})
export default class SearchPage {
    gifService = inject(GifService);
    gifs = signal<Gif[]>([]);

    onSearch(query: string) {
        this.gifService.searchGifs(query).subscribe((resp) => {
            this.gifs.set(resp);
            console.log(resp);
        });
    }
}
