const { By } = require("selenium-webdriver");
const { driver } = require("selenium-webdriver/chrome");

module.exports = function() {

    this.Given('I am on starbucks.com home page', function(){
        return('https://www.starbucks.com/')
    });

    this.When('I click on JoinNow', function(){
        //var selector = '//*[@id="__next"]/header/nav/div[1]/div/div[2]/div[2]/div/a[3]';
        //return driver.findElement(By.xpath(selector)).click();
        //return page.starbucks-objects.clickElement(objectKey);

        var selector = '//*[@id="__next"]/header/nav/div[1]/div/div[2]/div[2]/div/a[3]';

        // selector will have //*[@id="bs-example-navbar-collapse-1"]/ul/li[2]/a
       
        const executedXPath = By.xpath(selector)
        const ele = driver.findElement(executedXPath)
        ele.click()
    });

    this.Then('I should see StarbucksRewards', function(){
        var selector = '//*[@id="content"]/div[1]/div/h2';
        return driver.findElement(By.xpath(selector));
        //return page.starbucks-objects.elementExists(objectKey);
    });

    this.Then('I should see Menu', function(){
        var selector = '//*[@id="__next"]/header/nav/div[1]/div/div[2]/div[1]/ul/li[1]/a';
        return driver.findElement(By.xpath(selector));
    });

};