/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
var presentSalary = startingSalary;
for (var i = 1; i<=experience; i++) {
    presentSalary += 0.05 * presentSalary;
}
console.log(presentSalary.toFixed(2));
