import { createHmac, sign } from "node:crypto"

export function generateSignature(header: string, payload: string, secret: string) {
  const hmac = createHmac('sha256', secret)

  const signature = hmac.update(`${header}.${payload}`).digest('base64')

  return signature;
}
