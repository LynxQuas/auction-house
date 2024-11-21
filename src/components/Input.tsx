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
    className: string;
};

const Input = <T extends FieldValues>({
    type,
    name,
    placeholder,
    message,
    register,
    registerOpts,
    className,
}: InputPropType<T>) => {
    return (
        <div>
            <p className="text-sm text-red-500">{message}</p>
            <input
                placeholder={placeholder}
                type={type}
                className={className}
                {...register(name, registerOpts)}
            />
        </div>
    );
};

export default Input;
