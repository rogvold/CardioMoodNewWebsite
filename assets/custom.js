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

function isSNG(){
    var l = navigator.language || navigator.userLanguage;
    l = l.toLowerCase();
    if (! (l == 'ru' || l == 'ua' || l == 'mn' || l == 'kz' || l == 'by' || l == 'ee' || l == 'ge' || l == 'lt' || l == 'lv' || l == 'uz' || l == 'tj')){
        return false;
    }
    return true;
}

function checkLang(){
    var cLan = $.cookie('lang');
    if (window.location.href.indexOf('/en') > -1){
        if (cLan == undefined){
            $.cookie('lang', 'en');
        }else{
            if (cLan != 'en'){
                window.location.href = '/';
            }
        }
        return;
    }
    //on russian version
    if (cLan == undefined){
        if (isSNG()){
            $.cookie('lang', 'ru');
        }else{
            $.cookie('lang', 'en');
            window.location.href = '/en';
        }
    }
}