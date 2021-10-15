const user = require('./question');
const chalk = require('chalk');
const readline=require('readline');
var point=0;
const rl=readline.createInterface({
  input:process.stdin,
  output:process.stdout
})
var instration=()=>{
  console.log(chalk.green("\nThis is a CLI App which checks your general knowledge about the computer."));
  console.log("\nThere will be 10 mcq question.");
  console.log(chalk.yellow("\n+5 for right answer, -2 for wrong answer"));
  console.log(chalk.blue("\nLet's Play the game"));
  show_que();
}
var input_username=()=>{
  rl.question("What is Your Name?",(name)=>{
    console.log(chalk.yellow("Hello",name,"!"));
    instration();
  });
}

var welcome_message=()=>{
  console.log(chalk.red("Welcome to Quiz Game"));
  input_username();
}
var i=0;
function check_answer(answer)
{
  if(answer.toUpperCase()===user[i].ans)
  {
    console.log(chalk.yellow("\nYour Answer is Right."));
    point=point+5; 
  }
  else
  {
    console.log(chalk.red("\nYour Answer is Wrong."));
    console.log(chalk.yellow("\nCorrect Answer : ",user[i].ans));
    point=point-2;
  }
  console.log(chalk.blue("\nCurrent Point is ",point));
  i++;
  if(i<user.length){
  show_que();
  }
  else
  {
    result();
  }
}

var show_que=()=>{
  console.log("\n"+chalk.red(user[i].que));
  console.log(chalk.green("Option [A]:",user[i].A));
  console.log(chalk.green("Option [B]:",user[i].B));
  console.log(chalk.green("Option [C]:",user[i].C));
  console.log(chalk.green("Option [D]:",user[i].D));
  rl.question(chalk.red("Answer [A/B/C/D] : "),(answer)=>{
    check_answer(answer)
  });
}
var result=()=>{
  console.log((chalk.green("\nYour Result is "))+chalk.red(chalk.bold(point))+chalk.green(" out of 50."));
  console.log(chalk.yellow("\nThank you for playing game..."));
  point=0;
  rl.close();
};
var start=()=>{
  welcome_message();
}
welcome_message();
