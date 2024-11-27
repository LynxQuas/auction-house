import ListingCard from "../../components/ListingCard";

const ActiveListingsPage = () => {
    return (
        <section>
            {/* Header goes here eg.search, filter,  */}
            <div></div>

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
