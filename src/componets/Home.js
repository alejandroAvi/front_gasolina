import React, { useState } from 'react';
import Footer from "./Footer";
import Formulario from "./Formulario";
import Mapas from "./Mapas";
import Header from './Header';
import Tabla from './Tabla';

function Home() {
    const [data, setData] = useState([]);

    return(
 
        <>
            <Header/>

            <main role="main" className="flex-shrink-0 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <Formulario setData={setData} />
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <Mapas data={data}/> 
                        </div>
                    </div>
                    <hr className="featurette-divider" />
                    <Tabla data={data}/>
                </div>
            </main>
            <Footer />

        </>

    )
}
 
export default Home;