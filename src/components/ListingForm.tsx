import { SubmitHandler, useForm } from "react-hook-form";
import Input from "./Input";
import InputError from "./InputError";

type ListingFormTypes = {
    title: string;
    description: string;
    categories: string;
    price: number;
    endDate: Date;
};

const ListingForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ListingFormTypes>();

    const onSubmit: SubmitHandler<ListingFormTypes> = (data) => {
        console.log(data);
    };

    return (
        <div className="absolute w-full p-4 md:w-[30rem] md:ml-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    name="title"
                    placeholder="Title"
                    register={register}
                    registerOpts={{ required: "Title is required" }}
                    message={errors.title && errors.title.message}
                />
                <div className="w-full flex flex-col">
                    {errors.description && (
                        <InputError message={errors.description.message!} />
                    )}
                    <textarea
                        cols={10}
                        rows={5}
                        placeholder="Description"
                        className="py-2 px-4 border-2 resize-none "
                        {...register("description", {
                            required: "Description is required",
                        })}
                    ></textarea>
                </div>

                <div className="flex items-center w-full gap-4">
                    <Input
                        type="number"
                        name="price"
                        placeholder="Price"
                        register={register}
                        registerOpts={{ required: "Price is required" }}
                        message={errors.price && errors.price.message}
                    />

                    {/* Replace with Select  */}
                    <Input
                        type="text"
                        name="categories"
                        placeholder="Categories"
                        register={register}
                        registerOpts={{ required: "Categories is required" }}
                        message={errors.categories && errors.categories.message}
                    />
                </div>

                <div className="flex flex-col gap-4 w-full">
                    <label htmlFor="end-date">Select End Date:</label>
                    <Input
                        type="date"
                        name="endDate"
                        placeholder="Title"
                        register={register}
                        registerOpts={{ required: "End date is required" }}
                        message={errors.endDate && errors.endDate.message}
                    />
                </div>
                <button className="text-white bg-black py-2 rounded-md">
                    Create
                </button>
            </form>
        </div>
    );
};

export default ListingForm;
