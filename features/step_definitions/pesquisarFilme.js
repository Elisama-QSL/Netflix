const { Given, When, Then, After } = require('@cucumber/cucumber');
const { By, until, Key } = require('selenium-webdriver');
const driver = require('../step_definitions/acessarPagNetflix');


Given('Que clico no menu Filmes', async function () {
      await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[1]/div[1]/div[1]/div/div[2]/ul/li[4]/a')).click();
   });  

When('Eu pesquiso um filme', async function () {
     await driver.findElement(By.className('searchTab')).click;
     await driver.findElement(By.className('searchTab')).sendKeys(' Invasão a Casa Branca');
        
 });  

 Then('Eu seleciono o filme', async function () {
   let filmElement = await driver.wait(until.elementLocated(By.css('.title-card')), 10000);
        await filmElement.click();
        await driver.sleep(5000);
 });

