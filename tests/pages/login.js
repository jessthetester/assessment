export class LoginPage{

    navigateAndClickGithub(){
        browser.get('https://todo-list-login.firebaseapp.com/');
        element(by.css('[ng-click="login.loginWithGithub()"]')).click();
        browser.sleep(5000)
    }

    async loginCredential() {
        beforeEach(function () {
            browser.ignoreSynchronization = true;
        });

        let wins = await browser.getAllWindowHandles();
        console.log(wins);
        console.log(wins.length);
        browser.switchTo().window(wins[1]);
        browser.driver.findElement(by.id('login_field')).sendKeys(""); // GitHub username
        browser.driver.findElement(by.id('password')).sendKeys(""); // GitHub password
        browser.driver.findElement(by.name('commit')).click();

        await browser.sleep(3000)
        browser.switchTo().window(wins[0]);
    }
}
