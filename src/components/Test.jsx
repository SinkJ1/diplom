import React, { useState, useEffect } from "react"


const Test = () => {

    let numbers = [];
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(7)


    const clck = (i) => {
        let center = (left + right) / 2
        if (center < i) {
            setLeft(left + 2)
            setRight(right + 2)
        } else {
            if (i > 1 && left > 1) {
                setLeft(left - 2)
                setRight(right - 2)
            }
        }
    }
    for (let i = 0; i < 100; i++) {
        numbers[i] = <button onClick={() => { clck(i) }}>{i}</button>;
    }

    const func = () => {
        setRight(right + 2)
        setLeft(left + 2);
    }

    return <><div>{numbers.slice(left, right)}</div><button onClick={func}>btn</button></>;
}

export default Test