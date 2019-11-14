import React, { useState, useEffect } from 'react'
import { Progress, Button, Input, Textarea } from '@weekday/elements'
import moment from 'moment'
import { X } from 'react-feather'

export default function FormComponent(props) {
  const today = moment()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [day, setDay] = useState(today.format('DD'))
  const [month, setMonth] = useState(today.format('MM'))
  const [year, setYear] = useState(today.format('YYYY'))
  const [questions, setQuestions] = useState([])

  const addQuestion = () => setQuestions([...questions, ''])

  const removeQuestion = (index) => {
    let mutableQuestions = Object.assign([], questions)
    mutableQuestions.splice(index, 1)
    setQuestions(mutableQuestions)
  }

  const updateQuestion = (value, index) => {
    setQuestions(questions.map((question, i) => {
      if (index != i) return question

      return value
    }))
  }

  const save = () => {
  }

  useEffect(() => {
    if (!props.id) return

    const date = moment(props.expiry)

    setTitle(props.title)
    setDescription(props.description)
    setDay(date.format('DD'))
    setMonth(date.format('MM'))
    setYear(date.format('YYYY'))
    setQuestions(props.questions.map(question => question.question))
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
          <div className="h4 color-d3 text-left w-100 mb-20">Create a new poll</div>

          <Input
            value={title}
            inputSize="large"
            onChange={e => setTitle(e.target.value)}
          />

          <Textarea
            value={description}
            textareaSize="large"
            rows={3}
            onChange={e => setDescription(e.target.value)}
          />

          <div className="h5 color-d0 text-left w-100 mb-10">Questions</div>

          {questions.map((question, index) => {
            return (
              <div className="row w-100 mb-5" key={index}>
                <Input
                  value={question}
                  inputSize="large"
                  onChange={e => updateQuestion(e.target.value, index)}
                />
                <X
                  color="#524150"
                  size="30"
                  thickness="1.5"
                  className="ml-20 button"
                  onClick={e => removeQuestion(index)}
                />
              </div>
            )
          })}

          <div className="row w-100 mt-20">
            <Button
              size="small"
              theme="blue-border"
              text="Add a new question"
              onClick={addQuestion}
            />
            <div className="flexer" />
            <Button
              size="small"
              theme="blue"
              text="Create poll"
              onClick={save}
            />
          </div>

        </div>
      </div>
    </React.Fragment>
  )
}
