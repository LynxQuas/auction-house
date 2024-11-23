import {
    FieldValues,
    UseFormRegister,
    RegisterOptions,
    Path,
} from "react-hook-form";

type InputPropType<T extends FieldValues> = {
    type: string;
    name: Path<T>; // react-hook-fomr use Path Type
    placeholder: string;
    message?: string;
    register: UseFormRegister<T>;
    registerOpts: RegisterOptions<T>;
};

const Input = <T extends FieldValues>({
    type,
    name,
    placeholder,
    message,
    register,
    registerOpts,
}: InputPropType<T>) => {
    return (
        <div className="flex flex-col">
            {message && <p className="text-sm text-red-500">{message}</p>}
            <input
                placeholder={placeholder}
                type={type}
                id={name}
                className="w-full border-2 py-2 px-4"
                {...register(name, registerOpts)}
            />
        </div>
    );
};

export default Input;
