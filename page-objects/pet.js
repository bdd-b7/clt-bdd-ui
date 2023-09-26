module.exports = {

    url: 'https://www.petsmart.com/',

    elements: {
        SignIn: '//*[@id="dp-header"]/div[1]/div[2]/div[2]/div[3]/div/div[1]/a/span[1]',
        returningCustomers: '//*[@id="account-login"]/div[2]/div/div/div/h2',
        ShopByPet: '//*[@id="shop-by-pet"]/a',
        Fish: '//*[@id="dp-shop-by-pet-content"]/div/section/ul/li[3]/a',
        text: '//*[@id="dp-header"]/div[1]/div[2]/div[4]/div/section/a/div',
    },
    
    clickElement: async function(objectKey) {
        var selector = page.pet.elements[objectKey];
        await driver.sleep(2000);
        return driver.findElement(By.xpath(selector)).click();
    },
    inputUserName: async function(val) {
        var selector = page.pet.elements['username']; 
        await driver.sleep(2000);
        return driver.findElement(selector).sendKeys(val);

    },

    elementExists: async function(objectKey) {
            var selector = page.pet.elements[objectKey];
            await driver.sleep(2000);
            return driver.findElement(By.xpath(selector));
     }
};