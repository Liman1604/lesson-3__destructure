// ПОВЕРЧНОСНАЯ И ГЛУБОКОЕ КОПИРОВАНИЕ ОБЪЕКТОВ

// let user={
//     name:'Aisultan',
//     age:20,
//     languages:{
//         english:'2 level',
//         french:'3 level',
//     },
// }
// console.log(user)

// let user2=user // Это не копирование
// '...' - Это spread оператор (распоковщик)

// let user2={...user};// Поверхностное коп.

// Повехностное коп. работает коректно когда нету вложенных обьектов,либо же масствов

// user2.name='Bora'
// user2.age=16
// user2.languages.english='6 level'
// console.log(user2)



// let user={
//     name:'Aisultan',
//     age:20,
//     languages:{
//         english:'2 level',
//         french:'3 level',
//     },
// }
// Глубокое коп.-ПРОИСХОДИТ ЗАСЧЁТ ТОГО ЧТО МЫ ПРИВОДИМ НАШ ОБЪЕКТ В СТРОКУ И В ЭТОТ МОМЕНТ ОБРЫВАЕТСЯ СВЯЗЬ С ИСХОДНЫМ
// ОБЪЕКТОМ,ЗАТЕМ МЫ ИЗ СТРОКИ ДЕЛАЕМ НАШ ФОРМАТ

// JSON.stringify()- приводив в строку
// JSON.parse()- из строки в наш формат

// let user2=JSON.parse(JSON.stringify(user))
// user2.name="Bora";
// user2.languages.english='6 level'
// user2.languages.russia='1 level'
// user.languages.chinese='6 HSK'
// console.log(user)
// console.log(user2)


// ДЕСТРУКТУРИЗАЦИЯ ЭТО СПЕЦИАЛЬНЫЙ СИНТОКСИС ПРИ ПОМОЩИ КОТОРОГО МЫ МОЖЕМ, БРАТЬ СВОЙСТВА У ОБЪЕКТОВ
// ЛИБО ЖЕ, ЭЛЕМЕНТЫ У МАССИВОВ И СРАЗУ ЖЕ ЗАПИСЫВАТЬ ИХ В ПЕРЕМЕННЫЕ.

// let student={
//     name:'Alex',
//     lastName:'Popov',
//     age:18,
// }

// let studentName=student.name
// let lastNAme=student.lastName

// let {name,lastName,age}=student;

// console.log(name)
// console.log(lastName)
// console.log(age)



// let student2={
//     name: 'Tola',
//     lastName: 'Jopov',
// }
// let {name:stud2Name,lastName:studLas2Name}=student2
// console.log(stud2Name)
// console.log(studLas2Name)


// let library={
//     title:'Bootstrap',
//     version:{
//         first:'2015',
//         second:'2019',
//         third:'2021'
//     }
// }

// let {version:{first:firstVer,third:thirdVer}}=library;
// console.log(firstVer,thirdVer)

// let arr=['true',10,77,false];
// let [boolean,num, ,bool]=arr
// console.log(boolean,num,bool)

// let nums=[42,55,86,90,105]
// let [num1, ,num2,...lol]=nums
// console.log(num1,num2,lol)

// let project={
//     name:'Market Place',
//     framewoks:['Angular','Django API'],
//     libraries:['React','Express JS'],
//     team:{
//         frontEnd:['JS15','JS13'],
//         backEnd:['PY-16','PY-7-EV'],
//     }
// }

// let {libraries:[,secondLibraries],team:{frontEnd:[,frontSecond],backEnd:[firstBackEnd,]}}=project
// console.log(secondLibraries,frontSecond,firstBackEnd)


// let obj ={
//     title:'h2o',
//     subTitle:'h+t'
// }
//
// let {title,subTitle=404}=obj
//
// console.log(title,subTitle)

// Дан объект {name: 'John', 'age': '22', }.
// Запишите соответствующие значения в переменные name, и age.
// Сделайте так, чтобы, если какое-то значение не задано - оно принимало введенное значение с prompt.



// let obj={
//     name: 'John',
//     age: 22,
// }
// let {name=prompt('Enter name'),age=prompt('Enter age')}=obj
// console.log(name,age)

// function checkTask(arr){
//     let sum=arr.every((item) => {
//         if(  item > 0) {
//             return true
//         }else {
//             return false
//         }
//     })
//     console.log(sum)
// }
// checkTask([4, 5, -8, 9] )

// function checkTask(arr){
//   let sum=arr.filter((item)=>{
//       if (item.length>5){
//           return item
//       }
//       })
//     console.log(sum)
// }
// checkTask(['июнь', 'октябрь', 'май', 'ноябрь', 'март'] )

function checkTask(arr){
    let sum=arr.reduce((prev,item,index)=>{
        if(item===0) arr.splice(index)
        return prev+item
    });
    console.log(sum)
}
checkTask([0,3,4])
