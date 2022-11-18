export const ProductItem = ({title, description, price, image, brand, category}) => (
    <div className={"border px-2 py-4 lg:px-4 lg:py-8 flex flex-col items-start"}>
        <img src={image} alt="product" className="aspect-square mb-2"/>

        <p className="font-bold uppercase mb-2">{title}</p>

        <p className="text-xs mb-4 lg:mb-2">
            {description}
        </p>

        <div className="flex text-xs mt-auto mb-4 lg:mb-2 lg:mb-2 gap-x-1 flex-wrap">
            <span className="font-bold text-indigo-800">{brand}</span>
            <span>|</span>
            <span>{category}</span>
        </div>

        <span className="text-xl font-bold mb-4">
            {price.toFixed(2)}
        </span>

        <button className="bg-green-600 w-full text-white text-start align-bottom p-2 text-xs lg:text-base">
            In Winkelwagen
        </button>
    </div>
)
