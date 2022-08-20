import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { KITAP_DETAY_URL } from '../API';

function KitapDetay() {
  const [kitap, setKitap] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${KITAP_DETAY_URL}/${id}`)
      .then((res) => setKitap(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-3 my-3">
          <div>
            <h2>{kitap.title}</h2>
          </div>
          <div>
            <img src={kitap.image_url} alt="" />
          </div>
        </div>
        <div className="col-md-8 my-3">
          <h2>
            Yazar Adı: <b>{kitap.authors} </b>
          </h2>
          <h2>
            Türü Adı: <b>{kitap.genres} </b>
          </h2>
          <div>
            <h2>Özet: </h2>
            <h3>{kitap.description}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KitapDetay;
