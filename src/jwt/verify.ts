import { generateSignature } from "./generateSignature";

export function verify(token: string, secret: string) {
  const [
    headerSent, payloadSent, signatureSent
  ] = token.split('.');

  const signature = generateSignature(headerSent, payloadSent, secret)

  if(signature !== signatureSent) {
    throw new Error('Invalid JWT token')
  }

  const decodedPayload = JSON.parse(
    Buffer
      .from(payloadSent, 'base64url')
      .toString('utf-8')
  )

  if(decodedPayload.exp < Date.now()) {
    throw new Error('Expired token')
  }

  return decodedPayload
}
