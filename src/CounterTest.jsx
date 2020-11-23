import React, {useState, useEffect} from "react";

const CounterTest = () => {

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  useEffect(() =>{
      alert('I am clicked');


  },[count]);

    const handler = () => {
        setCount(count+1);
    }


    return(
        <div>
           
         <button onClick={() => {setCount(count+1)}}>Click{count} times</button>
         <button onClick={() => {setCount1(count1+1)}}>Click{count1} times</button>
        </div>
    );

}

export default CounterTest;