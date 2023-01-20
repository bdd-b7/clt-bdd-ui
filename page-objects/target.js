const { Driver } = require("selenium-webdriver/chrome")

module.exports = {
    element: {
        login: '/html/body/mdb-root/main/div/app-login/app-outer-header/header/nav/div/div[2]/ul/li[2]/a'
    },
    clickElement: function (objectKey) { //login
       //eslint-disable-next-line no console
       var selector= page.jootza.elements[objectKey];
        //var xpathExpression = elements['login']///html/body/mdb-root/main/div/app-login/app-outer-header/header/nav/div/div[2]/ul/li[2]/a
        //Driver.findElement(By.xpath(xpathExpression)).click()
        return driver.findElement(By.xpath(selector)).click();
    }
}