import validator from "validator";

const fieldValidator = {
    validateRequired : function(field){
        if(validator.isEmpty(field))
            return 'this field is required'
    },

    validateEmail : function (email) {
        if(validator.isEmpty(email))
            return 'email is required'
        else if(!validator.isEmail(email))
            return email + ' is not a valid email'
    },

    validatePassword: function (password) {
        if(validator.isEmpty(password))
            return 'email is required'
        else if(!validator.isLength(password, {min : 6}))
            return 'password must be at least 6 characters long'
    }
};

export default fieldValidator;