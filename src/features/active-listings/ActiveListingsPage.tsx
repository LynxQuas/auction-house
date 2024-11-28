import ListingCard from "../../components/ListingCard";

const ActiveListingsPage = () => {
    return (
        <section>
            {/* Header goes here eg.search, filter,  */}
            <div className="bg-white p-4 md:px-10 my-4 md:rounded-md py-10 flex flex-wrap flex-col md:flex-row md:justify-between gap-4 justify-center items-center sticky top-0 shadow-lg">
                <div className="w-full shrink-0 md:w-[25rem] flex gap-2">
                    <input
                        type="search"
                        placeholder="Search Active Lisitngs"
                        className="py-2 px-4 border-2 w-full"
                    />
                    <button className="bg-green-500 py-2 px-4 rounded-md text-white">
                        Search
                    </button>
                </div>

                <div className="flex gap-10 items-center">
                    <button className="border-2 py-2 px-4">SORT BY</button>
                    <button className="border-2 py-2 px-4">FILTER BY</button>
                </div>
            </div>

            {/* Display Cards */}
            <div className="flex  flex-wrap md:gap-8 md:justify-center">
                <ListingCard />
                <ListingCard />
                <ListingCard />

                <ListingCard />
                <ListingCard />
                <ListingCard />

                <ListingCard />
                <ListingCard />
                <ListingCard />

                <ListingCard />
                <ListingCard />
                <ListingCard />
            </div>

            {/* Pagination section */}
            <div></div>
        </section>
    );
};

export default ActiveListingsPage;
