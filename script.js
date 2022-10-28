// 1. Massivi tərsinə düzün. Massivi parametr kimi qəbul edən və 
// tərs ardıcıllıqla yazılmış eyni elementlərdən ibarət massivi 
// qaytaran reverseArray () funksiyasını yazın.
const sentence = ['sense.', 'make', 'all', 'will', 'This'];
function reverseArray(array){
    return array.reverse();
}

console.log(reverseArray(sentence));

// 2. Yadplanetliləri salamlayın. Sözlərdən ibarət massivi qəbul edən və konsolda hər bir yadplanetliyə 
// salamlama çıxarmaq üçün dövrdən istifadə edən greetAliens () funksiyasını yazın. Salam belə bir formatda 
// olmalıdır: "Oh powerful [name], we humans offer our unconditional surrender!”

const aliens = ['Blorgous', 'Glamyx', 'Wegord', 'SpaceKing'];

function greetAliens(array){
    array.forEach(name => {
        console.log('Oh powerful ${name} , we humans offer our unconditional surrender!')
    });
}

greetAliens(aliens);

// 3. 2 massivi parametr kimi qəbul edən və onların eyni dəyərli elementlərin konsola çıxaran
//  justCoolStuff () funksiyasını yazın.

const coolStuff = [
    'gameboys',
    'skateboards',
    'backwards hats',
    'my room',
    'temporary tattoos'
  ];

  const myStuff = [
    'sweaters',
    'skateboards',
    'family-night',
    'my room',
  ];

  function justCoolStuff(array1,array2){
    const newArr=[];
    array1.forEach(element=>{
        array2.forEach(item=>{
            if(element==item){
                newArr.push(element);
            }
        })
    })
    return newArr;
  }
  
  console.log(justCoolStuff(myStuff,coolStuff));

//   4. Parametr kimi {ad: “Yeməyin adı”, içərik: “bitki, ət və ya süd”} formatında yeməklər massivini
//    qəbul edən və onların hamısının vegetarian olub-olmadığını müəyyən edən isTheDinnerVegan () funksiyasını yazın.

const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' },
  ];
  const dinner = [
    { name: 'hamburger', source: 'meat' },
    { name: 'cheese', source: 'dairy' },
    { name: 'ketchup', source: 'plant' },
    { name: 'bun', source: 'plant' }
  ];

  function isTheDinnerVegan(array){
    let vegan=true;
    array.forEach(element=>{
        if(element.source=='meat'){
            vegan=false;
        }
    });
    return vegan;
  }
  console.log(isTheDinnerVegan(meal));
  console.log(isTheDinnerVegan(dinner));
