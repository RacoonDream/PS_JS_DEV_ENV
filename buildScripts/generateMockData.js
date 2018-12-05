/* this script generates mock api data using
json-schema-faker, for schema of json refer mockDataSchema.js */

/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const jsonData= JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json",jsonData,function(err){
  if(err){
    return console.log(chalk.red(err));
  }
  else {
    console.log(chalk.green("Mock data generated"));
  }
});
