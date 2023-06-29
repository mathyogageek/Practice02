window.onload = function() {
    var languageCodeInput = prompt("Enter a language code (es, de, fr):");
    var translatedHello;
  
    if (languageCodeInput === "es") {
      translatedHello = "Hola a todos";
    } else if (languageCodeInput === "de") {
      translatedHello = "Guten Tag";
    } else if (languageCodeInput === "fr") {
      translatedHello = "Bonjour le monde";
    } else {
      translatedHello = "Hello world";
    }
  
    console.log("Hello World translated in " + languageCodeInput + " is: " + translatedHello);
  };
  
  