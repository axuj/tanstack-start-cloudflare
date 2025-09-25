import { ClientOnly } from '@tanstack/react-router'
import { lazy } from 'react'

const TanStackDevtools = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/react-devtools').then((module) => ({
        default: module.TanStackDevtools,
      })),
    )
  : null

const TanStackRouterDevtoolsPanel = import.meta.env.DEV
  ? lazy(() =>
      import('@tanstack/react-router-devtools').then((module) => ({
        default: module.TanStackRouterDevtoolsPanel,
      })),
    )
  : null

export function Devtools() {
  if (TanStackDevtools === null || TanStackRouterDevtoolsPanel === null)
    return null

  return (
    <ClientOnly>
      <TanStackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
    </ClientOnly>
  )
}
