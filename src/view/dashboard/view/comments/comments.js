import React,{useState, useEffect} from 'react';
import { getComments } from '../../../../service/newsService';

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect (() => {
        getComment();
    }, []);

    const getComment = async () => {
        const data = await getComments();
        const backendComments = data.data;
        setComments(backendComments);

        console.log(backendComments, 1);
    }

    console.log('react 1111');
    return(
        <div>
            Comments
        </div>
    )
    
}

export default Comments;