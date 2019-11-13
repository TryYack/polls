import React, { useState, useEffect } from 'react'
import { useRouter, withRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Button } from '@weekday/elements'
import PollComponent from '../components/poll.component'

function Message(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Message</title>
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
          margin: 0px;
          padding: 0px;
        }

        .container {
          width: 100%;
          height: 100%;
          top: 0px;
          left: 0px;
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          align-content: center;
          justify-content: center;
        }

        .inner {
          margin: 10px;
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: center;
        }
      `}</style>

      <div className="container">
        <div className="inner">
          <PollComponent />
        </div>
      </div>
    </React.Fragment>
  )
}

Message.getInitialProps = (context) => {
  const { query: { payload } } = context;

  return {
    cool: true
  }
}

export default withRouter(Message)
