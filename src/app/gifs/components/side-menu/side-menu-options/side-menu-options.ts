import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from 'src/app/gifs/interfaces/menu-option.interface';

@Component({
    selector: 'gifs-side-menu-options',
    imports: [RouterModule],
    templateUrl: './side-menu-options.html',
    styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {
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
