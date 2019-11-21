var a = [1, 5, 12, 4, 3];
var b = [2, 3, 4, 5, 6, 7, 8, 9, 10];
var c = [3, 10, 17];
function averageTotal(someList){
 let average = 0;
 let sum = 0;
 for (let i = 0; i < someList.length; i++) {
  sum = sum + someList[i];
 };
 average = sum / someList.length;
 console.log(average);
};

averageTotal(a);
averageTotal(b);
averageTotal(c);