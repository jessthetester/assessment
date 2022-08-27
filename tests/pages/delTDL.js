export class delToDoList{

    deleteNumberFiveToTen(){
        let partOne = '//ul[@class="list-group"]/li[';
        let partTwo = 5;
        let partThree = ']/div[@class="row"]/div[2]/button';
        let del =  partOne + partTwo + partThree;

        for (; partTwo < 11; partTwo++) {
            let delBtn = element(by.xpath(del));
            delBtn.click();
        }

        browser.sleep(2000)
    }

}