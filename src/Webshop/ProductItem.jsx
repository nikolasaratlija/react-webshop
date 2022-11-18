export const ProductItem = ({title, description, price, image}) => (
    <div className={"border px-4 py-8 flex flex-col items-start"}>
        <img src={image} alt="product" className="aspect-square mb-2"/>

        <p className="font-bold uppercase mb-2">{title}</p>

        <p className="text-xs mb-2">
            {description}
        </p>

        <span className="text-xl font-bold mb-4 mt-auto">
            {price.toFixed(2)}
        </span>

        <button className="bg-green-600 w-full text-white p-2 text-start align-bottom">
            In Winkelwagen
        </button>
    </div>
)
