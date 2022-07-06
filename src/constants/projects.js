const projects = [
  {
    title: "Heart Disease and Stroke Prediction App",
    description:
      "Created a Web Application that assists Health Professionals in predicting the presence of Stroke or Heart Disease in patients.",
    image: "/images/streamlit.webp",
    tags: ["Python", "Machine Learning", "Streamlit"],
    source: "https://github.com/YasserShkeir/ML_HeartDisease_and_Stroke",
    visit:
      "https://share.streamlit.io/yassershkeir/ml_heartdisease_and_stroke/main/Streamlit1.py",
    id: 0,
  },
  {
    title: "React Meetings App\n",
    description:
      "Created a web application that allows users to add React Meetings in their areas.\n",
    image: "/images/react.png",
    tags: ["Javascript", "React", "Firebase"],
    source: "https://github.com/YasserShkeir/react-meetings",
    visit: "https://yassershkeir.github.io/react-meetings/",
    id: 1,
  },
  {
    title: "Dev Portfolio Website",
    description:
      "A mobile-first, responsive, sleek website to show off my skills.",
    image: "/images/dev2.png",
    tags: ["NextJS", "Node", "Cypress", "Happo.io"],
    source: "https://github.com/YasserShkeir/portfolio",
    visit: "https://portfolio-yassershkeir.vercel.app/",
    id: 2,
  },
  {
    title: "Angular ToDo Web App",
    description:
      "A simple ToDo Intercative Web Application that stores your ToDo list locally",
    image: "/images/ang.png",
    tags: ["Angular", "Tailwind CSS", "JSON", "Git"],
    source: "https://github.com/YasserShkeir/angToDo-page",
    visit: "https://yassershkeir.github.io/angToDo-page/",
    id: 2,
  },
];
// this is the way to work with Jest

function replaceWithBr() {
  return projects.replace(/\n/g, "<br />");
}

module.exports = { replaceWithBr };
