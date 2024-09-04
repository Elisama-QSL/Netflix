const { Given, When, Then, After } = require('@cucumber/cucumber');
const {By, until} = require('selenium-webdriver');
const driver = require('../step_definitions/acessarPagNetflix');


Given('Que acesso o Perfil', async function () {
   let perfil = await driver.wait(until.elementLocated(By.className('profile-link'),5000));
   await perfil.click();
   //await driver.sleep(200);
 });  


   