import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";

const ListingCard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex my-1 flex-col w-1/2 md:w-[20rem] border-2 rounded-md bg-white gap-2 shadow-md">
            {/* image  */}
            {/* high needs to change  */}
            <div className="w-full h-[10rem] bg-black rounded-md" />

            <div className="flex flex-col gap-4 p-4">
                <h2 className="md:text-xl font-semibold">Listing Title</h2>
                <p className="md:block hidden">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    expedita omnis veritatis facere.
                </p>

                <div className="flex gap-4 items-center">
                    <span>
                        <b>Price: </b>
                        $200
                    </span>
                    <span>
                        <b>End in: </b>
                        0:24:30
                    </span>
                </div>
                <div className="flex gap-4 items-center">
                    <IoHeartOutline className="w-6 h-6 cursor-pointer hidden" />
                    <FaHeart className="w-6 h-6 text-red-500 cursor-pointer hover:text-red-600" />
                    <button
                        onClick={() => navigate("/active-listings/1")} // just for test need to fix.
                        className="bg-black py-2 px-4 text-white rounded-md grow"
                    >
                        View Details
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ListingCard;
