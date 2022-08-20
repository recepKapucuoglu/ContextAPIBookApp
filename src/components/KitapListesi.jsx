import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_URL } from '../API';
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

function KitapListesi() {
  const [kitaplar, setKitaplar] = useState([]);

  const { favoriler, addToFavoriler, deleteFromFavoriler } = useAppContext();

  const navigate = useNavigate();

  const favoriKontrol = (id) => {
    const secim = favoriler.some((book) => book.id === id);
    return secim;
  };

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => setKitaplar(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(kitaplar);
  return (
    <div className="container">
      <h1 className="text-center my-5"> Kitap Listesi </h1>
      <div className="row">
        {kitaplar.map((kitap) => (
          <div key={kitap.id} className="col-md-3 my-4">
            <div className="card item-card card-block mb-3 ">
              <h6 className="card-title text-right mb-2 mt-2">
                <i className="material-icons">{kitap.title}</i>
              </h6>
              <img
                src={kitap.image_url}
                alt="#"
                onClick={() => navigate(`/books/${kitap.id}`)}
              />
              <h5 className="item-card-title mt-3 mb-3">
                Yazar: {kitap.authors}
              </h5>
              <h6 className="item-card-title mt-3 mb-3">
                <i> {kitap.Quote1} </i>
              </h6>
              {favoriKontrol(kitap.id) ? (
                <button
                  className="btn btn-warning btn-outlined mb-2"
                  onClick={() => deleteFromFavoriler(kitap.id)}
                >
                  Favorilerden Kaldır
                </button>
              ) : (
                <button
                  className="btn btn-warning btn-outlined mb-2"
                  onClick={() => addToFavoriler(kitap)}
                >
                  Favorilere Ekle
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KitapListesi;
