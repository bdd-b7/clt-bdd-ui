module.exports = {

    urls: 'http://www.target.com',

    elements: {
        signInRegister : '//*[@id="headerPrimary"]/a[4]',
        signIn : '//*[@id="listaccountNav-signIn"]/a',
        signInHeader : '//*[@id="__next"]/div[2]/div/div[1]/div/h1/span',
        username : by.name('username'), 
        password : by.name('password'), 
        loginButton : '//*[@id="login"]',
        errorMessage : '//*[@id="__next"]/div[2]/div/div[1]/div/div[2]',
        welcomeMessage : '//*[@id="listaccountNav-account"]/a',
        forgotPswd : '//*[@id="recoveryPassword"]',
        forgotPswdHeader : '//*[@id="__next"]/div[2]/div/div[1]/div/div[2]/div/div/h1',
        searchClick :'//*[@id="search"]',
        searchText : by.name('searchTerm'),
        search : '//*[@id="headerPrimary"]/div[6]/form/button[2]',
        productResults : '//*[@id="pageBodyContainer"]/div[1]/div/div[4]/div/div[1]/div[2]/div/div[1]/h2',
        productLink : '//*[@id="pageBodyContainer"]/div[1]/div/div[4]/div/div[1]/div[2]/div/section/div/div[1]/div/div/div[1]/div[2]/div/div/div[1]/div[1]/div[1]/a',
        addCart : '//*[@id="addToCartButtonOrTextIdFor54191097"]',
        addedMessage : '//*[@id="__next"]',
     },

    clickElement: async function(objectKey) {
        var selector = page.target.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
        },
                
    elementExists: async function(objectKey) {
        var selector = page.target.elements[objectKey];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector));
        },

    inputElement: async function(name,val) {
        var selector = page.target.elements[name]; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);
        },
                        
    loginPortal: async function(button1) {
        var selector = page.target.elements[button1];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();
        },

}