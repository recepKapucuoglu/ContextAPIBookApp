import React from 'react';
import { useAppContext } from './context/appContext';

function Favoriler() {
  const { favoriler, addToFavoriler, deleteFromFavoriler } = useAppContext();

  console.log('favoriler: ', favoriler);

  const favoriKontrol = (id) => {
    const secim = favoriler.some((book) => book.id === id);
    return secim;
  };

  return (
    <div className="container">
      <div className="row">
        {favoriler.length > 0 ? (
          favoriler.map((kitap) => (
            <div key={kitap.id} className="col-md-3 my-4">
              <div className="card item-card card-block mb-3 ">
                <h6 className="card-title text-right mb-2 mt-2">
                  <i className="material-icons">{kitap.title}</i>
                </h6>
                <img src={kitap.image_url} alt="Photo of sunset" />
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
          ))
        ) : (
          <h1 className="text-center">
            Favorileri listenizde hiç bir kitap bulunmamaktadır!
          </h1>
        )}
      </div>
    </div>
  );
}

export default Favoriler;
