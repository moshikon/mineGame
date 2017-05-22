webpackJsonp([1,4],{

/***/ 402:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 402;


/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(512);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/main.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mine_box_service__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_simple_timer__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_simple_timer__);
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
    function AppComponent(st) {
        this.st = st;
        this.user = 'ANONYMOS';
        this.width = 2;
        this.height = 2;
        this.mines = 1;
    }
    /**
   * Setting and starting the timer
   */
    AppComponent.prototype.startTimer = function () {
        var _this = this;
        this.st.newTimer('1sec', 1);
        this.st.subscribe('1sec', function (e) { return _this.timer0callback(); });
    };
    /**
 * Calculate time
 */
    AppComponent.prototype.timer0callback = function () {
        if (!this.lost && !this.won) {
            this.counterSec++;
            if (this.counterSec == 60) {
                this.counterSec = 0;
                this.counterMin++;
                if (this.counterMin == 60) {
                    this.counterMin = 0;
                }
            }
        }
    };
    /**
     * Enable superman mood
     */
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
    /**
     * Checks that the UI according to the rules
     */
    AppComponent.prototype.onChange = function () {
        var max = 300;
        var min = 2;
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
        if (this.mines < 1) {
            this.mines = 1;
        }
    };
    /**
     * Response to a box click
     */
    AppComponent.prototype.boxClicked = function (event, i, j) {
        if (!this.start) {
            this.startTimer();
            this.start = true;
            console.log("start");
        }
        if (event.shiftKey) {
            this.putFlag(i, j);
        }
        else
            this.reveal(i, j);
    };
    /**
   * Generate the same game again
   */
    AppComponent.prototype.again = function () {
        this.onChange();
        this.st.delTimer('1sec');
        document.getElementById("myDiv").style.backgroundImage = "url('./sky.jpg')";
        this.custom = false;
        this.restartTable = true;
        this.flags = this.mines;
        this.space = [];
        this.revealedCount = 0;
        this.flagsOnMines = 0;
        this.lost = false;
        this.won = false;
        this.revealAll = false;
        this.counterSec = 0;
        this.counterMin = 0;
        this.start = false;
        this.generateMineBoxes();
        this.generateMines();
        this.generateDanger();
    };
    /**
     * Generate a new game
     */
    AppComponent.prototype.restart = function () {
        if (this.restartTable) {
            document.getElementById("myDiv").style.backgroundImage = "url('./back.jpg')";
            this.restartTable = false;
            this.start = false;
            return;
        }
        this.again();
    };
    /**
     * Enter into custom page
     */
    AppComponent.prototype.customGame = function (custom) {
        this.custom = custom;
    };
    /**
     * Generate the board by level
     */
    AppComponent.prototype.generate = function (userLevel, level) {
        this.userLevel = userLevel;
        this.level = level;
        this.step = 2;
        this.width = Math.floor(10 * level / userLevel);
        this.height = Math.floor(15 * level / userLevel);
        this.mines = Math.floor(50 * level / userLevel * level / userLevel);
        this.onChange();
        this.again();
    };
    /**
     * Generate the board by level
     */
    AppComponent.prototype.generateNextLevel = function (user, level) {
        this.step++;
        this.width = Math.floor(10 * this.level / this.userLevel * this.step / 2);
        this.height = Math.floor(15 * this.level / this.userLevel * this.step / 2);
        this.mines = Math.floor(50 * this.level / this.userLevel * this.level / this.userLevel * this.step / 2);
        this.onChange();
        this.again();
    };
    /**
   * Generate random game
   */
    AppComponent.prototype.random = function () {
        this.width = Math.floor(Math.random() * 15);
        this.height = Math.floor(Math.random() * 15);
        this.mines = Math.floor(Math.random() * 10);
        this.onChange();
        this.again();
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
                    if (this.space[i - 1][j].getMine())
                        danger++;
                }
                if (i !== this.width - 1) {
                    if (this.space[i + 1][j].getMine())
                        danger++;
                }
                if (j !== 0) {
                    if (this.space[i][j - 1].getMine())
                        danger++;
                }
                if (j !== this.height - 1) {
                    if (this.space[i][j + 1].getMine())
                        danger++;
                }
                //diagonal nextdoors
                if (j !== this.height - 1) {
                    if (i !== this.width - 1) {
                        if (this.space[i + 1][j + 1].getMine())
                            danger++;
                    }
                }
                if (j !== 0) {
                    if (i !== 0) {
                        if (this.space[i - 1][j - 1].getMine())
                            danger++;
                    }
                }
                if (j !== this.height - 1) {
                    if (i !== 0) {
                        if (this.space[i - 1][j + 1].getMine())
                            danger++;
                    }
                }
                if (j !== 0) {
                    if (i !== this.width - 1) {
                        if (this.space[i + 1][j - 1].getMine())
                            danger++;
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
    /**
     * Putting/removing a flag and update the count
     */
    AppComponent.prototype.putFlag = function (i, j) {
        if (!this.lost && !this.won) {
            if (this.space[i][j].getFlag()) {
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(673),
            styles: [__webpack_require__(671)],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_simple_timer__["SimpleTimer"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_ng2_simple_timer__["SimpleTimer"]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/app.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mine_box_mine_box_component__ = __webpack_require__(514);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__mine_box_mine_box_component__["a" /* MineBoxComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4_ng2_simple_timer__["SimpleTimer"]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/app.module.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [Number, Number])
    ], MineBox);
    return MineBox;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/mine-box.service.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], MineBoxComponent.prototype, "i", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Number)
    ], MineBoxComponent.prototype, "j", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "flag", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "danger", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "mine", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "revealed", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], MineBoxComponent.prototype, "superman", void 0);
    MineBoxComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-mine-box',
            template: __webpack_require__(674),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [])
    ], MineBoxComponent);
    return MineBoxComponent;
}());
//# sourceMappingURL=C:/Users/Moshiko/Desktop/mineGame/src/mine-box.component.js.map

/***/ }),

/***/ 515:
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

/***/ 671:
/***/ (function(module, exports) {

module.exports = "#mineBackgroundBig\n{\n    background-color: none;\n    margin: 0px auto;\n    padding: 20px;\n    top: 40%;\n    margin-top: -10%;\n     }\n\n#mineBackground\n{\n    background-color: none;\n    margin: 0px auto;\n    padding: 20px;\n    top: 40%;\n    margin-top: -10%;\n    zoom: 80% \n     }\n\n#mineBackgroundSmall\n{\n    background-color: none;\n    margin: 0px auto;\n    padding: 20px;\n    top: 40%;\n    margin-top: -10%;\n    zoom: 70% \n     }\n\n#container {\n    color: #e6ffff;\n    font-size: 60px;\n    position: fixed;\n    width: 500px;\n    height: 800px;\n    top: 47%;\n    left: 50%;\n    margin-top: -150px;\n    margin-left: -250px;\n    text-align: center;\n}\n\n#mid{\n    color: #00a3cc; \n    font-family: 'Signika', sans-serif; \n    padding-bottom: 10px;\n    margin: 0px auto;\n    margin-left: -20px;\n    padding: 20px;\n\n}\n\n#myDiv{\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-repeat: repeat;\n    background-size: 100%;\n    right:0;\n    left:0;\n    top:0;\n    bottom:0;\n    overflow: auto;\n}\n\ntable{\n\tposition: absolute;\n    right:0;\n    bottom:0;\n    left: 40%;\n\toverflow: hidden;\n\t}\n\nh1 {\n    font-size: 80px;\n    font-weight: bold;\n    color: #fff;\n    text-shadow: 0 1px 4px #000;\n    margin-top: 20px;\n}\n\nh3{\ntext-shadow:1px 1px 1px rgba(201,201,201,1);\nfont-weight:normal;\ncolor:#306C73;\nletter-spacing:1pt;\nword-spacing:2pt;\nfont-size:20px;\ntext-align:left;\nfont-family:georgia, serif;\nline-height:1.5;\nmargin-left: 20px;\n}\n\nh4 {\n\tposition: absolute;\n    right:0;\n    bottom:0;\n    left: 0;\n\ttop:-10%;\n\tfont-family: \"Avant Garde\", Avantgarde, \"Century Gothic\", CenturyGothic, \"AppleGothic\", sans-serif;\n\tfont-size: 92px;\n\ttext-align: center;\n\ttext-transform: uppercase;\n\ttext-rendering: optimizeLegibility;\n    color: #e0dfdc;\n    letter-spacing: .1em;\n    text-shadow: \n      0 -1px 0 #fff, \n      0 1px 0 #2e2e2e, \n      0 2px 0 #2c2c2c, \n      0 3px 0 #2a2a2a, \n      0 4px 0 #282828, \n      0 5px 0 #262626, \n      0 6px 0 #242424, \n      0 7px 0 #222, \n      0 8px 0 #202020, \n      0 9px 0 #1e1e1e, \n      0 10px 0 #1c1c1c, \n      0 11px 0 #1a1a1a, \n      0 12px 0 #181818, \n      0 13px 0 #161616, \n      0 14px 0 #141414, \n      0 15px 0 #121212, \n      0 22px 30px rgba(0, 0, 0, 0.9);\n}\n\nh5{\n  font-size: 45px;\n  position: absolute;\n  top: -5%;\n}\n\np {\n    -webkit-text-stroke: 0.5px black;\n    width: 100%;\n    height: 100%;\n    top: 20%;\n    font-size: 31px;\n    line-height: 1.3em;\n    color: #fff;\n    margin: 1.1em auto;\n    text-align: center;\n    text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);\n}\n\nb{\n    outline: #000 thin\n}\ninput[type=\"text\"] {\n  background: #f0f0f5;\n  padding: 2px;\n  border: solid 1px #dcdcdc;\n  transition: box-shadow 0.3s, border 0.3s;\n  font-weight: bold;\n  text-align: center;\n  border-radius: 4px;\n  width: 150px;\n}\ninput[type=\"text\"]:focus {\n  border: solid 1px #707070;\n  box-shadow: 0 0 5px 1px #969696;\n  background: rgb(250,250,250);\n}\n\n\n\n.myButton {\n\tbox-shadow:inset 0px 1px 0px 0px #ffffff;\n\tbackground:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf',GradientType=0);\n\tbackground-color:#ededed;\n\tborder-radius:6px;\n\tborder:1px solid #dcdcdc;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#666666;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding:3px 24px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #ffffff;\n}\n.myButton:hover {\n\tbackground:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed',GradientType=0);\n\tbackground-color:#dfdfdf;\n}\n.myButton:active {\n\tposition:relative;\n\ttop:1px;\n}\n\n.secButton {\n\tbox-shadow:inset 0px 1px 0px 0px #dcecfb;\n\tbackground:linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bddbfa', endColorstr='#80b5ea',GradientType=0);\n\tbackground-color:#bddbfa;\n\tborder-radius:6px;\n\tborder:1px solid #84bbf3;\n\tdisplay:inline-block;\n\tcursor:pointer;\n\tcolor:#344c4c;\n\tfont-family:Arial;\n\tfont-size:15px;\n\tfont-weight:bold;\n\tpadding:6px 24px;\n\ttext-decoration:none;\n\ttext-shadow:0px 1px 0px #528ecc;\n}\n.secButton:hover {\n\tbackground:linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80b5ea', endColorstr='#bddbfa',GradientType=0);\n\tbackground-color:#80b5ea;\n}\n.secButton:active {\n\tposition:relative;\n\ttop:1px;\n}\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ".mine-box\n{\n  box-sizing: border-box;\n  color: rgb(255, 255, 255);\n  cursor: pointer;\n  display: inline-block;\n  height: 56px;\n  letter-spacing: 0.5px;\n  position: relative;\n  text-align: center;\n  text-decoration: none;\n  text-transform: uppercase;\n  vertical-align: middle;\n  width: 56px;\n  z-index: 1;\n  -webkit-perspective-origin: 28px 28px;\n          perspective-origin: 28px 28px;\n  -webkit-transform-origin: 28px 28px;\n          transform-origin: 28px 28px;\n  border-radius: 50% 50% 50% 50%;\n  font: bold 15.5px / 54px Roboto, sans-serif;\n  overflow: hidden;\n  transition: all 0.3s ease 0s;\n  background: url(\"./dot.png\");\n}\n\n\n.mine-bomb{\n  background: url(\"./bomb_lost.png\");\n  border: 0px none  rgb(255, 255, 255);       \n  }\n\n.mine-flag{\n  background: url(\"./flag.png\");\n  border: 0px none  rgb(255, 255, 255);       \n  }\n\n.mine-superman\n{\n  color: rgb(255, 255, 255);\n  background: url(\"./dot3.png\");\n}\n\n.mine-bomb-superman\n{\n  background: url(\"./bomb2.png\");\n}\n\n.mine-flag-good-superman\n{\n  color:  rgb(255, 255, 255);\n  background: url(\"./flaggood.png\");\n}\n\n.mine-flag-bad-superman\n{\n  color:  rgb(255, 255, 255);\n    background: url(\"./flagbad.png\");\n}\n\n.mine-click\n{\n  \n  color:  rgb(0, 0, 0);\n  background: url(\"./dot2.png\");\n\n}\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div id=\"myDiv\">\n    <h4 *ngIf=\"!restartTable\"> Minesweeper! </h4>\n<h1>\n  <a *ngIf=\"!restartTable\" id=\"container\" >\n  <a *ngIf=\"!custom\">\n  User:\n  <input type=\"text\" [(ngModel)]=\"user\" name=\"User\" ></a>\n  <a *ngIf=\"custom\">\n  Height:\n  <input type=\"text\" [(ngModel)]=\"width\" (change)=\"onChange()\" name=\"Height\" >\n  <label style=\"font-size: 20px\"> (up to 300)</label>\n  Width:\n  <input type=\"text\" [(ngModel)]=\"height\" (change)=\"onChange()\" name=\"Width\" >\n  <label style=\"font-size: 20px\"> (up to 300)</label>\n  Mines:\n  <input  type=\"text\" [(ngModel)]=\"mines\" (change)=\"onChange()\" name=\"Mines\" >\n  <br><button class=\"myButton\" (click) = \"restart()\" > Play </button>\n  <button class=\"myButton\" (click) = \"customGame(false)\" > Back </button><br>\n  </a>\n  <a *ngIf=\"!custom\">\n  <button class=\"myButton\" (click) = \"customGame(true)\" > Create custom game </button>\n  <button class=\"myButton\" (click) = \"random()\" > Surprise me </button><br>\n  <p>Or choose a level:<br>\n  <button class=\"myButton\" (click) = \"generate(3,1)\" > Beginner </button>\n  <button class=\"myButton\" (click) = \"generate(2,1)\" > Normal </button>\n  <button class=\"myButton\" (click) = \"generate(1,1)\" > Pro </button></a>\n  \n</a>\n</h1>\n<b *ngIf = \"restartTable\" id=\"mid\">\n<h3 style=\"margin-left: 20px\" >  \n<h5 >Hello {{user}}, <br></h5>\n<br >Flags left: <img src=\"./flag_small.png\" > X {{flags}} \n<br> Time: <b> {{counterMin}}:{{counterSec}}</b>\n<br>\n<a  *ngIf = \"won == lost\" >Need some help?\n<br><img  src=\"./superman.png\"  style=\"cursor:pointer;margin-left: 180px;margin-top: -45px; position:absolute\" (click) = \"superman()\">\n<div style=\"font-size: 25px\" >Instructions: </div>\n<div style=\"font-size: 18px;margin-left: 20px\"> ☻Left-click an empty square to reveal it.<br>\n☻(Shift + Left-click) an empty square to flag it.<br>\n☻Superman mood reveals the board.</div></a></h3>\n<button style=\"margin-left: 20px\" class=\"secButton\" (click) = \"restart()\" > New Game </button>\n<button style=\"margin-left: 20px\" class=\"secButton\" (click) = \"again()\" > Restart </button>\n<button style=\"margin-left: 20px\" class=\"secButton\" (click) = \"generateNextLevel()\" > Next level </button>\n<table  *ngIf=\"width*height <= 89\"\n    id=\"mineBackgroundBig\" [ngStyle]=\"{'board': (width*height)}\">\n        <tr *ngFor=\"let row of space\">\n        <td *ngFor=\"let mineBox of row\">\n            <app-mine-box [mine]=\"mineBox.mine\" [superman]=\"mineBox.superman\" [flag]=\"mineBox.flag\" [revealed]=\"mineBox.revealed\" [danger]=\"mineBox.danger\" (click)=\"boxClicked($event,mineBox.i, mineBox.j)\"></app-mine-box>\n        </td>\n    </tr>\n</table>\n<table *ngIf=\"width*height > 89\" \n    id=\"mineBackground\" [ngStyle]=\"{'board': (width*height)}\">\n        <tr *ngFor=\"let row of space\">\n        <td *ngFor=\"let mineBox of row\">\n            <app-mine-box [mine]=\"mineBox.mine\" [superman]=\"mineBox.superman\" [flag]=\"mineBox.flag\" [revealed]=\"mineBox.revealed\" [danger]=\"mineBox.danger\" (click)=\"boxClicked($event,mineBox.i, mineBox.j)\"></app-mine-box>\n        </td>\n    </tr>\n</table>\n</b>\n\n</div>"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<a [ngClass]=\"{'mine-box': true , \n'mine-bomb': revealed && mine,\n'mine-click': revealed && !mine && !flag,\n'mine-flag': (!revealed && flag && !superman) || (revealed && !mine && flag),\n'mine-superman': superman && !mine,\n'mine-flag-good-superman': superman && flag && mine,\n'mine-flag-bad-superman': superman && flag && !mine,\n'mine-bomb-superman': superman && mine && !revealed}\">\n    <i *ngIf=\"(superman && !mine && (danger>0)) || (revealed && !mine && (danger>0))\" style=\"font: bold;\">\n        {{danger}}\n    </i>\n</a>\n"

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ })

},[954]);
//# sourceMappingURL=main.bundle.map