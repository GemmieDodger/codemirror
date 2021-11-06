import React, { useEffect, useState } from "react";
import firebase from "../Firebase";
import UpdateQuestion from "../components/UpdateQuestion";
import Header from "../components/Header";
import { StateEffect } from "@codemirror/state";

function Update(props) {
  const [quizId, setQuizId] = useState("");
  const [key, setKey] = useState("");
  const [quizname, setQuizname] = useState("");
  const [inprogress, setInProgress] = useState('');

  const [state, setState] = useState({
    questions: [],
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const updateRef = firebase.firestore().collection('quizzes').doc(props.match.params.id);
    updateRef.set({
      todo,
      inprogress,
    }).then((docRef) => {
      setKey('');
      setTodo('');
      setInProgress('');   
      props.history.push(`/`)
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
  }

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  }

  const onCollectionUpdate = (querySnapshot) => {
    const questions = [];
    querySnapshot.forEach((doc) => {
      const { answer, code, options, questiontext } = doc.data();
      questions.push({
        key: doc.id,
        doc, // DocumentSnapshot
        answer,
        code,
        options,
        questiontext,
      });
    });
    setState({ questions });
  };

  useEffect(() => {
    const ref = firebase
      .firestore()
      .collection("quizzes")
      .doc(props.match.params.id)
      .collection("questions");
    ref.get().then((doc) => {
      if (doc.exists) {
        setKey(doc.id);
        setIsLoading(false);
        setQuizId(props.match.params.id);
        setQuizname(props.match.params.quizname);
      } else {
        console.log("No such document!");
      }
    });
    const unsubscribe = ref.onSnapshot(onCollectionUpdate);
    return () => unsubscribe();
  }, []);

  var count = 0;
  return (
    <div>
      <Header />
      <h1>{quizname}</h1>

      {state.questions.map((question) => {
        count = count + 1;
        return(
        <div  data-label="question" key={question.key}>
        <UpdateQuestion question={question} count={count} key={question.key}/>
        </div>
        );
      })}
    </div>
  );
}

export default Update;
