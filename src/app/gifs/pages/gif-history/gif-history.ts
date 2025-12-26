import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { GifList } from '../../components/gif-list/gif-list';
import { GifService } from '../../services/gif-service';

@Component({
    selector: 'app-gif-history',
    imports: [GifList],
    templateUrl: './gif-history.html',
    styleUrl: './gif-history.css',
})
export default class GifHistory {
    // transformar observable a señal
    gifService = inject(GifService);
    query = toSignal(inject(ActivatedRoute).params.pipe(map(({ query }) => query)));

    gifsByKey = computed(() => this.gifService.getHistoryGifs(this.query()));
}
