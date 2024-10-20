
 const ValidatePassword = (password, confirmPassword, error) => {
    // 1. Password length check
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    // 2. Check for uppercase letter
    // if (!/[A-Z]/.test(password)) {
    //   return "Password must contain at least one uppercase letter.";
    // }

    // 3. Check for lowercase letter
    if (!/[a-z]/.test(password)) {
      return "Password must contain at least one lowercase letter.";
    }

    // 4. Check for number
    if (!/\d/.test(password)) {
      return "Password must contain at least one number.";
    }

    // 5. Check for special character
    // if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    //   return "Password must contain at least one special character.";
    // }

    // 6. Check for spaces (optional)
    // if (/\s/.test(password)) {
    //   return "Password must not contain spaces.";
    // }
    // 7. Confirm password match
    if (password !== confirmPassword) {
      return "Passwords do not match.";
    }

    if(error ===  "auth/invalid-login-credentials"){
      return "Incorrect password"
    }

    return null; // No errors
  };

  export default ValidatePassword