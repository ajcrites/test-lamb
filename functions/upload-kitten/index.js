import λ from 'apex.js';
import { uploadKitten } from './src/kittens.es6';

// When the promise returned by `uploadKitten` resolves, complete the lambda
// function. This will upload a placekitten image to S3 with the dimensions
// specified by the request to lambda
export default λ(e => uploadKitten(e.w, e.h));
