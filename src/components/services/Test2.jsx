import React, { useState } from "react"
import Test from "./Test"

const Test2 = (props) => {
    const a = Test(props.value);

    return <><p>{a}</p></>;
}

export default Test2;