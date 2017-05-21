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
    AppComponent.prototype.startTimer = function () {
        var _this = this;
        this.st.newTimer('1sec', 1);
        this.st.subscribe('1sec', function (e) { return _this.timer0callback(); });
    };
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
    AppComponent.prototype.restart = function () {
        if (this.restartTable) {
            document.getElementById("myDiv").style.backgroundImage = "url('./back.jpg')";
            this.restartTable = false;
            this.start = false;
            return;
        }
        this.again();
    };
    AppComponent.prototype.customGame = function (custom) {
        this.custom = custom;
    };
    AppComponent.prototype.generate = function (user, level) {
        this.width = Math.floor(10 * level / user);
        this.height = Math.floor(15 * level / user);
        this.mines = Math.floor(20 * level / user);
        this.onChange();
        this.again();
    };
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

module.exports = "#mineBackground\r\n{\r\n    background-color: none;\r\n    margin: 0px auto;\r\n    padding: 20px;\r\n    top: 40%;\r\n    margin-top: -150px;\r\n     }\r\n\r\n#container {\r\n    color: #e6ffff;\r\n    font-size: 60px;\r\n    position: fixed;\r\n    width: 500px;\r\n    height: 800px;\r\n    top: 47%;\r\n    left: 50%;\r\n    margin-top: -150px;\r\n    margin-left: -250px;\r\n    text-align: center;\r\n}\r\n\r\n#mid{\r\n    color: #00a3cc; \r\n    font-family: 'Signika', sans-serif; \r\n    padding-bottom: 10px;\r\n    margin: 0px auto;\r\n    margin-left: -20px;\r\n    padding: 20px;\r\n\r\n}\r\n\r\n#myDiv{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: fixed;\r\n    background-repeat: repeat;\r\n    background-size: 100%;\r\n    right:0;\r\n    left:0;\r\n    top:0;\r\n    bottom:0;\r\n    overflow: auto;\r\n}\r\n\r\ntable{\r\n\tposition: absolute;\r\n    right:0;\r\n    bottom:0;\r\n    left: 40%;\r\n\toverflow: hidden;\r\n\t}\r\n\r\nh1 {\r\n    font-size: 80px;\r\n    font-weight: bold;\r\n    color: #fff;\r\n    text-shadow: 0 1px 4px #000;\r\n    margin-top: 20px;\r\n}\r\n\r\nh3{\r\ntext-shadow:1px 1px 1px rgba(201,201,201,1);\r\nfont-weight:normal;\r\ncolor:#306C73;\r\nletter-spacing:1pt;\r\nword-spacing:2pt;\r\nfont-size:20px;\r\ntext-align:left;\r\nfont-family:georgia, serif;\r\nline-height:1.5;\r\nmargin-left: 20px;\r\n}\r\n\r\nh4 {\r\n\tposition: absolute;\r\n    right:0;\r\n    bottom:0;\r\n    left: 0;\r\n\ttop:-10%;\r\n\tfont-family: \"Avant Garde\", Avantgarde, \"Century Gothic\", CenturyGothic, \"AppleGothic\", sans-serif;\r\n\tfont-size: 92px;\r\n\ttext-align: center;\r\n\ttext-transform: uppercase;\r\n\ttext-rendering: optimizeLegibility;\r\n    color: #e0dfdc;\r\n    letter-spacing: .1em;\r\n    text-shadow: \r\n      0 -1px 0 #fff, \r\n      0 1px 0 #2e2e2e, \r\n      0 2px 0 #2c2c2c, \r\n      0 3px 0 #2a2a2a, \r\n      0 4px 0 #282828, \r\n      0 5px 0 #262626, \r\n      0 6px 0 #242424, \r\n      0 7px 0 #222, \r\n      0 8px 0 #202020, \r\n      0 9px 0 #1e1e1e, \r\n      0 10px 0 #1c1c1c, \r\n      0 11px 0 #1a1a1a, \r\n      0 12px 0 #181818, \r\n      0 13px 0 #161616, \r\n      0 14px 0 #141414, \r\n      0 15px 0 #121212, \r\n      0 22px 30px rgba(0, 0, 0, 0.9);\r\n}\r\n\r\nh5{\r\n  font-size: 45px;\r\n  position: absolute;\r\n  top: -5%;\r\n}\r\n\r\np {\r\n    -webkit-text-stroke: 0.5px black;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 20%;\r\n    font-size: 31px;\r\n    line-height: 1.3em;\r\n    color: #fff;\r\n    margin: 1.1em auto;\r\n    text-align: center;\r\n    text-shadow: 0 0 2px rgba(0, 0, 0, 0.9);\r\n}\r\n\r\nb{\r\n    outline: #000 thin\r\n}\r\ninput[type=\"text\"] {\r\n  background: #f0f0f5;\r\n  padding: 2px;\r\n  border: solid 1px #dcdcdc;\r\n  transition: box-shadow 0.3s, border 0.3s;\r\n  font-weight: bold;\r\n  text-align: center;\r\n  border-radius: 4px;\r\n  width: 150px;\r\n}\r\ninput[type=\"text\"]:focus {\r\n  border: solid 1px #707070;\r\n  box-shadow: 0 0 5px 1px #969696;\r\n  background: rgb(250,250,250);\r\n}\r\n\r\n\r\n\r\n.myButton {\r\n\tbox-shadow:inset 0px 1px 0px 0px #ffffff;\r\n\tbackground:linear-gradient(to bottom, #ededed 5%, #dfdfdf 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ededed', endColorstr='#dfdfdf',GradientType=0);\r\n\tbackground-color:#ededed;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #dcdcdc;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#666666;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:3px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #ffffff;\r\n}\r\n.myButton:hover {\r\n\tbackground:linear-gradient(to bottom, #dfdfdf 5%, #ededed 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#dfdfdf', endColorstr='#ededed',GradientType=0);\r\n\tbackground-color:#dfdfdf;\r\n}\r\n.myButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n\r\n.secButton {\r\n\tbox-shadow:inset 0px 1px 0px 0px #dcecfb;\r\n\tbackground:linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#bddbfa', endColorstr='#80b5ea',GradientType=0);\r\n\tbackground-color:#bddbfa;\r\n\tborder-radius:6px;\r\n\tborder:1px solid #84bbf3;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#344c4c;\r\n\tfont-family:Arial;\r\n\tfont-size:15px;\r\n\tfont-weight:bold;\r\n\tpadding:6px 24px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px #528ecc;\r\n}\r\n.secButton:hover {\r\n\tbackground:linear-gradient(to bottom, #80b5ea 5%, #bddbfa 100%);\r\n\tfilter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80b5ea', endColorstr='#bddbfa',GradientType=0);\r\n\tbackground-color:#80b5ea;\r\n}\r\n.secButton:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n"

