 // - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
 function minNum(a, b, c) {

     if (a < b && a < c) {
         console.log(a);
      }else if (b < a && b < c) {
         console.log(b);
         } else {
 console.log(c)
 }
}
 minNum(245, 67, 87);

 // - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
  function minNum(a, b, c) {

      if (a > b && a > c) {
          console.log(a);
       }else if (b > a && b > c) {
          console.log(b);
          } else {
  console.log(c)
  }
 }
  minNum(245, 67, 87)




 // - створити функцію яка повертає найбільше число з масиву
let ArrayMax=[1, 54, -34, 45, 78];
 function  maxFromArray(numbers) {
  let max = numbers[0];
  for (const number of numbers) {
   if (number > max) {
    max = number;
   }
  }
   return max;
  }
 document.write(`<h2>Найбільший елемент масиву: ${maxFromArray(ArrayMax)}</h2>`)

 // - створити функцію яка повертає найменьше число з масиву

 let ArrayMin=[58, 96, 369, -36, 54];
 function  minFromArray(numbers) {
  let min = numbers[0];
  for (const number of numbers) {
   if (number < min) {
    min = number;
   }
  }
  return min;
 }
 document.write(`<h2>Найменьший елемент масиву: ${minFromArray(ArrayMin)}</h2>`)


 // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
 let Array = [58, 96, 369, -36, 54];
function sumArr(nums){
 let result=0;
 for (const num of nums){
  result=result+num;
 }
 return result;
}
 document.write(sumArr(Array))

 // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.


 function avgArr(nums){
  return sumArr(nums)/nums.length
 }
  document.write(avgArr(Array))




 // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
 // а виводить найбільше (Math використовувати заборонено);
let Array[23, 567, 876, 345]
 function maxminArray(nums) {
 let max = nums[0];
 let min = nums[0];
 for (const num of nums) {
  if (num>max) {
   max = num;
  }
  if (num<min) {
   min = num
  }
 }
  console.log(max)
  return min;
}
document.write(maxminArray(Array))
//  Почему то ничего не выводит?????????????????????/

 // - створити функцію яка заповнює масив рандомними числами
 // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.


function randomaizer(length) {
     let array = [];
 for (let i = 0; i < length; i++){
  array[i]=Math.round(Math.random()*100);
 }
 return array;
};
 document.write(randomaizer(15))



 // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

function randomaizer(length,limit) {
 let arrRandom = [];
 for (let i = 0; i < length; i++){
  arrRandom = Math.round(Math.random()*limit);
 }
return arrRandom;
}



// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

 function revers(arr){
 let neuArr = [];
 for (let i = arr.length-1; i >= 0; i-- ){
  const arrElement=arr[1];
  newArr.push(arrElement)
 }
 }



