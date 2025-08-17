import type { Feedback } from '../../Types/Feedback';

export default function Feedback({name, rating, description} : Feedback){
    return (
        <div>
            <h1>{name}</h1>
            <p>{rating}</p>
            <p>{description}</p>
        </div>
    )
}