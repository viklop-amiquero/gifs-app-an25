import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuOption } from './interfaces/menu-option.interface';

@Component({
    selector: 'gifs-side-menu-options',
    imports: [RouterModule],
    templateUrl: './side-menu-options.html',
    styleUrl: './side-menu-options.css',
})
export class SideMenuOptions {
    menuOptions = signal<MenuOption[]>([
        {
            label: 'trading',
            subLabel: 'Gifs populares',
            icon: 'fa-solid fa-chart-line',
            route: '/dashboard/trending',
        },
        {
            label: 'Buscador',
            subLabel: 'Buscar gifs',
            icon: 'fa-solid fa-magnifying-glass',
            route: '/dashboard/search',
        },
    ]);
    // menuOptions: MenuOption[] = [
    //     {
    //         label: 'trading',
    //         subLabel: 'Gifs populares',
    //         icon: 'fa-solid fa-chart-line',
    //         route: '/dashboard/trending',
    //     },
    //     {
    //         label: 'Buscador',
    //         subLabel: 'Buscar gifs',
    //         icon: 'fa-solid fa-chart-glass',
    //         route: '/dashboard/search',
    //     },
    // ];
}
