import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { map, Observable, tap } from 'rxjs';
import { Gif } from '../interfaces/gif.interface';
import { GiphyResponse } from '../interfaces/giphy.interface';
import { GifMapper } from '../mapper/gif.mapper';

const GIF_KEY = 'gifs';

const loadFromLocalStorage = () => {
    const gifsFromLocalStorage = localStorage.getItem(GIF_KEY) ?? '[]';
    const gifs = JSON.parse(gifsFromLocalStorage);
    console.log(gifs);
    return gifs;
};
@Injectable({
    providedIn: 'root',
})
export class GifService {
    private _http = inject(HttpClient);
    trendigGifs = signal<Gif[]>([]);
    trendingGifsLoading = signal(true);

    searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
    searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));

    constructor() {
        this.loadTrendingGifs();
    }

    saveGifsToLocalStorage = effect(() => {
        const historyString = JSON.stringify(this.searchHistory());

        localStorage.setItem('gifs', historyString);
    });

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
                this.trendingGifsLoading.set(false);
                // console.log(gifs);
            });
    }

    searchGifs(query: string): Observable<Gif[]> {
        return this._http
            .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
                params: {
                    api_key: environment.apiKey,
                    q: query,
                    limit: 20,
                },
            })
            .pipe(
                map(({ data }) => data),
                map((items) => GifMapper.mapGiphyItemsToGifArray(items)),
                tap((items) => {
                    this.searchHistory.update((history) => ({
                        ...history,
                        [query.toLowerCase()]: items,
                    }));
                })
            );
    }

    getHistoryGifs(query: string): Gif[] {
        return this.searchHistory()[query] ?? [];
    }
}
