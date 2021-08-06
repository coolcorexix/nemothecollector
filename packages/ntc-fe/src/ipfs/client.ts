import { Web3Storage } from 'web3.storage'

function getAccessToken() {
    console.log(process.env.DB_PASS)
    return process.env.WEB3STORAGE_TOKEN
}

export function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() })
}