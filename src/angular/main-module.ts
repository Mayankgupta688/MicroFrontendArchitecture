import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import AngularApp from './index.component.ts'
import { enableProdMode } from '@angular/core'
import { APP_BASE_HREF } from "@angular/common"
import { HttpClientModule } from '@angular/common/http';

enableProdMode()

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular/' }],
  declarations: [
    AngularApp
  ],
  bootstrap: [AngularApp]
})
export default class MainModule {
}
