// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Edwin",
  middleName: "O.",
  lastName: "Ngoche",
  message: " Passionate about improving society through computer systems. ",
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
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/16apx8s6zlVwCu7Aea6jdJtXOnAb6GsNP8QAsTv7gWZo/edit",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/DoubleEd.jpg"),
  imageSize: 375,
  message:
    "My name is Edwin Ngoche. I am a Software Engineering major at St. Cloud State University.I enjoy problem solving and passionate about technology with the ability to leverage full-stack knowledge and experience to build interactive websites to scale. I am a quick and hardworking learner open to opportunities to contribute, improve, and learn new skills.",
  resume: require("../editable-stuff/resume.pdf"),
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
  reposLength: 6,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: true,
  heading: "Leadership",
  message:
    "I am part of the National Society of Black Engineeers(NSBE), St. Cloud State University chapter. I was the Program and Events Coordinator 2018-2019 and VP 2020-2021. I currently assist with organizing meetings and events as a member. Every other week, we volunteer as tutors for kids in the Math and Reading Club at Promise Neighborhood St. Cloud, MN. ",
  images: [
    { 
      img: require("../editable-stuff/NSBE1.jpg"), 
      label: "NSBE members meeting", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/NSBE3.jpg"), 
      label: "NSBE leadership awards, SCSU chapter ", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/NSBE4.jpg"), 
      label: "NSBE members volunteering to teach at the Math and Reading club", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/NSBE7.jpg"), 
      label: "NSBE member volunteering to teach at the Math and Reading club", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/NSBE5.jpg"), 
      label: "NSBE volunteers at the Math and Reading club", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
   
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "C++", value: 80 },
    { name: "PHP", value: 90 },
    { name: "MySQL", value: 80 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 90 },
    { name: "React-Native", value: 90 },
    { name: "HTML/CSS", value: 99 },
    { name: "Cloud Computing(GCP)", value: 70 },
  ],
  softSkills: [
    { name: "Problem Solving", value: 90 },
    { name: "Creativity", value: 85 },
    { name: "Communication", value: 85 },
    { name: "Critical Thinking", value: 85 },
    { name: "Patience", value: 75 },
    { name: "Empathy", value: 80 },
    { name: "Organization", value: 90 },
    { name: "Team player", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm actively looking for an internship! If you have any questions, or if you just want to say hi, please feel free to email me. Thanks!",
    email: "eongoche@go.stcloudstate.edu",
   
  

};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
