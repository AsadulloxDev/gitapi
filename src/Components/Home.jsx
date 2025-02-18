import React, { useEffect, useState } from "react";

function Home() {
  const [cities, setCities] = useState([]); // Shaharlarni saqlash uchun state
  const basUrl = ""
  // API dan shaharlarni olish
  useEffect(() => {
    fetch("https://realauto.limsa.uz/api/cities")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setCities(data.data); // Olingan ma'lumotlarni state ga yuklash
      })
      .catch((error) => console.error("Xatolik:", error));
  }, []);

  return (
    <div className="absolute top-[50px] left-[300px] w-[1200px] p-6">
      <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-500">
        {/* Header qismi */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-blue-950">Cities</h2>
          <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-2 rounded-lg hover:shadow-lg transition-all">
            + Qo‘shish
          </button>
        </div>

        {/* Jadval qismi */}
        <div className="border border-gray-500 rounded-xl overflow-hidden">
          <table className="w-full border-collapse">
            {/* Jadval sarlavhasi */}
            <thead>
              <tr className="bg-gray-100 text-blue-950 text-lg">
                <th className="p-4 border-r border-gray-500">Rasmi</th>
                <th className="p-4 border-r border-gray-500">Nomi</th>
              </tr>
            </thead>

            {/* Jadval tanasi */}
            <tbody className="overflow-hidden max-h-[300px]">
              {cities.length > 0 ? (
                cities.map((city) => (
                  <tr key={city.id} className="text-center text-blue-950">
                    <td className="p-4 border-r border-gray-500">
                      <img
                        src={`https://realauto.limsa.uz/api/uploads/images/${city.image_src}`} // Rasmlar uchun to'g'ri manzil
                        alt={city.name}
                        className="w-[200px] h-[100px] rounded-lg mx-auto"
                      />
                    </td>
                    <td className="p-4 border-r border-gray-500">{city.name}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2" className="text-center p-8 text-gray-500">
                    Ma'lumotlar yo‘q
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
