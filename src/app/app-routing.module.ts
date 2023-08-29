import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "workers" },
  { path: "workers", loadChildren: () => import("./pages/workers/workers.module").then(m => m.WorkersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
