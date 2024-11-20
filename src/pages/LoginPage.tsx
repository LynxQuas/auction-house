import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import InputError from "../components/InputError";

type LoginInputType = {
    username: string;
    password: string;
};

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputType>();

    const submitHandler: SubmitHandler<LoginInputType> = (data) => {
        // Data fetching goes here.
        console.log(data);
    };

    return (
        <form
            onSubmit={handleSubmit(submitHandler)}
            className="flex flex-col gap-6 translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%]  w-[25rem] ml-20"
        >
            <h2 className="text-2xl font-bold">Login</h2>
            <div>
                {errors.username && (
                    <InputError message={errors.username.message!} />
                )}

                <input
                    placeholder="Username"
                    type="text"
                    className="border-2 w-full py-4 px-4"
                    {...register("username", {
                        required: "Username is required.",
                    })}
                />
            </div>

            <div>
                {errors.password && (
                    <InputError message={errors.password.message!} />
                )}
                <input
                    type="password"
                    placeholder="Password"
                    className="border-2 w-full py-4 px-4"
                    {...register("password", {
                        required: "Password is required.",
                        minLength: {
                            value: 6,
                            message:
                                "Password should be at least 6 character long.",
                        },
                    })}
                />
            </div>
            <div className="flex justify-between mx-4 items-center">
                <button
                    type="submit"
                    className="bg-black text-white py-3 px-10 font-semibold rounded-md hover:bg-black/75"
                >
                    Login
                </button>
                <Link to="/register" className="hover:text-blue-500">
                    Register
                </Link>
            </div>
        </form>
    );
};

export default LoginPage;
