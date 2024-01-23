// // const moreNumbers = new Array(); // []
// // const moreNumbers2 = new Array(1,2); // [1,2]

// // const moreNumber3 = Array();

// // Array.form() 은 이터러블 객체나 유사 배열 객체를 진짜 배열로 변환하기 좋다.
// // 알파벳으로 분리하고 싶은 문자열이 있다면 유용하다.

// const sttings = Array.from('hi!'); // ['h','i','!']

// // 예시

// const itemsList = document.querySelectorAll('li');

// const arrayList = Array.from(itemsList);
// console.log(arrayList); // ['li','li','li']

// // unshift() 배열의 첫 번째로 추가하고 싶은 경우

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');

// hobbies.unshift('Codding');
// // pop() 배열의 마지막에 있는 모든 항목 삭제,
// hobbies.pop();
// console.log(hobbies); // ['Codding','Sports', 'Cooking']

// // shift() 배열의 마지막에 있는 항목 삭제

// hobbies.shift();

// /**  unshift() - 배열 항목 추가 , shift() - 배열 마지막 항목 삭제
//  *  unshift()와 shift()는 push()와 pop()과 동일한 기능을 해주지만
//  */

// // splice() 배열 사아에 요소 추가.

// hobbies.splice(1, 0, 'Splice');
// // 1 : 해당 인덱스틑 포함해 확인해야하는 인덱스가 1
// // 0 : 0 위치에 지정한 만큼의 요소를 삭제한 뒤 확안히는 요소 위치에 추가 - 0이라서 아무것도 삭제하지 않음.
// //'Splice' : 배열에 추가하는 내용
// console.log(hobbies); // ['Sports','Splice', 'Cooking']

// // splice() 배열 요소 삭제
// hobbies.splice(0, 1);
// // 0 : 해당 인덱스를 포함해 확인해야 하는 인덱스가 0
// // 1 : 해당 인덱스 삭제
// // 첫번째 요소를 포함해 1개의 요소를 삭제한다.
// console.log(hobbies); // ['Splice', 'Cooking']

// hobbies.splice(0); // 배열의 모든 요소 삭제
// hobbies.splice(1); // 첫번째 배열을 제외한 모든 요소 삭제
// hobbies.splice(-1, 1); // 배열의 마지막 요소에서 시작해 1개의 요소를 삭제

//slice() - 새로운 배열을 반환하는 것으로 배열을 복사하는 가장 좋은 방법이다.

const testResults = [1, 1.5, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.slice();

testResults.push(100);

console.log(testResults, storedResults);

testResults.splice(0, 2);
// 0 : 0번 인덱스 요소 부터 ( 0번 요소 포함 )
// 2 : 2번 인덱스 전까지 요소 ( 2번 요소 미포함 )

testResults.splice(-3, -2);

// 음수 인덱스를 사용할 수 있지만, 그러면 모두 음수 인덱스 여야 한다.