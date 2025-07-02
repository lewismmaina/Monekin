const landingScreen = require('../objects/landingScreen');
const createAccount = require('../objects/createAccount');
import { expect } from 'expect-webdriverio';

/**
 * Landing Screen Flow Tests
 * Validates app startup elements, offline handling, currency selection, and transaction start.
 */

describe('Landing Screen Flow', () => {
    
    it('Test 1: should display initial landing elements', async () => {
        try {
            console.log('Test 1 Start');

            await landingScreen.landingName.waitForDisplayed({ timeout: 5000 });
            expect(await landingScreen.landingName.isDisplayed()).toBe(true);

            await landingScreen.offlinenotification.waitForDisplayed({ timeout: 5000 });
            expect(await landingScreen.offlinenotification.isDisplayed()).toBe(true);

            await landingScreen.offlineMessage.waitForDisplayed({ timeout: 5000 });
            expect(await landingScreen.offlineMessage.isDisplayed()).toBe(true);

            console.log('Test 1 Passed');
        } catch (err) {
            console.error('Test 1 Failed:', err);
        }
        });
    
    it('Test 2: should click offline button and reveal currency image', async () => {
        try {
            console.log('Test 2 Start');

            await landingScreen.offlineButton.waitForClickable({ timeout: 5000 });
            await landingScreen.offlineButton.click();

            await landingScreen.selectCurrencyimg.waitForDisplayed({ timeout: 5000 });
            expect(await landingScreen.selectCurrencyimg.isDisplayed()).toBe(true);

            console.log('Test 2 Passed');
        } catch (err) {
            console.error('Test 2 Failed:', err);
        }
    });

    it('Test 3: should select currency and navigate forward', async () => {
        try {
            console.log('Test 3 Start');

            await landingScreen.selectCurrency.waitForClickable({ timeout: 5000 });
            await landingScreen.selectCurrency.click();

            await landingScreen.nextButton.waitForDisplayed({ timeout: 5000 });
            await landingScreen.nextButton.click();

            await landingScreen.nextButton2.waitForDisplayed({ timeout: 5000 });
            await landingScreen.nextButton2.click();

            await landingScreen.continueButton.waitForDisplayed({ timeout: 5000 });
            await landingScreen.continueButton.click();

            console.log('Test 3 Passed');
        } catch (err) {
            console.error('Test 3 Failed:', err);
        }
    });

    it('Test 4: should display welcome message and start new transaction', async () => {
        try {
            console.log(' Test 4 Start');

            await landingScreen.welcomeText.waitForDisplayed({ timeout: 5000 });
            expect(await landingScreen.welcomeText.isDisplayed()).toBe(true);

            await landingScreen.newTransactionButton.waitForClickable({ timeout: 5000 });
            await landingScreen.newTransactionButton.click();

            await landingScreen.oopsMessage.waitForDisplayed({ timeout: 5000 });
            expect(await landingScreen.oopsMessage.isDisplayed()).toBe(true);

            console.log('Test 4 Passed');
        } catch (err) {
            console.error('Test 4 Failed:', err);
        }
    });

});

describe ('Create Account Flow', () => {

    it('should fill in account details and create account', async () => {
        try {
            console.log('Test: Start create account');

            // Enter account name
            await createAccount.createAccountName.waitForDisplayed({ timeout: 5000 });
            await createAccount.createAccountName.setValue('Savings');

            // Enter initial balance
            await createAccount.initialBalance.waitForDisplayed({ timeout: 5000 });
            await createAccount.initialBalance.setValue('10000');

            // Open currency dropdown
            await createAccount.currencyDropdown.waitForClickable({ timeout: 5000 });
            await createAccount.currencyDropdown.click();

            // Tap search input
            await createAccount.searchCurrency.waitForDisplayed({ timeout: 5000 });
            await createAccount.searchCurrency.click();

            // Type 'ke' to search Kenya currency
            await createAccount.searchCurrency.setValue('ke');

            // Select 'Kenya' from search results
            await createAccount.kenyaCurrency.waitForDisplayed({ timeout: 5000 });
            await createAccount.kenyaCurrency.click();

            // Save currency
            await createAccount.saveCurrencyButton.waitForClickable({ timeout: 5000 });
            await createAccount.saveCurrencyButton.click();

            // Exit currency selection screen
            await createAccount.exitCurrencySelection.waitForClickable({ timeout: 5000 });
            await createAccount.exitCurrencySelection.click();

            // Click Create Account button
            await createAccount.createAccountButton.waitForClickable({ timeout: 5000 });
            await createAccount.createAccountButton.click();

            console.log('Test: Create account complete');
        } catch (e) {
            console.error('Create Account Test Failed:', e);
        }
    });
});
