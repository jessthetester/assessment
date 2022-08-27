import {LoginPage} from "./pages/login";
import {LogoutPage} from "./pages/logout";
import {addToDoList} from "./pages/addTDL";
import {delToDoList} from "./pages/delTDL";

const loginPage = new LoginPage()
const logoutPage = new LogoutPage()
const addTDL = new addToDoList()
const delTDL = new delToDoList()

describe('Login with GitHub', function(){
    it('navigate test', function(){
        loginPage.navigateAndClickGithub()
        loginPage.loginCredential()
    });
});

describe('create 10 to do list with random strings and logout', function(){
    it('add 10 to do list', function(){
        addTDL.addTenRandomString()
    });

    it('Logout', function (){
        logoutPage.logout()
    })
});

describe('login, delete todo list by loop and logout', function(){  // need to delete from 5 - 10
    it('Login', function (){
        loginPage.navigateAndClickGithub()
    })

    it('delete tdl', function(){
        delTDL.deleteNumberFiveToTen()
    });

    it('Logout', function (){
        logoutPage.logout()
    })
});
