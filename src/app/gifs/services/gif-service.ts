import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { Gif } from '../interfaces/gif.interface';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { GifMapper } from '../mapper/gif.mapper';

@Injectable({
    providedIn: 'root',
})
export class GifService {
    private _http = inject(HttpClient);
    trendigGifs = signal<Gif[]>([]);

    constructor() {
        this.loadTrendingGifs();
    }

    loadTrendingGifs() {
        this._http
            .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
                params: {
                    api_key: environment.apiKey,
                    limit: 20,
                },
            })
            .subscribe((resp) => {
                const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
                this.trendigGifs.set(gifs);
            });
    }
}
