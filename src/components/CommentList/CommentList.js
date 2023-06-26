import CommentListItem from "../CommentListItem/CommentListItem.js"

export default function CommentList({comments}){
    return (
        <>
        {comments.length && comments.map((comment)=>(<CommentListItem key={comment._id} comment={comment}/>)) }
        </>
    )
}

