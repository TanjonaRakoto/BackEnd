import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios';

import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/Navbar-Centered-Brand-icons.css'

function State() {
    
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://wss5enchere-production.up.railway.app/state')
        .then(
            res=>{
                setData(res.data);
            }
        ).catch(
            error=>{
                console.error(error);
            }
        )
    },[])

    const [data1, setData1] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
            const response = await axios.get('https://wss5enchere-production.up.railway.app/getMongo');
                setData1(response.data);
            };

            fetchData();
        }, []);

        console.log(data1) ;

    return(
        <div>
            <nav className='navbar navbar-dark navbar-expand-md bg-dark py-3'>
                <div className='container'><span className='bs-icon-sm bs-icon-rounded bs-icon-primary d-flex justify-content-center align-items-center me-2 bs-icon'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 16 16' className='bi bi-bezier'>
                    </svg></span><span>Enchere</span><button data-bs-toggle='collapse' className='navbar-toggler' data-bs-target='#navcol-5'><span className='visually-hidden'>Toggle navigation</span><span className='navbar-toggler-icon'></span></button>
                    <div className='collapse navbar-collapse' id='navcol-5'>
                        <ul className='navbar-nav ms-auto'>
                            <li className='nav-item'><a className='nav-link' href='/Accueil'>Enchere en cours</a></li>
                            <li className='nav-item'><a className='nav-link' href='/Historique'>Historique</a></li>
                            <li className='nav-item'><a className='nav-link' href='/State'>State</a></li>
                            <li className='nav-item'><a className='nav-link' href='/Recharge'>Recharge</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 style={{textAlign: 'center'}}>Statistique nombre de mise</h1>
            {data.map(chiffre=>
            <div className='container py-4 py-xl-5' style={{marginRight: '5%',marginLeft: '5%',width: 'auto'}}>
                <div className='row gy-4 row-cols-2 row-cols-md-4'>
                    <div className='col'>
                        <div className='text-center d-flex flex-column justify-content-center align-items-center py-3'>
                            <div className='bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 16 16' className='bi bi-bell'>
                                    <path d='M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z'></path>
                                </svg></div>
                            <div className='px-3'>
                                <h2 className='fw-bold mb-0' id='max'>{chiffre.max}</h2>
                                <p className='mb-0'>Nombre de mise maximal</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='text-center d-flex flex-column justify-content-center align-items-center py-3'>
                            <div className='bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 16 16' className='bi bi-bezier'>
                                    <path fill-rule='evenodd' d='M0 10.5A1.5 1.5 0 0 1 1.5 9h1A1.5 1.5 0 0 1 4 10.5v1A1.5 1.5 0 0 1 2.5 13h-1A1.5 1.5 0 0 1 0 11.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm10.5.5A1.5 1.5 0 0 1 13.5 9h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zM6 4.5A1.5 1.5 0 0 1 7.5 3h1A1.5 1.5 0 0 1 10 4.5v1A1.5 1.5 0 0 1 8.5 7h-1A1.5 1.5 0 0 1 6 5.5v-1zM7.5 4a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z'></path>
                                    <path d='M6 4.5H1.866a1 1 0 1 0 0 1h2.668A6.517 6.517 0 0 0 1.814 9H2.5c.123 0 .244.015.358.043a5.517 5.517 0 0 1 3.185-3.185A1.503 1.503 0 0 1 6 5.5v-1zm3.957 1.358A1.5 1.5 0 0 0 10 5.5v-1h4.134a1 1 0 1 1 0 1h-2.668a6.517 6.517 0 0 1 2.72 3.5H13.5c-.123 0-.243.015-.358.043a5.517 5.517 0 0 0-3.185-3.185z'></path>
                                </svg></div>
                            <div className='px-3'>
                                <h2 className='fw-bold mb-0' id='min'>{chiffre.min}</h2>
                                <p className='mb-0'>Nombre de mise minimal</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='text-center d-flex flex-column justify-content-center align-items-center py-3'>
                            <div className='bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 16 16' className='bi bi-cup'>
                                    <path d='M1 2a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v1h.5A1.5 1.5 0 0 1 16 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-.55a2.5 2.5 0 0 1-2.45 2h-8A2.5 2.5 0 0 1 1 12.5V2zm13 10h.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5H14v8zM13 2H2v10.5A1.5 1.5 0 0 0 3.5 14h8a1.5 1.5 0 0 0 1.5-1.5V2z'></path>
                                </svg></div>
                            <div className='px-3'>
                                <h2 className='fw-bold mb-0' id='avg'>{chiffre.avg}</h2>
                                <p className='mb-0'>Nombre de mise moyenne</p>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <div className='text-center d-flex flex-column justify-content-center align-items-center py-3'>
                            <div className='bs-icon-xl bs-icon-circle bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block mb-2 bs-icon lg'><svg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' fill='currentColor' viewBox='0 0 16 16' className='bi bi-cart2'>
                                    <path d='M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z'></path>
                                </svg></div>
                            <div className='px-3'>
                                <h2 className='fw-bold mb-0' id='ecart'>{chiffre.sqrt}</h2>
                                <p className='mb-0'>Ecart type</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
            
                <div style={{marginRight: '10%',marginLeft: '10%'}}>
                    <h3>Statistique participation</h3>
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Montant</th>
                                <th>Nom materielle</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data1.map(mongo=>
                            <tr>
                                <td style={{width: '25%'}}>{mongo._id.date}</td>
                                <td style={{width: '25%'}}>{mongo.joueur.montant}</td>
                                <td style={{width: '25%'}}>{mongo.materielle.nom}</td>
                            </tr>
                        )}
                        </tbody>
                    
                    </table>
                    
                </div>
            
        </div>
    );
}

export default State;