global with sharing class CustomControl{

    @RemoteAction
    global static List<Contact> listContacts() {
        List<Contact> contacts = [SELECT Id, Name FROM Contact LIMIT 1000];
        return contacts;
    }
    
    @RemoteAction
    global static Contact getContact(Id id) {
        List<Contact> contacts = [SELECT Id, Name FROM Contact WHERE Id=:id];
        if(contacts != null && contacts.size() > 0){
            return contacts.get(0);
        }
        return null;
    }
    
    @RemoteAction
    global static Contact saveContact(Id id,String lastName) {
        Contact o = null;
        if(id != null){
            o = new Contact(id = id);
            o.lastName = lastName;
            update o;
        }else{
            o = new Contact(lastName=lastName);
            insert o;
        }
        
        return o;
    }
    
    @RemoteAction
    global static Contact deleteContact(Id id) {
        Contact o = new Contact(Id = id);
        delete o;
        return o;
    }
    
    @RemoteAction
    global static List<CountryCustom__c> listCountryCustoms() {
        List<CountryCustom__c> countryCustoms = [SELECT Id, Name FROM CountryCustom__c LIMIT 1000];
        return countryCustoms;
    }
    
    @RemoteAction
    global static CountryCustom__c getCountryCustom(Id id) {
        List<CountryCustom__c> countryCustoms = [SELECT Id, Name FROM CountryCustom__c WHERE Id=:id];
        if(countryCustoms != null && countryCustoms.size() > 0){
            return countryCustoms.get(0);
        }
        return null;
    }
    
    @RemoteAction
    global static CountryCustom__c saveCountryCustom(Id id,String name) {
        CountryCustom__c o = null;
        if(id != null){
            o = new CountryCustom__c(id = id);
            o.name = name;
            update o;
        }else{
            o = new CountryCustom__c(Name=name);
            insert o;
        }
        
        return o;
    }
    
    @RemoteAction
    global static CountryCustom__c deleteCountryCustom(Id id) {
        CountryCustom__c o = new CountryCustom__c(Id = id);
        delete o;
        return o;
    }
    
}