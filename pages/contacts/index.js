import {Heading} from "../../components/Heading";
import Head from "next/head";

const Contacts = () => {
    return <div>
        <Head>
            <title>Contacts</title>
        </Head>
        <Heading text={'Contacts list:'}/>
        <p>This is a users contacts</p>
    </div>
}

export default Contacts
