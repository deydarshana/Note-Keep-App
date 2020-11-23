import React, {useState, useEffect} from 'react';

const Conceptuseeffect = () => {
    const [num, setNum] = useState(0);
    const [nums, setNumS] = useState(0);


    useEffect(() => {
       alert("I am clicked");
       console.log("I am clicked");
    },[num]);

    return (
        <>

        <button onClick={() => {setNum(num+1)}}>Clicked {num}</button>
        <button onClick={() => {setNumS(nums+1)}}>Clicked {nums}</button>
        </>

    ); 
}

export default Conceptuseeffect;