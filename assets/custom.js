/**
 * Created by sabir on 22.08.14.
 */

var CardioMoodWebsite = function(){
    var self = this;


    this.initParse = function(){
        var applicationId = "SSzU4YxI6Z6SwvfNc2vkZhYQYl86CvBpd3P2wHF1";
        var javaScriptKey = "0ppjIVaWy3aqHyGEA95InejakxRELOMrePgRfREt";
        Parse.initialize(applicationId, javaScriptKey);
    }

    this.init = function(){
        self.initParse();
    }

    this.loadContacts = function(callback){
        var ContactForm = Parse.Object.extend('ContactForm');
        var q = new Parse.Query(ContactForm);
        q.limit(1000);
        q.descending('createdAt');
        q.find(function(list){
            callback(list);
        });
    }

    this.drawContacts = function(){
        self.loadContacts(function(){

        });
    }



}