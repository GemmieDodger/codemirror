import React, { useEffect, useState } from "react";
import firebase from "../Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link } from 'react-router-dom';

const HomeContent = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [key, setKey] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [state, setState] = useState({
    quizzes: [],
  });

  const onCollectionUpdate = (querySnapshot) => {
    const quizzes = [];
    querySnapshot.forEach((doc) => {
      const { quizname } = doc.data();
      quizzes.push({
        key: doc.id,
        doc, // DocumentSnapshot
        quizname,
      });
    });
    setState({ quizzes });
    console.log(quizzes);
  };

  //check tracker exists + set state
  useEffect(() => {
    const ref = firebase.firestore().collection("quizzes");
    console.log(ref.doc());
    // ref.get().then((doc) => {
    //   if (doc.exists) {
    //     setQuizzes(doc.data());
    //     setKey(doc.id);
    //     setIsLoading(false);
    //   } else {
    //     console.log("No such document!");
    //   }
    // });
    const unsubscribe = ref.onSnapshot(onCollectionUpdate);
    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <h1>{quizzes.quizzes}</h1>
      {state.quizzes.map((quiz) => (
        <div class="col-1" data-label="quiz" key={quiz.key}>
          <Link to={`/quiz/${quiz.key}/${quiz.quizname}`}><Button>{quiz.quizname}</Button></Link>
        </div>
      ))}
    </Container>
  );
};

export default HomeContent;
