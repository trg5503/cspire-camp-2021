import ImageCard from './ImageCard'
import formatAge from '../data/formatAge'

export default function PetCard({ pet }) {
    return (
        <ImageCard url={`/pets/${pet.name.toLowerCase()}`} image={pet.image} title={pet.name}>
            {pet.name} is a {formatAge(pet.age)} old {pet.type.toLowerCase()}. {pet.summary}
        </ImageCard>
    )
}