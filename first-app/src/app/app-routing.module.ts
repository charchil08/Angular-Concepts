import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./modules/passenger-dashboard/components/home/home.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
})

export class AppRoutingModule {
}