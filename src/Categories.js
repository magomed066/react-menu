import React from "react";

const Categories = ({ categories, filterCategories }) => {
	return (
		<div className="btn-container">
			{categories.map((item, index) => {
				return (
					<button
						key={index}
						onClick={() => filterCategories(item)}
						className="filter-btn"
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
