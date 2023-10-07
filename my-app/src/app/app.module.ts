import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MenubuttonsMainComponent } from './menubar/menubuttons-main/menubuttons-main.component';
import { InteractiveBoxComponent } from './interactive-box/interactive-box.component';
import { CenterBoxComponent } from './interactive-box/center-box/center-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    MenubuttonsMainComponent,
    InteractiveBoxComponent,
    CenterBoxComponent,
  ],
  imports: [
    DragDropModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
