import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { RemoteGridBindingDirective } from './remote-grid-binding.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, AgGridModule.withComponents([])],
  declarations: [AppComponent, RemoteGridBindingDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
