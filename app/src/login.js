import {Auth} from 'aws-amplify'
import AWSAuthConfig from '../src/aws-exports.js'

Auth.configure(AWSAuthConfig)

const username = 'user+01@gmail.com';
const password = 'aws@1234567890';

await Auth.signIn(username, password);

const session = await Auth.currentSession();
console.log('session', session)

