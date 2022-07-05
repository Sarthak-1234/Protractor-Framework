
import {ElementFinder, element, by} from "protractor";

export class calculator{

    firstTextBox:ElementFinder;
    secondTextBox:ElementFinder;
    goButton:ElementFinder;
    goResult:ElementFinder;

constructor(){
    this.firstTextBox=element(by.model("first"));
    this.secondTextBox=element(by.model("second"));
    this.goButton=element(by.id("gobutton"));
    this.goResult=element(by.css("h2.ng-binding"));
}
}