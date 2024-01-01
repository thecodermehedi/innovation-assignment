import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";

const CardSkeleton = (index) => {
  return (
    <Card key={index} className="animate-pulse">
    <CardHeader>
      <div className="bg-gray-300 h-48 w-full rounded-md" />
    </CardHeader>
    <CardContent>
      <div className="bg-gray-300 h-4 w-1/2 rounded-md" />
      <div className="bg-gray-300 h-4 w-1/4 rounded-md mt-2" />
    </CardContent>
    <CardFooter>
      <div className="bg-gray-300 h-12 w-full rounded-md" />
    </CardFooter>
  </Card>
  );
};

export default CardSkeleton;