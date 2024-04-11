import { sign } from './jwt/sign';
import { verify } from './jwt/verify';

const secret = '38f632c54a3cefc6b90aae436d3dc51d19f2c8fb5722179a939a265d4303f30f'

const token = sign(Date.now() + (24 * 60 * 60 * 60), { sub: 'marcos@gmail.com' }, secret)

const decoded = verify(token, secret)

console.log({ token })
console.log({ decoded })
