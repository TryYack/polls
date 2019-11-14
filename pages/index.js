import React, { useState, useEffect } from 'react'
import { useRouter, withRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Button, Error, Loading, Notification, Spinner } from '@weekday/elements'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import withData from '../config'
import PollComponent from '../components/poll.component'
import { useMutation, useSubscription } from '@apollo/react-hooks'

const DELETE_POLL = gql`
  mutation delete_polls($id: Int) {
    delete_polls(
      where: {id: {_eq: $id}}
    ) {
      affected_rows
    }
  }
`;

const UPDATE_POLL = gql`
  mutation update_polls($id: Int, $changes: polls_set_input) {
    update_polls(
      where: {id: {_eq: $id}},
      _set: $changes
    ) {
      affected_rows
      returning {
        id
        title
        description
      }
    }
  }
`;

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

function Index(props) {
  const [query, setQuery] = useState(null)
  const [userId, setUserId] = useState('')
  const [channelId, setChannelId] = useState('')
  const [addPoll, addData] = useMutation(ADD_POLL)
  const [updatePoll, updateData] = useMutation(UPDATE_POLL)
  const [deletePoll, deleteData] = useMutation(DELETE_POLL)
  const { loading, error, data } = useSubscription(
    gql`
      subscription getPolls {
        polls {
    	    id
    	    title
          description
          user_id
          channel_id
          expiry
          questions
          answers {
            question_id
            user_id
          }
    	  }
      }
    `
  );

  if (data) {
    console.log(data.polls[0])
  }

  useEffect(() => {
    // const { router: { query: { payload } }} = props;
    const payload = btoa(JSON.stringify({ userId: '5db7e3c98476242154d43181', channelId: '5db87f04db059a6d8dc8d068' }))
    const parsedPayload = JSON.parse(atob(payload))

    setUserId(parsedPayload.userId)
    setChannelId(parsedPayload.channelId)
    setQuery(gql`
    	query {
    	  polls {
    	    id
    	    title
          description
          user_id
          channel_id
          expiry
          questions
          answers {
            question_id
            user_id
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
          <div className="polls-listing-container">

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
                    <PollComponent
                      key={index}
                      expiry={poll.expiry}
                      title={poll.title}
                      userId={poll.user_id}
                      currentUserId={userId}
                      description={poll.description}
                      questions={poll.questions}
                      answers={poll.answers}
                    />
                  )
                })
              }}
            </Query>

            <div className="row justify-content-center mt-30 w-100">
              <Button
                size="small"
                theme="blue-border"
                text="Create a poll"
                onClick={() => addPoll({ variables: { objects: [{ title: 'cool', description: 'Nice', channel_id: '007' }] } })}
                className="mr-10"
              />
              <Button
                size="small"
                theme="blue-border"
                text="Delete a poll"
                onClick={() => deletePoll({ variables: { id: 3 } })}
                className="mr-10"
              />
              <Button
                size="small"
                theme="blue-border"
                text="Update a poll"
                onClick={() => updatePoll({ variables: { id: 1, changes: { title: 'Updated....' } } })}
              />
            </div>
          </div>
        </div>
      }
    </React.Fragment>
  )
}

Index.getInitialProps = (context) => {
  const { query: { payload } } = context;

  return {
    cool: true
  }
}

export default withData(withRouter(Index))
