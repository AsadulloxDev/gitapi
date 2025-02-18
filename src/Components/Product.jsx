import React, { useEffect, useState } from "react";

function Product() {
  const [cars, setCars] = useState([]); // Mashinalarni saqlash uchun state
  const [loading, setLoading] = useState(true); // Yuklanish holati

  // API dan mashinalarni olish
  useEffect(() => {
    setLoading(true); // Yuklanishni boshlash
    fetch("https://realauto.limsa.uz/api/cars")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCars(data.data); // Olingan ma'lumotlarni state ga yuklash
      })
      .catch((error) => {
        console.error("Xatolik:", error);
      })
      .finally(() => {
        setLoading(false); // Yuklanish tugadi
      });
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 absolute top-[350px] left-[850px]" ></div>
        </div>
      ) : (
        <table className="absolute left-[300px] top-[50px] w-[1200px] bg-white shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr>
              <th className="py-4 px-6 text-left text-lg text-white bg-blue-600">Rasm</th>
              <th className="py-4 px-6 text-left text-lg text-white bg-blue-600">Title</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="py-4 px-6">
                  <img
                    src={`https://realauto.limsa.uz/api/uploads/images/${item.brand_id}`}
                    alt={item.color}
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
      )}
    </div>
  );
}

export default Product;
