
export const validateForm = (values) => {
    const errors = {}
    let re = /\S+@\S+\.\S+/;
    if(!values.firstName){
        errors.username = 'Username is required!'
    } else if(values.firstName.length > 7){
        errors.username = 'Username should not be more than 7 characters long!'
    }
    if(!values.email){
        errors.email = 'Email is required!'
    } else if(!re.test(values.email)){
        errors.email = 'Please enter a valid email!'
    }
    if(!values.passwordOne){
        errors.passwordOne = 'Password is required!'
    } else if(values.passwordOne.length < 8){
        errors.passwordOne = 'Minimum 8 characters required!'
    }
    if(values.passwordTwo !== values.passwordOne){
        errors.passwordTwo = 'Confirm password!'
    }
    if(Object.keys(errors).length > 0 ){
        return errors
    }else{
        return false
    }  
}