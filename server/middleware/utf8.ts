export default defineEventHandler((event) => {
  // Set UTF-8 charset for all responses
  const path = event.node.req.url || ''

  if (path.startsWith('/api/')) {
    event.node.res.setHeader('Content-Type', 'application/json; charset=utf-8')
  } else {
    event.node.res.setHeader('Content-Type', 'text/html; charset=utf-8')
  }

  event.node.res.setHeader('Accept-CH', 'Content-Type')
})
