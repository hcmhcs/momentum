//음주 가능한 나이인지 확인해주는 계산기
const age = parseInt(prompt("How old are you"));

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("Your are too young");
} else {
  console.log("Thank you for writing your age");
}
