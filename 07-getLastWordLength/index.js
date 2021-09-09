export const getLastWordLength = str => {
    
        let len = 0;
     
        let x = str.trim();
     
        for (let i = 0; i < x.length; i++) {
            if (x[i] == ' ') {
                len = 0;
            }
            else {
                len++;
            }
        }
     
        return len;
    
};
