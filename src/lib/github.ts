import { Octokit } from "@octokit/rest";


const octokit = new Octokit({

  auth: import.meta.env.GITHUB_TOKEN

});


export async function createFile(
  path:string,
  content:string,
  message:string
){

const encoded =
Buffer
.from(content)
.toString("base64");


await octokit.repos.createOrUpdateFileContents({

owner:"Ncwy",

repo:"neo-blogger",

path,

message,

content:encoded,

branch:"main"

});


}