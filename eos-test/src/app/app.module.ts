import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockInfoService } from './block-info/block-info.service';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material/material.module';
import { BlockListComponent } from './block-list/block-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlockListComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [
    BlockInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
