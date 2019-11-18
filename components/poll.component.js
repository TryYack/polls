import React, { useState, useEffect } from 'react'
import { Progress, Button } from '@weekday/elements'
import moment from 'moment'
import { useMutation, useSubscription } from '@apollo/react-hooks'
import gql from 'graphql-tag'

const DELETE_POLL = gql`
  mutation delete_polls($id: Int) {
    delete_polls(
      where: {id: {_eq: $id}}
    ) {
      affected_rows
    }
  }
`;

export default function PollComponent(props) {
  const [complete, setComplete] = useState(false)
  const [total, setTotal] = useState(0)
  const [highest, setHighest] = useState(0)
  const [expired, setExpired] = useState(0)
  const [deletePoll, deleteData] = useMutation(DELETE_POLL)

  const updatePoll = async () => {
    console.log('Open action window')
  }

  const confirmDeletePoll = async () => {
    if (confirm("Are you sure?")) {
      deletePoll({ variables: { id: props.id } })
    }
  }

  const voteOption = async (optionId) => {
    props.onSubmit(optionId)
    setComplete(true)
  }

  useEffect(() => {
    let voteCountHighest = 0

    props.options.map(option => {
      // See if this user has completed the poll
      props.pollVotes.map(vote => {
        if (vote.user_id == props.currentUserId) setComplete(true)
      })

      // Set the score for the highest amount of votes
      voteCountHighest = props.pollVotes.filter(vote => vote.option_id == option.id).length
    })

    setTotal(props.pollVotes.length)
    setHighest(voteCountHighest)
    setExpired(moment(props.expiry).isBefore(moment()))
  }, [props])

  return (
    <React.Fragment>
      <style jsx>{`
        .poll-container {
          width: 100%;
          height: fit-content;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          align-content: center;
          justify-content: center;
          margin-bottom: 20px;
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

          {(!complete && !expired) &&
            <React.Fragment>
              {props.options.map((option, index) => {
                return (
                  <div className="progress-container" key={index}>
                    <Button
                      text={option.text}
                      theme="blue-border"
                      size="full-width"
                      style={{ height: 35 }}
                      onClick={() => voteOption(option.id)}
                    />
                  </div>
                )
              })}
            </React.Fragment>
          }

          {(complete || expired) &&
            <React.Fragment>
              {props.options.map((option, index) => {
                const poll_votes = props.pollVotes.filter(vote => vote.option_id == option.id)
                const percentage = poll_votes.length == 0 ? 0 : Math.floor((poll_votes.length / total) * 100)
                const color = poll_votes
                                ? '#f0f2f5'
                                : poll_votes.length >= highest
                                  ? '#e9edf2'
                                  : '#f0f2f5'

                return (
                  <div className="progress-container" key={index}>
                    <Progress
                      percentage={percentage}
                      color={color}
                      text={option.text}
                      labels={true}
                    />
                  </div>
                )
              })}
            </React.Fragment>
          }

          <div className="p color-d1 text-left w-100 mt-5">
            {(expired && props.expiry) &&
              <span className="mr-10">This poll expired {moment(props.expiry).fromNow()}</span>
            }
            {(!expired && props.expiry) &&
              <span className="mr-10">This poll expires on {moment(props.expiry).format('LL')}</span>
            }
            {(!expired && !props.expiry) &&
              <span className="mr-10">This poll does not expire</span>
            }
            {(props.currentUserId == props.userId && props.tools) &&
              <strong className="button mr-10 color-blue" onClick={updatePoll}>Update</strong>
            }
            {(props.currentUserId == props.userId && props.tools) &&
              <strong className="button color-red" onClick={confirmDeletePoll}>Delete</strong>
            }
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
