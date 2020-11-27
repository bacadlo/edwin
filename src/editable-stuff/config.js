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
    {
      image: "fa-facebook",
        url: "https://www.facebook.com/edwin.ngoche.56/",
    },
    {
      image: "fa-instagram",
        url: "https://www.instagram.com/bacadlo/",
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
    "My name is Edwin Ngoche. I am a Software Engineering student at St. Cloud State University. I enjoy problem solving and learning the necessary technical skills that can enable me to provide accurate solutions. In my free time I love taking photos and manipulaing them on Adobe Photoshop and Lightroom.You can check some of my work using the instagram link provided. I also love designing and making things look aesthetically pleasing through symmetry.",
  //resume: require("../editable-stuff/resume.pdf"),
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
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
          img: require("../editable-stuff/DoubleEd.jpg"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
        img: require("../editable-stuff/DoubleEd.jpg"), 
      label: "Second slide label", 
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
    { name: "PHP", value: 65 },
    { name: "SQL", value: 60 },
    { name: "JavaScript", value: 70 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 65 },
    { name: "JAVA", value: 60}
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
    "I'm actively looking for a Software Engineering internship for summer 2021! If you have any questions, or if you just want to say hi, please feel free to email me or contact me through the provided social media platforms. Thanks!",
    email: "eongoche@go.stcloudstate.edu",
   
  

};

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch };
