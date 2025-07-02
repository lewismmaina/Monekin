
/**
 * page containing specific selectors and methods for a the landing
 */

class StartupScreen {

    get landingName() {
        return $$('//00000000-0000-000d-0000-00050000000');

    }

    get offlinenotification() {
        return $('//00000000-0000-000d-0000-00050000000[@4]');
    }

    get offlineMessage() {
        return $('//00000000-0000-000d-0000-00050000000[@5]');
    }
    get offlineButton() {
        return $('//00000000-0000-000d-0000-00050000000[@6]');
    }
    get selectCurrencyImage() {
        return $('//android.widget.ImageView[@Value]');
    }
    get selectCurrency() {
        return $('//android.widget.ImageView[@content-desc="Select your currencyUS Dollar"]');
    }

    get nextButton() {
        return $('//android.widget.Button[@content-desc="Next"]');
    }

    get nextButton2() {
        return $('//android.widget.Button[@content-desc="Next"]');
    }

    get continueButton() {
    
        return $('//android.widget.Button[@content-desc="Continue"]');
    }  

    get welcomeText() {
        return $('//android.widget.ImageView[@content-desc="Welcome again!User"]');
    }

    get newTransactionButton() {

        return $('//android.widget.Button[@content-desc="New transaction"]');
    }

    get oopsMessage() {
        return $('//00000000-0000-000d-0000-006000000003')

    }



}

class CreateAccount {
    get createAccountButton() {
        return $('//android.view.View[@content-desc="Create account"]');
    }
    get createAccountName() {
        return $('//android.widget.EditText[3]');
    }

    get initialBalance() {
        return $('//android.widget.EditText[4]');

    }   

    get currencyDropdown() {
        return $('//android.view.View[5]');
    }

    get searchCurrency() {
        return $('//00000000-0000-0004-0000-027f00000003');
    }

    get kenyaCurrency() {
        return $('//00000000-0000-0004-0000-030e00000003');
    
    }   

    get saveCurrencyButton() {
        return $('//00000000-0000-0004-0000-028200000003');
    }

    get exitCurrencySelection() {
        return $('//00000000-0000-0004-0000-02810000000');
    }

    get createAccountButton() {
        return $('android.widget.Button[2]');
    }



}
module.exports = new StartupScreen();
module.exports = new CreateAccount();