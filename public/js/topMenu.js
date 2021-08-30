 class topMenu {
        constructor(){
        this.init();
        this.handle();
    }

     init() {
        this.exitButtonElem = document.getElementById('push_exit');
        this.settingsButtonElem = document.getElementById('push_settings');
        this.logoutElem = document.getElementById('logout');
        this.formTopMenuElem = document.getElementById('formTopMenu');

         this.tenantsButtonElem = document.getElementById('tenantsButton');
        this.financeButtonElem = document.getElementById('financeButton');
        this.headerButtonsElem = document.getElementById('header_buttons');
        this.mainTemplateElem = document.getElementById('mainTemplate');
        this.contentTemplateElem = document.getElementById('contentTemplate');
    }

     handle() {
        this.exitButtonElem.addEventListener('click', () => {
            event.preventDefault();
            this.logout();
        });
        this.settingsButtonElem.addEventListener('click', () => {
            event.preventDefault();
            this.showSettings();
        });
        this.financeButtonElem.addEventListener('click',()=>{
            event.preventDefault();
            this.mainTemplateElem.value = 'home';
            this.contentTemplateElem.value = 'financialTable';
            this.headerButtonsElem.submit();
        });
        this.tenantsButtonElem.addEventListener('click',()=>{
            event.preventDefault();
            this.mainTemplateElem.value = 'home';
            this.contentTemplateElem.value = 'listOfTenants';
            this.headerButtonsElem.submit();
        });
    }

     showSettings() {
        // function showSettings
    }

     logout() {
        this.logoutElem.value = 'logout';
        this.formTopMenuElem.submit();
    }
}

//const topMenu = new TopMenu();

/*  194  public/js/validateForm.js
Viewed
@@ -0,0 +1,194 @@
/* в этом файле собрано две валидации: валидация формы входа и валидация формы регистрации
 */

 class RegistrationForm {
    constructor() {
        this.init();
        this.handle();
    }

     init() {
        this.buttonElem = document.getElementById('registration_button');
        this.formElem = document.getElementById('wrap_form__reg');
        this.elems = this.formElem.querySelectorAll('input[type=text]');
        this.data = [];
        this.invalidFields = [];
    }

     handle() {
        if (!this.buttonElem) {
            return;
        }
        this.buttonElem.addEventListener('click', () => {
            event.preventDefault();
            this.resetErrors();
            this.parse();
            this.validate();
            if (!this.showErrors()) {
                this.send()
            }
        });
    }

     send() {
        this.formElem.submit();
    }

     parse() {
        this.elems.forEach(el => {
            this.data[el.name] = el.value;
        });
    }

     validate() {
        const check = [];
        if (!this.data['organizationName'].length || this.data['organizationName'].length > 20) {
            // check.push({'organizationName': 'не должно быть пустым / не более 20 символов'});
            check['organizationName'] = 'не должно быть пустым / не более 20 символов';
        }
        if (!this.data['organizationAddress'].length || this.data['organizationAddress'].length > 35) {
            // check.push({'organizationAddress': 'не должно быть пустым / не более 35 символов'});
            check['organizationAddress'] = 'не должно быть пустым / не более 35 символов';
        }
        if (this.data['inn'].length !== 13 || this.data['inn'] != +parseInt(this.data['inn'])) {
            // check.push({'inn': 'должно быть 13 цифр'});
            check['inn'] = 'должно быть 13 цифр';
        }
        if (this.data['kpp'].length !== 10 || this.data['kpp'] != +parseInt(this.data['kpp'])) {
            // check.push({'kpp': 'должно быть 10 цифр'});
            check['kpp'] = 'должно быть 10 цифр';
        }
        if (this.data['ogrn'].length !== 13 || this.data['ogrn'] != +parseInt(this.data['ogrn'])) {
            // check.push({'ogrn': 'должно быть 13 цифр'});
            check['ogrn'] = 'должно быть 13 цифр';
        }
        if (this.data['korSchet'].length !== 20 || this.data['korSchet'] != +parseInt(this.data['korSchet'])) {
            // check.push({'korSchet': 'должно быть 20 цифр'});
            check['korSchet'] = 'должно быть 20 цифр';
        }
        if (this.data['schet'].length !== 20 || this.data['schet'] != +parseInt(this.data['schet'])) {
            check['schet'] = 'должно быть 20 цифр';
        }
        if (!this.data['bank'].length || this.data['bank'].length > 35) {
            // check.push({'bank': 'не должно быть пустым / не более 35 символов'});
            check['bank'] = 'не должно быть пустым / не более 35 символов';
        }
        if (!this.data['login'].length || this.data['login'].length > 35 ||
            !(/[a-z]+[\w]*@[a-z]+.[a-z]{2,3}/.test(this.data['login']))) {
            // check.push({'email': 'не должно быть пустым / должен быть формата [test]@[test].[com] / не более 35 символов'});
            check['login'] = 'не должно быть пустым / должен быть формата [test]@[test].[com] / не более 35 символов';
        }
        if (!this.data['pass'].length || this.data['pass'].length > 35) {
            // check.push({'pass': 'не должно быть пустым / не более 35 символов'});
            check['pass'] = 'не должно быть пустым / не более 35 символов';
        }
        this.invalidFields = check;
    }

     showErrors() {
        if (!Object.keys(this.invalidFields).length) {
            return false;
        }

         this.elems.forEach(el => {
            if (el.name in this.invalidFields) {
                el.title = this.invalidFields[el.name];
                el.classList.add('error_input');
            }
        });
        return true;
    }

     resetErrors() {
        this.elems.forEach(el => {
            el.removeAttribute('title');
            el.classList.remove('error_input');
        });
    }

 }

 class EntranceForm {
    constructor() {
        this.init();
        this.handle();
    }

     init() {
        this.buttonElem = document.getElementById('entrance_button');
        this.formElem = document.getElementById('wrap_form__entrance');
        this.elems = this.formElem.querySelectorAll('input[type=text]');
        this.data = [];
        this.invalidFields = [];
    }

     handle() {
        if (!this.buttonElem) {
            return;
        }
        this.buttonElem.addEventListener('click', () => {
            event.preventDefault();
            this.resetErrors();
            this.parse();
            this.validate();
            if (!this.showErrors()) {
                this.send()
            }
        });
    }

     send() {
        console.log('send');
    }

     resetErrors() {
        this.elems.forEach(el => {
            el.removeAttribute('title');
            el.classList.remove('error_input');
        });
    }

     parse() {
        this.elems.forEach(el => {
            this.data[el.name] = el.value;
        });
    }

     validate() {
        const check = [];
        if (!this.data['login'].length || this.data['login'].length > 35) {
            check['login'] = 'не должно быть пустым / не более 35 символов';
        }
        if (!this.data['pass'].length || this.data['pass'].length > 35) {
            check['pass'] = 'не должно быть пустым / не более 35 символов';
        }
        this.invalidFields = check;
    }


     showErrors() {
        if (!Object.keys(this.invalidFields).length) {
            return false;
        }

         this.elems.forEach(el => {
            if (el.name in this.invalidFields) {
                el.title = this.invalidFields[el.name];
                el.classList.add('error_input');
            }
        });
        return true;
    }

     send() {
        this.formElem.submit();
    }
}

 if (document.getElementById('wrap_form__reg')) {
    const registrationForm = new RegistrationForm();
}
if (document.getElementById('wrap_form__entrance')) {
    const entranceForm = new EntranceForm();
}