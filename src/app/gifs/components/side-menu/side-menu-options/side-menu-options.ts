import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from 'src/app/gifs/interfaces/menu-option.interface';
import { GifService } from 'src/app/gifs/services/gif-service';

@Component({
    selector: 'gifs-side-menu-options',
    imports: [RouterModule],
    templateUrl: './side-menu-options.html',
    styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {
    gifService = inject(GifService);

    menuOptions: MenuOption[] = [
        {
            icon: 'fa-solid fa-chart-line',
            label: 'trending',
            sublabel: 'Gifs Populares',
            route: '/dashboard/trending',
        },
        {
            icon: 'fa-solid fa-magnifying-glass',
            label: 'Buscador',
            sublabel: 'Buscar gifs',
            route: '/dashboard/search',
        },
    ];
}
