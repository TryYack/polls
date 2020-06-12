import React, { useState, useEffect } from 'react'
import { initDevKit, openAppModal } from '@tryyack/dev-kit'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initDevKit(process.env.APP_TOKEN, process.env.NODE_ENV == 'development')
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
