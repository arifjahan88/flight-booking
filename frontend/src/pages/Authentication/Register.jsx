import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { registerFormData } from "./FormData";
import { showToast } from "../../components/hooks/showToast";
import { useRegisterMutation } from "../../store/api/endpoints/auth";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Api Call
  const [addUser, { isLoading }] = useRegisterMutation();

  const handleRegisterSubmit = async (data) => {
    const res = await addUser(data);
    if (res?.data?.success) {
      showToast.success(res?.data?.message);
    }
  };

  return (
    <div>
      <div className="flex h-screen">
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
          <div className="max-w-md w-full p-3">
            <form className="space-y-1" onSubmit={handleSubmit(handleRegisterSubmit)}>
              {registerFormData?.map((item, idx) => {
                return (
                  <div key={idx}>
                    <label htmlFor={item?.name} className="block text-xs font-medium text-gray-700">
                      {item?.label}
                    </label>
                    <input
                      {...register(item?.name, {
                        required: item?.required && `${item?.label} is required*`,
                      })}
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
                  {isLoading ? "Loading..." : "Register"}
                </button>
              </div>
            </form>
            <div className="text-center text-xs">
              <span>
                Already have an Account?{" "}
                <Link to="/login" className="text-sm font-semibold hover:underline">
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
