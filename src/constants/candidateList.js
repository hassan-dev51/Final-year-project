const candidateList = [
  {
    id: 1,
    name: "Imran Khan",
    party: "pti",
    image: "images/imran.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 2,
    name: "Ali Muhammad Khan",
    party: "pti",
    image: "images/ali.jpg",
    seat: "MNA",
    desc: "Hoti Nahi JO Qoum Haq Baat Par Yakja Us Qoum Ka Hakim He Faqak Us Ki Saza Hai",
  },
  {
    id: 3,
    name: "Khawaja Asif",
    party: "plmn",
    image: "images/khwajaAsif.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 4,
    name: "Mufti Samar Abbas Attari",
    party: "tlp",
    image: "images/qarisamar.png",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 5,
    name: "Usman Dar",
    party: "pti",
    image: "images/usmandar.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 6,
    name: "Shahbaz Sharif",
    party: "plmn",
    image: "images/shahbaz.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 7,
    name: "Murad Saeed",
    party: "pti",
    image: "images/Murad.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 8,
    name: "Abdul Haye Dasti",
    party: "pti",
    image: "images/abdul.jpg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 9,
    name: "Ahsan Saleem",
    party: "pti",
    image: "images/ahsan.png",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 10,
    name: "Ali Afzal",
    party: "pti",
    image: "images/aliafzal.png",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 11,
    name: "Ali Akhtar",
    party: "pti",
    image: "images/aliakhtar.jpg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 12,
    name: "Ahsan Iqbal",
    party: "plmn",
    image: "images/78.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 13,
    name: "Dr Nisar Ahmed Chouhdary",
    party: "plmn",
    image: "images/79.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 14,
    name: "Chouhdary Aman ",
    party: "plmn",
    image: "images/pp62.jpg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 15,
    name: "Ms Bushra Butt",
    party: "plmn",
    image: "images/w353.jpg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 16,
    name: "Chaudhary Mohammad Iqbal",
    party: "plmn",
    image: "images/pp63.jpg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 17,
    name: "Waqar Ahmad",
    party: "plmn",
    image: "images/pp59.jpg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 18,
    name: "Mufti Muneeb ur Rehman",
    party: "tlp",
    image: "images/mufti.jpeg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 19,
    name: "Hafiz Kashif Aasi",
    party: "tlp",
    image: "images/kashif.jpg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 20,
    name: "Usama Akhtar",
    party: "tlp",
    image: "images/usmantlp.jpeg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },

  {
    id: 21,
    name: "Chouhdary Awan",
    party: "tlp",
    image: "images/pp62.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 22,
    name: "Khalid",
    party: "tlp",
    image: "images/khalid.jpeg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 23,
    name: "Engineer Rizwan",
    party: "tlp",
    image: "images/engr.jpeg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 24,
    name: "Saad Rizvi",
    party: "tlp",
    image: "images/saad.jpg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 25,
    name: "Bilawal Bhuto ",
    party: "ppp",
    image: "images/bilawal.jpeg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 26,
    name: "Ehtisham Raza",
    party: "ppp",
    image: "images/ehtisam.jpeg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 27,
    name: "Raja Perviaz Ashraf",
    party: "ppp",
    image: "images/raja.jpeg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 28,
    name: "Mian Irshad",
    party: "ppp",
    image: "images/irshad.jpeg",
    seat: "MNA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 29,
    name: "Mr Raza Rabani Khan",
    party: "ppp",
    image: "images/raza.jpeg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 30,
    name: "Mr Abid Hussain",
    party: "ppp",
    image: "images/abidppp.jpeg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 31,
    name: "Syed Amin",
    party: "ppp",
    image: "images/syedamin.jpeg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
  {
    id: 32,
    name: "Rana Shamshad",
    party: "ppp",
    image: "images/rana.jpg",
    seat: "MPA",
    desc: "Kya hum koi ghulam hai jo tm kaho wo hum kar lein ",
  },
];
export default candidateList;