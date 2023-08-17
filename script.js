"use strict"
//Обьект
const usersName = {
    currentUser: 'Mark',
    newUser: 'Andrey',
    ageCurrentUser: 22,
    ageNewUser: 21
}
console.log(usersName);

const copyUsersName = usersName;
copyUsersName.ageNewUser = 27;
copyUsersName.workNewUser = 'Mobile developer';
console.log(copyUsersName);
console.log(copyUsersName.ageNewUser); //27

const roadMapFrontend = {
    chapterOne: 'HTML',
    chapterTwo: 'CSS',
    chapterThree: 'JavaScript'
}
roadMapFrontend.timeLesson = '1 year';
console.log(roadMapFrontend);
//--------------------------------------------
const a = () => {
    console.log('good')
}
a();
function b() {
    console.log('bad')
}
b();
const adress = {
    city: 'Anapa',
}
console.log(adress);
adress['street'] = 'lenina'
adress.home = 251;
console.log(adress);
delete adress.home;
console.log(adress);



const test = 'testtest';
adress[test] = 'good job';
console.log(adress);
delete adress[test];
console.log(adress);

const infoMyFamily = {
    men: {
        name: 'Mark',
        age: 22,
        work: 'Frontend Developer',
        country: 'Russia',
        adress: {
            city: 'Anapa',
            street: 'Lenina'
        }
    },
    women: {
        name: 'Darya',
        age: 23,
        work: 'Graphic Designer',
        country: 'Russia',
        adress: {
            city: 'Anapa',
            street: 'Lenina'
        }
    }
}
console.log(infoMyFamily);
console.log(infoMyFamily.men.adress.city);

delete infoMyFamily.men.adress.city;
console.log(infoMyFamily.men.adress.city);
// if (infoMyFamily.men.adress.city = false){
//     console.log('Нет иnfормации')
// } else if (infoMyFamily.men.adress.city != false){
//     console.log(infoMyFamily.men.adress.city)
// }

const namevis = 'MMark';
const agevis = 23;

const userProfile = {
    namevis,
    agevis,
}
console.log(userProfile);

const userPorfileMetodTest = {
    userName: 'Markus',
    profile: function () {
        console.log(' prrrofffile')
    }
}
console.log(userPorfileMetodTest);
userPorfileMetodTest.profile();

const userPorfileMetodTest2 = {
    userName: 'Markus',
    profile() {
        console.log(' prrrofffile2')
    }
}
userPorfileMetodTest2.profile();
/* JSON.parse() получив json в формате строки
 от сервера вы можете передать его как аргумент
в вызове метода parse и в результате получите 
его в js  обьект*/
/* JSON.stringify() действия наоборот
с js обьекта в формат json в строку*/
const post = {
    title: 'My post',
    likesOyt: 5
}
console.log(post);
JSON.stringify(post); //'{"title":"My post","likesOyt":5}'
const postStringified = JSON.stringify(post);
JSON.parse(postStringified);//{title: 'My post', likesOyt: 5}



const profileUserOne = {
    name: 'Mark'
}
profileUserOne.age = 22;
profileUserOne.status = 'men';
console.log(profileUserOne);
const profileUserTwo = profileUserOne;
profileUserTwo.city = 'anaps'
console.log(profileUserTwo)
const profileUserThree = profileUserTwo;
profileUserThree.street = 'lenina';
console.log(profileUserThree);
/* как избежать мутации оригинального обьекта, если мы хотим cоздать и изменить только копию ? */
// Вариант 1. Метод assign
//Object.assign({}, название обьекта который хотим скопировать)
const profileUserFour = Object.assign({}, profileUserOne);
profileUserFour.home = 251;
console.log(profileUserFour)
//// Вариант 1. Метод assign, но таким вариантом мы можем избежать копирование корневых свойств, но если у обекта есть вложенные обькты,то они скопируются.
//Вариант 2. const profileUserFour = {...profileUserOne}
//но таким вариантом мы можем избежать копирование корневых свойств, но если у обекта есть вложенные обькты,то они скопируются.
// ... это оператор, оператор разделение обьекта на свойства и потом эти свойства сразу собираются в новый обьект.
const profileUserFive = { ...profileUserFour }
profileUserFive.car = 'renault';
console.log(profileUserFour);
console.log(profileUserFive);
//Вариант 3, который позволит избежать полностью мутаций
const person = {
    name: 'bob',
    home: {
        street: 'lenina',
        city: 'anapa'
    }
}
const person2 = JSON.parse(JSON.stringify(person));
person2.name = 'Mark'
person2.home.street = 'shirotnay'
console.log(person.name);//bob
console.log(person);
console.log(person2.name);//Mark
console.log(person2);
//Функция это блок кода, который можно выполнять многократно
let numberOne = 567456334;
let numberTwo = 875983795;
function sum(numberOne, numberTwo) {
    const sumNumber = numberOne + numberTwo;
    console.log(sumNumber);
}
sum(numberOne, numberTwo);

