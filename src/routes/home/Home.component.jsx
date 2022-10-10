import Directory from "../../components/directory/Directory.component";
import { Outlet } from "react-router-dom";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/10398206/pexels-photo-10398206.jpeg",
    },
    {
      id: 2,
      title: "jackets",
      imageUrl:
        "https://images.pexels.com/photos/9929679/pexels-photo-9929679.jpeg",
    },
    {
      id: 3,
      title: "shoes",
      imageUrl:
        "https://images.pexels.com/photos/9929606/pexels-photo-9929606.jpeg",
    },
    {
      id: 4,
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/4427880/pexels-photo-4427880.jpeg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/3760280/pexels-photo-3760280.jpeg",
    },
  ];

  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
};

export default Home;
