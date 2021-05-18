#### 개념정리

**동기(Sync)**

태스크는 순차적으로 실행되며 어떤 작업이 수행 중이면 **다음 작업은 대기**하게 된다.

**비동기(Async)**

 태스크가 종료되지 않은 상태라 하더라도 **대기하지 않고** 다음 태스크를 실행



**콜백함수 Callback**

함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수

어떤 이벤트 발생/특정 시점 도달시 시스템에서 호출하는 함수

```javascript
const callBack = (callback) => {
    setTimeout(()=>{
        callback("err", undefined)
    }, 2000)
}

getDataCallback((err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
```



**Promise**

객체

비동기 상황을 [pending, resolved, failed]의 3가지 상태로 표현

콜백 패턴 보완

```javascript
Promise.then((data)=>{
    console.log(data)
}, (err)=>{
    console.log(err)
})
```



**Async/Await**

비동기 처리를 위해서 등장

`async` : function 앞에 위치

`await` : async 함수 안에서만 동작

```javascript
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function process() {
  console.log('안녕하세요!');
  await sleep(1000); // 1초쉬고
  console.log('반갑습니다!');
}

process();
```



참고

https://blog.naver.com/hty018/222349498713

https://victorydntmd.tistory.com/87