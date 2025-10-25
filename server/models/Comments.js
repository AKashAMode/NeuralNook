import {model, Schema} from 'mongoose';


const userCommentSchema = new Schema(

    {
      content: {type: String, required: true},
      user: {type: Schema.Types.ObjectId, ref: "User", required: true},
      blog: {type: Schema.Types.ObjectId, ref: "Blog", required: true},
    },

    {
        timestamps: true,
    }
);


const Comment = ("Comment", userCommentSchema);

export default Comment;