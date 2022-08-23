describe('navigate and click on Github button', function(){
    it('navigate test', function(){
            browser.get('https://todo-list-login.firebaseapp.com/');
            element(by.css('[ng-click="login.loginWithGithub()"]')).click();

        browser.sleep(5000)
    });
});

describe('non angular page', function(){
    beforeEach(function() {
        browser.ignoreSynchronization = true;
    });

    it('login to GitHub pop up', async function () {
        let wins = await browser.getAllWindowHandles();
        console.log(wins);
        console.log(wins.length);
        browser.switchTo().window(wins[1]);
        browser.driver.findElement(by.id('login_field')).sendKeys(""); // GitHub username
        browser.driver.findElement(by.id('password')).sendKeys(""); // GitHub password
        browser.driver.findElement(by.name('commit')).click();

        await browser.sleep(3000)
        browser.switchTo().window(wins[0]);
    });
});

describe('create 10 to do list with random strings and logout', function(){
    it('add tdl', function(){
        for (let i = 0; i < 10; i++) {
            element(by.css('[ng-model="home.list"]')).sendKeys(Math.random().toString(36).substring(2, 15));
            element(by.css('[ng-click="home.list && home.add()"]')).click();
        }

        browser.sleep(2000)

    });
});

describe('logout', function(){
    it('logout', function(){
        element(by.css('[ng-click="home.signOut()"]')).click();
        browser.sleep(2000)
    });
});

describe('navigate and click on Github button', function(){
    it('navigate test', function(){
        browser.get('https://todo-list-login.firebaseapp.com/');
        element(by.css('[ng-click="login.loginWithGithub()"]')).click();

        browser.sleep(5000)
    });

});


describe('delete todo list by loop', function(){  // need to delete from 5 - 10
    it('delete tdl', function(){
        let partOne = '//ul[@class="list-group"]/li[';
        let partTwo = 5;
        let partThree = ']/div[@class="row"]/div[2]/button';
        let del =  partOne + partTwo + partThree;

        for (; partTwo < 11; partTwo++) {
            let delBtn = element(by.xpath(del));
            delBtn.click();
        }

        browser.sleep(2000)
    });
});


describe('logout', function(){
    it('logout', function(){
        element(by.css('[ng-click="home.signOut()"]')).click();

        browser.sleep(5000)
    });
});