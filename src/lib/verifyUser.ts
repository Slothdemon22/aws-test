

const verifyUser =  (token: string | undefined): boolean => {
    if (!token) {
        return false;
    }
    return true;

   
};

export default verifyUser;
