import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';

import { AppComponent } from './app.component';
import { BorderComponent } from './border/border.component';
import { BorderRadiusComponent } from './border-radius/border-radius.component';
import { BoxShadowComponent } from './box-shadow/box-shadow.component';
import { TextShadowComponent } from './text-shadow/text-shadow.component';
import { OutlineComponent } from './outline/outline.component';
import { TransformComponent } from './transform/transform.component';
import { TransitionComponent } from './transition/transition.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    BorderComponent,
    BorderRadiusComponent,
    BoxShadowComponent,
    TextShadowComponent,
    OutlineComponent,
    TransformComponent,
    TransitionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ColorPickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
