import { useSelector } from 'react-redux';
import { RootState } from "../reducers";
import ResourceItem from "./ResourceItem";


const ResourceList = () => {

    const { mainPosts } = useSelector((state: RootState) => (state.resource));

    return <>
        {mainPosts.map((post) => {
            return <ResourceItem key={post.postId} content={post.content} viewName={post.viewName} postId={post.postId} />
        })}


        {/* {isSuccess && <ToastAlert text="성공하셨습니다!" />}

        {isFailure && <ToastAlert text="실패하셨습니다..!" />} */}
    </>

}


export default ResourceList;