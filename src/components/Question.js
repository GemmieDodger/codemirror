import React, {useState,useEffect} from 'react';
import CodeBox from './CodeBox';
import Options from './Options';
import QuestionHeader from './QuestionHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { cp } from 'fs';

function Question( props ) {
  const [question, setQuestion] = useState(props.question);
  const [number, setNumber] = useState(props.count);

  return (
    <div>
      <Container>
        <QuestionHeader questionHeader={question.questiontext} number={number}/>
        <Row>
          <Col>
            <CodeBox code={question.code}/>
          </Col>
          <Col>
            <Options options={question.options} answer={question.answer}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Question;