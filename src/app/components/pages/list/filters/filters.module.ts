import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { FiltersComponent } from './filters.component'

@NgModule({
  declarations: [FiltersComponent],
  exports: [FiltersComponent],
  imports: [CommonModule, RouterModule]
})
export class FiltersModule {}
