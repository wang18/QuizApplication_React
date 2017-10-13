import React, { Component } from 'react';
import './App.css';
import QuestionList from "./components/quiz/QuestionList";
import Scorebox from "./components/quiz/Scorebox";
import Results from "./components/quiz/Results";

class App extends Component {
  constructor(props){
      super(props);
      this.state={
          questions:[
              {
                  id: 1,
                  text: 'What is your name?',
                  choices: [
                      {
                          id: 'a',
                          text: 'Michael'
                      },
                      {
                          id: 'b',
                          text: 'Brad'
                      },
                      {
                          id: 'c',
                          text: 'Steven'
                      }
                  ],
                  correct: 'b'
              },
              {
                  id: 2,
                  text: 'What is your mothers name?',
                  choices: [
                      {
                          id: 'a',
                          text: 'Sara'
                      },
                      {
                          id: 'b',
                          text: 'Sue'
                      },
                      {
                          id: 'c',
                          text: 'Donna'
                      }
                  ],
                  correct: 'c'
              },
              {
                  id: 3,
                  text: 'What is your fathers name?',
                  choices: [
                      {
                          id: 'a',
                          text: 'Bobby'
                      },
                      {
                          id: 'b',
                          text: 'Harry'
                      },
                      {
                          id: 'c',
                          text: 'Wayne'
                      }
                  ],
                  correct: 'c'
              },
              {
                  id: 4,
                  text: 'What is your friends name?',
                  choices: [
                      {
                          id: 'a',
                          text: 'John'
                      },
                      {
                          id: 'b',
                          text: 'Paul'
                      },
                      {
                          id: 'c',
                          text: 'Jose'
                      }
                  ],
                  correct: 'a'
              }
          ],
          score:0,
          current:1
      }
      this.setCurrent=this.setCurrent.bind(this);
      this.setScore=this.setScore.bind(this);
  }
    setCurrent(current1){
        this.setState({current:current1});
    }
    setScore(score){
        this.setState({score});
    }

  render() {
    if( this.state.current > this.state.questions.length) {
        var scoreBox = '';
        var result =  <Results {...this.state}/>;
    } else{
        var scoreBox = <Scorebox {...this.state} />;
        var result = '';
      }
    return (
      <div className="">
          {scoreBox}
          <QuestionList {...this.state} setCurrent={this.setCurrent} setScore={this.setScore} />
          {result}
      </div>
    );
  }
}

export default App;
