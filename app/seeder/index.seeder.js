// generate mock user data using the fields in the user model
// create a user service function that inserts user record
// iterate through the user mock data to populate the database

const {createUser} = require("../services/user.service")

const users = [
    {
      fullname: "Alice Johnson",
      bio: "Software engineer with a passion for developing innovative programs. Experienced in both frontend and backend development.",
      email: "alice.johnson@example.com",
      password: "A1!iceJ0hn"
    },
    {
      fullname: "Bob Smith",
      bio: "A creative graphic designer who loves turning ideas into visually appealing designs.",
      email: "bob.smith@example.com",
      password: "B0b$mith#123"
    },
    {
      fullname: "Charlie Brown",
      bio: "A digital marketer with expertise in SEO, content creation, and social media strategy.",
      email: "charlie.brown@example.com",
      password: "Ch@rli3B123"
    },
    {
      fullname: "Diana Prince",
      bio: "Product manager with a track record of leading cross-functional teams to deliver projects on time.",
      email: "diana.prince@example.com",
      password: "D1@naP@ssw0rd"
    },
    {
      fullname: "Ethan Hunt",
      bio: "Experienced cybersecurity specialist with a focus on protecting organizations from digital threats.",
      email: "ethan.hunt@example.com",
      password: "Eth@nHunt!007"
    }
  ];





 const seedRecords = async () => {
    for (const element of users) {
        await createUser(element);
     }

     
 }

 module.exports = seedRecords;