numberOne = -567456334;
numberTwo = -875983795;
sum(numberOne, numberTwo);
/* 
функция может быть :
... именнованной
... анонимной
... присвоенна переменной
... аргументом при вызове другой функции
... значением свойства (метода) обьекта 
Функция - это обьект и как у любого обьекта у функции есть свойства.
*/
function funTestOne(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.dir(funTestOne);// используя данную запись мы отображаем свойства обьекта
/* структура функции:
... funTestOne - имя функции,
... { тело функции } - тело функции находится между фигурными скобками,
... (a,b) - это параметры функции, параметры функции ведут себя как переменные,
в теле функции мы имеем доступ к этим параметрам и значение этих "переменных",
определяются в момент вызова функции и когда мы вызываем функции мы говорим,
какие значения хотим присвоить параметрам внутри функции,
эти "переменные" действуют только внутри функции, если попытаться
получить доступ к этим параметрам вне функции, то будем ошибка
... return - возращение результата функции и в данном примере,
мы возращаем рещультат, который равен переменной с, после инструкции
с ключевым словом return, функция прекращает выполнение дальнейших инструкций,
то есть если после return есть другие операции, они не будут выполнены, то есть 
функции выполняет результат и заканчивает свою работу.
Функция возращает undefined если нет инструкции return.
*/
function funTestTwo(a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
funTestTwo(54, 4);//так как в консоле мы не увидим результата, то можем присвоить значение функции переменной.
let returnFunTestTwo = funTestTwo(54, 4);
console.log(returnFunTestTwo)//59

function miniFn() { };
miniFn();
const resultMiniFn = miniFn();
console.log(resultMiniFn)//undefiend
//Передача значения по ссылке -------------------------------------- //
const personOneFalse = {
    name: 'Mark',
    age: 21
}
console.log(personOneFalse.age)//21
function increasePersonAge(personUser) {
    personUser.age += 1
    return personUser
}
increasePersonAge(personOneFalse);
console.log(personOneFalse.age)//22
/* так как personUser и personOneFalse ссылаются на один обьект и тот же обьект в памяти,
то соотвественно personOne также изменится и когда после вызова функции мы попытаемся 
прочесть значение свойства age, как делается на этом шаге console.log(personOneFalse.age, 
мы получим значение 22, не 21, потому что внутри функции мы увеличили значение на 1,
это происходит потому что мы передали обьект по ссылке, копии обьекта не было создано, 
внутри функции мы изменили внешний обьект. Зная что обьект это ссылочный тип,делаем вывод 
что  внутри функции мы мутируем внешний обьект.
ВНУТРИ ФУНКЦИИ НЕ РЕКОМЕНДУЕТСЯ МУТИРОВАТЬ ВНЕШНИЕ ОБЬЕКТЫ!
Мы можем внутри функции создавать копии обьекта.
Пример ниже:
 */
const personOneTrue = {
    name: 'Mark',
    age: 21
}
function increasePersonAge(personUser) {
    const updatedPerson = Object.assign({}, personUser)
    updatedPerson.age += 1
    return updatedPerson
}
const updatedPersonOneTrue = increasePersonAge(personOneTrue)
console.log(personOneTrue.age);//21 
console.log(updatedPersonOneTrue.age);//22
//тем самым обьект personOneTrue не изменится 

const nameUser = {
    age: 23
}
function changingAnObjectProperty(e) {
    const nameUserCopy = { ...nameUser }
    nameUserCopy.age -= 1
    return nameUserCopy
}
const resultAnObjectProperty = changingAnObjectProperty(nameUser);
console.log(nameUser.age);
console.log(resultAnObjectProperty.age);
//колбэк функции это когда одна функция внутри себя вызывает другую функцию
function anotherFunction() {
    //действия...
}
function fnWithCallback(callbackFunction) {
    callbackFunction()
}
fnWithCallback(anotherFunction);
/* 
ПРАВИЛА РАБОТЫ С ФУНКЦИЯМИ :
1. Называть функции исходя из выполняемых задач
2. Одна функция должна выполнять одну задачу
3. Не рекомендуется изменять внешние относительно функции переменные
*/
function callbackFnOne() {
    console.log('women')
}
function callbackFnTwo() {
    console.log('men')
}
function callbackFunction(callback) {
    const objectMen = {
        name: 'Mark'
    }
    if (objectMen.name == 'Mark') {
        console.log(objectMen.name);
    } else if (objectMen.name !== 'Mark') {
        console.log('giga-men')
    }
    callback();

}
callbackFunction(callbackFnTwo);


function clickCart() {
    console.log('Нажата корзина')
}
const clickBtnCart = document.querySelector('.cart');
clickBtnCart.addEventListener('click', clickCart);

function clickCartOrder() {
    console.log('Нажата кнопка:' + ' ' + 'заказ столика')
}
const clickBtn = document.querySelector('.btn-order');
clickBtn.addEventListener('click', clickCartOrder);
function textblock() {
    prompt('Хотите сделать заказ?', 'Да');
}
clickBtn.addEventListener('click', textblock);
//области видимости -  определяет границы действия переменной
//есть глобальные переменные и локальные переменные
let abc;//глобальная переменная
let bcd;//глобальная переменная
function myFn() {
    let bcd//локальная переменная
    abc = true//переменная не обьявлена в зоне видимости функции, она обьявлена во внешней видимости области, а здесь присвоено ей значение
    bcd = 10
    console.log(bcd);//10 
}
myFn();
console.log(abc);//true
console.log(bcd);//undefiend
//так делать не желательно, менять значение глоьальной переменной в функции. Лучше создать новую переменную в области функции и присвоить ей значение

const numberA = 5;
function myFnNumb() {
    function innerFn() {
        console.log(a);
    }
    innerFn()//вызываем внутри функции,myFnNumb, потому что в глобальной области видимости, переменная не обьявлена и будеь ошибка
}
myFnNumb();
/*
Типы областей видимости:
_ глобальная область видимости
_ область видимости функции(создаюься каждый раз когда мы вызываем ту или иную функцию)
_ область видимости блока, переменный обьявленные с помощью let или const внутри блока,
имеют область видимости, ограниченную этим блоком.
Блок js - это любой код, который находится между фигурными скобками
*/
/*
Правила работы с переменными:
_ все переменные обьявлять перед их использованием
_ стараться использовать const везде где это возможно
_ внутри функции не изменять переменные с внешних областей видимости. 
Чтобы это правило работало, необходимо обьявлять те переменные,
которые нам нужны в рамках функции.
'use strict' - запрещает использовать необьявленные переменные
*/
//ОПЕРАТОР - это встроенная функция
/*
_ Арифмитические операторы: + (сложение), - (вычитание), * (умножение), / (деление);
_ Операторы сравнения: === (равно), !== (не равно), <= (меньше,либо равно), >= (больше,либо равно);
_ Логические операторы: !(не), &&(и), ||(или)
_ Оператор присваивани: = ;
_ Текстовые операторы: typeof(проверяем тип того или иного значения), new(создает новый экземпляр того или иного обьекта), delete(удалить свойство в обьекте), instanceof(проверить принадлежность обьекта к тому или иному классу);
С помощью оператора запятая, мы можем обьявить несколько переменных, но лучше разделять на разные строки 
У унарных операторов всегда один операнд или аргумент
Унарные операторы:
a++ и такой операторор увеличивает значение переменной на единицу,
+a такой унарный оператор позваляет конвертировать строку в число,
У бинарных операторов всегда два операнда или аргумент
Бинарные операторы:
a = 5 
a + b оператор плюс и два операнда
a += 5 то же самое, что a = a + 5
a === b оператор сравнивает как тип так и значение, то есть ли сравнить сроку 5 и число 5, то результатом сравнения булет false,
если же сравнить две строки a и b то результатом будет true
a && b
 */
//инфиксная запись в таком формате оператор находится между операндами
// a = b это пример
//префиксная запись это когда оператор стоит перед операндом, например ++a
//постфиксная запись, это когда оператор стоит после операнда например b++ или myFn()
//оператор не ! всегда возращает значеие типа boolean
/*
Ложные значения JavaScript это те значения которые при приведение к логическому типу дают false
Привести к логическому типу значение может с помощью функции Boolean()
Ложные значения в JavaScript:
false
0
'' пустая строка ложное значение, НО строка с пробелом будет уже истинным значением
undefined
null
ПРИМЕРЫ С ОПЕРАТОРОМ НЕ !
!10 // false
!0 // true
!'abc' // false
!false // true
!undefined // true
ОТРИЦАНИЕ ОТРИЦАНИЯ !! позволяет проверить ложность значения
!!0 // false
!!false // false
!!undefined // false
!!true // true
!!'abc' // true
ОПЕРАТОРЫ && И || ЯВЛЯЮТСЯ ОПЕРАТОРАМИ КОРОТКОГО ЗАМЫКАНИЯ
ПРИМЕР: Выражение 1 && Выражение 2
Если "Выражение 1" ложно:
1. Выражение 2 игнорируется
2. Возвращается результат "Выражения 1"
Если "Выражение 1" истинно:
1. Оцениваем Выражение 2 
2. Если "Выражение 2" ложно, то возращается результат этого выражения
Если "Выражение 1" и "Выражение 2" истинно, то также возращается результат вырадения 2
*/
const test3234 = 'sbc' && false;
console.log(test3234); // false
const test3235 = 'sbc' && true && true && 1;
console.log(test3235); //1
/*
ОПЕРАТОР || (или)
Выражение 1 || Выражение 2
Если "Выражение 1" истинно:
1. Выражение 2 игнорируется
2. Возвращается результат "Выражения 1"

*/
const test3236 = 'sbc' || false;
console.log(test3236); // 'sbc'
const test3237 = false || false || false || 1;
console.log(test3237); //1
const test3238 = false || 0 || false || '';
console.log(test3238); //''


//      const testName23 = prompt('Ведите число от 0 до ...');
//      function testName234(){
//        alert('Ввод не верен')
//      }
//      testName23 || testName234()//сработает функция если значение testName23 будет false

/*
ОПЕРАТОР РАЗДЕЛЕНИЯ ОБЪЕКТА НА СВОЙСТВА ...

*/
//после такой операции мы получаем новый обьект redButton с 3 свойствами
const button = {
    width: 200,
    text: 'Buy'
}
const redButton = {
    ...button,
    color: 'red'
}
console.log(button)
console.log(redButton)


//Если у объекта "button" есть свойство "color", его значение будет перезаписано пример ниже
const button2 = {
    width: 200,
    text: 'Buy',
    color: 'green'
}
const redButton2 = {
    ...button2,
    color: 'red'
}
console.log(button2)
console.log(redButton2)
//если мы в конце поставим после свойств ...button3, то тогда colar не перезапишется,пример ниже
const button3 = {
    width: 200,
    text: 'Buy',
    color: 'green'
}
const redButton3 = {
    color: 'red',
    ...button3

}
console.log(button3)
console.log(redButton3)
//ОБЪЕДИНЕНИЕ ОБЪЕКТОВ С ПОМОЩЬЮ ...
const buttonText = {
    text: 'my'
}
const buttonStyle = {
    color: 'yellow',
    width: 250,
    hidth: 50
}
const buttonInfo = {
    ...buttonText,
    ...buttonStyle
}
console.table(buttonInfo)
//если мы потом будем перезаписывать в обьекте buttonInfo, то обьекты buttonStyle,buttonText не изменятся, если в этих исходных обьеков не было вложенных обьектов
//КОНКАТЕНАЦИЯ СТРОК
//ОПЕРАТОР + ДЛЯ КОНКАТЕНАЦИИ СТРОК
// 'Hello ' + 'World'
// 'Hello world' получаем на выходе
// ПЕРЕМЕННЫЕ В КОНКАТЕНАЦИИ СТРОК
const hello = 'Hello'
const world = 'World'
const greeting = hello + ' ' + world // между ковычками ставим пробел и получаем между словами пробел
//ШАБЛОННЫЕ СТРОКИ
const hello2 = 'Hello'
const world2 = 'World'
const greeting2 = `${hello} ${world}` // внутри таких кавычек мы можем использовать любые выражения
//пробел мы поставили внутри выражения и без ковычек и в результате мы получим 'Hello world'
//${} здесь может быть любое выражения, необязательно строка, может быть даже функция
const myInfo = {
    name: 'Mark',
    city: 'Anapa'
}
const textMyInfo = 'Меня зовут';
const textMyCity = 'Я живу в городе';
const sumInfo = `${textMyInfo} ${myInfo.name}. ${textMyCity} ${myInfo.city}`;
console.log(sumInfo); // Меня зовут Mark. Я живу в городе Anapa
//если мы в консоле напишем: 10 + 'Mark' то получим строку '10Mark'
//в Js  итрепритатор автоматические конвертировал число 10  в строку 10 и потом соединил строки
//это называется приведение типов. Поэтому мы должны понимать какие типы переменных мы хотим соединить
const myInfo2 = {
    name: 'Mark',
    city: 'Anapa'
}
function myCity() {
    const textMyCityFn = 'Anapa'
    return textMyCityFn
}
const textMyInfo2 = 'Меня зовут';
const textMyCity2 = 'Я живу в городе';
const sumInfo2 = `${textMyInfo2} ${myInfo2.name}. ${textMyCity2} ${myCity()}`;
console.log(sumInfo2); // Меня зовут Mark. Я живу в городе Anapa
//функциональные выражения, посмотрим разницу между обьявленной функцией и функциональным выражением
//обьявленная функция
// function noNameFn(a,b){
//     let c
//     a = a+ 1,
//     c = a + b
//     return c
// }
//функциональные выражения
// function(a, b){
//     let c
//     a = a + 1,
//     c = a + b
//     return c
// }
//ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ ВСЕГДА АНОНИМНЫЕ, их можно присваивать переменным и можно использовать как аргумент при вызове другой функции
//функциональное выражения нельзя использовать автономно
//ПРИСВАИВАНИЕ ФУНКЦИОНАЛЬНОГО ВЫРАЖЕНИЯ ПЕРEМЕННОЙ
const myFunction = function (a, b) {
    let c
    a = a + 1
    c = a + b
    return c
}
console.log(myFunction(5, 3)) // 9
// как использовать функциональное выражение как колбэк функцию ?
setTimeout(function () {
    // console.log('lel ')
}, 5000)
// 'lel' будет выведено в консоль через 5000 мс (5 сек)

//СТРЕЛОЧНЫЕ ФУНКЦИИ
//у стрелочной функции имени нет, она начинается сразу же с опциональных параметров(либо не иметь параметров)
// (a, b) => {
//     let c
//     a = a + 1 
//     c = a + b
//     return c
//     }
//стрелочная функция это выражение и они всегда анонимны,но в функциональных выражениях есть ключевое слово function, а здесь нет
//КАК ДАТЬ ИМЯ СТРЕЛОЧНОЙ ФУНКЦИИ?
const strelFn = (a, b) => {
    let c
    a = a + 1
    c = a + b
    return c
}
strelFn(6, 7)
setTimeout(() => {
    // console.log('lel ')
}, 5000)
// 'lel' будет выведено в консоль через 5000 мс (5 сек)
//СОКРАЩЕНИЯ В СТРЕЛОЧНЫХ ФУНКЦИЯХ
//Если у стрелочной функции один параметр, то круглые скобки можно опустить
a => {
    //тело функции
}
//но лучше добавлять круглые скобки для лучшей читабельности
(a, b) => a + b // фигурные скобки можно опустить если тело функции состоит из одного выражения
// в этом случае стрелочная функция неявно возращает результат выражения, результат этого выражения a + b автоматически будет возращен
// Значение параметров функции по умолчанию
function multByFactor(value, multiplyer = 1) {
    return value * multiplyer
}
console.log(multByFactor(5, 2))//10 то есть 5 * 2 = 10
multByFactor(5)//  5 то есть 5 * 1 = 5

//другой вариант ввиде стрелочной фунции
const fnByFN = (value, multiplyer = 1) => {
    return value * multiplyer
}
console.log(fnByFN(5));//5
//вариант с проверкой и присваиванием параметру значение, но здес больше лишнего кода
const fnByFN2 = (value, multiplyer) => {
    if (!!multiplyer === false) {
        multiplyer = 1
    }
    return value * multiplyer
}
console.log(fnByFN2(5));//5
//тот же пример с анонимным функциональным выражением
const fnByFN3 = function (value, multiplyer = 2) {
    return value * multiplyer
}
console.log(fnByFN3(5));//10

const newPost = (postH, addedAt = Date()) => ({ // ()=>({})НЕЯВНЫЙ возрат функции
    // Date() значение по умолчанию вычисляются в момент вызова функции
    ...postH,
    addedAt
})
const firstPost = {
    id: 1,
    age: 22
}
console.dir(newPost(firstPost));
const newNewPost = newPost(firstPost);
console.log(newNewPost);
const newPostTwo = (postH, addedAt = Date()) => {
    return {// ()=>{return{}} ЯВНЫЙ возрат функции
        ...postH,
        addedAt
    }
}
const firstPostTwo = {
    id: 1,
    age: 22
}
console.dir(newPostTwo(firstPostTwo));
//ОБРАБОТКА ОШИБОК
// const error = () => {
//     throw new Error ('Some error')
// }
// error();
// как бороться с такими ошибками
//решение проблемы try/catch
const error = () => {
    throw new Error('Some error')
}
try {
    error();    // Выполнение блока кода
    // часть кода в котором вероятно возникновение ошибок должны помещать в этот блок

} catch (error) {// Этот блок выполняется в случае возникновения ошибок в блоке try
    // и ошибка будет присвоенна параметру error в скобках выше
    console.error(error) // таким образом ошибка будет выведена красным цветом, ловим целую ошибку
    console.log(error.message)// выводит текст описывающий ошибку, может использовать либо тот либо тот метод

}
console.log('Continue...')// если мы словили выше ошибку, то выполнение кода не остановится, а продолжится

//ВЫРАЖЕНИЯ выражения всегда возращает значение, например присваивание значения переменной
//ИНСТРУКЦИЯ пример инструкции, это обьявление переменной let str с помощью слово let
//ВЫРАЖЕНИЯ - ИНСТРУКЦИЯ    
//инструкция выполняет определенные действия
let pow; //инструкция, выолняет действие создание переменной и присваивание значения undefined
//каждую инструкцию нужно разделять ; и размещать на разных строках
const powTwo = 5; //инструкция
if (a > b) {
    console.log('a is larger');
}// } - не требуется точка с запятой ;
//это все инструкция, которая выполняет определенные действия, инструкция if не возращает значение, она выполняет действие
for (let i = 0; i++; i < 5) {
    console.log(i);
}//это все инструкция
//блоки кода в условных инструкциях либо в циклах которые заканчиваются фигурными скобками {} не требуются точки с запятой
//инструкция обычно заканчивается точкой с запятой ; исключение, что тока с запятой не требуется после блока инструкции
// выражение может быть инструкцией
//примеры выражения - инструкции
//'fgh';
//'fgh' это выражения, но добавим ; мы конвертировали его в инструкцию
// a = a + 3; без точки с запятой это будет выражение, а так мы конвертировали в выражение инструкцию
// myFn(a,v); функция это выражение и она возращает значение, но обычно вызовы функции происходит отдельно на новых строках и можно сказать что это выражение - инструкция
// console. log ( 'Hey'); находится на отдельной строке, поэтому это выражение инструкция
// как отличать где выражение , а где выражение - инструкция ? если выражение написано на отдельной строке,то это выражение - инструкция
// как отличить выражение от инструкции ?
// выражения могут быть использованы как аргументы в вызовах функции, а инструкции не могут быть использованы как аргументы в вызовах функции
// function myFn(a) {
//     console. log(a); - это выражение-инструкция
// }
// const b = true; - инструкция
// let c = 10; - инструкция
// myFn (2 + 3) / / вначале выражение будет 5 , и будет присвоено параметру a в функции и вызвано в консоле 5
// myFn (b) //  это выражение true
// myFn (c = c + 1) // 11
// myFn(c = c + 1;) // ошибка потому что в вызове функции не выражения а инструкции
// myFn(let d) // ошибка , потому что в вызове функции не выражения а инструкции
// МАССИВЫ - это обьект с цифровыми именами свойств
// свойства у массива называются 0 1 2 и тд
// формат записи массива 
const myArray = [1, 2, 3];
console.log(myArray); // [1,2,3]
const myArray2 = new Array(1, 2, 3);
console.log(myArray2); // [1,2,3]
console.log(myArray.length) // свойство length позволяет прочитать сколько элементов в массиве
// когда мы удаляем что-то из массива или добавляем javaScript автоматически будет обновлять свойство length
// myArray не равен myArray2, потому что разные ссылки и в разных частях памяти хранятся
const fnArray = () => {
    if (myArray !== myArray2) {
        console.log(`Массив myArray не равен массиву myArray2`)// будет этот вариант
    } else if (myArray === myArray2) {
        console.log(`Массив myArray  равен массиву myArray2`)
    }
}
fnArray();
const fnArray2 = () => {
    if (myArray.length === 3) {
        console.log(`Свойство массива length = 3 `)
    } else if (myArray.length !== 3) {
        console.log(`Свойство массива length не равно 3`)
    }
}
fnArray2();
const myArray3 = myArray; // теперь myArray3 скопирует ссылку на один и тотт же обьект ссылки myArray и они будут равны
const infoName = {
    name: 'lel'
}
const infoAge = {
    age: 3
}
const infoText = {
    text: 'еду домой'
}
const myArray4 = [infoName, infoAge, infoText];
console.log(myArray4);
// МАССИВ VS ОБЬЕКТ
const myObject = { //обьект
    0: 1,
    1: 2,
    2: 3,
    length: 3
}
console.log(myObject); // {0:1, 1:2, 2:3, lendth:3}

const myArray5 = [1, 'str', 3]; // массив
console.log(myArray5); // [1,2,3]
// Чтение значений массива
// если свойства обьекта цифровые то мы не можем использовать точечную запись, вместо точечной записи мы должны использовать квадратные скобки
const myArray6 = [1, 2, 3];
console.log(myArray6[0]); // 1 
//первое свойство это 0 со значением 1 и тд 
console.log(myArray6[1]); //
myArray6[2] = false;
console.log(myArray6[2]); // false
console.log(myArray6.length); // 3
// добавить еще один элемент если здесь у нас их всего 0,1,2 то получается новый элемент будет с индексом 3
myArray6[3] = undefined;
console.log(myArray6[3]);
console.log(myArray6.length); // 4
// но такие добавления не совсем удобные ведь нужно знать текущее значение свойства length
// МЕТОДЫ МАССИВОВ, эти методы называются функциями высшего порядка,либо методы прототипов
// вызывать все эти методы мы можем используя точечную запись после названия массива
// метод PUSH
const myArray7 = [1, 2, 3, 4];
console.log(myArray7); //[1,2,3,4] 
// если вы хотите добавить новый элемент в конец массива то можем это сделать с помощью метода push используя точечную запись 

myArray7.push(5); // () внутри скобок данного метода ожидается значение нового элемента который будет добавлен в конце массива
console.log(myArray7); // [1,2,3,4,5]
myArray7.push('toyota'); // [1,2,3,4,5,'toyota']
console.log(myArray7);
// метод POP позволяет удалить элемент с конца массива 
myArray7.pop(); // вызывается без каких либо аргументов в скобках, потому что просто удаляет последней элемент из массива
console.log(myArray7);// [1,2,3,4,5]
// метод POP также может возращать удаленный элемент
const removedElement = myArray7.pop(); // удалили еще один элемент и присвоили переменную, чтобы проверить потом какой удалили элемент
console.log(removedElement); // 5  это тот элемент который будет удален на этапе выше
console.log(myArray7); // [1, 2, 3, 4]
// метод UNSHIFT  добавляет элемент вначало массива
const myArray8 = [1, 2, 3, 4];
myArray8.unshift(true);
console.log(myArray8); // [true, 1, 2, 3, 4]
myArray8.unshift('lox');
console.log(myArray8); // ['lox', true, 1, 2, 3, 4]
const myArray9 = ['Dariy'];
myArray9.push('Julia');
myArray9.unshift('Mark');
myArray9.unshift('Andrey');
console.log(myArray9); // ['Andrey', 'Mark', 'Dariy', 'Julia']
myArray9.pop();
myArray9.shift();
console.log(myArray9); // ['Mark', 'Dariy']
function arr(e) {
    if (myArray9.length === 2) {  // ['Mark', 'Dariy', true]
        myArray9.push(true);
        e();
    } else if (myArray9.length !== 2) {
        myArray9.push(false);
        e();
    }

}
arr(arrTwo);
function arrTwo() {
    console.log(myArray9);
}
// все эти методы мутируют оригинальный массив, а не создают новый
// forEach и в этом методе есть аргумент который является функцией, можно использовать стрелочную функцию или анонимное функциональное выражение, именновую функции нет смысла создавать ведь эта колбэк функция
const myArray10 = [1, 2, 3];
// myArray. forEach ((el) => console. log (el * 2) ) или со скобками (el)
myArray10.forEach(element => console.log(element * 2))
// 2 
// 4
// 6
console.log(myArray10); //  [1, 2, 3]
// оригинальный массив метод forEach не мутирует
// с методом forEach мы можем перебрать все элементы массива и выполнить определенные действия с ними
myArray10.forEach((element) => {
    console.log(element - 1)
}) // 0 
// 1 
// 2
console.log(myArray10); // [1, 2, 3]
const myArray11 = ['text', 'name', 'age'];
myArray11.forEach((item) => {
    console.log(item + ' ?')
})
console.log(myArray11); // ['text', 'name', 'age']
//Метод массива MAP так же ожидает колбэк функцию в качестве аргумента, но Map возвращает НОВЫЙ МАССИВ
const arrMap = [1, 2, 3];  // [1, 2, 3]
const newArrMap = arrMap.map(element => element * 4);
// или
// const newArrMap = arrMap.map(function(i){
//     return i * 4;
// })
// const newArrMap = arrMap.map(function(i){
//      i * 4;                                  // НЕ ПРАВИЛЬНО ! не явный возрат
// })
//console.log(newArrMap); // [undefined,undefined,undefined] потому что данная функция ничего не возращает без свойства return и будет undefined
console.log(newArrMap);//[4, 8, 12]
console.log(arrMap); // [1, 2, 3] оригинальный массив не изменится
// каждый массив это обьект и обьект ссылочный тип, этот обьект имеет свойства 0,1,2,3 и тд и они являются индексами определенных элементов в массиве и у каждого массива есть свойства length 
const myArray12 = [0, 1, 2, 3];
const newMapArray12 = myArray12.map((i) => {
    return (i + 5) * 2;
})
console.log(myArray12);// [0,1,2,3]
console.log(newMapArray12);// [10, 12, 14, 16]
// ДЕКСТРУКТУРИЗАЦИЯ ОБЬЕКТОВ
const userProfileNew = {
    nameUserProfile: 'Mark',
    ageUserProfile: 25,
    activeStatus: false,
}
const { nameUserProfile, ageUserProfile } = userProfileNew;
const { activeStatus } = userProfileNew;
// используя такой синтаксис можно обьявить переменные и одновременно присвоить им занчения на основе свойсьв обьекта
// с правой стороны находятся имея переменной в которой содержится обьект userProfileNew
// с левой стороны находятся именна свойств этого обьекта userProfileNew таких как nameUserProfile,ageUserProfile  и на другой строке похожим образом activeStatus
// с левой стороны это название новых переменных, которые будут автоматически обьявлены
// используя такой синтаксис мы говорим интрепретатору js что мы хотим взять из обьекта userProfileNew значение свойств nameUserProfile,ageUserProfile создать новые переменные с такими же именами и присвоить им значения
console.log(nameUserProfile);
console.log(ageUserProfile);
console.dir(userProfileNew);
//ДЕСТРУКТУРИЗАЦИЯ МАССИВОВ
const fruits = ['Apple', 'Banana ']; //  вотличие от ДЕСТРУКТУРИЗАЦИИ обьектов здесь мы используем [] скобки 
const [fruitOne, fruitsTwo] = fruits; // создаем две новых переменных и присваиваем зачение соотвествующих элементов массива
// ВАЖНЫЙ НЮАНС в обьектах порядком следования свойств не важен, в массиве же важен, потому то у каждого элемента массива есть индеекс
// здесь когда мы хотим выполнить декструктуризацию массива не нужно использовать цифровые названия свойств, вместо этого мы просто указываем новые перменные, в нужном порядке,между квадратными скобками
// fruitOne,fruitsTwo таких названий в массиве нет, но js возьмет первый элемент с индеком 0 в массиве fruits и значение этого элемента будет присовено первому элементу fruitOne
// то есть, если мы поменяем порядок переменых, то и присвоение значения поменяется 
// ДЕСТРУКТУРИЗАЦИЯ В ФУНКЦИЯХ
const userProfileCurrent = {
    nameUserProfileCurrent: 'Mark',
    ageUserProfileCurrent: 0,
    commentsOtyUserProfileCurrent: 25,
    activeStatusCurrent: false,
}
const decstFnUserCurrent = ({ nameUserProfileCurrent, commentsOtyUserProfileCurrent, ageUserProfileCurrent }) => {
    if (!commentsOtyUserProfileCurrent) {
        return `User ${nameUserProfileCurrent} has no comments`
    } else if (ageUserProfileCurrent <= 18) {
        console.log(`User ${nameUserProfileCurrent} is under 18 years old`);
    }
    return `User ${nameUserProfileCurrent} has ${commentsOtyUserProfileCurrent} comments`

}
console.log(decstFnUserCurrent(userProfileCurrent)); // User Mark has 25 comments
/* console.log(decstFnUserCurrent(userProfileCurrent));  если ageUserProfileCurrent  будет <= 18, 
то тогда будет User Mark is under 18 years old
               User Mark has 25 comments
*/
//декструктуризация обьекта
const testDesOb = {
    ageTestProf: 2,
    undefinedTest: undefined
}
const { ageTestProf, undefinedTest } = testDesOb;
console.log(undefinedTest); // undefined
//декструктуризация массива
const testDesArr = [2, 'undefined false']
const [ageTestArr, undefinedTestArr] = testDesArr;
console.log(undefinedTestArr); // 'undefined false'
// декструктуризация массива в функции
const arrCurrent = [1, 'правда', 2];
const desArr = ([goal, status]) => {
    if (goal >= 1) {
        console.log(`забит гол`)
    }
    return `Количество забитых голов равно ${goal} и это ${status}`
}
console.log(desArr(arrCurrent));

// УСЛОВНЫЕ ИНСТРУКЦИИ if
// if 
// if(условие){
//     // блок кода выполоняемый ОДНОКРАТНО если условие правдиво
// } 
// пример с if c оператором отрицания
const personTestIf = {
    age: 23
}
if (!personTestIf.status) { // если нет данного свойства то выполняется тело блока кода
    console.log('Cтатус не присвоен');
    console.log(personTestIf.status) // undefined
}
// if ... else
// if (Условие) {
//      Блок кода, выполняемый однократно, если Условие правдиво
//     } else {
//      Блок кода, выполняемый однократно, если Условие ложно
//     }
// if else if
// if (Условие 1) {
//     // Блок кода, выполняемый однократно, если Условие 1 правдиво 
// } else if (Условие 2) {
//     / Блок кода, выполняемый однократно, если Условие 2 правдиво
// } else {
//     // Блок кода, выполняемый однократно, если предыдущие условия ложНЫ
// }
// ПРЕДПОЧТИТЕЛЬНЫЙ ФОРМАТ IF
// if (Условие 1) {
// // Блок кода, выполняемый однократно, если Условие 1 правдиво
// }
// if (Условие 2) {
// // Блок кода, выполняемый однократно, если Условие 2 правдиво
// }
// if (Условие 3) {
// // Блок кода, выполняемый однократно, если Условие
// }
// switch
// тернарный оператор, он используется в выражениях
// Использование if  в функциях
const sumPositiveNumber = (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        return 'One of the arguments is not a number' // важный момент после слова return функция прекращает свою работу 
        // в данном случае если условие правдиво функция вернет строку и дальше не пойдет
        // если в условие были переданы в качестве параметров НЕ ЧИСЛА то условие правдиво и мы возращаем строку 'One of the arguments is not a number'
    } // если значение аргументов a,b число то мы пропускаем тело кода условия if  и идем дальше
    if (a <= 0 || b <= 0) {
        return 'Numbers are not positive' // после возрата такой строки если условие истинно то функция останавливается на этом этапе
    }
    return a + b // если условия выше ложно то переходим к этому возврату
}
console.log(sumPositiveNumber('string', true)); // One of the arguments is not a number
console.log(sumPositiveNumber(0, 10)); // Numbers are not positive
console.log(sumPositiveNumber(10, 10)); // 20
const checkTypeOfString = (valueOne, valueTwo) => {
    if (typeof valueOne === 'string' && typeof valueTwo === 'string') {
        return `Arguments passed are strings: valueOne = ${valueOne}, valueTwo = ${valueTwo}`
    }
    if (typeof valueOne === 'number' && typeof valueTwo === 'number') {
        return `The arguments passed are numbers and the sum of these numeric values is: ${valueOne + valueTwo}`
    }
    return `Argument types are different, here are their meanings: ${valueOne} and  ${valueTwo}`
}

console.log(checkTypeOfString(9, 'home')); // Argument types are different, here are their meanings: 9 and  home
console.log(checkTypeOfString(9, 50)); // The arguments passed are numbers and the sum of these numeric values is: 59
console.log(checkTypeOfString('lel', 'home')); // Arguments passed are strings: valueOne = lel, valueTwo = home
// инструкция switch это по сути альтернатива использования if else if
/* 
 switch (ВЫРАЖЕНИЕ){
 case A:
    в данном случае case A сравнивается с результатом выражения которое в круглых скобках, если выражение === A, 
    то выполняется действия которые находятся в этом блоке
 break ключевое слово которое останавливает если выражения === A и не смотрит уже другие case
 то есть break это выход из этой условной инструкции switch
 если же мы не напишем break, то даже если  выражение в круглых скобках  === A, то мы продолжим анализировать другие кейсы
 case B:
    если выражение === B, то мы выполним и эти действия которые находятся в этом блоке
 break
 default: говорим какие действия выполнять если ни A,B не равно Выражению, подобно инструкции else 
}
*/



// const promtAgeUser = prompt(`Введите ваш возраст...`);
// if(promtAgeUser >= 18){
//     console.log (`Пользователь совершеннолетний, возраст пользователя ${promtAgeUser}`)
//     alert('Добро пожаловать в наш клуб')
// } else if(promtAgeUser == 0){
//     alert(`Твой возраст ${promtAgeUser}. Кто ты воин ?`)
// } else if (promtAgeUser < 18){
//     console.log (`Пользователь несовершеннолетний, возраст пользователя ${promtAgeUser}`)
// }
// const month = prompt('Введите число ');
// switch (month){
//     case '1':
//         console.log(`Январь`)
//         break
//     case '2':
//         console.log(`Февраль`)
//         break
//     case '12': 
//         console.log(`Декабрь`)
//         break
//     default:  console.log(`Это не зимний месяц`)
// }
// const month = prompt('Введите число ');
// switch (+month){ преобразуем типа данных со строки в число с помощью +
//     case '1':
//         console.log(`Январь`)
//         break
//     case '2':
//         console.log(`Февраль`)
//         break
//     case '12': 
//         console.log(`Декабрь`)
//         break
//     default:  console.log(`Это не зимний месяц`)
// }
// ТЕРНАРНЫЙ ОПЕРАТОР
// У тернарного оператора три операнда, конструкция с тернарным оператором это выражение, а выражение всегда возвращает значение
// Условие ? Выражение 1 : Выражение 2  // в зависимости от условия перед знаком ? будет возвращено значение либо выражения 1 либо выражения 2
// знак ? и : это часть синтаксиса тернарного оператора
// на месте условия также находится выражение
// ЕСЛИ УСЛОВИЕ ПРАВДИВО,ТО ВОЗВРАЩАЕТСЯ ВЫРАЖЕНИЕ 1, и это выражение будет возвращено как результат всего выражения с условием
// ЕСЛИ УСЛОВИЕ ЛОЖНО ТО ВОЗВРАЩАЕТСЯ РЕЗУЛЬТАТ ВЫРАЖЕНИЯ 2
/*
Рекомендуется конструкцию с тернарным оператор писать на трех разных строках, пример ниже

Условие
    ? Выражение 1
    : Выражение 2

*/
const value = 34;
value // если value правидиво истинно, то в консоль выходит первое выражение, если ложно то второе выражение
    ? console.log('Условие истинно')
    : console.log('Условие ложно')


// const value1 = 11;
// const value2 = 35;

// value1 && value2    // так как эти выражения положительные и они true то выполняется выражение после знака ? 
//     ? myFunction1(value1,value2) // вызываем функцию если значения value1,value2 истинные
//     : myFunction2()// вызываем эту функцию если одно из значения value1,value2 ложные


let value3 = 11;
console.log(value3 >= 0 ? value3 : -value3) // 11
// если условие истинно, а 11 больше 0 то мы выведем в консоль позитивное положительное значение 11



// Присваивание результата переменной 
value3 = -10;
const resValue3 = value3 >= 0
    ? value3
    : -value3
console.log(resValue3); // 10 потому что условие ложное и применяться будет Выражение номер 2, то есть -value3, мы получим - на -10,  дает + и будет 10
// то есть --10 будет 10

// ЦИКЛЫ
// без цикла
let i = 0;
console.log(i); // 0
i++;
console.log(i); // 1
i++;
console.log(i); // 2
i++;
console.log(i); // 3
i++;
console.log(i); // 4
i++;
console.log(i); // 5

// перебор всех элементов массива без цикла
const myArray13 = [1, 2, 3]
console.log(myArray13[0]); // 1
console.log(myArray13[1]); // 2
console.log(myArray13[2]); // 3
// перебор всех свойств обьекта без цикла
const myObjectNew = {
    a: 1,
    b: 'name',
    c: -5
}
console.log(myObjectNew.a); // 1
console.log(myObjectNew.b); // name
console.log(myObjectNew.c); // -5
/*
Разные типы циклов JavaScript:
for
for...in...
while
do...while
for..of...
*/
// for(Начальная инструкция; Условие; Итерационное действие ) {
// блок кода выполняющиеся на каждой итерации 
// }
for (let strA = 0; strA < 8; strA++) {
    console.log(strA);
}
// let strA = 0; даем начальную инструкцию обьявдяя переменную
// strA < 8; далее 0 сравнивается с 8, то есть проверяется данное условие и если условие правдиво, наример 0<8
// дальше так как условие правдиво мы переходим к блоку кода console.log(strA); и после окончания итерации 
// выполняем действие strA++ увеличивая strA на единицу
// и так повторяется пока условие не станет ложным, например 5 < 5, мы выходим из цикла
// НЕ РЕКОМЕНДУЕТСЯ ИСПОЛЬЗОВАТЬ ЦИКЛ For ДЛЯ МАССИВА
const myArray14 = ['mark', 'andrey', 'anton'];
for (let i = 0; i < myArray14.length; i++) {
    console.log(myArray14[i]);
}
// 'mark'
// 'andrey'
// 'anton'
// Когда i станет равно  3 то мы выйдем из цикла, потому что условие i < myArray14.length; станет ложным
// напоминание myArray14.length, length это количество элементов внутри массива
// МЕТОД ДЛЯ ПЕРЕБОРА МАССИВА ForEach, Map, Reduce
const myArray15 = ['first', 'second', 'third'];
myArray.forEach((element, index) => {
    console.log(element, index)
})
// 'first' 0
// 'second' 1
// 'third' 2
// внутри метода .forEach( (вызываем колбэк функцию, которая вызовется столько раз сколько элементов в массиве) =>{})
// element будет представлять каждый элемент массива
// index  будет каждым индексом элемента массива
myArray14.forEach((element) => {
    console.log(element)
})
// ЦИКЛ WHILE
// while(Условие){
//     // блок кода выполняемый на каждой итерации
// }
// цикл выполняется пока условие правдиво
// блок инструкций может ни разу не выполнится если условие ложно
// из за того что мы проверяем правдивость условия, если оно все время исттинное, то мы можем находиться в цикле бесконечно
let numberFor = 0;
while (numberFor < 4) {
    console.log(numberFor),
        numberFor++
}
// 0
// 1
// 2
// 3
// ЦИКЛ DO WHILE в отличие от цикла while, выполнится 1 раз даже если условие ложно
// do {
// Блок кода, выполняемый на каждой итерации  
// } while (Условие)
let numberForTwo = 0;
do {
    console.log(numberForTwo);
    numberForTwo++
} while (numberForTwo < 5)
// 0
// 1
// 2
// 3
// 4
let numberForThree = 10;
do {
    console.log(numberForThree);
    numberForThree++
} while (numberForThree < 5)
// 10 все равно выполнится блок кода 1 раз, потому что проверка условия уже после блока кода
let numberForFour = 0;
do {
    numberForFour++
    console.log(numberForFour);
} while (numberForFour < 5)
// 0 НЕ БУДЕТ потому что мы сразу прибавляем единицу и 0 + 1 будет и выводим в консоль, 0 не выведится 
// 1
// 2
// 3
// 4
// 5 потому что мы вначале прибавляем на единицу и потом выводим в консоль, а потому уже проверяем условие 
// Цикл for...in
for (key in Object) {
    // выполнять действия с каждым свойством обьекта
    // значения свойства - Object[key]
}
//key название переменной, каждого свойства обьекта
const myObjectFor = {
    x: 'm',
    y: 'a',
    z: 'rk'
}
for (const key in myObjectFor) {
    console.log(key /*  получаем названия свойств: x,y,z */, myObjectFor[key]/* дает нам значения этих свойств */);
}
// x m
// y a
// z rk
// ForEach для перебора свойств обьекта

// конструкция Object.keys можно получить все ключи определенного обьекта ввиде массива. Массив именно свойств обьекта
Object.keys(myObjectFor).forEach((key) => {
    console.log(key, myObjectFor[key])
})
// конструция с методом values, Object.values позволяет получить значения всех свойств определенного обьекта
Object.values(myObjectFor).forEach((value) => {
    console.log(value)
})
Object.keys(myInfo).forEach((name) => {
    console.log(`${name}: ${myInfo[name]}`) // name: Mark
    // city: Anapa
})
Object.values(myInfo).forEach((value) => {
    console.log(value)                  // Mark
    // Anapa
})
// FOR IN ДЛЯ МАССИВОВ, не рекомендуется для массива есть forEach
const myArray16 = [true, undefined, 'string', 1];
for (const key in myArray16) {
    console.log(myArray16[key])
}
// true
// undefined
// string
// 1
Object.keys(myArray16).forEach((key) => {
    console.log(`${key}: ${myArray16[key]}`)
})
// 0: true
// 1: undefined
// 2: string
// 3: 1
Object.values(myArray16).forEach((value) => {
    console.log(value)
})
// true
// undefined
// string
// 1
// ЦИКЛ FOR OF для строк
const myString = 'Hey';
for (const letter of myString) { // letter или другое имя для переменной, будет представлять каждый символ для строки myString
    console.log(letter)
}
// H
// e
// y
// ЦИКЛ FOR OF для массива
const myArray17 = [true, null, 123, 'abc'];
for (const element of myArray17) {
    console.log(element);
}
//  true
//  null
//  123
//  abc
// но метод foreach намного лучше для массивов
myArray17.forEach((e) => {
    console.log(e);
})
//  true
//  null
//  123
//  abc
// ДЛЯ МАССИВА ИСПОЛЬЗОВАТЬ ТОЛЬКО МЕТОД ForEach
// !!!!! FOR OF HE ДЛЯ ОБЪЕКТОВ !!!!!!
// для того чтобы итерироваться по обьекту нужно использовать for in или конвертировать обьект в массив используя Object.keys, Object.values
// МОДУЛИ позволяют структурировать код
// модули позволяют избегать дублирование блоков кода
// синтаксис export/import появился в ES6
// из одного модуля мы можем экспортировать что-то, в другой файл и в этом файле мы импортируем
// moduleOneJs
// const myName = () => {
//     console.log('Mark');
// } // без экспорта данная функция будет доступна только в одно файле moduleOneJs, в другом файле ее мы не сможем вызвать
// export default myName // чтобы сделать функцию доступной в другом модуле, файлеБ надо ее экспортировать
// // ключевые слова export default далее название переменной
// // далее мы импортируем в модуль номер 2
// // moduleTwoJs
// import printMyName from '. /moduleOne. js' //  с помощью импорта мы данную функцию импортируем в другой файл модуль moduleTwoJs
// // import название переменной from путь к файлу из которого мы хотим импортировать
// // '. /moduleOne. js' если мы пишем ./ то мы говорим чтоб эттот файлы модули находятся в одной папке
// // когда мы пишем export default то мы можем импортировать переменную в перменную с другим названием, экспорт делаем с названием myName а import уже с другим названием printMyName

// printMyName(); // 'Mark'
// КЛАССЫ И ПРОТОТИПЫ
// СИНТАКСИС КЛАССОВ ПОЯВИЛСЯ В ES6
// в этом синтаксисе class ... мы можем создавать новый классы
// классы позволяют создавать прототипы для обьектов
// на основание прототипов создаются экземпляры
// с одного прототипа можно создать много экземпляров и все экземпляры будут независимы друг от друга 
// каждый экземпляр может иметь свои свойства и методы
// экземпляр наследует свойства и методы прототипов, могут быть собственные методы, а могут быть унаследованными
// экземпляры классов в js создаются с помощью функции
class Comment { // в название классов используем Pascal Notation первая буква заглавная
    // между фигурными скобками находится все что касается данного класса(свойства и методы)
    constructor(text) {
        /* constructor() это метод */
        /* при вызове такого  метода constructor мы передаем значение для параметра (text)*/
        this.textComment = text
        // переменная this указывает на экземпляр класса
        // мы конкретному this экземпляру этого class Comment, добавляем свойство text
        // и значением этого свойства text, будет значение параметра text, которое было передано в качестве аргумента text в метод constructor
        // то есть у нового экземпляра этого класса Comment появится собственное свойство text с каким то значением которое мы передали в параметр вызова метода constructor

        this.votesQty = 0
        // почему 0 ? constructor()  вызывается тогда когда вы создаете новый экземпляр нового обьекта
    }
    /* Мы хотим создать новый комментарий с каким то текстом и у этого комментария будет 
    определенное количество голосов, то есть можно будет голосовать за этот комментарий
    и можно будет повышать количество голосов. Так овт когда мы создает новый экземпляр
    комментария у него не будет еще голосов, соотвественно начальное количество голосов 0 */
    upvote() /* метод upvote */ {
        // внутри этой функции мы увеличиваем свойство votesQty на 1
        // и так же обращаемся к конкретному экхемпляру комментария
        this.votesQty += 1
        // этот метод upvote находится на уровне класса и он не будет присвоен как отдельныц метода конкретного экземпляра этого класса комментария
        // но он будет наследоваться всеми экземплярами этого класса комментария
    }
    static mergeComment(first, second) {
        return `${first} - ${second}`
    }
}
// как создать новый экземпляр такого класса ?
// используя ключевое свойство new
const firstComment = new Comment('First comment');
// в new вызывается функция constructor 
// Comment пишется также с большой буквы как и прии создании класса
// ('First comment') это ПАРАМЕТР TEXT в constructor, constructor(text)
// в итоге такая вся функция вернет новый обьект 
// и этот новый обьект будет наследоваться все методы класса Comment
// и комментарий будет прототипом для такого экземпляра
console.log(firstComment);
// Comment {text: 'First comment', votesQty: 0}
// text: "First comment"
// votesQty: 0
// [[Prototype]]:  Object
// constructor:  class Comment
// upvote:  ƒ () // этот метод наследуется всеми экземплярами класса Comment. 
// Метод upvote является унаследованным методом с родительского класса Comment
// [[Prototype]] :  Object

// Наследование по цепочки 
// если после создания переменной в частности firstComment, в консоле написать эту переменную и поставить точку, то увидим все возможные методы и свойства которые досступны на уровне использования firstComment
// цепочка прототипов firstComment -> Comment -> Object
// firstComment является экземпляром класса Comment, а данный класс наследует все методы Object
// КАК ПРОВЕРИТЬ ПРИНАДЛЕЖНОСТЬ ЭКЗЕМПЛЯРА К ТОМУ ИЛИ ИНОМУ КЛАССУ
// используя оператора instanceof
console.log(firstComment instanceof Comment); // true
console.log(firstComment instanceof Object); // true
// ВЫЗОВ МЕТОДОВ
firstComment.upvote(); // вызываем метод upvote() как метод обьекта firstComment
console.log(firstComment.votesQty); // 1
firstComment.upvote();
console.log(firstComment.votesQty); // 2
firstComment.upvote();
console.log(firstComment.votesQty); // 3
// ПРОВЕРКА ПРИНАДЛЕЖНОСТИ СВОЙСТВ ЭКЗЕМПЛЯРУ ОБЪЕКТА
firstComment.hasOwnProperty('text'); // true
// проверяем есть ли у обьекта firstComment свойство text
firstComment.hasOwnProperty('votesQty'); // true
firstComment.hasOwnProperty('name'); // false
firstComment.hasOwnProperty('upvote'); // false
// Как создавать несколько экземпляров какого та класса
const currentComment = new Comment('Current comment');
const secondComment = new Comment('Second comment');
secondComment.upvote();
secondComment.upvote();
secondComment.upvote();
secondComment.upvote();
console.log(secondComment.votesQty); // 4
currentComment.upvote();
console.log(currentComment.votesQty); // 1
// СТАТИЧЕСКИЕ МЕТОДЫ такие методы создаются с использованием ключевого слова static
// стратический метод static будет доступен как свойство класса Comment и не наследуется экземплярами класса
/*
class Comment{
    constructor(text){
        this.text = text
        this.votesQty = 0
    }
    upvote(){
        this.votesQty +=1
    }
    static mergeComment(first,second){
        return `${first} ${second}`
    }
}
Вызываем метод
Comment.mergeComment('comment','no comment')


*/
console.log(Comment.mergeComment('comment', 'no comment'));
// Расширение других классов
class NumbersArray extends /* extends расширяет другой класс  */ Array {
    sum() {
        return this.reduce((element, acc) => acc += element, 0)
    }
}
const myArray18 = new NumbersArray(2, 5, 7);
console.log(myArray18);
console.log(myArray18.sum())

// NumbersArray расширяет класс Array
// Array родительский класс для класса NumbersArray
// то есть мы хотим расширить класс Array добаявляя метод sum и он будет автоматически применять ко всем массивам с классом NumbersArray
// у мeтод reduce имеется колбэк функция  (element,acc) => acc +=element
// у этой колбэк функции есть два параметра element,acc 
// acc это отдельная переменная которая может изменяться в процессе итерации массива
// 0 (acc) в колбэк функции это начальное значение аккамулятора 
// получается примером выше мы создали цепочку прототипа myArray18 -> NumbersArray -> Array -> Object
// myArray18 экземпляр класс myArray18,myArray18 расширяет класс Array и Array расширяет класс Object
// метод reduce служит чтобы мы получили финальное значение совершив итерацию по массиву
// МЕТОД Reduce
/* const people = [
    {name:'Andrey', age: 21, bodget: 900},
    {name:'Mark', age: 22, bodget: 800},
    {name:'Maks', age: 26, bodget: 1500}
]
let sumBodget = 0;
for(let i = 0; i < people.length; i++){
    sumBodget += people[i].bodget
}
console.log(`${sumBodget}$`) // 3200$
*/
const people = [
    { name: 'Andrey', age: 21, budget: 900 },
    { name: 'Mark', age: 22, budget: 800 },
    { name: 'Maks', age: 26, budget: 1500 }
]
const sumBodget = people.reduce((total, person) => {
    return total + person.budget
}, 0)
// 0 = 0 + 900
// 900 = 900 + 800
// 1700 = 1700 + 1500
// 3200 то есть total на последней итерации станет 3200
console.log(sumBodget); // 3200
// с помощью метода Reduce мы посчитаем финальное число, сумму всего общего бюджета
// у reduce 2 параметра, это колбэк функция и начальное значение перменной
// в колбэк функции два параметра, переменная total с значением начальным = 0, и person параметр итерируемый элемент у массива
// что такое прототип ? 
/*
У каждого экземпляра класса есть скрытое свойство __proto__
менять такое свойство вручную не рекомендуется
можно проверить что свойство прототип конкретно класса равно свойству прото любого экземпляра
Comment.prototype === firstComment.__proto__ //true
 
*/
console.log(Comment.prototype === firstComment.__proto__); // true
// Строки и числа ведут себя как обьеты, хотя это примитивный тип
// у примитивных типов не может быть методов, но строки и чсла ведут себя как обьекты и имеют методы
// например у строки булет методы класса String
const nameMark = 'mark';
console.log(nameMark.toUpperCase()); // MARK
// можно ли создать экземплярр  класс примитивного типа ? ДА
const secondStringName = new String('My name is Mark');
console.log(secondStringName);
// String { 'My name is Mark' }
// 0: "M"
// 1: "y"
// 2: " "
// 3: "n"
// 4: "a"
// 5: "m"
// 6: "e"
// 7: " "
// 8: "i"
// 9: "s"
// 10: " "
// 11: "M"
// 12: "a"
// 13: "r"
// 14: "k"
// length: 15
// secondStringName у этого экземпляра есть все методы класс String

// class InfoProfile{
//     constructor(nameUser,age,weigth,heigth){
//         this.name = nameUser,
//         this.age = age,
//         this.weigth = weigth,
//         this.heigth = heigth
//     }
//     upvote(){
//         this.age -= 8;

//     }
// }
// const userNameClick = prompt(`Welcom. Введите ваше имя...`,'Анатолий')
// const resultName = new InfoProfile (`${userNameClick}`);
// console.log(resultName);
// const userAgeClick = +prompt(`${resultName.name} cколько вам лет ?`);
// resultName.age = userAgeClick;
// console.log(resultName)
// const myFnUserName = () => {
//     if (userAgeClick > 0) {
//         resultName.upvote();
//         alert(`Ого. А по вам и не дашь больше ${resultName.age} :з`);

//     } else {
//         return alert ('Ввели не верный возраст !')
//     }
// }
// myFnUserName()
// const userWeigth = +prompt(`Введите ваш рост, через точку ?`,'1.75');
// resultName.weigth = userWeigth;
// const userHeigth = +prompt(`Введите ваш вес ?`,'псс...это останется между нами ');
// resultName.heigth = userHeigth;
// console.log(resultName);
// const indexUser = () => {
//     return Math.round(userHeigth / (userWeigth*userWeigth));
// }
// alert(`Ваш индекс Массы Тела Равен ${indexUser()}`);

// ПРОМИСЫ это обьект в js, и это обещание предоставить результат позже
// промисы позволяют брабатывать отложенные во времени события
// асинхронный запрос это запрос на который мы не знаем когда получим ответ от сервера. ответ приходит не сразу а через какое то  время
// и в этот интервал ожидания мы должны иметь возможность выполнять другие задачи JavaScript
// промис может вернуть ошибку если результат предоставить невозможно
// промис может вернуть либо результат либо ошибку
// состояния промиса:
// ОЖИДАНИЕ(pending) - это когда промис только создается
// ИСПОЛНЕН - это когда промис вернул результат
// ОТКЛОНЕН - это если возникла ошибка
const myPromise = new Promise((resolve, reject) => {
    // создаем с помощью ключевого слова new новый класс  м
    // будет создан обьект myPromise, новый экземпляр класса Promise
    // в параметры мы передаем колбэк стрелочную функцию (resolve,reject) => {}
    // resolve,reject - это функции
    // у этой колбэк функции должно быть обязательно два параметра resolve,reject
    // внутри этой колбэк функции в теле, происходит выполнение ассинхронных действий
    // внутри этой колбэк функции нужно в результате вызвать одну из функций resolve или reject
    // когда мы вызываем resolve мы должны передать какой то результат какие та данные,
    // и когда была вызвана функция resolve Promise считается исполненым
    // если же где то возникла ошибка мы должны вызвать другу/ функцию reject и передать ей ту ошибку которая возникла
    // в таком случае промис считается отклоненым
})
// ПОЛУЧЕНИЕ РЕЗУЛЬТАТА ПРОМИСА
// у обьекта myPromise который был создан на предыдушем шаге, будут доступны .then и .catch
// когда мы вызываем метод then мы должны передать в качестве аргумента функцию и в данном случае стрелочная функция с одним параметром
myPromise
    .then(value => {
        // в этой стрелочной функции мы можем выполнять действия в случае успешного исполнения Promise
        // и значение параметра value будет равняться тому значению которое было передано в функцию resolve внутри Promise
    })
    .catch(error => {
        // здесь выполняются действия в случае ошибки, отклонения промиса, если внутри промиса была вызвана функция reject
        // значение error это значение переданное в вызове функции reject внутри Promise
    })
// получение данных с помощью fetch API
// мы можем использовать функцию fetch, эта функция доступна только в веб-браузерах в node.js ее нет 
// когда мы отправляем fetch запрос создается и возвращает промис с состоянием pading ожидание
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json()) // когда сервер ответит с данными тогда вызовется эта колбэк функция6 если промис был исполнен
    // и функции response передасться ответ от сервера
    // в таком ответе от сервера находится код от сервера и другая служеюная информация
    // непосредственно данные которые мы хотим получить типа обьект или массив данных отсуствуют
    // response => response.json(), метод json также возвращает промис поэтому требуется время чтобы распарсить данные и получить js обьект или массив
    // .then(response => response.json() это то же возвращает нам промис
    .then(json => console.log(json)) // в итоге для вот этой колбэк функции значение уже булет js обьект либо массив обьекта
    // суть почему вызываем дважды then потому что в первом then json то же возвращает промис и поэтому ввызываем меод уже повторно then
    // результат метода then
    // {
    //     "userId": 1,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    //   }
    .catch(error => console.error(error)) // на случай если один из предыдущих прописов fetch и json вернут ошибку
