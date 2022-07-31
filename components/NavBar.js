import styles from '../styles/NavBar.module.scss'
import Link from "next/link"
import Image from 'next/image'
import {useRouter} from "next/router";

const NAVIGATION = [
    {id: 1, title: 'Home', path: '/'},
    {id: 2, title: 'Posts', path: '/posts'},
    {id: 3, title: 'Contacts', path: '/contacts'}
]

export const NavBar = () => {
    const {pathname} = useRouter()
    return <nav className={styles.nav}>
        <Image src={'/vercel.svg'} height={40} width={150} layout={'fixed'} alt={'vercel-logo'}/>
        <div className={styles.links}>
            {NAVIGATION.map(({id, title, path}) => (
                <Link key={id} href={path}>
                    <a className={pathname === path ? styles.active : null}>{title}</a>
                </Link>
            ))}
        </div>
    </nav>
}
