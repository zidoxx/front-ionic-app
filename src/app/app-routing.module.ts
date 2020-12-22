import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    {
        path: "",
        loadChildren: () =>
            import("./tabs/tabs.module").then((m) => m.TabsPageModule),
    },
    {
        path: "principal",
        loadChildren: () =>
            import("./principal/principal.module").then(
                (m) => m.PrincipalPageModule
            ),
    },
    {
        path: "movie/:id",
        loadChildren: () =>
            import("./movie/movie.module").then((m) => m.MoviePageModule),
    },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./delete/delete.module').then( m => m.DeletePageModule)
  },
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
