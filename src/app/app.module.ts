//import { BrowserModule } from '@angular/platform-browser';
import{CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import{SearchFilter} from'./pipes/searchFilter'
@NgModule({
  declarations: [
    AppComponent,
    SearchFilter
  ],
  imports: [
    CommonModule,
    FormsModule,
    //BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
