const Tags = ({ tags }) => {
    return (
      <div className="mt-3 flex gap-[6px] flex-wrap text-xs mb-3 leading-3">
        {" "}
        <span className="text-sm">Tags:</span>
        {
          // tags are in string, convert them to array and render each tag separately
          tags.split(" ").map((tag, index) => (
            <span
              className={`py-1 px-2 rounded-full ${
                tag.toLowerCase() === "free"
                  ? "bg-green-100 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white"
                  : tag.toLowerCase() === "premium"
                  ? "bg-orange-100 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white"
                  : tag.toLowerCase() === "featured"
                  ? "bg-[#2563eb]/10 border border-[#2563eb] text-[#2563eb] hover:bg-[#2563eb] hover:text-white"
                  : "bg-violet-100 border border-violet-600 text-violet-600 hover:bg-violet-600 hover:text-white"
              }`}
              key={index}
            >
              {tag.toUpperCase()}
            </span>
          ))
        }
      </div>
    );
};

export default Tags;
