import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const PriceFilterSelectMenu = ({setSortedValue, sortedValue}) => {
  return (
    <Select onValueChange={setSortedValue} value={sortedValue}>
      <SelectTrigger className="w-36 focus-visible:outline-none">
        <SelectValue placeholder="Price" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Price</SelectLabel>
          <SelectItem value="asc">Low to High</SelectItem>
          <SelectItem value="dsc">High to Low</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PriceFilterSelectMenu;
