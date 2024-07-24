import { env } from '@/env'

export async function api(path: string, init?: RequestInit) {
  const baseUrl = env.NEXT_PUBLIC_API_BASE_URL
  const apiPrefix = '/data/api'
  const url = new URL(apiPrefix.concat(path), baseUrl)
  console.log(url)
  return fetch(url, init)
}
