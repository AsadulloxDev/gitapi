import React, { useEffect, useState } from "react";

function Product() {
  const [cars, setCars] = useState([]); // Shaharlarni saqlash uchun state
  
  // API dan shaharlarni olish
  useEffect(() => {
    fetch("https://realauto.limsa.uz/api/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCars(data.data); // Olingan ma'lumotlarni state ga yuklash
      })
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  return (
    <div>
      <table className="absolute left-[300px] top-[50px] w-[1200px] bg-white shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr>
            <th className="py-4 px-6 text-left text-lg text-white bg-blue-600">
              Rasm
            </th>
            <th className="py-4 px-6 text-left text-lg text-white bg-blue-600">
              Title
            </th>
          </tr>
        </thead>
        <tbody>
          {cars.map((item) => (
            <tr key={item.id} className="border-b hover:bg-gray-100">
              <td className="py-4 px-6">
                <img
                  src={item.image}
                  alt={item.id}
                  className="w-24 h-24 object-cover rounded-lg"
                />
              </td>
              <td className="py-4 px-6 font-semibold text-gray-800">
                {item.title} 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
