import React, { useEffect, useState } from "react";
import '../css/Deprem.css'
import '../css/Card.css'
export default function Deprem() {
	const [users, setUsers] = useState([]);

	const getApiData = async () => {
    const response = await fetch(
      "https://api.orhanaydogdu.com.tr/deprem/live.php?limit=500"
    );
	const json = await response.json();
	setUsers(json.result)
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
	<div>
		{users.length > 0 && users.map(deprem => (
		<div className="card" id="card">
		<h4 className="card-body mt-4">{deprem.lokasyon ? deprem.lokasyon : <h4>Yer bulunamadı</h4>}</h4>
		<hr/>
		<div className="card-body">
		<p className="card-text">Tarih: <b>{deprem.date ? deprem.date : <p>Deprem tarihi bulunamadı</p> } </b></p>
		<p className="card-text">Büyüklük: <b>{deprem.mag ? deprem.mag : <p>Deprem şiddeti bulunamadı</p>}</b></p>
		<p className="card-text">Derinlik: <b>{deprem.depth ? deprem.depth : <p>Deprem derinliği bulunamadı</p>}km </b></p>
		<p className="card-text">Enlem: <b>{deprem.lat ? deprem.lat : <p>Deprem eni bulunamadı</p>}km </b></p>
		<p className="card-text">Boylam: <b>{deprem.lng ? deprem.lng : <p>Deprem boylamı bulunamadı</p>}km </b></p>
		</div>
		</div>
		))}
	</div>
  );
}