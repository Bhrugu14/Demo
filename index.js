const express = require("express");
const app = express();

const data = {
  status: true,
  message: "found",
  data: [
    {
      title: "Project Manager",
      slug: "projectManager",
      data: [
        {
          id: 0,
          image: "https://xsgames.co/randomusers/assets/avatars/male/1.jpg",
          name: "john Terry",
          experience: 2,
        },
        {
          id: 1,
          image: "https://xsgames.co/randomusers/assets/avatars/male/2.jpg",
          name: "Mark Rubber",
          experience: 5,
        },
        {
          id: 2,
          image: "https://xsgames.co/randomusers/assets/avatars/male/3.jpg",
          name: "Rani kumar",
          experience: 6,
        },
        {
          id: 3,
          image: "https://xsgames.co/randomusers/assets/avatars/male/4.jpg",
          name: "Anamika singh",
          experience: 1,
        },
      ],
    },
    {
      title: "UI/UX Designer",
      slug: "UIDesigner",
      data: [
        {
          id: 0,
          image: "https://xsgames.co/randomusers/assets/avatars/male/51.jpg",
          name: "Sohan Shah",
          experience: 3,
        },
        {
          id: 1,
          image: "https://xsgames.co/randomusers/assets/avatars/male/52.jpg",
          name: "Akash Patel",
          experience: 2,
        },
        {
          id: 2,
          image: "https://xsgames.co/randomusers/assets/avatars/male/53.jpg",
          name: "Viraj Chauhan",
          experience: 1,
        },
        {
          id: 3,
          image: "https://xsgames.co/randomusers/assets/avatars/male/54.jpg",
          name: "Juber Pathan",
          experience: 10,
        },
      ],
    },
    {
      title: "Front End Developers",
      slug: "FrontEndDevelopers",
      data: [
        {
          id: 0,
          image: "https://xsgames.co/randomusers/assets/avatars/male/61.jpg",
          name: "Rushil Champa",
          experience: 2,
        },
        {
          id: 1,
          image: "https://xsgames.co/randomusers/assets/avatars/male/62.jpg",
          name: "Chirag Machhi",
          experience: 5,
        },
        {
          id: 2,
          image: "https://xsgames.co/randomusers/assets/avatars/male/63.jpg",
          name: "Neel Patel",
          experience: 2,
        },
        {
          id: 3,
          image: "https://xsgames.co/randomusers/assets/avatars/male/64.jpg",
          name: "Urvish Makwana",
          experience: 14,
        },
      ],
    },
    {
      title: "Back End Developers",
      slug: "BackEndDevelopers",
      data: [
        {
          id: 0,
          image: "https://xsgames.co/randomusers/assets/avatars/male/45.jpg",
          name: "Aniket Patel",
          experience: 21,
        },
        {
          id: 1,
          image: "https://xsgames.co/randomusers/assets/avatars/male/6.jpg",
          name: "Mark Ranner",
          experience: 5,
        },
        {
          id: 2,
          image: "https://xsgames.co/randomusers/assets/avatars/male/7.jpg",
          name: "john Abhram",
          experience: 2,
        },
        {
          id: 3,
          image: "https://xsgames.co/randomusers/assets/avatars/male/8.jpg",
          name: "Ashish Pathak",
          experience: 10,
        },
      ],
    },
    {
      title: "QA Tester",
      slug: "QATester",
      data: [
        {
          id: 0,
          image: "https://xsgames.co/randomusers/assets/avatars/male/9.jpg",
          name: "Ketan Patel",
          experience: 10,
        },
        {
          id: 1,
          image: "https://xsgames.co/randomusers/assets/avatars/male/10.jpg",
          name: "Kevin Makwan",
          experience: 20,
        },
        {
          id: 2,
          image: "https://xsgames.co/randomusers/assets/avatars/male/11.jpg",
          name: "Darshan Borad",
          experience: 2,
        },
        {
          id: 3,
          image: "https://xsgames.co/randomusers/assets/avatars/male/12.jpg",
          name: "Abdul Kadir",
          experience: 5,
        },
      ],
    },
    {
      title: "Mobile Developer",
      slug: "MobileDeveloper",
      data: [
        {
          id: 0,
          image: "https://xsgames.co/randomusers/assets/avatars/male/13.jpg",
          name: "Shahrukh Khan",
          experience: 6,
        },
        {
          id: 1,
          image: "https://xsgames.co/randomusers/assets/avatars/male/14.jpg",
          name: "Ramesh Suresh",
          experience: 4,
        },
        {
          id: 2,
          image: "https://xsgames.co/randomusers/assets/avatars/male/16.jpg",
          name: "Mark zukerberd",
          experience: 10,
        },
        {
          id: 3,
          image: "https://xsgames.co/randomusers/assets/avatars/male/17.jpg",
          name: "Naitik bhai",
          experience: 1,
        },
      ],
    },
    {
      title: "Devops",
      slug: "Devops",
      data: [
        {
          id: 0,
          image: "https://xsgames.co/randomusers/assets/avatars/male/18.jpg",
          name: "Anand Patel",
          experience: 2,
        },
        {
          id: 1,
          image: "https://xsgames.co/randomusers/assets/avatars/male/19.jpg",
          name: "Mark Rail",
          experience: 10,
        },
        {
          id: 2,
          image: "https://xsgames.co/randomusers/assets/avatars/male/20.jpg",
          name: "loki fFerguson",
          experience: 5,
        },
        {
          id: 3,
          image: "https://xsgames.co/randomusers/assets/avatars/male/21.jpg",
          name: "Terry Cruz",
          experience: 2,
        },
      ],
    },
  ],
};

app.get("/employees", (req, res) => {
  res.send(data);
});

app.listen(3000, () => {
  console.log("API is listening on port 3000");
});