import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../components/Input";

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
        <div className=" md:w-[30rem] w-screen p-5 md:h-[25rem] translate-x-[-50%] translate-y-[-50%] absolute top-[50%] left-[50%] sm:w-[25rem] md:ml-20 flex flex-col justify-center items-center">
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="bg-white flex flex-col gap-5 w-full md:p-10 py-10 px-5 rounded-xl shadow-md"
            >
                <h2 className="text-2xl font-bold">Login</h2>
                <Input
                    placeholder="Username"
                    type="text"
                    name="username"
                    register={register}
                    registerOpts={{ required: "Username is required" }}
                    message={errors.username && errors.username.message}
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    register={register}
                    message={errors.password && errors.password.message}
                    registerOpts={{
                        required: "Password is required.",
                        minLength: {
                            value: 6,
                            message:
                                "Password should be at least 6 character long.",
                        },
                    }}
                />

                <div className="flex justify-between items-center">
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
        </div>
    );
};

export default LoginPage;
