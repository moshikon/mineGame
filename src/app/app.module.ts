import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SimpleTimer } from 'ng2-simple-timer';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { MineBoxComponent } from './mine-box/mine-box.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    MineBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
