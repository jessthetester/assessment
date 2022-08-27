export class addToDoList{

    addTenRandomString(){
        for (let i = 0; i < 10; i++) {
            element(by.css('[ng-model="home.list"]')).sendKeys(Math.random().toString(36).substring(2, 15));
            element(by.css('[ng-click="home.list && home.add()"]')).click();
        }
        browser.sleep(2000)
    }
}