
const { Given, When, Then, After } = require('@cucumber/cucumber');
const { Builder, By, Key, Browser } = require('selenium-webdriver');
const driver = new Builder().forBrowser('chrome').build();
const assert = require("assert");
module.exports = driver;




Given('Estou na página inicial do Netflix', async function () {
    await driver.get('https://www.netflix.com/br/');
    await driver.sleep(200);
  });
  
   When('Eu clico no botão Entrar no Login', async function () {
    await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div/div/div/div[1]/div/div[2]/div/header/div[2]/div/div/div[2]')).click(); 
    await driver.sleep(200);
  });

  When('Eu clico no X da mensagem', async function () {
    await driver.findElement(By.css('#onetrust-close-btn-container > button')).click(); 
    await driver.sleep(200);
  });
    
  When('Eu informo o USERNAME {string} e PASSWORD {string}', async function (USERNAME, PASSWORD) {
    await driver.findElement(By.id(':r0:')).sendKeys('email');
    await driver.findElement(By.id(':r3:')).sendKeys('senha');
  });

  When('Eu clico no botão Entrar no Gerenciador de Usuário', async function () {
    await driver.findElement(By.xpath('//*[@id="appMountPoint"]/div/div/div[2]/div/form/button[1]')).click(); 
  });


  Then('Devo ver a página inicial', async function () {
    await driver.findElements(By.tagName('Quem está assistindo?'));
    await driver.sleep(200);
  });
 
  Then('Devo ver uma mensagem de erro {string}', async function (expectedErrorMessage) {
    const errorMessage = await loginPage.getErrorMessage();
    assert.strictEqual(errorMessage, expectedErrorMessage);
  });

