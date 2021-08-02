import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Card.module.css'

export default function ImageCard(props) {
    return (
        <Link href={props.url}>
            <div className={styles.card + ' ' + styles.cardLink} style={{
                width: 300
            }}>
                {props.image && (
                    <Image src={props.image} width={300} height={200} layout='fixed' objectFit='cover' placeholder="blur" blurDataURL={`/_next/image?url=${props.image}&w=16&q=1`} />
                )}
                {props.title && (
                    <h2 className={styles.text}>{props.title}</h2>
                )}
                <p className={styles.text}>{props.children}</p>
            </div>
        </Link>
    )
}