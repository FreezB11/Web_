import * as yaml from 'yaml'
import * as fs from 'fs'
import {readFileSync, promises as fsPromises} from 'fs';
// let yamlString = `
// name: Janet 
// age: 24
// city: Manhattan
// `;

// async function checkIfContainsAsync(filename:string, str:string) {
//     try {
//       const contents = await fsPromises.readFile(filename, 'utf-8');
  
//       const result = contents.includes(str);
//       console.log(result);
  
//       return result;
//     } catch (err) {
//       console.log(err);
//     }
//   }
  
// checkIfContainsAsync('test/test.yaml', 'Jnet');

// function check(str:string){
//   const contents = fs.readFileSync('src/db/usr_data.yaml','utf8')

//   const result = contents.includes(str)
//   console.log(result)

// }

// check('yah')


const file = fs.readFileSync('test/test.yaml', 'utf8')

let yamlString = 'test.yaml'

let obj = yaml.parse(file);
let nm = obj.user.name

// let name = obj.user.name;

// console.log(name);