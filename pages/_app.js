import React, { useState, useEffect } from 'react'
import { initDevKit, openAppModal } from '@tryyack/dev-kit'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    initDevKit('d91c6fcd-2c59-4200-9919-c1a52ed1ee3d', true)
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
