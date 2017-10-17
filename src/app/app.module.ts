import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MemoComponent } from './memo/memo.component';
import { InputMemoComponent } from './input-memo/input-memo.component';

@NgModule({
  declarations: [
    AppComponent,
    MemoComponent,
    InputMemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
