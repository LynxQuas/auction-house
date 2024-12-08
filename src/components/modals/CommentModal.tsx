const CommentModal = () => {
    return (
        <div className="flex gap-8 flex-col absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            {/* This needs to replace with actual user's component  */}
            <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-black rounded-full" />
                <span>Username</span>
            </div>

            <textarea
                className="border-2 resize-none px-4 py-2"
                rows={5}
                cols={40}
                placeholder="Comment"
            ></textarea>
            <button className="bg-black text-white py-2 rounded-md">
                Comment
            </button>
        </div>
    );
};

export default CommentModal;
