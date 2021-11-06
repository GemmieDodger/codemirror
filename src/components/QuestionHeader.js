import React, { useEffect, useState, useRef } from "react";


const QuestionHeader = (props) => {
    const [header, setHeader] = useState(props.question);
    return (
        <>
            <h2>{props.number}</h2>       
            <h3>{props.questionHeader}</h3>
        </>
    );
}

export default QuestionHeader;