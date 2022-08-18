function Chees(size) {
	let item = "";
	for(let count = 1;count<=size;count++){
		let buffer = "";
		let parity;
		if(count % 2 == 0){
			parity = 1;
		}else{
			parity = 2;
		}
		for(let countLoop = 1;countLoop<=size;countLoop++){
			if(parity === 1){
				if(countLoop % 2 == 0){
					buffer += " ";
				}else{
					buffer += "#";
				}
			}else{
				if(countLoop % 2 != 0){
					buffer += " ";
				}else{
					buffer += "#";
				}
			}
		}
		item += buffer + "\n"
	}
	console.log(item);
} 

function findSolution (target) {
	function find (current, history) {
		if(current == target){
			return history
		}else if(current > target){
			return null;
		}else {
			return find(current + 5, `(${history} + 5)`) ||
				   find(current * 3, `(${history} * 3)`); 
		}
	}
	return find(1 , "1")
}

function minNum (numOne, numTwo) {
	if((typeof numOne || typeof numTwo) != "number"){
		return undefined
	}else if(numOne <= numTwo){
		return numOne;
	}else{
		return numTwo;
	}
}

function isEven (number) {
	function countNum (count) {
		if(count === 0){
			return true;
		}else if(count === 1){
			return false
		}else if(count<0){
			return countNum(count+2);
		}else{
			return countNum(count-2);
		}
	}
	return countNum(number);
}

function countABC (str, letter) {
	let countLetter = 0;
	for(let count = str.length-1; count>=0; count--){
		console.log(count);
		if(str[count] == letter){
			countLetter++;
		}else{
			continue;
		}
	}
	return countLetter;
}

