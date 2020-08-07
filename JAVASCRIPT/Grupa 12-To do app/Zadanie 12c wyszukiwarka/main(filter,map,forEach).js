//FILTER

const arr = [34, 219, 44, 56, 643, 5, 324, 55];

const oddNumbers = arr.filter(number => number % 2) //wyszukuje liczby nieparzyste
const evenNumbers = arr.filter((number) => !(number % 2)) //wyszukuje liczby parzyste

//MAP

const double = arr.map(number => number * 2);
console.log(double);
console.log(evenNumbers);


//forEach

arr.forEach((number, index) => arr[index] = number * 2);
console.log(arr)