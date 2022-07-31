import {Heading} from "../components/Heading";
import {useEffect} from "react";
import {useRouter} from "next/router";

const Error = () => {
    const router = useRouter()
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/').finally(() => {
                clearTimeout(timer)
            })
        }, 3000)
    }, [router])
    return <div>
        <Heading text={'404'}/>
        <Heading text={'Something went wrong...'} tag={'h3'}/>
    </div>
}

export default Error
