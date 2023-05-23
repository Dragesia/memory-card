export default function Card({ character, onSelect }) {
    return (
        <div className="card">
            <img src={character.src} alt={character.name} onClick={onSelect} />
            <div className="name">{character.name}</div>
        </div>
    )
}