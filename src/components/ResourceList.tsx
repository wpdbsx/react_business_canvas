import { useSelector } from 'react-redux';
import { RootState } from "../reducers";
import ResourceItem from "./ResourceItem";


const ResourceList = () => {

    const { mainPosts } = useSelector((state: RootState) => (state.resource));

    return <div style={{ marginTop: "10px" }}>
        {mainPosts.map((post) => {
            return <ResourceItem key={post.postId} post={post} />
        })}
    </div>

}


export default ResourceList;