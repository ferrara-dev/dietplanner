import cryptoRandomString from 'crypto-random-string';


const options = Object.freeze({
        base64 : 'base64',
        urlSafe : 'url-safe',
        numeric : 'numeric',
        distinguishable : 'distinguishable',
        asciiPrintable : 'ascii-printable',
        alphanumeric : 'alphanumeric',
        characters : (characters) => characters
})

function randomID(len = 32, type = 'alphanumeric'){
    return cryptoRandomString({length : len, type : type})
}


export {randomID,options}

