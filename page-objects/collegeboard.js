module.exports = {
  urls: {
    collegeboard: "https://www.collegeboard.org",
  },
  elements: {
    SignInlink: '//*[@id="cb-atlas-header-1"]/div[1]/div/div[2]/div/a[1]/span[1]/strong',
    SignInHeader: '//*[@id="content"]/div/div[1]/div/div/h2',
    CSSProfilelink: '//*[@id="cb-program-band"]/div/div[4]/ul/li[4]/a',
    CSSProfile: '//*[@id="site-name"]/a',
    SATlink: '//*[@id="cb-program-band"]/div/div[1]/ul/li[1]/a',
    SATSuiteofAssessments: '//*[@id="site-name"]/a',
    BigFutureLink: '/html/body/div[1]/div[4]/div[1]/div/div[3]/div/div/div/div/div/div[3]/ul/li/a',
    BigFuture: '//*[@id="cb-atlas-header-1"]/div[1]/div/div[1]/div[2]/h2/a',
    SpringBoardlink: '/html/body/div[1]/div[4]/div[1]/div/div[3]/div/div/div/div/div/div[2]/ul/li[3]/a',
    SpringBoard: '//*[@id="site-name"]/a'
  },
  clickElement: async function (objectkey) {
    var selector = page.collegeboard.elements[objectkey];
    await driver.sleep(4000);
    return driver.findElement(By.xpath(selector)).click();
  },
  elementExists: async function (objectkey) {
    var selector = page.collegeboard.elements[objectkey];
    await driver.sleep(4000);
    return driver.findElement(By.xpath(selector));
  }
};
