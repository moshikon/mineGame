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
    AppComponent.prototype.superman = function () {
        if (this.revealAll) {
            this.revealAll = false;
            for (var i = 0; i < this.width; i++) {
                for (var j = 0; j < this.height; j++) {
                    this.space[i][j].setSuperman(false);
                }
            }
        }
        else {
            this.revealAll = true;
            for (var i = 0; i < this.width; i++) {
                for (var j = 0; j < this.height; j++) {
                    this.space[i][j].setSuperman(true);
                }
            }
        }
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
        if (this.restartTable) {
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
                this.revealAll = false;
                this.superman();
                document.getElementById("myDiv").style.backgroundImage = "url('./loser.jpg')";
                return;
            }
            this.expand(i, j);
            if (this.revealedCount === this.width * this.height - this.mines) {
                this.won = true;
                this.revealAll = false;
                this.superman();
                document.getElementById("myDiv").style.backgroundImage = "url('./winner.jpg')";
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
                                this.revealAll = false;
                                this.superman();
                                document.getElementById("myDiv").style.backgroundImage = "url('./winner.jpg')";
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
            styles: [__webpack_require__(610)],
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
        this.superman = false;
    }
    MineBox.prototype.setSuperman = function (superman) {
        this.superman = superman;
    };
    MineBox.prototype.getSuperman = function () {
        return this.superman;
    };
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
        this.superman = false;
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
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "superman", void 0);
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

module.exports = "#mineBackground\r\n{\r\n    background-color: none;\r\n    margin: 0px auto;\r\n    padding: 20px;\r\n}\r\n\r\n#container {\r\n    position: fixed;\r\n    width: 500px;\r\n    height: 300px;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -150px;\r\n    margin-left: -250px;\r\n    text-align: center;\r\n}\r\n\r\n#container {\r\n    position: fixed;\r\n    width: 500px;\r\n    height: 300px;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -150px;\r\n    margin-left: -250px;\r\n    text-align: center;\r\n}\r\n\r\n#mid{\r\n    color: #00a3cc; \r\n    font-family: 'Signika', sans-serif; \r\n    padding-bottom: 10px;\r\n    margin: 0px auto;\r\n    margin-left: -20px;\r\n    padding: 20px;\r\n}\r\n\r\n#myDiv{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    background-repeat: repeat;\r\n    background-size: 100%;\r\n}\r\n\r\n\r\n\r\nh1 {\r\n    font-size: 90px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    text-shadow: 0 1px 4px #000;\r\n    margin-top: 20px;\r\n}\r\n \r\np {\r\n    width: 80%;\r\n    font-size: 23px;\r\n    line-height: 1.3em;\r\n    color: #fff;\r\n    margin: 1.1em auto;\r\n    text-align: center;\r\n    text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);\r\n}"

/***/ }),

/***/ 611:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 612:
/***/ (function(module, exports) {

module.exports = ".mine-box\r\n{\r\n  box-sizing: border-box;\r\n  color: rgb(255, 255, 255);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  height: 56px;\r\n  letter-spacing: 0.5px;\r\n  position: relative;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  vertical-align: middle;\r\n  width: 56px;\r\n  z-index: 1;\r\n  -webkit-perspective-origin: 28px 28px;\r\n          perspective-origin: 28px 28px;\r\n  -webkit-transform-origin: 28px 28px;\r\n          transform-origin: 28px 28px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  font: bold 15.5px / 54px Roboto, sans-serif;\r\n  overflow: hidden;\r\n  transition: all 0.3s ease 0s;\r\n  background: url(\"./dot.png\");\r\n}\r\n\r\n\r\n.mine-bomb{\r\n  background: url(\"./bomb_lost.png\");\r\n  border: 0px none  rgb(255, 255, 255);       \r\n  }\r\n\r\n.mine-flag{\r\n  background: url(\"./flag.png\");\r\n  border: 0px none  rgb(255, 255, 255);       \r\n  }\r\n\r\n.mine-superman\r\n{\r\n  color: rgb(255, 255, 255);\r\n  background: url(\"./dot3.png\");\r\n}\r\n\r\n.mine-bomb-superman\r\n{\r\n  background: url(\"./bomb2.png\");\r\n}\r\n\r\n.mine-flag-good-superman\r\n{\r\n  color:  rgb(255, 255, 255);\r\n  background: url(\"./flaggood.png\");\r\n}\r\n\r\n.mine-flag-bad-superman\r\n{\r\n  color:  rgb(255, 255, 255);\r\n    background: url(\"./flagbad.png\");\r\n}\r\n\r\n.mine-click\r\n{\r\n  \r\n  color:  rgb(0, 0, 0);\r\n  background: url(\"./dot2.png\");\r\n\r\n}\r\n"

/***/ }),

/***/ 613:
/***/ (function(module, exports) {

module.exports = "<div id=\"myDiv\">\n<h1>\n  <a *ngIf=\"!restartTable\" id=\"container\" >\n  Height:\n  <input type=\"number\" [(ngModel)]=\"height\" (change)=\"onChange()\" name=\"Height\" >\n  Width:\n  <input type=\"number\" [(ngModel)]=\"width\" (change)=\"onChange()\" name=\"Width\" >\n  Mines:\n  <input type=\"number\" [(ngModel)]=\"mines\" (change)=\"onChange()\" name=\"Mines\" >\n  <p> add instructions please<br>\n  <button value=\"clickGame\" (click) = \"restart()\" > New Game </button></p></a>\n</h1>\n<b *ngIf = \"restartTable\" id=\"mid\">\n<h2 style=\"margin-left: 20px\" >Need some help? call Superman\n<img  src=\"../superman.png\"  style=\"cursor:pointer\" (click) = \"superman()\"> \n<br style=\"margin-left: 20px\">Flags left: <img src=\"../flag_small.png\" > X {{flags}} </h2> \n<br>\n<button style=\"margin-left: 20px\" value=\"clickGame\" (click) = \"restart()\" > New Game </button>\n<table  \n    id=\"mineBackground\" [ngStyle]=\"{'board': (width*height)}\">\n        <tr *ngFor=\"let row of space\">\n        <td *ngFor=\"let mineBox of row\">\n            <app-mine-box [mine]=\"mineBox.mine\" [superman]=\"mineBox.superman\" [flag]=\"mineBox.flag\" [revealed]=\"mineBox.revealed\" [danger]=\"mineBox.danger\" (click)=\"boxClicked($event,mineBox.i, mineBox.j)\"></app-mine-box>\n        </td>\n    </tr>\n</table>\n</b>\n\n</div>"

/***/ }),

/***/ 614:
/***/ (function(module, exports) {

module.exports = "<p>\n  game works!\n</p>\n"

/***/ }),

/***/ 615:
/***/ (function(module, exports) {

module.exports = "<a [ngClass]=\"{'mine-box': true , \n'mine-bomb': revealed && mine,\n'mine-click': revealed && !mine && !flag,\n'mine-flag': (!revealed && flag && !superman) || (revealed && !mine && flag),\n'mine-superman': superman && !mine,\n'mine-flag-good-superman': superman && flag && mine,\n'mine-flag-bad-superman': superman && flag && !mine,\n'mine-bomb-superman': superman && mine && !revealed}\">\n    <i *ngIf=\"(superman && !mine && (danger>0)) || (revealed && !mine && (danger>0))\" style=\"font: bold;\">\n        {{danger}}\n    </i>\n</a>\n"

/***/ }),

/***/ 629:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(343);


/***/ })

},[629]);
//# sourceMappingURL=main.bundle.map