import styles from '../../styles/AllPets.module.css'
import PetCard from '../../components/PetCard'
import PETS from '../../data/pets.json'

export default function Pets() {
    return (
        <div className={styles.container}>
            <h1>All Pets</h1>
            <div className={styles.petsContainer}>
                {PETS.map(pet => (
                    <PetCard pet={pet} />
                ))}
            </div>
        </div>
    )
}