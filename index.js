const express = require("express");
const app = express()
  
app.listen(3000, () => {
  console.log("Project is running");
})

app.get("/", (req, res) => {
  res.send("Hello World!");
})

const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]}); 

//messages
//bump
client.on("messageCreate", message => {
  if(message.content === "!bump") {
  
    //check if the right channel
    if(message.channel.id === '1063292068761440286') {
    
      //check for roles
      if(message.member.roles.cache.has("914061442053988353")) {
        console.log(message.member + " Used !bump.");
        //send message
        message.delete()
        message.channel.send("**If Techsta Online, Please use @Techsta. He Should Be Able To Help Soon. Otherwise Still use @Techsta, But he wont be able to help till he is online**")
      }
      else{ // you have no roles
        message.channel.send("You dont have the Roles to use this command.")
        console.log(message.member + " Used !bump, and does not have the roles required to use it");
      }
    }
    else { //wrong channel
      message.channel.send("You are in the wrong channel.")
      console.log(message.member + " Used !bump in the wrong channel");
    }
  }
});

//language
client.on("messageCreate", message =>{
  if(message.content === "!language") {
    if(message.channel.id === '1061842243478106162') {
      console.log(message.member + "Used !language.");
      message.delete()
      message.channel.send("This channel is **English**");
    }
    else if(message.channel.id === '1063655534173110292') {
      console.log(message.member + "Used !language.");
      message.delete()
      message.channel.send("This channel is in **Japanese**");
    }
    else if(message.channel.id === "1063657436227063900") {
      console.log(message.member + "Used !language.");
      message.delete()
      message.channel.send("This channel is in **Korean**");
    }
    else if(message.channel.id === "1063658987851108463") {
      console.log(message.member + "Used !language.");
      message.delete()
      message.channel.send("This channel is in **Hindi**");
    }
    else if(message.channel.id === "1063730892293554176") {
      console.log(message.member + "Used !language.");
      message.delete()
      message.channel.send("this channel is in **Chinese**")
    }
    else{
      message.delete()
      message.channel.send("Your not in a **Whos That Pokemon** channel.")
      console.log(message.member + " Used !language in the wrong channel.");
    }
  }
})

//suggest/spam
client.on("messageCreate", message => {
  if(message.content === "!spam") {
// const suggestion = client.channels.cache.get('1064640481620922378');
  }
})

//help
client.on("messageCreate", message => {
  if(message.content === "!help") {
    message.delete()
    message.channel.send("All commands for this bot: \n**Help** - get help on commands. \n**Language** - Get the language of a whos that pokemon channel. \n**Suggest** - Command currently not in use. will be used for suggesting things for the server. \n**Some secret commands** - This bot has many other commands for the fun of it. try finding them all!")
    console.log(message.member + " Used !help.")
  }
})

//send help
client.on("messageCreate", message => {
  if(message.content === "!sendhelp") {
    message.delete()
    message.channel.send("And why should I be helping you...?")
    console.log(message.member + " Asked for help. dont help them!")
  }
})




client.login(process.env.sadatoken);

client.on("ready", () => {
  console.log(`${client.user.tag} is online`)
})
