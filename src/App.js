import "./styles.css";
import Profile from "./Profile";

export default function App() {
  const people = [
    {
      id: 1193,
      first_name: "Coletta",
      last_name: "Spinka",
      email: "coletta.spinka@email.com",
      avatar: "https://robohash.org/incumqueet.png?size=300x300\u0026set=set1",
      phone_number: "+351 1-215-083-8787 x1674",
      date_of_birth: "1982-04-19",
      employment: { title: "Product Design Officer", key_skill: "Teamwork" },
    },
    {
      id: 1194,
      first_name: "Elon",
      last_name: "Mask",
      email: "coletta.spinka@email.com",
      avatar: "https://robohash.org/incumqueet.png?size=300x300\u0026set=set1",
      phone_number: "+351 1-215-083-8787 x1674",
      date_of_birth: "1982-04-19",
      employment: { title: "CEO of SpaceX", key_skill: "Making Kids" },
    },
    {
      id: 1195,
      first_name: "Donald",
      last_name: "Trump",
      email: "coletta.spinka@email.com",
      avatar: "https://robohash.org/incumqueet.png?size=300x300\u0026set=set1",
      phone_number: "+351 1-215-083-8787 x1674",
      date_of_birth: "1982-04-19",
      employment: { title: "President of USA", key_skill: "Bullshit" },
    },
  ];

  const data = people.map((person) => {
    return <Profile {...person} key={person.id} />;
  });
  return <div>{data}</div>;
}
