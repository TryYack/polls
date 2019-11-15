import React, { useState, useEffect } from 'react'
import { useRouter, withRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Button, Error, Loading, Notification, Spinner } from '@weekday/elements'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config'
import PollComponent from '../components/poll.component'
import FormComponent from '../components/form.component'
import { useMutation, useSubscription } from '@apollo/react-hooks'

const ADD_POLL = gql`
  mutation add_poll($objects: [polls_insert_input!]!) {
    insert_polls(objects: $objects) {
      returning {
        id
        title
      }
    }
  }
`;

function Create(props) {
  const { router: { query: { payload } }} = props
  const decodedPayload = decodeURI(payload)
  const jsonPayload = JSON.parse(decodedPayload)
  const [userId, setUserId] = useState(jsonPayload.userId)
  const [channelId, setChannelId] = useState(jsonPayload.channelId)
  const [addPoll, { data }] = useMutation(ADD_POLL)

  return (
    <React.Fragment>
      <Head>
        <title>Polls</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="/static/css/styles.css" rel="stylesheet" />
        <link href="/static/images/favicon.png" rel="shortcut icon" />
      </Head>

      <style global jsx>{`
        * {
          margin: 0px;
          padding: 0px;
        }

        html, body {
          background: white;
          height: 100%;
        }

        .complete-container {
          background: white;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          display: flex;
          align-items: center;
          flex-direction: column;
          align-content: center;
          justify-content: center;
        }

        .container {
          background: white;
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0px;
          top: 0px;
          display: flex;
          align-items: stretch;
          align-content: center;
          justify-content: center;
        }

        .error {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
        }

        .polls-listing-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: flex-start;
          padding: 20px;
        }
      `}</style>

      {data &&
        <div className="complete-container">
          <img src="../static/images/no-polls.png" width="60%" className="mb-0"/>
          <div className="h3 mb-20 color-d2 text-center">Success</div>
          <div className="h5 color-d0 text-center">You have created a new poll!</div>
        </div>
      }

      {!data &&
        <div className="polls-listing-container">
          <FormComponent
            id={null}
            userId={null}
            expiry={null}
            title={null}
            currentUserId={userId}
            description={null}
            questions={null}
            onSubmit={(title, description, questions, expiry) => {
              addPoll({
                variables: {
                  objects: [
                    {
                      title,
                      description,
                      questions,
                      expiry,
                      channel_id: channelId,
                      user_id: userId
                    }
                  ]
                }
              })
            }}
          />
        </div>
      }
    </React.Fragment>
  )
}

Create.getInitialProps = (context) => {
  const { query: { payload } } = context;

  return {
    cool: true
  }
}

export default withData(withRouter(Create))
