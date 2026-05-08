export const validateEmail = (email) =>{
    // const regex = /^[\s@]+@[^\s@]+\.[^\s@]+$/;
       const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
    
