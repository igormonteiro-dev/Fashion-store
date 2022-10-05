import React from "react";
import CategoryCard from "../category-card/CategoryCard.component";
import "./Directory.styles.scss";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
