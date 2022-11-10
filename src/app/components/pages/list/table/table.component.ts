import { Component, Input } from '@angular/core';
import { IData } from '../../../../services/data/data.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

@Input() filteredData: IData[]

}
