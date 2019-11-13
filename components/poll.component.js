import React, { useState, useEffect } from 'react'
import { Progress, Button } from '@weekday/elements'

export default function PollComponent(props) {
  const [complete, setComplete] = useState(false)
  const [options, setOptions] = useState([
    { percentage: 58, text: 'This is some text', color: '#e9edf2' },
    { percentage: 58, text: 'This is some more text', color: null },
  ])

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
          {!complete &&
            <React.Fragment>
              {options.map((option, index) => {
                return (
                  <div className="progress-container" key={index}>
                    <Button
                      text={option.text}
                      theme="blue-border"
                      size="full-width"
                      style={{ height: 35 }}
                    />
                  </div>
                )
              })}
            </React.Fragment>
          }

          {complete &&
            <React.Fragment>
              {options.map((option, index) => {
                return (
                  <div className="progress-container" key={index}>
                    <Progress
                      percentage={option.percentage}
                      text={option.text}
                      color={option.color}
                      labels={true}
                    />
                  </div>
                )
              })}
            </React.Fragment>
          }

          <div className="p color-blue text-left w-100 mt-20">This poll expires in <strong>5 days</strong></div>
        </div>
      </div>
    </React.Fragment>
  )
}
