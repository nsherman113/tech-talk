const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "Donny Jhepp",
    email: "nwestnedge0@cbc.ca",
    password: "password123",
  },
  {
    username: "Mill Burray",
    email: "rmebes1@sogou.com",
    password: "password123",
  },
  {
    username: "Flamingo",
    email: "cstoneman2@last.fm",
    password: "password123",
  },
  {
    username: "Phillip Bradly",
    email: "ihellier3@goo.ne.jp",
    password: "password123",
  },
  {
    username: "Barbara Johnson",
    email: "gmidgley4@weather.com",
    password: "password123",
  },
  {
    username: "msprague5",
    email: "larnout5@imdb.com",
    password: "password123",
  },
  {
    username: "hello123",
    email: "hnapleton6@feedburner.com",
    password: "password123",
  },
  {
    username: "supercool456",
    email: "kperigo7@china.com.cn",
    password: "password123",
  },
  {
    username: "rbobby789",
    email: "lmongain8@google.ru",
    password: "password123",
  },
  {
    username: "radioactivepossum111",
    email: "bsteen9@epa.gov",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
