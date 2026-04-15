// ProductCard.jsx
// A luxury, minimalist product card for Slaek House

export default function ProductCard({ product }) {
  const { name, price, description, image, category } = product;

  const whatsappNumber = "2348086405238";
  const message = encodeURIComponent(
    `Hello Slaek House! I'm interested in ordering the *${name}* (${category}). Could you please provide more details?`
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="group relative bg-white border border-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-50 aspect-[3/4]">
        {image ? (
          <img
            src={`https://lh3.googleusercontent.com/d/1KXU87OoW_a5ewF_qRzgURSzYIR1tjcsj=s1000`}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
            <span className="text-gray-300 text-6xl font-thin tracking-widest">
              {category === "Handcrafted Shoes" ? "👞" : "✂️"}
            </span>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span
            className="text-xs tracking-[0.2em] uppercase px-3 py-1 font-medium"
            style={{ backgroundColor: "#B8962E", color: "#fff" }}
          >
            {category === "Handcrafted Shoes" ? "Shoes" : "Tailoring"}
          </span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-500 pointer-events-none" />
      </div>

      {/* Product Info */}
      <div className="p-6">
        <p className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-2">
          Slaek House
        </p>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 leading-snug tracking-wide">
          {name}
        </h3>
        {description && (
          <p className="text-sm text-gray-500 leading-relaxed mb-4 line-clamp-2">
            {description}
          </p>
        )}

        <div className="flex items-center justify-between mt-4">
          {price && (
            <span className="text-base font-medium text-gray-800 tracking-wide">
              {price.startsWith("₦") || price.startsWith("$") ? price : `₦${price}`}
            </span>
          )}

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-2 px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-semibold text-white transition-all duration-300 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "#111" }}
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
              style={{ color: "#25D366" }}
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order Now
          </a>
        </div>
      </div>

      {/* Gold accent bottom line */}
      <div
        className="h-0.5 w-0 group-hover:w-full transition-all duration-500"
        style={{ backgroundColor: "#B8962E" }}
      />
    </div>
  );
}
