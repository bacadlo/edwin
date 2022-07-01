// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Edwin",
  middleName: "",
  lastName: "Ngoche",
  message: " Software Engineer passionate about improving society through technology and computer systems. ",
  icons: [
    {
      image: "fa-github",
        url: "https://github.com/bacadlo",
    },
    {
      image: "fa-linkedin",
        url: "https://www.linkedin.com/in/edwin-ngoche-4020b0120/",
    },
    {
      image: "fa-twitter",
        url: "https://twitter.com/devEdd_",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/johndoe.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/dp.jfif"),
  imageSize: 375,
  message:
    "Hi there, I am a Software Engineering major at St. Cloud State University and based in Minnesota, USA. I created my first user application in high school to manage a capentry business' orders, shipments and payments using a relational database. I acquired a passion and calling for developing software that offer solutions and optimize business operations from this. Hence, my pursuit for a degree in Software Engineering. In my journey, I've gathered full-stack software development knowledge and experience to build interactive web applications to scale. I am a quick learner open to opportunities. Please hire me!",
 // resume: require("../editable-stuff/resume.pdf"),
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "bacadlo", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["All-Path-Search-Algorithm",  "Concert-Manager", "Buggs-Bunny-Lost-in-Time-Game", "TCP_ClientServer_Chat_Application ", "WhatTalk-1.0.0", "React-Native-Media-Store", ],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C++", value: 90 },
    { name: "JAVA", value: 80 },
    { name: "PHP", value: 90 },
    { name: "MySQL", value: 90 },
    { name: "JavaScript", value: 90 },
    { name: "TypeScript", value: 90 },
    { name: "React.js", value: 90 },
    { name: "React-Native", value: 90 },
    { name: "HTML", value: 90 },
    { name: "CSS/SCSS", value: 90 },
    { name: "Node.js", value: 90 },
    { name: "Cloud Computing(GCP)", value: 80 },
  ],
  softSkills: [
    { name: "Team player", value: 90 },
    { name: "Problem Solving", value: 90 },
    { name: "Creativity", value: 85 },
    { name: "Communication", value: 85 },
    { name: "Critical Thinking", value: 85 },
    { name: "Empathy", value: 80 },    
  ],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "I am part of the National Society of Black Engineeers(NSBE), St. Cloud State University chapter. I was the Program and Events Coordinator 2018-2019 and VP 2020-2021. I currently assist with organizing meetings and events as a member. Every other week during the school year, we volunteer as tutors for kids in the Math and Reading club at Promise Neighborhood St. Cloud, MN. ",
  images: [
    { 
      img: require("../editable-stuff/NSBE1.jpg"), 
      label: "NSBE Chapter Meeting", 
      paragraph: "NSBE SCSU chapter members after a meeting." 
    },
    { 
      img: require("../editable-stuff/NSBE3.jpg"), 
      label: "NSBE Chapter Meeting ", 
      paragraph: "NSBE leadership awards, SCSU chapter." 
    },
    { 
      img: require("../editable-stuff/NSBE4.jpg"), 
      label: "NSBE Volunteer Activity", 
      paragraph: "NSBE member volunteering in the Math and Reading club at Promise Neighborhood St. Cloud, MN." 
    },
    { 
      img: require("../editable-stuff/NSBE7.jpg"), 
      label: "NSBE Volunteer Activity", 
      paragraph: "NSBE member volunteering in the Math and Reading club at Promise Neighborhood St. Cloud, MN." 
    },
    { 
      img: require("../editable-stuff/NSBE5.jpg"), 
      label: "NSBE Volunteer Activity", 
      paragraph: "NSBE volunteers at Promise Neighborhood." 
    },
   
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "Interested in collaborating? Reach out ;) -> " ,
    email: "eongoche@go.stcloudstate.edu ",

   
  

};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
