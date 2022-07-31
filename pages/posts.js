import {Heading} from "../components/Heading";
import Head from "next/head";

const Posts = () => {
    return <div>
        <Head>
            <title>Posts</title>
        </Head>
        <Heading text={'Posts list:'}/>
        <p>This is a users posts</p>
    </div>
}

export default Posts
