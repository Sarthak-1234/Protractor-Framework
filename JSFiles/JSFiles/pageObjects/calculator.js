"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculator = void 0;
const protractor_1 = require("protractor");
class calculator {
    constructor() {
        this.firstTextBox = (0, protractor_1.element)(protractor_1.by.model("first"));
        this.secondTextBox = (0, protractor_1.element)(protractor_1.by.model("second"));
        this.goButton = (0, protractor_1.element)(protractor_1.by.id("gobutton"));
        this.goResult = (0, protractor_1.element)(protractor_1.by.css("h2.ng-binding"));
    }
}
exports.calculator = calculator;
