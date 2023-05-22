export default function Card({ character, onSelect }) {
    return (
        <div className="card" onClick={onSelect}>
            <img src={character.src} alt={character.name} />
            <div className="name">{character.name}</div>
        </div>
    )
}