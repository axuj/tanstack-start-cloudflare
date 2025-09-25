import { env } from 'cloudflare:workers'

/**
 * Will only work when being accessed on the server. Obviously, CF bindings are not available in the browser.
 * @returns
 */
export function getBindings(): Env {
  return env
}
