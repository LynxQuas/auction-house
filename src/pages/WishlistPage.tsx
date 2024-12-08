import ListingCard from "../components/ListingCard";

const WishlistPage = () => {
    return (
        <section>
            <h3 className="text-center font-bold text-3xl py-10">
                Your Wishlist Items.
            </h3>
            <div className="flex flex-wrap md:gap-4 md:justify-center">
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
                <ListingCard />
            </div>
        </section>
    );
};

export default WishlistPage;
