import { useParams } from "react-router-dom";

const ListingDetails = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            {/* Listing Title  */}
            <h3 className="text-3xl text-center pt-4 font-bold">
                Lising title
            </h3>

            {/* Listing Image and Content detail  */}
            <div className="flex flex-col lg:flex-row py-6 px-4 lg:px-10 gap-8">
                {/* Listing Image */}
                <div className="bg-black w-full lg:w-1/2 h-[20rem] rounded-lg"></div>

                {/* listing Content  */}
                <div className="flex flex-col lg:w-1/2 gap-4">
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Vero voluptatibus quos quia nulla voluptates obcaecati
                        animi, voluptatem modi dolores. Provident corrupti neque
                        doloribus eum iusto commodi dolor in nisi illum.
                        Voluptatem, velit nulla. Numquam itaque obcaecati ut
                        sunt iure eaque ratione temporibus dolor deserunt,
                        exercitationem placeat non pariatur quam optio. Alias
                        necessitatibus quia, quibusdam id iste aut ullam dolorum
                        delectus. Distinctio perferendis et id libero totam
                        laborum! Facilis voluptatibus accusantium natus impedit
                        officiis quo sunt dolore consequatur in, nihil amet
                        inventore! Voluptas et consectetur accusantium ex optio
                        deserunt alias ratione? Consectetur magni aliquam labore
                        eligendi ex ut distinctio, error facere dolore at sunt
                        ad amet saepe fugiat maiores dolorum magnam ea? Numquam
                        veritatis exercitationem excepturi, nihil eligendi
                        similique eveniet totam!
                    </p>

                    <span>
                        Bid price: <span>$300</span>
                    </span>

                    <div>End In: 00:00:00</div>
                </div>
            </div>

            <div className="flex justify-center gap-8 py-10">
                <button className="bg-black py-2 px-4 text-white rounded-md">
                    Add Bid
                </button>

                <button className="bg-green-500 py-2 px-4 text-white rounded-md">
                    Comment
                </button>
            </div>

            {/* Comment Section */}
            <div className="flex flex-col gap-10 mx-4 lg:mx-10">
                <div className="flex flex-col gap-8 border-2 border-black p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-black rounded-full" />
                        <p>username</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>
                            officia sapiente hic impedit dolore nobis quos
                            facere suscipit, asperiores voluptate vero,
                            blanditiis unde eum eius. Ratione repellat autem
                            nemo minima. Inventore id nobis modi facere
                            mollitia, sit eveniet repellat veritatis soluta vero
                            laborum unde, eum corrupti! Placeat explicabo
                            veritatis laudantium fugit quas commodi repudiandae
                            nam! Nulla architecto nesciunt itaque temporibus?
                            Ipsam incidunt rerum molestias est ea ad, obcaecati
                            veritatis, qui libero dignissimos, vel voluptatem.
                            Quis blanditiis soluta vel eos? Praesentium, illo
                            expedita nulla facere deleniti consectetur ut
                            dolorem debitis nobis. Dignissimos deserunt debitis
                            autem dolorum facilis, officiis eligendi optio nemo,
                            iusto earum et hic impedit voluptates quidem
                            adipisci facere iste molestiae dolor unde, voluptas
                            quam eos labore neque? Exercitationem, obcaecati?
                        </p>
                        <span className="text-sm text-gray-400">
                            3 minutes ago.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-8 border-2 border-black p-4  rounded-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-black rounded-full" />
                        <p>username</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>This will be user comment text.</p>
                        <span className="text-sm text-gray-400">
                            3 minutes ago.
                        </span>
                    </div>
                </div>

                <div className="flex flex-col gap-8 border-2 border-black p-4 rounded-lg">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-black rounded-full" />
                        <p>username</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>This will be user comment text.</p>
                        <span className="text-sm text-gray-400">
                            3 minutes ago.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingDetails;
