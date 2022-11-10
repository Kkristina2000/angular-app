import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { ListComponent } from './list.component'
import { FiltersModule } from './filters/filters.module'
import { TableModule } from './table/table.module'

@NgModule({
  declarations: [ListComponent],
  exports: [ListComponent],
  imports: [CommonModule, FiltersModule, TableModule]
})
export class ListModule {}
