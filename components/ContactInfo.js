import {Heading} from "./Heading";

export const ContactInfo = ({contact}) => {
    const {name, email, address} = contact || {}
    const {street, suite, city, zipcode} = address || {}

    if (!contact) return <Heading text={'Contact is empty'} tag={'h3'}/>

    return <>
        <Heading text={name} tag={'h3'}/>
        <div>
            <strong>Email:</strong>
            <p>{email}</p>
        </div>
        <div>
            <strong>Address:</strong>
            <p>{`${city}, ${street}, ${suite} - ${zipcode}`}</p>
        </div>
    </>
}
