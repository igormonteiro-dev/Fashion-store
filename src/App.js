import Home from "./routes/home/Home.component";
import Navigation from "./routes/navigation/Navigation.component";
import { Routes, Route } from "react-router-dom";
import Authentication from "./routes/authentication/Authentication.component";
import Shop from "./routes/shop/Shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        {/* index get the same path from parent */}
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