/***/ }),

/***/ 672:
/***/ (function(module, exports) {

module.exports = ".mine-box\r\n{\r\n  box-sizing: border-box;\r\n  color: rgb(255, 255, 255);\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  height: 56px;\r\n  letter-spacing: 0.5px;\r\n  position: relative;\r\n  text-align: center;\r\n  text-decoration: none;\r\n  text-transform: uppercase;\r\n  vertical-align: middle;\r\n  width: 56px;\r\n  z-index: 1;\r\n  -webkit-perspective-origin: 28px 28px;\r\n          perspective-origin: 28px 28px;\r\n  -webkit-transform-origin: 28px 28px;\r\n          transform-origin: 28px 28px;\r\n  border-radius: 50% 50% 50% 50%;\r\n  font: bold 15.5px / 54px Roboto, sans-serif;\r\n  overflow: hidden;\r\n  transition: all 0.3s ease 0s;\r\n  background: url(\"./dot.png\");\r\n}\r\n\r\n\r\n.mine-bomb{\r\n  background: url(\"./bomb_lost.png\");\r\n  border: 0px none  rgb(255, 255, 255);       \r\n  }\r\n\r\n.mine-flag{\r\n  background: url(\"./flag.png\");\r\n  border: 0px none  rgb(255, 255, 255);       \r\n  }\r\n\r\n.mine-superman\r\n{\r\n  color: rgb(255, 255, 255);\r\n  background: url(\"./dot3.png\");\r\n}\r\n\r\n.mine-bomb-superman\r\n{\r\n  background: url(\"./bomb2.png\");\r\n}\r\n\r\n.mine-flag-good-superman\r\n{\r\n  color:  rgb(255, 255, 255);\r\n  background: url(\"./flaggood.png\");\r\n}\r\n\r\n.mine-flag-bad-superman\r\n{\r\n  color:  rgb(255, 255, 255);\r\n    background: url(\"./flagbad.png\");\r\n}\r\n\r\n.mine-click\r\n{\r\n  \r\n  color:  rgb(0, 0, 0);\r\n  background: url(\"./dot2.png\");\r\n\r\n}\r\n"

/***/ }),

