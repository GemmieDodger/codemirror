import React, { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import firebase from '../Firebase';
import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { defaultKeymap, indentWithTab } from '@codemirror/commands';
import { javascript } from "@codemirror/lang-javascript";


const CodeBox = (props) => {
    const editor = useRef();
    const [code, setCode] = useState('')
    const [status, setStatus] = useState('unsubmitted')

    useEffect(() => {
        const { current } = editor;
        
        const onUpdate = EditorView.updateListener.of(src => {
            setCode(src.state.doc.toString());
          })
        
        const state = EditorState.create({
            doc: props.code,
            extensions: [
              basicSetup,
              keymap.of([defaultKeymap, indentWithTab]),
              javascript(),
              onUpdate
            ]
          })
        
        const view = new EditorView({state, parent: current});

        return () => {
            view.destroy();
          }
        }, [])
    
   

    return (
        <>
                    <div ref={editor}></div> 

           
        </>
    );
}

export default CodeBox;