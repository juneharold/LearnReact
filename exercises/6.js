import './index.css';

export default function Card(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            {props.children}
        </div>
    )
}