// отключил интернет и заново вызвал fetch вот ошибка получилась 
// Promise {<pending>}
// GET https://jsonplaceholder.typicode.com/todos/1 net::ERR_INTERNET_DISCONNECTED
// Uncaught (in promise) TypeError: Failed to fetch
// at <anonymous>:1:1
// упрощаем предыдуший пример, потому что было два промиса и соотвественно мы вызывали дважды then
// const getData = (url) => 
//     new Promise ((resolve,reject) => 
//         fetch(url)
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch (error => reject(error))      
//     ) // это можно запихнуть в какой то модуль и сделать export 
// getData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data)) // переменная data будет значением того что мы передали в .then(json => resolve(json))
//     .catch (error => console.error(error)) 
// и в другом файле пишем import и вызываем только нижний блок столько раз сколько нам угодно 
// ASYNC/AWAIT
// ASYNC/AWAIT - специальный синтаксис для упрощения работы с проммисами
// что такое асинхронная функция ?
// асинхронная функция это функция которая вместо какого та значения, такого как undefined,string возвращает Промис
// чтобы создать асинхронну/ функцию мы должны добавить ключевое слово async
// async function (){   в данном синтаксисе мы ставим async вначале 
//всегда возвращает промис
// }
// const myFnAsynk = async () => { // async стоит перед началом стрелочной функции
//всегда возвращает промис
// }
// const myFnAsynk = async () => {
//     return 'String '
// }