// ----------------------------------------------
var JOURNAL = [
  {"events":["carrot","exercise","weekend"],"squirrel":false},
  {"events":["bread","pudding","brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["brussel sprouts","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","candy","brushed teeth","exercise","weekend","dentist"],"squirrel":false},
  {"events":["brussel sprouts","pudding","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["pizza","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["bread","beer","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","weekend","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","work"],"squirrel":false},
  {"events":["brushed teeth","computer","work"],"squirrel":false},
  {"events":["lettuce","nachos","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["cauliflower","reading","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","television","work"],"squirrel":false},
  {"events":["spaghetti","nachos","work"],"squirrel":false},
  {"events":["cauliflower","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","computer","weekend"],"squirrel":true},
  {"events":["potatoes","ice cream","brushed teeth","computer","weekend"],"squirrel":false},
  {"events":["potatoes","ice cream","brushed teeth","work"],"squirrel":false},
  {"events":["peanuts","brushed teeth","running","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["pizza","ice cream","computer","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work"],"squirrel":false},
  {"events":["cauliflower","candy","reading","weekend"],"squirrel":false},
  {"events":["lasagna","nachos","brushed teeth","running","weekend"],"squirrel":false},
  {"events":["potatoes","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","work"],"squirrel":false},
  {"events":["pizza","beer","work","dentist"],"squirrel":false},
  {"events":["lasagna","pudding","cycling","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","reading","work"],"squirrel":false},
  {"events":["spaghetti","pudding","television","weekend"],"squirrel":false},
  {"events":["bread","brushed teeth","exercise","weekend"],"squirrel":false},
  {"events":["lasagna","peanuts","work"],"squirrel":true},
  {"events":["pizza","work"],"squirrel":false},
  {"events":["potatoes","exercise","work"],"squirrel":false},
  {"events":["brushed teeth","exercise","work"],"squirrel":false},
  {"events":["spaghetti","brushed teeth","television","work"],"squirrel":false},
  {"events":["pizza","cycling","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","beer","brushed teeth","work"],"squirrel":false},
  {"events":["pizza","peanuts","candy","work"],"squirrel":true},
  {"events":["carrot","peanuts","brushed teeth","reading","work"],"squirrel":false},
  {"events":["potatoes","peanuts","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","nachos","brushed teeth","exercise","work"],"squirrel":false},
  {"events":["pizza","peanuts","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["lasagna","brushed teeth","cycling","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","computer","work","touched tree"],"squirrel":false},
  {"events":["lettuce","brushed teeth","television","work"],"squirrel":false},
  {"events":["potatoes","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","candy","work"],"squirrel":false},
  {"events":["potatoes","nachos","work"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","weekend"],"squirrel":false},
  {"events":["carrot","brushed teeth","exercise","weekend","touched tree"],"squirrel":false},
  {"events":["brussel sprouts","running","work"],"squirrel":false},
  {"events":["brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","running","work"],"squirrel":false},
  {"events":["candy","brushed teeth","work"],"squirrel":false},
  {"events":["brussel sprouts","brushed teeth","computer","work"],"squirrel":false},
  {"events":["bread","brushed teeth","weekend"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","weekend"],"squirrel":false},
  {"events":["spaghetti","candy","television","work","touched tree"],"squirrel":false},
  {"events":["carrot","pudding","brushed teeth","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["carrot","ice cream","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","work"],"squirrel":false},
  {"events":["spaghetti","peanuts","exercise","weekend"],"squirrel":true},
  {"events":["bread","beer","computer","weekend","touched tree"],"squirrel":false},
  {"events":["brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","peanuts","brushed teeth","work","touched tree"],"squirrel":false},
  {"events":["lasagna","brushed teeth","television","work"],"squirrel":false},
  {"events":["cauliflower","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","brushed teeth","running","work"],"squirrel":false},
  {"events":["carrot","reading","weekend"],"squirrel":false},
  {"events":["carrot","peanuts","reading","weekend"],"squirrel":true},
  {"events":["potatoes","brushed teeth","running","work"],"squirrel":false},
  {"events":["lasagna","ice cream","work","touched tree"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","cycling","work"],"squirrel":false},
  {"events":["pizza","brushed teeth","running","work"],"squirrel":false},
  {"events":["lettuce","brushed teeth","work"],"squirrel":false},
  {"events":["bread","brushed teeth","television","weekend"],"squirrel":false},
  {"events":["cauliflower","peanuts","brushed teeth","weekend"],"squirrel":false}
];

function phi (table) {
	return ((table[3]*table[0]-table[2]*table[1])/
		Math.sqrt((table[3]+table[2])*
				  (table[0]+table[1])*
				  (table[3]+table[1])*
				  (table[2]+table[0]))
		); 
}
console.log(phi([76, 9, 4, 1]))

function tableFor (event, journal) {
	let table = [0, 0, 0, 0];
	for(let i = 0; i < journal.length; i++){
		let entry = journal[i], index = 0;
		if(entry.events.includes(event)) index += 1;
		if(entry.squirrel) index += 2;
		table[index] += 1;
	} 
	return table;
}
console.log(tableFor('pizza', JOURNAL));

function journalEvents (journal) {
	let events = [];
	for(let entry of journal){
		for(let event of entry.events){
			if(!events.includes(event)){
				events.push(event);
			}
		}
	}
	return events;
}
// console.log(journalEvents(JOURNAL));
// for(let event of journalEvents(JOURNAL)){
// 	console.log(`${event}: ${phi(tableFor(event, JOURNAL))}`);
// }
for(let event of journalEvents(JOURNAL)){
	let correlation = phi(tableFor(event, JOURNAL));
	if(correlation > 0.1 || correlation < -0.1){
		console.log(`${event}: ${correlation}`)
	}
}
for(let entry of JOURNAL){
	if(entry.events.includes("peanuts") &&
		!entry.events.includes("brushed teeth")){
		entry.events.push("peanuts-teeth");
	}
}

console.log(phi(tableFor("peanuts-teeth", JOURNAL)));

// ---------------------------------------------------------
function remove (array, index) {
	return array.slice(0, index)
		.concat(array.slice(index + 1)) 
}
// ---------------------------------------------------------
function range (start, end, step=1) {
	let array = []
	for(let i = start; i != end; i = i + step){
			array.push(i)
		}
	return array;
}

function sum (array) {
	let result = 0;
	for(let number of array){
		result += number;
	}
	return result;
}
// -------------------------------------------------------
function reverseArray (array) {
	let result = [];
	for(let element of array){
		result.unshift(element);
	}
	return result;
}
function reverseArrayInPlace (array) {
	for(let i = 0;i < Math.floor(array.length/2);i++){
		let item = array[i];
		array[i] = array[array.length-i-1];
		array[array.length-i-1] = item;

	}
}
// -----------------------------------------------------------
function arrayToListInRec (array) {
	if(!array.length){
		return {};
	} 
	let list = {
		value: array[0]
	}
	if(array.length == 1){
		list.rest = null;
		return list;
	}
	list.rest = arrayToList(array.slice(1));
	return list;
}
function arrayToList (array) {
	let list = {};
	for(let node = list, count = 0;node;node = node.rest, count++){
		node.value = array[count];
		if(array[count+1] == undefined){
			node.rest = null;
			break;
		}
		node.rest = {};
	} 
	return list;
}
function listToArray (list) {
	let array = [];
	for(let node = list;node; node = node.rest){
		console.log(node.value);
		array.push(node.value);

	} 
	return array;
}
// --------------------------------------------
function solution(str, ending){
  if(!ending) return true;
  if(str.slice(-(ending.length)) == ending){
    return true;
  }else return false;
}
//if the ending in the end of str
// -----------------------------------------------
function disemvowel(str) {
  let newStr = "";
  let vowels = "euioa"
  for(letter of str){
  	console.log(letter)
    if(vowels.indexOf(letter) == -1 || letter == " "){
      newStr += letter
      console.log(newStr)
    }
  }
}
// ------------------------------------------------------------
function divisors(integer) {
  let array = [];
  for(let i = 1;i < integer+1;i++ ){
    if(i==1 && integer != 1) continue;
    console.log(i)
    if(integer % i == 0){
      array.push(i);
    }
  }
  if(array.length == 1){
  	console.log(array.length)
    return array[0]+" is prime"
  }
  return array;
};
// -----------------------------------------------------------------------
function maximum(value) {
      if (toString.call(value) !== "[object Array]")
      return false;
      return Math.max.apply(null, value);
   }
function nearestSq(n){
    let sqArray = [];
    let difOfSq = [];
    let num = Math.floor(n/50)
    if(n < 100) num = 1;
    for(let number = num; number <= n+1000+num; number ++){
      let sq = false;
      for(let i = 1; i <= number; i++){
        if(i * i == number){
       	  console.log(i);
          sq = true
          break
        }
      }
      if(sq == true){
        sqArray.push(number);
        if(sqArray.indexOf(number) != 0){
        	difOfSq.push(number - sqArray[sqArray.indexOf(number)-1])
        }
        if(number > n){
          // console.log(sqArray);
          // console.log(maximum(difOfSq));
          if((number - n) > (n - sqArray[sqArray.indexOf(number)-1])){
            return sqArray[sqArray.indexOf(number)-1]
          }else{
            return number;
          }
        }
      }
    }
}
function nearestSq(n){
  let left, right = 0;
  function isInteger (number) {
    return ((number ^ 0) === number) 
  }
  for(let number = n;number < n+100000;number++ ){
    if(isInteger(Math.sqrt(number))){
      right = number;
      break;
    } 
  }
  for(let number = n;number > n-100000;number-- ){
    if(isInteger(Math.sqrt(number))){
      left = number;
      break;
    }
  }
  if((right - n) < (n - left)){
    return right
  }else{
    return left
  }
  console.log( left + " " + right)
}
// ----------------------------------------------------------------------------
console.log(
	SCRIPTS.map((s => s.year)).reduce((a, b) => {
      return a < b ? b : a;
    }) + " " + SCRIPTS.filter(s => s.year == 2006).map(s => s.name)
);
console.log(SCRIPTS)
// ------------------------------------------------------------
function printNumbers (...numbers) {
	for(element of numbers){
		console.log(element + "is number")
	}
}
printNumbers(1, 2,3 ,4 ,5 ,6);
// ------------------------------------------------------------