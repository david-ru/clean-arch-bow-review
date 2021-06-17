import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataModule } from './data/data.module';
import { CoreModule } from './core/core.module';
import { PresentationModule } from './presentation/presentation.module';
import { BowMockRepository } from './data/repository/bow-mock-repository/bow-mock.repository';
import { BowRepository } from './core/repositories/bow.repository';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DataModule, CoreModule, PresentationModule, BrowserAnimationsModule],
  providers: [{ provide: BowRepository, useClass: BowMockRepository }],
  bootstrap: [AppComponent]
})
export class AppModule {}