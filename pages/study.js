export default function Study() {

    const name = "Amy";
    const age = 30;
    const person = {
        name, // name: name
        age,  // age: age
        address: {
            city: '서울시',
            gu: '영등포구'
        }
    };

    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];
    const arr3 = [...arr1, ...arr2];

    console.log(arr3);   // [1,2,3,4,5,6]

    const amy = {...person, nickname: '여우', complete : arr3}

    return (
        <>
            <div>{amy?.address?.city}</div>
            <div>{amy?.nickname}</div>
            <div>{amy?.complete}</div>
        </>
    )
}
