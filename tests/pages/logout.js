export class LogoutPage{

    logout(){
        element(by.css('[ng-click="home.signOut()"]')).click();
        browser.sleep(2000)
    }
}