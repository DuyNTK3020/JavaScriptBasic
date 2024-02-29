function Validator(options) {
    console.log(options);
    var formElement = document.querySelector(options.form);
    if (formElement) {
        console.log(formElement);
    }
}

Validator.isRequired = function () {};

Validator.isEmail = function () {};
