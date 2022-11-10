import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { SummaryModule } from './components/pages/summary/summary.module'
import { ListModule } from './components/pages/list/list.module'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ListModule, SummaryModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
