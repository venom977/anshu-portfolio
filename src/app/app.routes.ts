import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard",
        pathMatch: 'full'
    },
    {
        path: "dashboard",
        loadComponent: () => import("../app/content/content.component").then(c => c.ContentComponent),
    },
    {
        path: "projects",
        loadComponent: () => import("../app/projects/projects.component").then(c => c.ProjectsComponent),
    }
];
