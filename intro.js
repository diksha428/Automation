const puppeteer = require("puppeteer");
console.log("Before");
const browserOPenpromise=puppeteer.launch({headless : false});
browserOPenpromise.then(function (browser) {
             //currently opened tabs
             const pageArrpromise =browser.pages();
             return pageArrpromise;
         }).then(function (browserPages) {
             page = browserPages[0];
             let gotoPromise = page.goto("https://www.google.com/");
             return gotoPromise;
         }).then(function () {
             // waiting for the element to appear on the page
             let elementWaitPromise= page.waitForSelector("input[type='text']", { visible: true});
             return elementWaitPromise;
         })
         .then(function () {
             //console.log("Reached google ho,e page");
             //type any element on that page -> Selector
             let keysWillBeSendPromise =page.type("input[type='text']", "pepcoding");
             return keysWillBeSendPromise;
         }).then(function (){
             //page.keyboard to type special character
             let enterWillBePressed = page.keyboard.press("Enter");
             return enterWillBePressed;
         }).catch(function (err){
            console.log("err") 
         })

         console.log("After");
