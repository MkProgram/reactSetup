var _ = require('lodash');

var people = [{
  "id": 1,
  "first_name": "Solly",
  "last_name": "Curtayne",
  "email": "scurtayne0@marriott.com",
  "gender": "Male",
  "ip_address": "28.252.155.99"
}, {
  "id": 2,
  "first_name": "Stepha",
  "last_name": "Waliszek",
  "email": "swaliszek1@home.pl",
  "gender": "Female",
  "ip_address": "21.23.169.40"
}, {
  "id": 3,
  "first_name": "Giselbert",
  "last_name": "Jeffreys",
  "email": "gjeffreys2@posterous.com",
  "gender": "Male",
  "ip_address": "143.40.141.61"
}, {
  "id": 4,
  "first_name": "Pammie",
  "last_name": "Melville",
  "email": "pmelville3@cnn.com",
  "gender": "Female",
  "ip_address": "18.80.8.227"
}, {
  "id": 5,
  "first_name": "Annmarie",
  "last_name": "Harwin",
  "email": "aharwin4@friendfeed.com",
  "gender": "Female",
  "ip_address": "61.185.17.188"
}, {
  "id": 6,
  "first_name": "Ann",
  "last_name": "Kestin",
  "email": "akestin5@yellowpages.com",
  "gender": "Female",
  "ip_address": "226.166.17.74"
}, {
  "id": 7,
  "first_name": "Britteny",
  "last_name": "Dymocke",
  "email": "bdymocke6@unesco.org",
  "gender": "Female",
  "ip_address": "200.87.83.92"
}, {
  "id": 8,
  "first_name": "Graehme",
  "last_name": "Duffit",
  "email": "gduffit7@prnewswire.com",
  "gender": "Male",
  "ip_address": "105.4.192.235"
}, {
  "id": 9,
  "first_name": "Athene",
  "last_name": "Lorrie",
  "email": "alorrie8@eventbrite.com",
  "gender": "Female",
  "ip_address": "163.203.151.56"
}, {
  "id": 10,
  "first_name": "Lethia",
  "last_name": "Rispine",
  "email": "lrispine9@disqus.com",
  "gender": "Female",
  "ip_address": "32.155.78.43"
}, {
  "id": 11,
  "first_name": "Pippy",
  "last_name": "Beininck",
  "email": "pbeinincka@shop-pro.jp",
  "gender": "Female",
  "ip_address": "141.166.154.103"
}, {
  "id": 12,
  "first_name": "Kally",
  "last_name": "Gaddie",
  "email": "kgaddieb@360.cn",
  "gender": "Female",
  "ip_address": "25.225.0.227"
}, {
  "id": 13,
  "first_name": "Adler",
  "last_name": "Maden",
  "email": "amadenc@nature.com",
  "gender": "Male",
  "ip_address": "132.46.198.158"
}, {
  "id": 14,
  "first_name": "Richardo",
  "last_name": "Francecione",
  "email": "rfrancecioned@storify.com",
  "gender": "Male",
  "ip_address": "133.145.123.194"
}, {
  "id": 15,
  "first_name": "Deane",
  "last_name": "Ellaway",
  "email": "dellawaye@mtv.com",
  "gender": "Female",
  "ip_address": "163.43.145.239"
}, {
  "id": 16,
  "first_name": "Richmound",
  "last_name": "Mellon",
  "email": "rmellonf@berkeley.edu",
  "gender": "Male",
  "ip_address": "0.127.126.113"
}, {
  "id": 17,
  "first_name": "Monte",
  "last_name": "Marder",
  "email": "mmarderg@hostgator.com",
  "gender": "Male",
  "ip_address": "242.102.135.219"
}, {
  "id": 18,
  "first_name": "Connor",
  "last_name": "Pelfer",
  "email": "cpelferh@google.de",
  "gender": "Male",
  "ip_address": "108.123.16.176"
}, {
  "id": 19,
  "first_name": "Babb",
  "last_name": "Gaskamp",
  "email": "bgaskampi@gnu.org",
  "gender": "Female",
  "ip_address": "226.15.68.104"
}, {
  "id": 20,
  "first_name": "Lauraine",
  "last_name": "Marciskewski",
  "email": "lmarciskewskij@squidoo.com",
  "gender": "Female",
  "ip_address": "47.94.24.26"
}];

var femaleCount = _.filter(people, {gender: "Female"}).length;

alert(femaleCount);
