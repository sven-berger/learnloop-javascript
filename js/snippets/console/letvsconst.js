let city = "Idstein";
console.log(city);

// Der Wert bei "let" kann bei überschrieben werden
city = "Bad Camberg";
console.log(city);

// Der Wert bei "const" kann nicht überschrieben werden - Fehlermeldung incoming!
const myfirstName = "Sven";
console.log(myfirstName);

// const firstName = "Sven Oliver"; //
// Das würde folgende Fehlermeldung ausgeben: "Uncaught SyntaxError: Identifier 'firstName' has already been declared (at letvsconst.js:13:7)"
