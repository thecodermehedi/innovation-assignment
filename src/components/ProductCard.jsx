import {Card, CardContent, CardFooter, CardHeader} from "./ui/card";
import {Button} from "./ui/button";
const ProductCard = ({product, handleAddToCart}) => {
  return (
    <Card key={product.id} className="group relative">
      <CardHeader>
        <img
          src={product?.thumbnail}
          alt="item"
          className="h-48 w-full object-contain object-center transition duration-500 group-hover:scale-105 rounded-md"
        />
      </CardHeader>
      <CardContent className="h-20">
        <p>{product?.title}</p>
        <p className="font-semibold">${product?.price}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => handleAddToCart(product)}
          className="w-full bg-black hover:bg-black transition duration-500 hover:scale-105"
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
