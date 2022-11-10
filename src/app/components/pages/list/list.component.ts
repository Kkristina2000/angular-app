import { Component, OnInit } from '@angular/core'

import { DataService } from 'src/app/services/data/data.service'
import { IData } from '../../../services/data/data.interface'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  data: IData[] = []
  filteredData: IData[] = []

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAll().subscribe(data => {
      this.data = data
    })
  }

  onFilter(eventData: { type: string }) {
    this.filteredData = this.data.filter(data => data.type === eventData.type)
    console.log(this.filteredData)
  }
}
