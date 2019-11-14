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

function Create(props) {
  const [userId, setUserId] = useState('')
  const [channelId, setChannelId] = useState('')

  useEffect(() => {
    // const { router: { query: { payload } }} = props;
    const payload = btoa(JSON.stringify({ userId: '5db7e3c98476242154d43181', channelId: '5db87f04db059a6d8dc8d068' }))
    const parsedPayload = JSON.parse(atob(payload))

    setUserId(parsedPayload.userId)
    setChannelId(parsedPayload.channelId)
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


      <div className="polls-listing-container">
        <FormComponent
          id={null}
          userId={null}
          expiry={null}
          title={null}
          currentUserId={userId}
          description={null}
          questions={null}
        />
      </div>
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
