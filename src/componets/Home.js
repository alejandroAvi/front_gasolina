import React, {useState, useEffect} from 'react';
import Footer from "./Footer";
import Formulario from "./Formulario";
import Mapa from "./Mapa";
import Header from './Header';
import Tabla from './Tabla';

function Home() {
    const [data, setData] = useState([]);
    useEffect(() => {
        
    }, [data]);
    console.log(data);

    return(
 
        <>
            <Header/>

            <main role="main" className="flex-shrink-0 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Formulario setData={setData} />
                        </div>
                        <div className="col-6">
                            <Mapa /> 
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