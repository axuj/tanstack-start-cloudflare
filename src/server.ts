import handler from '@tanstack/react-start/server-entry'

export { MyAgent } from './my-agent'
export default {
  fetch(request: Request) {
    return handler.fetch(request)
  },
}
