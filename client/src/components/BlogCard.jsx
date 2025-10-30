

function BlogCard({_id, title, content, author,publishedAt, createdAt, updatedAt, status, category, slug}){

    return(
        <div className="border p-4 m-4 rounded relative">
          <h1>{title}</h1>

          <div>

            <div className="flex items-center gap-4 my-2">
                <span className="flex items-center justify-center font-semibold w-[50px] h-[50px]
                bg-orange-400 text-center text-white rounded-full text-3xl">
                   {author.name.substring(0, 1)}
                </span>{" "}
                <div>
                    <p>{author.name}</p>
                    <p>{author.email}</p>
                </div>
            </div>
          </div>
          
          <p className="text-sm mt-2">Published On: {new Date(publishedAt || updatedAt).toLocaleDateString()}</p>
          <span className="absolute top-2 right-2 border rounded-md p-1 text-gray-700 font-semibold px-2 py-1" >
            {category}
          </span>

          <button className="absolute text-white bg-gray-800 px-6 py-2 rounded-md absolute bottom-4 right-4 cursor-pointer ">
            Read More
          </button>

        </div>
    )
}

export default BlogCard;