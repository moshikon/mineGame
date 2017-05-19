webpackJsonp([1,4],{

/***/ 342:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 342;


/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(452);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/main.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mine_box_service__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.getWon = function () {
        return this.won;
    };
    AppComponent.prototype.getLost = function () {
        return this.lost;
    };
    AppComponent.prototype.show = function () {
        return (this.restartTable == true);
    };
    AppComponent.prototype.getWidth = function () {
        return this.width;
    };
    AppComponent.prototype.getHeight = function () {
        return this.height;
    };
    AppComponent.prototype.getFlags = function () {
        return this.flags;
    };
    AppComponent.prototype.onChange = function () {
        var max = 300;
        var min = 1;
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
        var maxMines = this.width * this.height;
        if (this.mines > maxMines) {
            this.mines = maxMines;
        }
        if (this.mines < min) {
            this.mines = min;
        }
    };
    AppComponent.prototype.boxClicked = function (event, i, j) {
        if (event.shiftKey) {
            this.putFlag(i, j);
        }
        else
            this.reveal(i, j);
    };
    AppComponent.prototype.restart = function () {
        this.restartTable = true;
        this.flags = this.mines;
        this.space = [];
        this.revealedCount = 0;
        this.flagsOnMines = 0;
        this.lost = false;
        this.won = false;
        this.generateMineBoxes();
        this.generateMines();
        this.generateDanger();
    };
    /**
     * Generate mine of boxes into field
     */
    AppComponent.prototype.generateMineBoxes = function () {
        for (var i = 0; i < this.width; i++) {
            this.space[i] = [];
            for (var j = 0; j < this.height; j++) {
                this.space[i][j] = new __WEBPACK_IMPORTED_MODULE_1__mine_box_service__["a" /* MineBox */](i, j);
            }
        }
    };
    /**
 * Generate mines into random mine boxes
 */
    AppComponent.prototype.generateMines = function () {
        var minesCount = this.mines;
        while (minesCount !== 0) {
            var randomI = Math.floor(Math.random() * this.width);
            var randomJ = Math.floor(Math.random() * this.height);
            if (!this.space[randomI][randomJ].getMine()) {
                this.space[randomI][randomJ].setMine(true);
                minesCount--;
            }
        }
    };
    /**
     * Generate danger depends on neighbours
     */
    AppComponent.prototype.generateDanger = function () {
        for (var i = 0; i < this.width; i++) {
            for (var j = 0; j < this.height; j++) {
                var danger = 0;
                if (i !== 0) {
                    if (this.space[i - 1][j].getMine()) {
                        danger++;
                    }
                }
                if (i !== this.width - 1) {
                    if (this.space[i + 1][j].getMine()) {
                        danger++;
                    }
                }
                if (j !== 0) {
                    if (this.space[i][j - 1].getMine()) {
                        danger++;
                    }
                }
                if (j !== this.height - 1) {
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
    };
    /**
     * Resursively expand space around mine box and all their 0 and danger neighbours
     */
    AppComponent.prototype.expand = function (i, j) {
        if (!this.space[i][j].isRevealed()) {
            this.space[i][j].setRevealed(true);
            this.revealedCount++;
            if (this.space[i][j].danger === 0) {
                if (i + 1 < this.width) {
                    this.expand(i + 1, j);
                }
                if (j + 1 < this.height) {
                    this.expand(i, j + 1);
                }
                if (i - 1 >= 0) {
                    this.expand(i - 1, j);
                }
                if (j - 1 >= 0) {
                    this.expand(i, j - 1);
                }
            }
        }
    };
    /**
     * Reveal mine box and look for other revealable neighbours using expand
     */
    AppComponent.prototype.reveal = function (i, j) {
        if (!this.lost && !this.won) {
            if (this.space[i][j].getFlag())
                return;
            if (this.space[i][j].getMine()) {
                this.space[i][j].setRevealed(true);
                this.lost = true;
                return;
            }
            this.expand(i, j);
            if (this.revealedCount === this.width * this.height - this.mines) {
                this.won = true;
            }
        }
    };
    AppComponent.prototype.putFlag = function (i, j) {
        if (!this.lost && !this.won) {
            if (this.space[i][j].getFlag()) {
                console.log("hhh");
                this.space[i][j].setFlag(false);
                this.flags++;
                if (this.space[i][j].getMine()) {
                    this.flagsOnMines--;
                }
            }
            else if (this.flags > 0) {
                if (!this.space[i][j].isRevealed()) {
                    if (!this.space[i][j].getFlag()) {
                        this.space[i][j].setFlag(true);
                        this.flags--;
                        if (this.space[i][j].getMine()) {
                            this.flagsOnMines++;
                            if (this.flagsOnMines == this.mines) {
                                this.won = true;
                            }
                        }
                    }
                }
            }
            else
                alert("No more flags!!");
        }
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(613),
            styles: [__webpack_require__(610)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__game_game_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mine_box_mine_box_component__ = __webpack_require__(455);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__game_game_component__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mine_box_mine_box_component__["a" /* MineBoxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GameComponent = (function () {
    function GameComponent() {
    }
    GameComponent.prototype.restartGame = function (width, height, mines) {
    };
    GameComponent.prototype.ngOnInit = function () {
    };
    GameComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__(614),
            styles: [__webpack_require__(611)]
        }), 
        __metadata('design:paramtypes', [])
    ], GameComponent);
    return GameComponent;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/game.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineBox; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MineBox = (function () {
    function MineBox(i, j) {
        this.i = i;
        this.j = j;
        this.danger = 0;
        this.mine = false;
        this.revealed = false;
    }
    MineBox.prototype.setMine = function (mine) {
        this.mine = mine;
    };
    MineBox.prototype.getMine = function () {
        return this.mine;
    };
    MineBox.prototype.setDanger = function (danger) {
        this.danger = danger;
    };
    MineBox.prototype.setFlag = function (flag) {
        this.flag = flag;
    };
    MineBox.prototype.getFlag = function () {
        return this.flag;
    };
    MineBox.prototype.setRevealed = function (revealed) {
        this.revealed = revealed;
    };
    MineBox.prototype.isRevealed = function () {
        return this.revealed;
    };
    MineBox = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(), 
        __metadata('design:paramtypes', [Number, Number])
    ], MineBox);
    return MineBox;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/mine-box.service.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MineBoxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MineBoxComponent = (function () {
    function MineBoxComponent() {
        this.flag = false;
        this.danger = 0;
        this.mine = false;
        this.revealed = false;
    }
    MineBoxComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], MineBoxComponent.prototype, "i", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Number)
    ], MineBoxComponent.prototype, "j", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "flag", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "danger", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "mine", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "revealed", void 0);
    MineBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* Component */])({
            selector: 'app-mine-box',
            template: __webpack_require__(615),
            styles: [__webpack_require__(612)]
        }), 
        __metadata('design:paramtypes', [])
    ], MineBoxComponent);
    return MineBoxComponent;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/mine-box.component.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/environment.js.map

/***/ }),

/***/ 610:
/***/ (function(module, exports) {

module.exports = "#mineBackground\r\n{\r\n    background-color: rgb(255, 255, 255);\r\n    margin: 0px auto;\r\n    padding: 20px;\r\n}"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = ".mine-box\r\n{\r\n  color: rgb(0, 0, 0);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  height: 56px;\r\n  text-align: center;\r\n  width: 56px;\r\n  border: 1px double rgb(0, 0, 0);\r\n  border-radius: 50% 50% 50% 50%;\r\n  font: normal 14.5px / 54px Roboto, sans-serif;\r\n}\r\n\r\n.mine-bomb{\r\n  background-color: rgb(255, 255, 255);\r\n  background-image: url(\"../../bomb.png\");\r\n  border: 0px none rgb(0, 0, 0);        \r\n  }\r\n\r\n.mine-flag{\r\n  background-color: rgb(255, 255, 255);\r\n  background-image: url(\"../../flag.png\");\r\n     border: 0px none rgb(0, 0, 0);        \r\n  }\r\n\r\n.mine-green\r\n{\r\n  background-color: #0000ff;\r\n}\r\n\r\n.mine-brown\r\n{\r\n  background-color: rgb(230, 230, 230);\r\n}"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"show() && getWon()\"> Win </h1>\n<h1 *ngIf=\"show() && getLost()\"> Lost </h1>\n<h1>\n  <form>\n  Height:\n  <input type=\"number\" [(ngModel)]=\"height\" (change)=\"onChange()\" name=\"Height\" >\n  Width:\n  <input type=\"number\" [(ngModel)]=\"width\" (change)=\"onChange()\" name=\"Width\" >\n  Mines:\n  <input type=\"number\" [(ngModel)]=\"mines\" (change)=\"onChange()\" name=\"Mines\" >\n  <button value=\"clickGame\" (click) = \"restart()\" > New Game </button>\n<h6>Flags left: {{getFlags()}} </h6> \n</form>\n<table *ngIf= \"show()\" \n    id=\"mineBackground\" [ngStyle]=\"{'width': (getWidth() * (getHeight() ))}\">\n        <tr *ngFor=\"let row of space\">\n        <td *ngFor=\"let mineBox of row\">\n            <app-mine-box [mine]=\"mineBox.mine\" [flag]=\"mineBox.flag\" [revealed]=\"mineBox.revealed\" [danger]=\"mineBox.danger\" (click)=\"boxClicked($event,mineBox.i, mineBox.j)\"></app-mine-box>\n        </td>\n    </tr>\n</table>\n\n</h1>\n"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<p>\n  game works!\n</p>\n"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<a [ngClass]=\"{'mine-box': true, \n'mine-bomb': revealed && mine, \n'mine-brown': revealed && !mine, \n'mine-green': !revealed, \n'mine-flag': !revealed && flag}\">\n    <i *ngIf=\"revealed && !mine\" style=\"font-weight: bold;\">\n        {{danger}}\n    </i>\n</a>\n"

/***/ }),

/***/ 628:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[628]);
//# sourceMappingURL=main.bundle.map