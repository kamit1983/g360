import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { FolderService }  from './folder-service';

import { DragulaDirective } from './dragula.directive';
import { DragulaService } from './dragula.provider';

@NgModule({
  imports:      [   BrowserModule ,
					FormsModule,
					CommonModule,
					 HttpModule
				],
  exports: [DragulaDirective],
  declarations: [ AppComponent , DragulaDirective],
  providers: [ FolderService , DragulaService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
