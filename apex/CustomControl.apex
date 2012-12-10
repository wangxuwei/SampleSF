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
    
}