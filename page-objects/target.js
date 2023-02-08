module.exports = {

    urls: {
        targetUrl : 'https://www.target.com/',
        facebookUrl : 'https://www.facebook.com/',
    },

    elements: {
        facebookLogin : '//*[@data-testid="royal_login_button"]',
        facebookLoginError : '//*[@id="email_container"]/div[2]',
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
        createUser : '//*[@id="createAccount"]',
        //createAcctHead :'//*[@id="__next"]/div[2]/div/div[1]/div/div[2]/h1',
        email : by.name('usernamecreateaccount'),
        firstName : by.name('firstnamecreateaccount'), //*[@id="firstname"]
        lastName : by.name('lastnamecreateaccount'),
        mobileNo : by.name('phonecreateAccount'),
        createPswd : by.name('passwordcreateaccount'),
        createAcct : '//*[@id="createAccount"]',
        enterValidPswd : '//*[@id="password--ErrorMessage"]',
        enterValid : '//*[@id="username--ErrorMessage"]',
        doNotSee : '//*[@id="__next"]/div[2]/div/div[1]/div/div[2]/form/div[7]/div[2]/div/ul/li[4]',
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
        await driver.sleep(3000);
        return driver.findElement(selector).sendKeys(val);
        },
                        
    clickButton: async function(button1) {
        var selector = page.target.elements[button1];
        await driver.sleep(3000);
        return driver.findElement(By.xpath(selector)).click();
        },

    // inputUserName: async function(val) {
    //     var selector = page.target.elements['emailValue']; 
    //     await driver.sleep(2000);
    //     return driver.findElement(selector).sendKeys(val);
    //     },

}