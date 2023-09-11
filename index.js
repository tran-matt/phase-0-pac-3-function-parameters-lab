function introduction(name){
if (name === "Aki"){return 'Hi, my name is Aki.'};
if (name === "Samip"){return 'Hi, my name is Samip.'};
}


function introductionWithLanguage(name, language){
   if (name === "Aki"){return 'Hi, my name is Aki and I am learning to program in Ember.js.'};
   if (name === "Samip"){return 'Hi, my name is Samip and I am learning to program in React.'};
}

function introductionWithLanguageOptional(name, language = "JavaScript") { 
   if (language === "JavaScript"){return 'Hi, my name is Gracie and I am learning to program in JavaScript.'};
   if (language === "Python"){return 'Hi, my name is Gracie and I am learning to program in Python.'};
}
