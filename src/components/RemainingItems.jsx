import Product from "./Product";

const RemainingItems = ({ products }) => {

    const remainingProducts = products.slice(5);

    return (
        <div className="px-28">
            <div className="pl-10 mt-20">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#333333] text-md tracking-[0] leading-[normal] whitespace-nowrap">
                You Might Also Like
                </p>
            </div>
            <div className="flex flex-wrap p-10 gap-5">
                {remainingProducts.map((product) => {
                    return <Product product={product} key={product.position} />;
                })}

            </div>
        </div>
    )
}

export default RemainingItems