import {Heading} from "./Heading";

export const PostInfo = ({post}) => {
    const {title, body} = post || {}
    if (!post) return <Heading tag={'h3'} text={'Post is empty'}/>

    return <>
        <Heading tag={'h3'} text={title}/>
        <p>{body}</p>
    </>
}
