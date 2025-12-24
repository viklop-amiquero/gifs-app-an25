import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Component({
    selector: 'app-gif-history',
    imports: [],
    templateUrl: './gif-history.html',
    styleUrl: './gif-history.css',
})
export default class GifHistory {
    // transformar observable a señal
    query = toSignal(inject(ActivatedRoute).params.pipe(map(({ query }) => query)));
}
