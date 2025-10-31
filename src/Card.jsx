

export default function({image,name,description,price}){

  return (
   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform">
      <img src={image} alt={name} className="w-48 h-32 object-contain rounded-xl mb-3" />
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500 text-sm text-center">{description}</p>
      <span className="text-green-600 font-bold mt-2">${price}</span>
     <button className="bg-gradient-to-r from-green-400 to-lime-500 text-white font-semibold px-5 py-2 rounded-lg mt-3 hover:from-green-500 hover:to-lime-600 transition-all duration-300">
  Add to Cart
</button>
    </div>
  );

}