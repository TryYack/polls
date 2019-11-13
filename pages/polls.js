import React, { useState, useEffect } from 'react'
import { useRouter, withRouter } from 'next/router'
import Head from 'next/head'
import fetch from 'isomorphic-unfetch'
import { Button } from '@weekday/elements'

function Polls(props) {

  /*
  useEffect(() => {
    setLoading(true)
    setError(false)

    try {
      const { router: { query: { email, token } }} = props;

      if (!email || !token) return

      fetch('https://api.weekday.sh/api/v1/auth/confirm', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify({ email, token }),
      })
      .then(res => res.json())
      .then(data => {
        setLoading(false)

        if (!data.success) setError(true)
      })
      .catch(e => {
        setLoading(false)
        setError(true)
      })
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }, [props.router.query.email])
  */

  useEffect(() => {
    const { router: { query: { payload } }} = props;

    console.log(payload)
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
          align-items: center;
          align-content: center;
          justify-content: center;
        }
      `}</style>

      <div className="container column">
        <img src="../static/images/no-polls.png" width="60%" className="mb-30"/>

        <div className="h3 mb-20 pl-20 pr-20 color-d2 text-center">There are no polls</div>
        <div className="h5 mb-20 pl-20 pr-20 color-d0 text-center">You haven't created any polls. Click on the button below to create your first poll.</div>

        <Button
          size="small"
          theme="blue-border"
          text="Create a poll"
        />
      </div>
    </React.Fragment>
  )
}

Polls.getInitialProps = (context) => {
  const { query: { payload } } = context;
  
  return {
    cool: true
  }
}

export default withRouter(Polls)