// console.log(myFnAsynk()); // вернет Промис и в качестве функции resolve вернет строку 'String'
// // Promise {<fulfilled>: 'String'}
// // [[Prototype]]: Promise
// // [[PromiseState]]: "fulfilled"
// // [[PromiseResult]]: "String"
// myFnAsynk()
// .then(value => console.log(value)) // pначение переменной value будет 'String '
// // что будет если асинхронная функция возвращает ошибку

// const myFnAsynk2 = async () => {
//     throw new Error('There was error')
// }
// myFnAsynk2()
//     .then(value => console.log(value))
//     .catch(error => console.log(error)) // в данном случае промис будет отклонен. Функция myFnAsynk2 вернет промис как и ранее и он будет мгновено отклонен и с ошибкой
// следовательно нам нужно поймать эту ошибку
// AWAIT с помощью этого ключевого слова в асинхронной функции мы можем ожидать результата от другого промиса
// const asyncFnTwo = async () => {
//     await <Promise>  внутри асинхронной функции можно ожидать рещультатов промисов
// }
// asyncFnTwo()
const timerPromise = () => // эта функция возвращает промис, неявный возврат
    new Promise((resolve, reject) => // колбэк функция в параметре, и {} не нужны потому что всего лишь одно выражение
        setTimeout(() => resolve(), 2000)) // вызываем функцию setTimeout, в вызов мы передаем то же колбэк функцию () => resolve() и вызываем resolve, через 2 секунды 
