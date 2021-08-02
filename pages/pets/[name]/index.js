import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../../../components/Card'
import formatAge from '../../../data/formatAge'
import styles from '../../../styles/PetDetails.module.css'
import PETS from '../../../data/pets.json'

export default function PetDetails(props) {
    const router = useRouter();
    const query = router.query;
    if (!router.query.name) return null;
    const pet = PETS.find(x => x.name.toLowerCase() == query.name.toLowerCase());
    if (!pet) return (
        <div className={styles.container} style={{
            textAlign: 'center'
        }}>
            <h1>Pet not found</h1>
            <p>That pet couldn't be found! Check the URL for typos and try again later.</p>
        </div>
    )
    return (
        <div className={styles.container}>
            <Card style={{
                minWidth: 450
            }}>
                {pet.image && (
                    <Image src={pet.image} width={450} height={350} layout='fixed' objectFit='cover' placeholder="blur" blurDataURL={`/_next/image?url=${pet.image}&w=16&q=1`} />
                )}
                <div className={styles.cardContent}>
                    <h1>{pet.name}</h1>
                    <p><strong>Age:</strong> {formatAge(pet.age, true)} old</p>
                    <p><strong>Available for adoption:</strong> {
                        pet.adoptable == true ? 
                            'Pick up today!'
                        : pet.adoptable == false ?
                            'Not yet (check again later)'
                        :
                            pet.adoptable
                    }</p>
                </div>
            </Card>
            <div>
                <p className={styles.description}>{pet.long_description}</p>
                <Link href={`/pets/${query.name}/adopt`}><button className={styles.actionButton} disabled={pet.adoptable != true} title={pet.adoptable != true ? 'This animal is not yet available for adoption.' : 'Click here to print the adoption form.'}>Adopt</button></Link>
            </div>
        </div>
    )
}