import React, { useState, useEffect } from "react"

const Test = (number) => {

    const [a, b] = useState(number);

    useEffect(() => {
        b(number)
    })

    return a;
}

export default Test