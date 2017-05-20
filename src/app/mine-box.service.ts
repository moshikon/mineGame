import { Injectable } from '@angular/core';

@Injectable()
export class MineBox {
    private i: number;
    private j: number;
    public danger: number;
    private mine: boolean;
    private revealed: boolean;
    private flag: boolean;
    private superman: boolean;

    constructor(i: number, j: number) {
        this.i = i;
        this.j = j;
        this.danger = 0;
        this.mine = false;
        this.revealed = false;
        this.superman = false;
    }

    setSuperman(superman: boolean): void {
        this.superman = superman;
    }

   getSuperman(): boolean {
        return this.superman;
    }

    setMine(mine: boolean): void {
        this.mine = mine;
    }

    getMine(): boolean {
        return this.mine;
    }

    setDanger(danger: number): void {
        this.danger = danger;
    }

    setFlag(flag: boolean): void{
        this.flag = flag;
    }

     getFlag(): boolean{
        return this.flag;
    }

    setRevealed(revealed: boolean): void {
        this.revealed = revealed;
    }

    isRevealed(): boolean {
        return this.revealed;
    }

}
