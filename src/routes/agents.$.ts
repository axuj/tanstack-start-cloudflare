import { createFileRoute } from '@tanstack/react-router'
import { routeAgentRequest } from 'agents'
import { getBindings } from '@/utils/bindings'

export const Route = createFileRoute('/agents/$')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        return (
          (await routeAgentRequest(request, getBindings())) ||
          Response.json({ msg: 'no agent here' }, { status: 404 })
        )
      },
    },
  },
})
