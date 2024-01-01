import {Link} from "react-router-dom";
import {useAuthUser, useSignOut} from "react-auth-kit";
import MaxWidthWrapper from "./MaxWidthWrapper";
import {Input} from "./ui/input";
import {Search} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "./ui/avatar";
import {ShoppingCart} from "lucide-react";
import {Badge} from "./ui/badge";

const Navbar = ({onSearch, cartItemCount}) => {
  const auth = useAuthUser();
  const signOut = useSignOut();

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-14">
      <header className="relative bg-white">
        <MaxWidthWrapper>
          <nav className="border-b border-gray-200 flex items-center justify-between py-4">
            <Link to="#" className="flex items-center gap-2">
              <img
                className="size-7"
                src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
              />
              <h1 className="font-bold text-3xl text-blue-600">
                Mar<span className="text-black">Ket</span>
              </h1>
            </Link>
            <div className="relative w-96 hidden lg:flex">
              <Input
                type="search"
                className="rounded-full bg-gray-200 pr-10 focus-visible:bg-gray-100"
                onChange={(e) => onSearch(e.target.value)}
                placeholder="Search for products"
              />
              <Search className="absolute right-3 bottom-2 rounded-full text-gray-400" />
            </div>
            <div className="flex items-center gap-6 lg:gap-10">
              <div className="relative cursor-pointer">
                <Badge className="absolute -right-4 -top-1 cursor-pointer bg-black/70">
                  {cartItemCount}
                </Badge>
                <ShoppingCart className="text-gray-700 size-8" />
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="focus-visible:outline-none">
                  <Avatar className="size-9">
                    <AvatarImage src="https://thispersondoesnotexist.com" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mt-3">
                  <DropdownMenuLabel>{auth()}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      localStorage.removeItem("cart");
                      signOut();
                    }}
                    className="cursor-pointer hover:bg-gray-200"
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
