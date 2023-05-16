const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let user = {};

rl.question('What is your name? Nicknames are also acceptable :) ', (name) => {
  user.name = name;
  
  rl.question('What is an activity you like doing? ', (activity) => {
    user.activity = activity;

    rl.question('What do you listen to while doing that? ', (music) => {
      user.music = music;

      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        user.meal = meal;

        rl.question('Whats your favourite thing to eat for that meal? ', (food) => {
          user.food = food;

          rl.question('Which sport is your absolute favourite? ', (sport) => {
            user.sport = sport;

            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (power) => {
              user.power = power;
  
              console.log(`${user.name} likes to listen to ${user.music} while ${user.activity}, eating ${user.food} for ${user.meal}, prefers to play ${user.sport} over any other sport, and is amazing at ${user.power}.`);

              rl.close();
            });
          });
        });
      });
    });
  });
});
