import MarkdownEditor from "@uiw/react-markdown-editor";



function NewBlog(){


    return(
        <div>
          <h1>New Blog</h1>  
          <MarkdownEditor
          value={""}
          onChange={(value)=> {
            console.log("value:", value);
          }}
          height="500px"
          />
        </div>
    )
}

export default NewBlog;