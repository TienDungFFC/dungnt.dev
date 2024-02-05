/* global RequestInfo RequestInit */

export async function fetcher<T>(input: RequestInfo | URL, init?: RequestInit): Promise<T> {
  let host = process.env.NEXT_PUBLIC_HOST || 'http://localhost:8081/'

  return fetch(`${host}${input}`, init).then(async (res) => res.json())
}
