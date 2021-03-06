import React from 'react'

function Header() {
    return (
        <header className="masthead d-flex">
            <div className="container text-center my-auto">
                <h1 className="mb-1">Precios de gasolina</h1>
                <h3 className="mb-5">
                    <em>Consulta los precios de cualquier ubicación</em>
                </h3>
            </div>
            <div className="overlay"></div>
        </header>
    )
}

export default Header;