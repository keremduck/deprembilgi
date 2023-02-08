export default function Card(props){
    return <div className="card">
    <a className="block max-w-sm p-6 rounded-lg shadow">
        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{props.location}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Tarih: <b>{props.date}</b></p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Büyüklük: <b>{props.magnitude}</b></p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Derinlik: <b>{props.depth}km</b></p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Enlem: <b>{props.lat}</b></p>
        <p className="font-normal text-gray-700 dark:text-gray-400">Boylam: <b>{props.lng}</b></p>
    </a>
    </div>
}