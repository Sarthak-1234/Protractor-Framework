import {Given, When, Then} from "cucumber";
import {calculator} from "../pageObjects/calculator";
import {browser, element, by} from "protractor";
let calc = new calculator();

Given('I will navigate to Calc website', async ()=> {
    // Write code here that turns the phrase above into concrete actions
   // return 'pending';
   await browser.get("http://juliemr.github.io/protractor-demo/");
  });


  When('I add two numbers {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    await calc.firstTextBox.sendKeys(string);
    await calc.secondTextBox.sendKeys(string2);
    await calc.goButton.click();
        
  });


  Then('the output displayed should be {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    //return 'pending';
    await calc.goResult.getText().then(function(text){
        console.log(text);
    })
  });

  




