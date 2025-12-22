import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenu } from '../../components/side-menu/side-menu';

@Component({
    selector: 'app-dashboard-page',
    imports: [RouterModule, SideMenu],
    templateUrl: './dashboard-page.html',
    styleUrl: './dashboard-page.css',
})
export default class DashboardPage {}
