# momentum

바닐라 js로 크롬 앱 만들기

## 12/26

### Variables

- const : 상수, 이후에 바꿀 수 없다
- let : 변수를 바꾸고 싶을때, update할 때 사용
- var : 어떤 규칙도 갖고 있지 않는다.

### Booleans

- true 타입
- false 타입
- null 타입 (파이썬에서는 None)
- undefined 타입

```js
const run = true;
const opt = false;
```

### Arrays

- [ ]안에 어떤 타입이든 쓸 수 있다.
- array.push()

```js
const array = [1,2,"hello",false,null,undefined];
console.log(array[2]); // hello가 출력
array.push(4) - array에 4 추가하기
```

### Objects

- { } 안에 property와 value 적기
- value로 array도 들어갈 수 있음

```js
const player  {
    name : "changmin",
    age : 3,
    habit : ['basketball','game'],
}
console.log(player.habit[0])
player.lastname="Han" //object에 property추가가능
player.age += 1 // value update 가능
```

### Function

- 인자를 안받은채로 인자를 출력하면 undefined, NaN(not a Number)가 출력

```js
function sayHello(name, age) {
  console.log("Hello " + name + " Your age is " + age);
}
sayHello("Changmin");
//출력할때 age가 없으면 age자리에 undefined가 들어간다
//Hello Changmin Your age is undefined
```

- Object안에 function을 만들수 있다.
- Object안에 function 인자로 안전달해도 Object의 property는 사용가능
- 그냥 name이라고 하면 안된다.

```js
const player={
    name: "changmin"
    sayHello: function(){
        console.log("Hello" + player.name);
    }
}
palyer.sayHello();
```

// 추가로 더 공부하면 좋을 것 : arrow function

### Return

- function에 return (C언어랑 똑같다)
-

```js
function plus(a, b) {
  return a + b;
}
const result = plus(10, 2);

console.log(result);
```

- 계산기 예제(Object와 function 사용)

```js
const calculater = {
  plus: function (a, b) {
    return a + b;
  },
  devide: function (a, b) {
    return a / b;
  },
  minus: function (a, b) {
    return a - b;
  },
  power: function (a, b) {
    return a ** b;
  },
};
console.log(calculater.plus(1, 6));
```

## 12/27

### Conditional

- prompt() : 사용자의 입력받아 string타입으로 return, 하지만 입력전까지 브라우저가 멈추고 css적용불가해서 잘 안쓴다
- typeof &lt;variable &gt; : variable의 타입을 return, typeof( ) <---- 이렇게 안쓴다
- parseInt() : string형을 int형으로 변환해줌
- isNaN() : 숫자인지 아닌지 판단해줌 true라면 숫자아님, false라면 숫자
- && : AND조건
- || : OR조건

```js
const age = parseInt(prompt("How old are you"));
console.log(typeof age);

if (isNaN(age) || age < 0) {
  console.log("Please write a number");
} else if (age < 18) {
  console.log("Your are too young");
} else {
  console.log("Thank you for writing your age");
}
```

### Document Object

- 이미 존재하는 객체, 연결된 html 객체를 가리킴
- 브라우저가 html정보를 document라는 object으로 자바스크립트에게 전달
- 자바스크립트 관점으로 보는 html 정보들이 담긴 객체

```js
console.dir(document); // element의 내부를 보여준다.
document.body; //html의 body부분만
document.title = "Change Title"; // html title 바꾸기
```

## 12/28

### document.getElementById()

- document객체와 element를 가져오는 수많은 함수를 이용하자
- 자바스크립트에서 html을 객체로 가져올수도있고 값을 바꿀 수도 있다.
- 자바스크립트에서 html을 가져오는 다른 방법도 있다.

```js
const title = document.getElementById("id name");
console.dir(title);
console.log(title.className);

title.innerText = "Change!!";
```

### 이외에 함수들

- getElementByClassName : 많은 element를 한번에 가져와야할때 사용, array를 리턴
  (대부분 classname을 여러곳에 만들지 않는다)
- getElementByTagName : anchor,div,section,button 같은 tag의 name으로 element가져오기, array로 가져옴

```js
const title = document.getElementsByTagName("h1");
```

### querySelector

- element를 CSS방식으로 불러오기, 가장 추천하는 방식
- querySelector : 한개를 return해준다. 조건에 맞는 여러개가 있다면 그중 첫번째것만 return해준다.
  ex) document.querySelector("div.hello:firstchild h1")
- querySelectorAll : 조건에 맞는 여러개를 array형식으로 return해준다.

```js
//hello class에서 h1태그를 가져오기
const title = document.querySelector(".hello h1");
const title = document.querySelector("div h1");

//위, 아래가 같은 이야기이다.
const title = document.querySelector("#hello");
const title = document.getElementById("hello");
const title = document.querySelector("div.hello:first-child h1");
//class hello를 가진 div 내부의 first-child인 h1를 찾는것
```

### 간단한 css

- "#" - id를 의미
- "." - class를 의미

### Events

- style은 h1 객체 내부에 있는 하나의 객체이다. (javascript형식으로 된)
- 그안에 color가 있다.

```js
title.style.color = "blue";
//이러면 h1의 style을 javascript에서 변경할 수 있다.
```

- 대부분은 javascript에서 event를 listen 한다.(event는 클릭,키보드 등)

```js
const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  console.log("title was clicked");
}

title.addEventListener("click", handleTitleClick);
//title을 click하는 것을 listen하고 click되면 함수가 작동한다.
```

## 12/31

### Events 2

- https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement
- 해당사이트에서 html의 event들을 확인해볼 수 있다.
- console.dir(title) 와 같이 h1의 element들을 보고 "on"이 붙여져 있으면 event이다.

```js
const title = document.querySelector("div.hello:first-child h1");

console.dir(title);

function handleTitleClick() {
  title.style.color = "blue";
}

function handleMouseEnter() {
  title.innerText = "Mouse is here";
}
function handleMouseLeave() {
  title.innerText = "Mouse is gone!";
}
title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);
```

### more Events

- event를 사용하는 다른 방법(비추)
- .addEventListener 방법으로는 .removeEventListener로 event listener를 제거할 수 있다.

```js
title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
```

- window도 자바스크립트에서 제공하는 객체이다. (document같은 거)
- window도 event가 있다.

```js
function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize", handleWindowResize);
```

- document의 body,head,title은 바로 가져올 수 있다

```js
document.body;
document.head;
document.title;
```

- div,h1 같은 element들은 getElementById,querySelector로 가져와야됨
- 다른 window의 event들 (resize, copy, offline,online)