const asyncFnThree = async () => {
    console.log('Timer started'); // вначале выведется это 'Timer started'
    const startTime = performance.now(); //  
    await timerPromise(); //  потом получим результат промиса {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
    // функция дальше не выполняется пока не получен результат промиса: исполнен / отклонен
    const endTime = performance.now();
    console.log('Timer ended', endTime - startTime); // потом это 'Timer ended',  endTime - startTime увидим разницу в милисекундах между выполнением этой const startTime = performance.now(); команды и этой const endTime = performance.now();
    // console.log('Timer ended', endTime - startTime); 

}
asyncFnThree();
// метод performance.now() можно засечь время
// МИГРАЦИЯ ПРОМИСОВ
// переход с промисов на ASYNC/AWAIT
// const getData = (url) => 
//     new Promise ((resolve,reject) => 
//         fetch(url)
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch (error => reject(error))      
//     ) // это можно запихнуть в какой то модуль и сделать export 
// getData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data)) // переменная data будет значением того что мы передали в .then(json => resolve(json))
//     .catch (error => console.error(error)) 
// переход с промисов на ASYNC/AWAIT
// const getData = async (url) => {
//     const res = await fetch(url) // сначала мы ожидаем выполнение либо отклонение промиса который будет возвращен функцией fetch
//     const json = await res.json() // json так же ожидаем исполнение или отклонение промиса который вернет json
//     return json 
// }
// const url = 'https://jsonplaceholder.typicode.com/todos/1';
// const data = await getData(url); //  нет обработки ошибок в данном случае
// как бороться в данном случае с ошибкой 
// try{
//     const data = await getData(url);
//     console.log(data)
// } catch(error){
//     console.log(error.message) теперь у нас обработка ошибок
// ГЛАВНОЕ В  ASYNC/AWAIT:
// 1) ASYNC/AWAIT это синтаксическая настройка над промисами
// 2) await синтаксис возможен только внутри асинхронных ASYNC функциях
// 3) ASYNC функция всегда возвращает промис
// 4) ASYNC функция ожидает результата инструкции await и не выполняет последующие инструкции
//DOM
console.log(document); // #document содержится дом дерево
// document глобальный обьект который представляет документ в котором мы работает
// window еще один глобальный обьект, его функции и методы можно отнести alert,prompt,config,setTimeOut() и тд
// window он относится исключительно к браузеру
// как происходит выборка каких либо узлов ?
// присуствует несколько методов для того чтобы делать поиск,узлов
const header = document.getElementById('header'); // данный метод вернет узел который мы указали
console.log(header); // возвращает ссылку на обьект который находится в DOM дереве
console.dir(header); // раскрываем обьект и смотрим его свойства с помощью метода dir
console.log(header.id); // header получаем id этого элемента
const phoneText = document.getElementById('pt');
// phoneText.textContent = 'не звоните нам' //  изменили текст в данном блоке с помощью js
// phoneText.style.backgroundColor = 'red'; // поменяли цвет блока на красный 
// phoneText.style.color = 'black'; // поменяли цвет текста на черный 

