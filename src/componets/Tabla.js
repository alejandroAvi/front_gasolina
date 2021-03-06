import React from 'react';

function Tabla(props) {
    const {data} = props;

    return(
        <div className="table-responsive">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Calle</th>
                        <th scope="col">RFC</th>
                        <th scope="col">Razón social</th>
                        <th scope="col">Codigo postal</th>
                        <th scope="col">Colonia</th>
                        <th scope="col">Municipio</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Regular</th>
                        <th scope="col">Premium</th>
                        <th scope="col">Disel</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.lenght === 0 
                            ?"" 
                            :data.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{value._id}</td>
                                        <td>{value.calle}</td>
                                        <td>{value.rfc}</td>
                                        <td>{value.razonsocial}</td>
                                        <td>{value.codigopostal}</td>
                                        <td>{value.colonia}</td>
                                        <td>{value.municipio}</td>
                                        <td>{value.state}</td>
                                        <td>{value.regular}</td>
                                        <td>{value.premium}</td>
                                        <td>{value.disel}</td>
                                    </tr>
                                );
                            })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Tabla;