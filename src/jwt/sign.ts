import { generateSignature } from './generateSignature';

export function sign(exp: number, data: Record<string, any>, secret: string) {
  const header = { alg: 'HS256', typ: 'JWT' }

  const payload = { ...data, exp, iat: Date.now() }

  const base64EncondedHeader = Buffer
  .from(JSON.stringify(header))
  .toString('base64url')

  const base64EncondedPayload = Buffer
  .from(JSON.stringify(payload))
  .toString('base64url')

  const signature = generateSignature(base64EncondedHeader, base64EncondedPayload, secret);

  return `${base64EncondedHeader}.${base64EncondedPayload}.${signature}`
}
