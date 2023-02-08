export default function Card(props){
    return <div className="card">
    <a className="block max-w-sm p-6 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{props.location}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Tarih: {props.date}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Büyüklük: {props.magnitude}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Derinlik: {props.depth}km</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Enlem: {props.lat}</p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Boylam: {props.lng}</p>
    </a>
    </div>
}