import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import CardSkeleton from "@/components/CardSkeleton";
import ProductCard from "@/components/ProductCard";
import {useState, useEffect} from "react";
import PriceFilterSelectMenu from "@/components/PriceFilterSelectMenu";
import {Toaster} from "react-hot-toast";

const Home = ({
  products,
  isLoading,
  setSortedValue,
  sortedValue,
  handleAddToCart,
}) => {
  const [isVisible, setIsVisible] = useState(null);
  const dummyProducts = Array.from({length: 30});
  useEffect(() => {
    if (isLoading && products?.length <= 0) {
      setIsVisible(false);
      return;
    }
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [products, isLoading]);
  return (
    <section className="py-10">
      <MaxWidthWrapper>
        <div className="flex items-center  justify-center lg:justify-end">
          <p className="mr-2">Filter by</p>
          <PriceFilterSelectMenu
            setSortedValue={setSortedValue}
            sortedValue={sortedValue}
          />
        </div>
        {products?.length > 0 ? (
          <div className="grid mt-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {isVisible
              ? products?.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                  />
                ))
              : dummyProducts.map((_, index) => (
                  <CardSkeleton key={index} index={index} />
                ))}
          </div>
        ) : (
          <div className="flex justify-center items-center h-96">
            <h1 className="text-2xl font-bold text-gray-600">
              No Products Found
            </h1>
          </div>
        )}
      </MaxWidthWrapper>
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Home;
