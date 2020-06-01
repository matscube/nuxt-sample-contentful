import { createClient, CreateClientParams, ContentfulClientApi } from 'contentful'

const config: CreateClientParams = {
  space: process.env.CTF_SPACE_ID as string,
  accessToken: process.env.CTF_CDA_ACCESS_TOKEN as string
}

export function createAppClient(): ContentfulClientApi {
  return createClient(config)
}