// study.js 디폴트 함수
export default function Study(props) {

  //Rest parameter 함수
  function squaredSum(...numbers){
      //제곱근 처리
      const squaredNumber = numbers.map(number => number * number);
      console.log(squaredNumber);

      //모두 덧셈
      const sum = squaredNumber.reduce((a, b)=> a+b, 0);
      console.log(sum);

      return sum;
  }

  const result = squaredSum(1,2,3,4,5);

  return (
      <>
          <div>제곱근의 총 합은 {result}</div>
      </>
  );
}
