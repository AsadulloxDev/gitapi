import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]); // Categories uchun state

  // API dan ma'lumotlarni olish
  useEffect(() => {
    fetch("https://realauto.limsa.uz/api/categories") // Bu URLni API'ning haqiqiy URL bilan almashtiring
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data.data); // Olingan ma'lumotlarni state'ga qo'shish
      })
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  return (
    <div className="absolute top-[50px] left-[300px] p-8">
      <h2 className="text-3xl font-semibold mb-8">Kategoriyalar</h2>
      <div className="grid grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="max-w-sm w-full bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={`https://realauto.limsa.uz/uploads/images/${category.image_src}`} // API'dan kelgan rasm manzili
              alt={category.id} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {category.name_en}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
