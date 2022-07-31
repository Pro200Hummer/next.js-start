import {Heading} from "../../components/Heading";
import Head from "next/head";

export const getStaticProps = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    if(!data){
        return {
            notFound: true
        }
    }

    return {
        props: {
            contacts: data
        }
    }
}

const Contacts = ({contacts}) => {
    return <div>
        <Head>
            <title>Contacts</title>
        </Head>
        <Heading text={'Contacts list:'}/>
        <ul>
            {
                contacts && contacts.map(({id, name, email}) => {
                    return <li key={id}>
                        <p>id - {id}</p>
                        <strong>name - {name}</strong>
                        <p>email - {email}</p>
                    </li>
                })
            }
        </ul>
    </div>
}

export default Contacts
