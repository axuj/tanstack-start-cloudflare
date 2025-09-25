import { createFileRoute } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'
import { useAgent } from 'agents/react'
import { useState } from 'react'
import { getBindings } from '@/utils/bindings'

interface MyState {
  counter: number
}

const getState = createServerFn().handler(async () => {
  const state: MyState = await getBindings()
    .MY_AGENT.getByName('counter')
    .getState()
  return {
    state,
  }
})
export const Route = createFileRoute('/demo/start/agent')({
  component: RouteComponent,
  loader: () => getState(),
})

function RouteComponent() {
  const loader = Route.useLoaderData()
  const [state, setState] = useState<MyState>(loader.state)
  const agent = useAgent({
    agent: 'MY_AGENT',
    name: 'counter',
    onStateUpdate: setState,
  })

  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-[#282c34] text-white'>
      <div className='text-center'>
        <h1 className='mb-8 text-[calc(10px+2vmin)]'>Agent Counter</h1>
        <div className='rounded-lg bg-gray-800 p-8 shadow-lg'>
          <p className='mb-6 font-bold text-6xl'>{state.counter}</p>
          <button
            type='button'
            className='rounded bg-[#61dafb] px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-[#4fa3d1]'
            onClick={() => {
              agent.setState({ counter: state.counter + 1 })
            }}
          >
            Increment Counter
          </button>
          <button
            type='button'
            className='ml-4 rounded bg-red-500 px-4 py-2 font-bold text-white transition-colors duration-200 hover:bg-red-700'
            onClick={() => {
              agent.setState({ counter: state.counter - 1 })
            }}
          >
            Decrement Counter
          </button>
        </div>
      </div>
    </div>
  )
}
