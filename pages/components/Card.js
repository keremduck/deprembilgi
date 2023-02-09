export default function Card(props){
    return <div className="card">
    <a className="block max-w-sm p-6 rounded-lg shadow">
    <span class="bg-indigo-100 text-indigo-800 text-xl font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-indigo-900 dark:text-indigo-300">Büyüklük: {props.magnitude}</span>
        <h5 className="mb-2 text-2xl font-bold tracking-tight dark:text-white">{props.location}</h5>
        <p className="font-normal">Tarih: <b>{props.date}</b></p>
        <p className="font-normal">Derinlik: <b>{props.depth}km</b></p>
        <p className="font-normal">Enlem: <b>{props.lat}</b></p>
        <p className="font-normal">Boylam: <b>{props.lng}</b></p>
    </a>
    </div>
}   