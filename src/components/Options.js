import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import firebase from '../Firebase';
import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from "@codemirror/lang-javascript";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const actualGuess = '';

const Options = (props) => {
    const [options, setOptions] = useState(props.options);
    const [answer, setAnswer] = useState(props.answer);
    const [guess, setGuess] = useState('');

    const handleChange = (e) => {
        setGuess(e.target.value);
        console.log(guess);
      }

    return (
        <>
                    <div className='answer-section'>
                {options.map((option, index) => (
   
                    <Button onclick={handleChange} value={option} data-label="option" key={option.key}>
                    {option}
                    </Button>
                    
                ))}
                </div>

        </>
    );
}

export default Options;