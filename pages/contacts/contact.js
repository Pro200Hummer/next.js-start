import {Heading} from "../../components/Heading";
import Head from "next/head";

const Contact = () => {
    return <div>
        <Head>
            <title>Contact</title>
        </Head>
        <Heading text={'Current contact'}/>
        <p>This is a user contact</p>
    </div>
};

export default Contact;
