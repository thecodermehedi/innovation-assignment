import {ReloadIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";
import {useNavigate} from "react-router-dom";
import {Input} from "@/components/ui/input";
import {useSignIn} from "react-auth-kit";
import {useForm} from "react-hook-form";
import {Eye, EyeOff} from "lucide-react";
import {AxiosError} from "axios";
import {useState} from "react";
import axios from "axios";
import toast from "react-hot-toast";
const Login = () => {
  const navigate = useNavigate();
  const {register, handleSubmit, reset} = useForm();
  const [isPasswordHidden, setPasswordHidden] = useState(true);
  const [buttonLoading, setButtonLoading] = useState(false);
  const signIn = useSignIn();
  const handleSignIn = async (data) => {
    setButtonLoading(true);
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        ...data,
        expiresInMins: 60,
      });
      signIn({
        token: res.data.token,
        expiresIn: 60,
        tokenType: "Bearer",
        authState: res.data.email,
      });
      localStorage.setItem("cart", JSON.stringify([]));
      reset();
      navigate("/");
      toast.success("Signed in successfully");
    } catch (err) {
      if (err && err instanceof AxiosError) {
        toast.error(err.response?.data?.message);
      } else if (err instanceof Error) {
        toast.error(err.message);
      }
      console.log("Error:", err);
    }
    setButtonLoading(false);
  };
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4 pb-10">
      <div className="max-w-sm w-full space-y-5">
        <div className="text-center">
          <div className="my-5">
            <h1 className="text-2xl font-bold sm:text-3xl">Login</h1>
          </div>
        </div>
        <form onSubmit={handleSubmit(handleSignIn)} className="space-y-5">
          <div>
            <label className="font-medium">Username</label>
            <Input
              type="text"
              id="username"
              name="username"
              {...register("username", {required: true})}
              className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
              defaultValue={"kminchelle"}
              required
            />
          </div>
          <div className="relative">
            <label className="font-medium">Password</label>
            <button
              type="button"
              className="text-gray-400 absolute right-3 top-10 my-auto active:text-gray-600"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              {isPasswordHidden ? (
                <Eye className="size-6 text-black" />
              ) : (
                <EyeOff className="size-6 text-black" />
              )}
            </button>
            <Input
              type={isPasswordHidden ? "password" : "text"}
              id="password"
              name="password"
              {...register("password", {required: true})}
              className="w-full mt-2 px-3 py-2 text-black bg-black bg-opacity-5 outline-none border focus:bg-transparent shadow-sm"
              defaultValue={"0lelplR"}
              required
            />
          </div>

          {buttonLoading ? (
            <Button
              disabled
              className="w-full bg-black disabled:opacity-100 rounded-none"
            >
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
              Signing In...
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full text-white font-medium bg-black hover:bg-black rounded-none"
            >
              Sign in
            </Button>
          )}
        </form>
      </div>
    </main>
  );
};

export default Login;
