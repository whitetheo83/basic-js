import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
 
  let newArr = [];
  if (members != null) {
      for (let i = 0; i < members.length; i++) {
          if (typeof(members[i]) == 'string') {
              let x = members[i].replace(/(^\s*)|(\s*)$/g, '');
              newArr.push(x[0].toUpperCase());
          }
      }
      return (newArr.sort().join(''));
  }   
  return false;
  

}
