type InputErrorProps = {
    message: string;
};

const InputError = ({ message }: InputErrorProps) => {
    return <p className="text-sm text-red-500">{message}</p>;
};

export default InputError;
