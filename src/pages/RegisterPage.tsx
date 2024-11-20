import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import InputError from "../components/InputError";

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
            className="flex flex-col gap-5 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ml-20 w-[25rem]"
        >
            <h2 className="text-2xl font-bold">Create an Account</h2>
            <div>
                {errors.username && (
                    <InputError message={errors.username.message!} />
                )}
                <input
                    type="text"
                    placeholder="Username"
                    className="p-4 border-2 w-full"
                    {...register("username", {
                        required: "Username is required",
                    })}
                />
            </div>
            <div>
                {errors.email && <InputError message={errors.email.message!} />}
                <input
                    type="email"
                    placeholder="Email"
                    className="p-4 border-2 w-full"
                    {...register("email", {
                        required: "Email is required.",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                        },
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
                    className="p-4 border-2 w-full"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 6,
                            message:
                                "Password must be at least 6 character long.",
                        },
                    })}
                />
            </div>

            <div>
                {errors.confirmation && (
                    <InputError message={errors.confirmation.message!} />
                )}
                <input
                    type="password"
                    placeholder="Confirm Password"
                    className="p-4 border-2 w-full"
                    {...register("confirmation", {
                        required: "Confirm your password",
                        validate: (value) =>
                            value === getValues().password ||
                            "Password do not match",
                    })}
                />
            </div>
            <div className="flex justify-between items-center mx-4">
                <button className="font-semibold bg-black text-white py-3 px-4 rounded-md hover:bg-black/75">
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
