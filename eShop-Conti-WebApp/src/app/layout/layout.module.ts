import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { AsidenavbarComponent } from './asidenavbar/asidenavbar.component';
import { FooternavbarComponent } from './footernavbar/footernavbar.component';
import { SettingsnavbarComponent } from './settingsnavbar/settingsnavbar.component';

@NgModule({
  declarations: [
    TopnavbarComponent, 
    AsidenavbarComponent, 
    FooternavbarComponent, 
    SettingsnavbarComponent
  ],
  exports: [
    TopnavbarComponent, 
    AsidenavbarComponent, 
    FooternavbarComponent, 
    SettingsnavbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LayoutModule { }
