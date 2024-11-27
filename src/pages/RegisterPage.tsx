import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Input from "../components/Input";

type RegisterInputsType = {
    username: string;
    email: string;
    password: string;
    confirmation: string;
};
const RegisterPage = () => {
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<RegisterInputsType>();

    const onSubmit: SubmitHandler<RegisterInputsType> = (data) => {
        // Register logic goes here
        console.log(data);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white  rounded-xl shadow-lg py-10 md:px-10 flex flex-col gap-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:ml-20 sm:w-[25rem] w-full p-5"
        >
            <h2 className="text-2xl font-bold">Create an Account</h2>
            <Input
                type="text"
                name="username"
                message={errors.username && errors.username.message}
                placeholder="Username"
                register={register}
                registerOpts={{ required: "Username is required" }}
            />

            <Input
                type="email"
                name="email"
                message={errors.email && errors.email.message}
                placeholder="Email"
                register={register}
                registerOpts={{
                    required: "Email is required.",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                    },
                }}
            />

            <Input
                type="password"
                name="password"
                message={errors.password && errors.password.message}
                placeholder="Password"
                register={register}
                registerOpts={{
                    required: "Password is required",
                    minLength: {
                        value: 6,
                        message: "Password must be at least 6 character long.",
                    },
                }}
            />

            <Input
                type="password"
                name="confirmation"
                message={errors.confirmation && errors.confirmation.message}
                placeholder="Confirm Password"
                register={register}
                registerOpts={{
                    required: "Confirm your password",
                    validate: (value) =>
                        value === getValues().password ||
                        "Password do not match",
                }}
            />

            <div className="flex justify-between items-center">
                <button className="font-semibold bg-black text-white py-3 px-6 rounded-md hover:bg-black/75">
                    Register
                </button>
                <Link className="hover:text-blue-500 font-semibold" to="/login">
                    Login
                </Link>
            </div>
        </form>
    );
};

export default RegisterPage;
