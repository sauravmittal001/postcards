import emoji from "react-easy-emoji";

/***
 * format
 *
 * company: heading
 * date: short description
 * decs: url of blog post
 * role: * leave empty *
 */

/***
 * CATEGORIES
 *
 * events: ANY EXPERIENCE YOU WANT TO SHARE
 * workExperiences: SOMETHING KNOWLEDGEABLE
 * philosophy: THOUGHTS
 */

const workExperiences = {
  viewExperiences: true,
  experience: [
    {
      companylogo: require("./assets/images/facebookLogo.png"),
      company: "Title",
      date: "Description",
      desc: "https://www.google.com",
      role: "",
      descBullets: []
    }
  ]
};

const philosophy = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      companylogo: require("./assets/images/airbnbLogo.png"),
      company: "Title",
      date: "Description",
      desc: "https://www.google.com",
      role: "",
      descBullets: []
    }
  ]
};

const events = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      companylogo: require("./assets/images/quoraLogo.png"),
      company: "Title",
      date: "Description",
      desc: "https://www.google.com",
      role: "",
      descBullets: []
    }
  ]
};




const greeting = {
  username: "Saurav's Blog",
  title: "Hey! I'm Saurav",
  subTitle: emoji("Enthusiastic Programmer 😃 eager to contribute to team success. Clear understanding of Data Structures & Algorithms and CS concepts in general. Motivated to learn, grow and excel in Software Development."),
  resumeLink: "https://drive.google.com/file/d/1JAWsHptrVgqKfk-605A2RFyM4WQY9RJo/view?usp=sharing"
};
const socialMediaLinks = {
  github: "https://github.com/sauravmittal001",
  linkedin: "https://www.linkedin.com/in/saurav-mittal-2a7a0b16b/",
  gmail: "sauravmittal001@gmail.com",
  gitlab: "https://gitlab.com/sairavmittal001",
  facebook: "https://www.facebook.com/saurav.mittal.9275",
  medium: "https://medium.com/@sauravmittal001",
  stackoverflow: "https://stackoverflow.com/users/10277038/pseudo-001"
};
const skillsSection = {
  title: "",
  subTitle: "",
  skills: [],
  softwareSkills: []
};
const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: []
}
const techStack = {
  viewSkillBars: true,
  experience: []
};
const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "sauravmittal001",
  showGithubProfile :"true"
};
const bigProjects = {
  title: "Projects",
  subtitle: "SOME PROJECTS THAT I WORKED ON IN THE PAST (click for details)",
  projects: []
};
const achievementSection = {
  title: emoji(""),
  subtitle: "",
  achievementsCards: []
};
const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  blogs: []
};
const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),
  talks: []
};
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]

};
const contactInfo = {
  title: emoji("Contact Me☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all!",
  email_address: "sauravmittal001gmail.com"
};
const twitterDetails = {
  userName : "twitter"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails, philosophy, events};
