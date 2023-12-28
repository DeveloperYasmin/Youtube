import React from 'react'
import { USER_ICON } from '../utils/constants';

const commentsData=[
    {
    name:"Yasmin",
    text:"Good comments",
    replies:[

    ]
},
{
    name:"Yasmin",
    text:"Good comments",
    replies:[
        {
            name:"Yasmin",
            text:"Good comments",
            replies:[
                {
                    name:"Yasmin",
                    text:"Good comments",
                    replies:[
                        {
                            name:"Yasmin",
                            text:"Good comments",
                            replies:[
                        
                            ]
                        },
                    ]
                },
            ]
        },
    ]
},
{
    name:"Yasmin",
    text:"Good comments",
    replies:[
        {
            name:"Yasmin",
            text:"Good comments",
            replies:[
                {
                    name:"Yasmin",
                    text:"Good comments",
                    replies:[
                        {
                            name:"Yasmin",
                            text:"Good comments",
                            replies:[
                        
                            ]
                        },
                    ]
                },
            ]
        },
    ]
},
{
    name:"Yasmin",
    text:"Good comments",
    replies:[
        {
            name:"Yasmin",
            text:"Good comments",
            replies:[
        
            ]
        },
    ]
},

];

const Comment=({data})=>{
    const {name,text,replies}=data;
    return <div className='flex mt-8 bg-gray-200 p-2 rounded-xl w-[900px] my-2'>
<img className='w-8 h-8' src={USER_ICON} alt="user"/>
<div className='px-3'>
    <p className='font-bold'>{name}</p>
    <p>{text}</p>
</div>
    </div>
}

const CommentsList=({comments})=>{
return comments.map((comment,index)=>(
    <div key={index}>
        <Comment  data={comment}/>
        <div className='pl-5 border border-l-black border-white  ml-5 w-[1000px]'>
       <CommentsList comments={comment.replies}/>
        </div>
        </div>
    ))}
const CommentsContainer = () => {
  return (
    <div className='m-5 ml-36 p-2'><h1 className='text-2xl font-bold'>Comments:</h1>
    <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer