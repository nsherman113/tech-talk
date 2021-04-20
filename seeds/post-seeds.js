const { Post } = require("../models");

const postdata = [
  {
    title: "Milk is good for technology",
    post_url:
      "https://www.watchusgrow.org/2015/07/20/20-things-you-didnt-know-you-wanted-to-know-about-milk/",
    user_id: 10,
  },
  {
    title: "Mars Helicopter developed by NASA completes first mission",
    post_url:
      "https://www.wsj.com/articles/nasas-ingenuity-helicopter-successfully-makes-historic-first-flight-on-mars-11618830461?mod=tech_lead_pos5",
    user_id: 8,
  },
  {
    title: "Vin diesel is actually a robot disguised as a human",
    post_url: "https://www.factinate.com/people/43-fast-facts-vin-diesel/",
    user_id: 1,
  },
  {
    title: "A new sub-genre of Tech House emerges: Bohemian Metal House",
    post_url: "http://www.slothville.com/",
    user_id: 4,
  },
  {
    title: "Bob Saget invents first mechanical paper airplane",
    post_url:
      "https://www.deviantart.com/urkel8534/art/Bob-Saget-Card-107306435",
    user_id: 7,
  },
  {
    title: "Microchip that helps chickens plant eggs faster to release May 1st",
    post_url:
      "https://www.mentalfloss.com/article/89007/brief-history-chicken-dance",
    user_id: 4,
  },
  {
    title: "50 cent was Jake Paul's Robot",
    post_url: "https://www.reddit.com/r/funny/comments/iqren/50_centaur/",
    user_id: 1,
  },
  {
    title:
      "Javascript creater Brendan Eich builds first invisible cloak in 9.5 days",
    post_url: "https://kids.scholastic.com/kids/books/harry-potter/",
    user_id: 1,
  },
  {
    title: "Apple to present first macbook boat",
    post_url:
      "https://www.fundealer.com/default.asp?page=inventory&subcategory=pontoon",
    user_id: 9,
  },
  {
    title: "Curabitur at ipsum ac tellus semper interdum.",
    post_url: "https://reverbnation.com/ligula/sit.jpg",
    user_id: 5,
  },
  {
    title: "Hello",
    post_url: "http://china.com.cn/lectus/vestibulum.json",
    user_id: 3,
  },
  {
    title: "Hope",
    post_url:
      "http://networksolutions.com/nam/ultrices/libero/non/mattis/pulvinar.json",
    user_id: 10,
  },
  {
    title: "You",
    post_url: "https://instagram.com/ac/neque/duis/bibendum/morbi/non.xml",
    user_id: 8,
  },
  {
    title: "Are",
    post_url: "https://lycos.com/natoque/penatibus/et.html",
    user_id: 3,
  },
  {
    title: "Enjoying",
    post_url: "https://gmpg.org/lorem.jpg",
    user_id: 3,
  },
  {
    title: "This",
    post_url: "https://paginegialle.it/mattis/egestas.jsp",
    user_id: 7,
  },
  {
    title: "Not",
    post_url: "http://wikia.com/turpis/eget.jpg",
    user_id: 6,
  },
  {
    title: "So",
    post_url: "https://shareasale.com/quis.json",
    user_id: 4,
  },
  {
    title: "Boring",
    post_url:
      "http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png",
    user_id: 6,
  },
  {
    title: "BUTFUNBLOGGGG",
    post_url: "https://java.com/at/nibh/in.png",
    user_id: 7,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
