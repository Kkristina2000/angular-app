import { Component, EventEmitter, Output } from '@angular/core'

import { IFilterItem } from './filters.interface'

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent {
  filterItems: IFilterItem[] = [
    { path: 'income', title: 'Income', type: 'income' },
    { path: 'outcome', title: 'Outcome', type: 'outcome' },
    { path: 'loans', title: 'Loans', type: 'loan' },
    { path: 'investments', title: 'Investments', type: 'investment' }
  ]
  @Output() filterData = new EventEmitter<{ type: string }>()

  handleFilter(type: string) {
    this.filterData.emit({ type })
  }
}
