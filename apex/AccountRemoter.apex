global with sharing class AccountRemoter {

    @RemoteAction
    global static List<Account> getAccounts() {
        List<Account> accounts = [SELECT Id, Name FROM Account LIMIT 1000];
        return accounts;
    }
}