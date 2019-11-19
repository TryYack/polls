export const autoAdjustMessageHeight = () => {
  let currentHeight = 0

  setInterval(() => {
    const { scrollHeight } = document.documentElement

    if (scrollHeight != currentHeight) {
      currentHeight = scrollHeight

      window.location.search.split('&').map(query => {
        const parts = query.split('=')

        if (parts[0] == 'weekdayId' && parts.length == 2) {
          const weekdayId = parts[1]

          postAppMessage({
            type: 'AUTO_ADJUST_MESSAGE_HEIGHT',
            weekdayId,
            scrollHeight,
          })
        }
      })
    }
  }, 1000)
}

export const closeAppModal = () => {
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: { type: 'modal-close' }
  })
}

export const closeAppPanel = () => {
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: { type: 'panel-close' }
  })
}

export const openAppPanel = ({ name, url }) => {
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: {
      type: 'panel',
      name,
      url,
    }
  })
}

export const openAppModal = ({ name, url }) => {
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: {
      type: 'modal',
      name,
      url,
    }
  })
}

export const postAppMessage = (payload) => {
  window.top.postMessage({ type: 'weekday', payload }, '*')
}
