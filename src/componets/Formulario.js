import React from 'react';
import { getPrice } from '../contantes/api';
import { useForm } from "react-hook-form";
 
function Formulario({setData}) {
    const {register, handleSubmit, errors } = useForm();
    const onSubmit = ({municipio,estado,ordenar}) => {   
        getPrice(municipio,estado,ordenar)
          .then(response => {
            console.log(response);
            setData(response.results);
          }).catch(error => {
            console.log(error);
        })
    }; 

    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="col-10">
                    <div className="form-group">
                        <label  className="negrita">Estado:</label>
                        <input type="text" className="form-control" name="estado" ref={register}/>            
                    </div>
        
                    <div className="form-group">
                        <label className="negrita">Municipio:</label>
                        <input type="text" className="form-control" name="municipio" ref={register}/>
                    </div>

                    <div className="form-group">
                        <label className="negrita">Ordenar por precio</label>
                        <select className="form-control" name="ordenar" ref={register}>
                            <option value="0">Menor a mayor</option>
                            <option value="1">Mayor a menor</option>
                        </select>
                    </div>
        
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </div>
            </form>
        </div>
    )
}
 
export default Formulario;