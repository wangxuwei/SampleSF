global with sharing class ContactRemoter{

    @RemoteAction
    global static List<Contact> getContacts() {
        List<Contact> contacts = [SELECT Id, Name FROM Contact LIMIT 1000];
        return contacts;
    }
}