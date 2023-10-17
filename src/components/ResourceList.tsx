import { useSelector } from 'react-redux';
import { RootState } from "../reducers";
import ResourceItem from "./ResourceItem";


const ResourceList = () => {

    const { mainPosts } = useSelector((state: RootState) => (state.resource));

    return <div style={{ marginTop: "10px" }}>
        {mainPosts.map((post) => {
            return <ResourceItem key={post.postId} post={post} />
        })}


        {/* {isSuccess && <ToastAlert text="성공하셨습니다!" />}

        {isFailure && <ToastAlert text="실패하셨습니다..!" />} */}
    </div>

}


export default ResourceList;