# TanStack Start RC Cloudflare Demo

This is a Cloudflare demo project using TanStack Start, showcasing integration with Cloudflare KV and Durable Objects.

## Installation and Running

```bash
pnpm install
pnpm dev
```

## Devtools Notes

There is a compatibility issue when using TanStack Devtools with Cloudflare. This project restricts Devtools to client-side use only in development mode. Although errors may appear in dev mode, it functions normally. If you don't want to use Devtools, you can remove the related code.

## Deployment

```bash
pnpm run build
pnpm run deploy
```
