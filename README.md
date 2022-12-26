# momentum

바닐라 js로 크롬 앱 만들기

##12/26

###Variables

- let , const, var

```
let vs const
- const : 상수, 이후에 바꿀 수 없다
- let : 변수를 바꾸고 싶을때, update할 때 사용
- var : 어떤 규칙도 갖고 있지 않는다.
```

### Booleans

- true, false

```js
* true 타입
* false 타입
* null 타입 (파이썬에서는 None)
* undefined 타입
```

###Arrays

- [ ]안에 어떤 타입이든 쓸 수 있다.

```js
const array = [1,2,"hello",false,null,undefined];
console.log(array[2]); // hello가 출력
array.push(4) - array에 4 추가하기
```

###Objects

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
