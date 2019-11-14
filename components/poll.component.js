import React, { useState, useEffect } from 'react'
import { Progress, Button } from '@weekday/elements'

export default function PollComponent(props) {
  const [complete, setComplete] = useState(false)
  const [total, setTotal] = useState(0)
  const [highest, setHighest] = useState(0)

  const answerQuestion = async (questionId) => {
    console.log(questionId)
    setComplete(true)
  }

  useEffect(() => {
    let answerCount = 0
    let answerCountHighest = 0

    props.questions.map(question => {
      // See if this user has completed the poll
      question.answers.map(answer => {
        if (answer.user_id == props.currentUserId) setComplete(true)
      })

      // Set the score for the highest amount of votes
      if (question.answers.length > answerCountHighest) answerCountHighest = question.answers.length

      // Incremenet the total amount of answers/voted
      answerCount += question.answers.length
    })

    setTotal(answerCount)
    setHighest(answerCountHighest)
  }, [])

  return (
    <React.Fragment>
      <style jsx>{`
        .poll-container {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          align-content: center;
          justify-content: center;
        }

        .poll-inner {
          flex: 1;
          flex-direction: column;
          display: flex;
          align-items: center;
          align-content: center;
          justify-content: center;
        }

        .progress-container {
          margin-bottom: 5px;
          width: 100%;
        }
      `}</style>

      <div className="poll-container">
        <div className="poll-inner">
          <div className="h4 color-d3 text-left w-100 mb-0">{props.title}</div>
          <div className="h5 color-d0 text-left w-100 mb-10">{props.description}</div>

          {!complete &&
            <React.Fragment>
              {props.questions.map((question, index) => {
                return (
                  <div className="progress-container" key={index}>
                    <Button
                      text={question.question}
                      theme="blue-border"
                      size="full-width"
                      style={{ height: 35 }}
                      onClick={() => answerQuestion(question.id)}
                    />
                  </div>
                )
              })}
            </React.Fragment>
          }

          {complete &&
            <React.Fragment>
              {props.questions.map((question, index) => {
                const percentage = Math.floor((question.answers.length / total) * 100)
                const color = question.answers.length >= highest ? '#e9edf2' : '#f0f2f5'

                return (
                  <div className="progress-container" key={index}>
                    <Progress
                      percentage={percentage}
                      color={color}
                      text={question.question}
                      labels={true}
                    />
                  </div>
                )
              })}
            </React.Fragment>
          }

          <div className="p color-d1 text-left w-100 mt-5">
            <span>This poll expires in 5 days</span>
            {props.currentUserId == props.userId &&
              <strong className="button ml-10 color-blue">Edit poll</strong>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
