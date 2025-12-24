import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interface';

@Injectable({
    providedIn: 'root',
})
export class GifService {
    private _http = inject(HttpClient);

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
                console.log(resp);
            });
    }
}
