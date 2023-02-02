import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

const ProjectCategories = ({ categories, onFilterProjects }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleChangeCategory = (activeCategory) => {
    setActiveCategory(activeCategory);
    onFilterProjects(activeCategory);
  };

  return (
    <div className="portfolio__categories">
      {categories.map((category) => (
        <CategoryButton
          key={category}
          category={category}
          className={`button cat_button ${
            activeCategory === category ? "primary" : "white"
          }`}
          onChangeCategory={() => handleChangeCategory(category)}
        />
      ))}
    </div>
  );
};

export default ProjectCategories;