/***/ 673:
/***/ (function(module, exports) {

module.exports = "<div id=\"myDiv\">\r\n    <h4 *ngIf=\"!restartTable\"> Minesweeper! </h4>\r\n<h1>\r\n  <a *ngIf=\"!restartTable\" id=\"container\" >\r\n  <a *ngIf=\"!custom\">\r\n  User:\r\n  <input type=\"text\" [(ngModel)]=\"user\" name=\"User\" ></a>\r\n  <a *ngIf=\"custom\">\r\n  Height:\r\n  <input type=\"text\" [(ngModel)]=\"width\" (change)=\"onChange()\" name=\"Height\" >\r\n  Width:\r\n  <input type=\"text\" [(ngModel)]=\"height\" (change)=\"onChange()\" name=\"Width\" >\r\n  Mines:\r\n  <input  type=\"text\" [(ngModel)]=\"mines\" (change)=\"onChange()\" name=\"Mines\" >\r\n  <br><button class=\"myButton\" (click) = \"restart()\" > Play </button>\r\n  <button class=\"myButton\" (click) = \"customGame(false)\" > Back </button><br>\r\n  </a>\r\n  <a *ngIf=\"!custom\">\r\n  <button class=\"myButton\" (click) = \"customGame(true)\" > Create custom game </button>\r\n  <button class=\"myButton\" (click) = \"random()\" > Surprise me </button><br>\r\n  <p>Or choose a level:<br>\r\n  <button class=\"myButton\" (click) = \"generate(3,1)\" > Beginner </button>\r\n  <button class=\"myButton\" (click) = \"generate(2,1)\" > Normal </button>\r\n  <button class=\"myButton\" (click) = \"generate(1,1)\" > Pro </button></a>\r\n  \r\n</a>\r\n</h1>\r\n<b *ngIf = \"restartTable\" id=\"mid\">\r\n<h3 style=\"margin-left: 20px\" >  \r\n<h5 >Hello {{user}}, <br></h5>\r\n<br >Flags left: <img src=\"./flag_small.png\" > X {{flags}} \r\n<br> Time: <b> {{counterMin}}:{{counterSec}}</b>\r\n<br>\r\n<a  *ngIf = \"won == lost\" >Need some help? call Superman\r\n<br><img  src=\"./superman.png\"  style=\"cursor:pointer;margin-left: 330px;margin-top: -45px; position:absolute\" (click) = \"superman()\">\r\n<div style=\"font-size: 25px\" >Instructions: </div>\r\n<div style=\"font-size: 18px;margin-left: 20px\"> Left-click an empty square to reveal it.<br>\r\n(Shift + Left-click) an empty square to flag it.<br>\r\nSuperman explenation</div></a></h3>\r\n<button style=\"margin-left: 20px\" class=\"secButton\" (click) = \"restart()\" > New Game </button>\r\n<button style=\"margin-left: 20px\" class=\"secButton\" (click) = \"again()\" > Restart </button>\r\n<table  \r\n    id=\"mineBackground\" [ngStyle]=\"{'board': (width*height)}\">\r\n        <tr *ngFor=\"let row of space\">\r\n        <td *ngFor=\"let mineBox of row\">\r\n            <app-mine-box [mine]=\"mineBox.mine\" [superman]=\"mineBox.superman\" [flag]=\"mineBox.flag\" [revealed]=\"mineBox.revealed\" [danger]=\"mineBox.danger\" (click)=\"boxClicked($event,mineBox.i, mineBox.j)\"></app-mine-box>\r\n        </td>\r\n    </tr>\r\n</table>\r\n</b>\r\n\r\n</div>"

/***/ }),

/***/ 674:
/***/ (function(module, exports) {

module.exports = "<a [ngClass]=\"{'mine-box': true , \r\n'mine-bomb': revealed && mine,\r\n'mine-click': revealed && !mine && !flag,\r\n'mine-flag': (!revealed && flag && !superman) || (revealed && !mine && flag),\r\n'mine-superman': superman && !mine,\r\n'mine-flag-good-superman': superman && flag && mine,\r\n'mine-flag-bad-superman': superman && flag && !mine,\r\n'mine-bomb-superman': superman && mine && !revealed}\">\r\n    <i *ngIf=\"(superman && !mine && (danger>0)) || (revealed && !mine && (danger>0))\" style=\"font: bold;\">\r\n        {{danger}}\r\n    </i>\r\n</a>\r\n"

/***/ }),

/***/ 954:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(403);


/***/ })

},[954]);
//# sourceMappingURL=main.bundle.map