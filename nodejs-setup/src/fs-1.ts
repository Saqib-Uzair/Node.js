import fs from "fs";
import * as readline from "readline";


const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question('Please enter some text: ', (input: string) => {
    // Write the user input to a file
    fs.writeFile('output.txt', input, (err) => {
      if (err) {
        console.error('Error writing to file:', err);
      } else {
        console.log('Input has been written to output.txt');
      }
  
      // Close the readline interface
      rl.close();
    });
  });


