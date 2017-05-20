import { Component } from '@angular/core';
import {MineBox} from './mine-box.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
    width: number;
    height: number;
    mines: number;
    flags: number;
    space: MineBox[][];
    revealedCount: number;
    revealAll: boolean;
    lost: boolean;
    won: boolean;
    restartTable: boolean;
    flagsOnMines: number;

  constructor() {}

superman(): void{
    if(this.revealAll){
        this.revealAll = false;
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.space[i][j].setSuperman(false);
            }
        }
    } else{
        this.revealAll = true;
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.space[i][j].setSuperman(true);
            }
        }
    }
}

  onChange() {
        const max = 300;
        const min = 1;
        if (this.width > max) {
            this.width = max;
        }
        if (this.width < min) {
            this.width = min;
        }
        if (this.height > max) {
            this.height = max;
        }
        if (this.height < min) {
            this.height = min;
        }
        const maxMines = this.width*this.height;
        if (this.mines > maxMines) {
            this.mines = maxMines;
        }
        if (this.mines < min) {
            this.mines = min;
        }
}

  boxClicked(event,i: number, j: number): void {
        if(event.shiftKey){
            this.putFlag(i,j);
        }else
        this.reveal(i, j);
 }
 
  public restart(): void {
    if(this.restartTable){
        this.restartTable = false;
        document.getElementById("myDiv").style.backgroundImage = "url('./back.jpg')";
        return;
    }
    document.getElementById("myDiv").style.backgroundImage = "url('./sky.jpg')";
    this.restartTable = true;
    this.flags = this.mines;
    this.space = [];
    this.revealedCount = 0;
    this.flagsOnMines = 0;
    this.lost = false;
    this.won = false;
    this.revealAll = false;
    this.generateMineBoxes();
    this.generateMines();
    this.generateDanger();
  }
    /**
     * Generate mine of boxes into field
     */
    private generateMineBoxes(): void {
        for (let i = 0; i < this.width; i++) {
            this.space[i] = [];
            for (let j = 0; j < this.height; j++) {
                this.space[i][j] = new MineBox(i, j);
            }
        }
    }

        /**
     * Generate mines into random mine boxes
     */
    private generateMines(): void {
        let minesCount = this.mines;
        while (minesCount !== 0) { // while any mine left
            const randomI = Math.floor(Math.random() * this.width);
            const randomJ = Math.floor(Math.random() * this.height);
            if (!this.space[randomI][randomJ].getMine()) { // box does not have mine
                this.space[randomI][randomJ].setMine(true);
                minesCount--;
            }
        }
    }
    /**
     * Generate danger depends on neighbours
     */
    private generateDanger(): void {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                let danger = 0;
                if (i !== 0) { // if is not in first row, i can chceck row abowe
                    if (this.space[i - 1][j].getMine()) {
                        danger++;
                    }
                }
                if (i !== this.width - 1) { // if is not in last row, i can chceck row under
                    if (this.space[i + 1][j].getMine()) {
                        danger++;
                    }
                }
                if (j !== 0) { // if is not in first col, i can chceck col left
                    if (this.space[i][j - 1].getMine()) {
                        danger++;
                    }
                }
                if (j !== this.height - 1) { // if is not in last col, i can chcek right col
                    if (this.space[i][j + 1].getMine()) {
                        danger++;
                    }
                }

                ////////Slant nextdoors//////////
                if (j !== this.height - 1) {
                    if (i !== this.width - 1) {
                        if (this.space[i + 1][j + 1].getMine()) {
                            danger++;
                        }
                    }
                }
                if (j !== 0) {
                    if (i !== 0) {
                        if (this.space[i - 1][j - 1].getMine()) {
                            danger++;
                        }
                    }
                }
                if (j !== this.height - 1) {
                    if (i !== 0) {
                        if (this.space[i - 1][j + 1].getMine()) {
                            danger++;
                        }
                    }
                }
                if (j !== 0) {
                    if (i !== this.width - 1) {
                        if (this.space[i + 1][j - 1].getMine()) {
                            danger++;
                        }
                    }
                }
                this.space[i][j].setDanger(danger);
            }
        }
    }
    /**
     * Resursively expand space around mine box and all their 0 and danger neighbours
     */
    private expand(i: number, j: number): void {
        if (!this.space[i][j].isRevealed()) {
            this.space[i][j].setRevealed(true);
            this.revealedCount++;
            if (this.space[i][j].danger === 0) {
                if (i + 1 < this.width) { // it is not last in row, so i can chcek next bombBox
                    this.expand(i + 1, j);
                }
                if (j + 1 < this.height) { // it is not last in col
                    this.expand(i, j + 1);
                }
                if (i - 1 >= 0) { // it is not first in row
                    this.expand(i - 1, j);
                }
                if (j - 1 >= 0) { // it is not first in col
                    this.expand(i, j - 1);
                }
            }
        }
    }
    /**
     * Reveal mine box and look for other revealable neighbours using expand
     */
    public reveal(i: number, j: number): void {
        if (!this.lost && !this.won) { // still can play
            if(this.space[i][j].getFlag()) return;
            if (this.space[i][j].getMine()) { // ooops this box got mine
                this.space[i][j].setRevealed(true);
                this.lost = true;
                this.revealAll = false;
                this.superman();
                document.getElementById("myDiv").style.backgroundImage = "url('./loser.jpg')";
                return;
            }
            this.expand(i, j);
            if (this.revealedCount === this.width * this.height - this.mines) { // all mine revealed yeah
                this.won = true;
                this.revealAll = false;
                this.superman();
                document.getElementById("myDiv").style.backgroundImage = "url('./winner.jpg')";

            }
        }
    }

    public putFlag(i: number, j: number): void {
            if (!this.lost && !this.won) { // still can play
            if(this.space[i][j].getFlag()){
                console.log("hhh")
                this.space[i][j].setFlag(false);
                this.flags++;
                if(this.space[i][j].getMine()){
                    this.flagsOnMines--;
            }
            }
            else if(this.flags>0){
                if(!this.space[i][j].isRevealed()){
                    if(!this.space[i][j].getFlag()){
                    this.space[i][j].setFlag(true);
                    this.flags--;
                    if(this.space[i][j].getMine()){
                        this.flagsOnMines++;
                        if(this.flagsOnMines == this.mines){
                            this.won = true;
                            this.revealAll = false;
                            this.superman();
                            document.getElementById("myDiv").style.backgroundImage = "url('./winner.jpg')";
                        }
                    }
                    }
                }           
            } else alert("No more flags!!");
    }
    }
}