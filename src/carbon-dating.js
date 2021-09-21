import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
/* export default function dateSample(data) {
  data = Number(data);
  if (data.toFixed){
    if (data > 0) {
      let x = Math.ceil(Math.log(15/data)/(0.693/5730));
      if ( x > 0) {
        return x;
      }
    }
  } */
  export default function dateSample(data) {
    if (!data) {
      return false;
    } else if (data[0] == undefined) {
      return false;
    }
    else if (typeof(data) == 'string') {
    if (String(parseFloat(data)).length == data.length) {
      if (parseFloat(data) > 0 && (parseFloat(data) < 15)) {
        let x = Math.ceil(Math.log(15/data)/(0.693/5730));
        if ( x > 0) {
          return x;
        }
      }
    } else {
      return false;
    }
  }
  return false;
  }
