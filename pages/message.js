import React, { useState, useEffect } from 'react'
import { useRouter, withRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Button, Error, Loading, Notification, Spinner } from '@weekday/elements'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config'
import PollComponent from '../components/poll.component'

function Message(props) {
  const [query, setQuery] = useState(null)
  const [userId, setUserId] = useState('')
  const [channelId, setChannelId] = useState('')
  const [pollId, setPollId] = useState(null)

  useEffect(() => {
    // const { router: { query: { payload } }} = props;
    const payload = btoa(JSON.stringify({ pollId: 1, userId: '5db7e3c98476242154d43181', channelId: '5db87f04db059a6d8dc8d068' }))
    const parsedPayload = JSON.parse(atob(payload))

    setUserId(parsedPayload.userId)
    setPollId(parsedPayload.pollId)
    setChannelId(parsedPayload.channelId)
    setQuery(gql`
    	query {
    	  polls(where: { id: { _eq: ${pollId} } }) {
    	    id
    	    title
          description
          user_id
          channel_id
          expiry
          questions
          answers {
            user_id
            question_id
          }
    	  }
    	}
    `)
  }, [])

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

        body {
          background: white;
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

      {query &&
        <div className="container column">
          <Query
            query={query}
            fetchPolicy={'cache-and-network'}>
            {({ loading, data, error }) => {
              if (loading) return <Spinner />
              if (error) return <div className="error"><Error message="Error loading polls" /></div>


              // If no polls exist
              if (data.polls.length == 0) {
                return (
                  <React.Fragment>
                    <img src="../static/images/no-polls.png" width="60%" className="mb-30"/>
                    <div className="h3 mb-20 pl-20 pr-20 color-d2 text-center">There are no polls</div>
                    <div className="h5 mb-20 pl-20 pr-20 color-d0 text-center">There are no polls for this channel. Click on the button below to create your first poll.</div>
                  </React.Fragment>
                )
              }

              // If there are
              return data.polls.map((poll, index) => {
                return (
                  <div className="polls-listing-container" key={index}>
                    <PollComponent
                      expiry={poll.expiry}
                      title={poll.title}
                      userId={poll.user_id}
                      currentUserId={userId}
                      description={poll.description}
                      questions={poll.questions}
                      answers={poll.answers}
                    />
                  </div>
                )
              })
            }}
          </Query>
          <div className="row">
            <Button
              size="small"
              theme="blue-border"
              text="Create a poll"
            />
          </div>
        </div>
      }
    </React.Fragment>
  )
}

Message.getInitialProps = (context) => {
  const { query: { payload } } = context;

  return {
    cool: true
  }
}

export default withData(withRouter(Message))
