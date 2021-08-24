import React from 'react';

const Cards = () => {
    return (<div className="container card-deck">
        <div className="row col-md-12 d-flex justify-content-center text-dark">
            <p>LO MAS VENDIDO</p>
        </div>
        <div className="card">
            <img src="https://vanscl.vtexassets.com/arquivos/ids/595631-1200-auto?width=1200&height=auto&aspect=true" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">ZAPATILLAS MN SKATE SK8-HI BLACK/WHITE</h5>
                <p className="card-text">Completamente rediseñada con skaters en mente, la línea Skate Classics totalmente nueva ofrece más de lo que los skaters
                    necesitan para permitir progresión máxima.</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-lg">COMPRAR AHORA</button>
            </div>
        </div>
        <div className="card">
            <img src="https://vanscl.vtexassets.com/arquivos/ids/592473-1200-auto?width=1200&height=auto&aspect=true" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">ZAPATILLAS MN OLD SKOOL BLACK/WHITE</h5>
                <p className="card-text">Completamente rediseñada con skaters en mente, la línea Skate Classics totalmente nueva ofrece más de lo que los skaters
                    necesitan para permitir progresión máxima.</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-lg">COMPRAR AHORA</button>
            </div>
        </div>
        <div className="card">
            <img src="https://vanscl.vtexassets.com/arquivos/ids/595744-1200-auto?width=1200&height=auto&aspect=true" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">ZAPATILLAS SLIP-ON BLACK/OFF WHITE</h5>
                <p className="card-text">Completamente rediseñada con skaters en mente, la línea Skate Classics totalmente nueva ofrece más de lo que los skaters
                    necesitan para permitir progresión máxima.</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-lg">COMPRAR AHORA</button>
            </div>
        </div>
        <div className="card">
            <img src="https://vanscl.vtexassets.com/arquivos/ids/595608-1200-auto?width=1200&height=auto&aspect=true" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">ZAPATILLAS MN SKATE SK8-HI OFF WHITE</h5>
                <p className="card-text">Completamente rediseñada con skaters en mente, la línea Skate Classics totalmente nueva ofrece más de lo que los skaters
                    necesitan para permitir progresión máxima.</p>
            </div>
            <div className="card-footer">
                <button type="button" class="btn btn-primary btn-lg">COMPRAR AHORA</button>
            </div>
        </div>
    </div>);
}

export default Cards;