const ListingCard = () => {
    return (
        <div className="flex my-1 flex-col w-1/2 md:w-[20rem] border-2 rounded-md bg-white gap-4 shadow-md">
            {/* image  */}
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

                <button className="bg-black py-2 px-4 text-white rounded-md">
                    View Details
                </button>
            </div>
        </div>
    );
};

export default ListingCard;
