nicksFlicks.factory('MoviesFactory', function MoviesFactory() {
  var factory ={};

  //Hardcoded movie reviews
  factory.movies = [ 
  { title: "Charlottes Web", review: "Bacon ipsum dolor sit amet salami ham hock ham, hamburger corned beef short ribs kielbasa biltong t-bone drumstick tri-tip tail sirloin pork chop. Kielbasa turducken turkey cow shoulder pig prosciutto hamburger corned beef short loin, meatloaf tri-tip drumstick. Shankle sirloin ground round fatback, cow pancetta boudin t-bone pig. Ham short ribs cow tri-tip ribeye beef ribs boudin. Short ribs pork belly leberkas salami chuck, pork loin ball tip tenderloin turkey chicken pork chop filet mignon biltong." },
  { title: "The Delta Force", review: "Chuck ipsum. Chuck Norris doesn't wear a watch, He decides what time it is. Some people wear Superman pajamas, Superman wears Chuck pajamas. Chuck Norris doesn’t need to swallow when eating food. Death once had a near Chuck experience. Crop circles are a result of Chuck Norris's sneeze while walking through a corn field. Chuck Norris ordered a Big Mac at Burger King, and got one." },
  { title: "Dont ever see Garden State", review: "Disrupt jean shorts viral hella meh, plaid cupidatat magna art party. Echo Park adipisicing literally narwhal. Williamsburg leggings church-key, craft beer forage cornhole jean shorts blue bottle pariatur. Officia sapiente bespoke, locavore plaid cray voluptate deep v ex vinyl tote bag chillwave swag occaecat. Sed banh mi 3 wolf moon single-origin coffee quis tempor. Hoodie pitchfork pork belly aliqua, shabby chic elit consequat freegan ethical try-hard mixtape. Schlitz banjo deep v ullamco blog, umami nulla sint elit skateboard Godard odio." },
  { title: "The Terminator", review: "Arnold ipsum. Just bodies. I'd like to ask you a couple of questions. Who is yo daddy, and what does he do? I need your clothes, your boots, and your motorcycle. I'm a cop you idiot! Grant me revenge! And if you do not listen, then to HELL with you. Make it quick because my horse is getting tired. Into the tunnel. Bring your toy back to the carpet." },
  { title: "Cats the Musical as a movie", review: "Chase mice run in circles yet mark territory sleep on keyboard. Claw drapes. Intently sniff hand burrow under covers for behind the couch but inspect anything brought into the house. Intently stare at the same spot flop over or give attitude or hide when guests come over yet hide when guests come over mark territory." },
  { title: "Pulp Fiction", review: "You think water moves fast? You should see ice. It moves like it has a mind. Like it knows it killed the world once and got a taste for murder. After the avalanche, it took us a week to climb out. Now, I don't know exactly when we turned on each other, but I know that seven of us did." },
  { title: "Night of the Living Dead", review: "Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris." },
  ];

//function for adding new movie reviews:
  factory.addMovie = function() {
    factory.movies.push({ title: factory.movieTitle, review: factory.movieReview });
    factory.movieTitle = null;
    factory.movieReview = null;
  };

  return factory;
});
