import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { loginFormData } from "./FormData";
import { useLoginMutation } from "../../store/api/endpoints/auth";
import { showToast } from "../../components/hooks/showToast";
import logo from "../../assets/images/logo-text.png";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  //Api Call
  const [loginUser, { isLoading }] = useLoginMutation();
  const handleLoginSubmit = async (data) => {
    const res = await loginUser(data);
    if (res?.data?.success) {
      if (res?.data?.data?.user?.role.toLowerCase() === "user") navigate("/user-bookings");
      if (res?.data?.data?.user?.role.toLowerCase() === "admin") navigate("/dashboard");
      showToast.success(res?.data?.message);
    }
  };
  return (
    <div className="flex flex-row-reverse h-screen">
      <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
        <div className="w-full h-screen overflow-hidden text-center">
          <img
            src={
              "https://images.pexels.com/photos/1262304/pexels-photo-1262304.jpeg?auto=compress&cs=tinysrgb&w=1260&dpr=1"
            }
            className="h-full w-full object-cover"
            alt="Image"
          />
        </div>
      </div>
      <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
        <div className="max-w-md w-full p-6">
          <Link to="/">
            <img src={logo} alt="logo" className="w-2/3 mx-auto mb-5" />
          </Link>
          <form className="space-y-4" onSubmit={handleSubmit(handleLoginSubmit)}>
            {loginFormData?.map((item, idx) => {
              return (
                <div key={idx}>
                  <label htmlFor={item?.name} className="block text-sm font-medium text-gray-700">
                    {item?.label}
                  </label>
                  <input
                    {...register(item?.name, { required: item?.required })}
                    type={item?.type}
                    id={item?.name}
                    className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                  />
                  {errors[item?.name] && (
                    <p className="text-xs font-bold text-red-600 mt-1">
                      {errors[item?.name].message}
                    </p>
                  )}
                </div>
              );
            })}

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#6447F7] text-white p-2 mt-2 rounded-md hover:bg-[#8749a5]  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300 uppercase font-bold"
              >
                {isLoading ? "Loading..." : "Login"}
              </button>
            </div>
          </form>
          <div className="text-center text-xs">
            <span>
              Don&apos;t have an Account?{" "}
              <Link to="/register" className="text-sm font-semibold hover:underline">
                Sign Up
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
