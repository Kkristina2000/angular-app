import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { ListComponent } from './components/pages/list/list.component'
import { SummaryComponent } from './components/pages/summary/summary.component'

const childrenRoutes: Routes = [
  { path: 'income', component: ListComponent },
  { path: 'outcome', component: ListComponent },
  { path: 'loans', component: ListComponent },
  { path: 'investments', component: ListComponent }
]

const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'navigator', component: ListComponent, children: childrenRoutes }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
