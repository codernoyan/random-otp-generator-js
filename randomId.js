function makeRandomId(range) {
    const characterCapital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const characterSmall = 'abcdefghijklmnopqrstuvwxyz';
    const characterNumberString = '0123456789';
    
    /* show id with capital letter, small letter and number (high secured) */
    const allCharacters = characterCapital + characterSmall + characterNumberString;
    
    /* show id only capital letter with number (less high secured) */
    // const allCharacters = characterCapital + characterNumberString;

    const charactersLength = allCharacters.length;
    let id = '';

    for (let i = 0; i < range; i++){
        id += allCharacters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return id;
}

const randomId = makeRandomId(6);
console.log(randomId);
console.log(`G-${randomId}`);