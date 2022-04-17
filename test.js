const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function myTest(){
    var searchString = "Automation testing";
    let driver = await new Builder().forBrowser("chrome").build();

    await driver.get("https://www.techlistic.com/p/demo-selenium-practice.html");
    
    let rowCount = getElementByXpath("//*[@id='post']/div[1]/table/tbody/tr");

    let colCount = getElementByXpath("//*[@id='post']/div[1]/table/tbody/tr[1]/td");

    let firstPath = "//*[@id='post']/div[1]/table/tbody/tr[";
    let secondPath = "]/td[";
    let thirdPath = "]";

    for(let i=1; i<=rowCount;i++){
        for(let j=1; j<=colCount;j++){
            let finalXpath = firstPath + secondPath + thirdPath;
            let finalData = getElementByXpath(finalXpath).getText();
            console.log('Table data : ' + ' ')
        }
        console.log('');
        console.log('');
    }

    await driver.quit();
}

async function getElementByXpath(path){
    return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
}

myTest();