import { RootState } from "../reducers";
import ResourceItem from "./ResourceItem";
import { useSelector } from 'react-redux';

const ResourceList = () => {

    const { mainPosts } = useSelector((state: RootState) => (state.resource));

    return <>
        {mainPosts.map((post) => {
            return <ResourceItem key={post.postId} content={post.content} postId={post.postId} />
        })}

    </>

}


export default ResourceList;