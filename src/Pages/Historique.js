import React from 'react';
import { useEffect, useState } from "react";
import axios from 'axios'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/Navbar-Centered-Brand-icons.css'
import { Link } from 'react-router-dom';

function Historique() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get('https://wss5enchere-production.up.railway.app/getEnchere')
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
    console.log(data) ;

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
            <div className='container' style={{width: 'auto',margin: '5%'}}>
                <h1 style={{textAlign: 'center'}}>Historique</h1>
                <form style={{marginRight: '10%',marginLeft: '10%'}} method='post'>
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr>
                                    <th style={{width: '15%'}}>Num Enchere</th>
                                    <th style={{width: '15%'}}>Materielle</th>
                                    <th style={{width: '10%'}}>Quantite</th>
                                    <th style={{width: '20%'}}>Date depart enchere</th>
                                    <th style={{width: '15%'}}>Description</th>
                                    <th style={{width: '15%'}}>Etat</th>
                                    <th style={{width: '10%'}}> </th>
                                </tr>
                            </thead>
                            <tbody id='liste' style={{borderRadius: '0.25rem'}}>
                                {data.map(enchere=>
                                    <tr>
                                        <td key={enchere.id}> {enchere.id} </td>
                                        <td key={enchere.id}> {enchere.nom} </td>
                                        <td key={enchere.id}> {enchere.qte} </td>
                                        <td key={enchere.id}> {enchere.datedepartenchere} </td>
                                        <td key={enchere.id}> {enchere.description} </td>
                                        <td key={enchere.id}> {enchere.isfinish} </td>
                                        <td key={enchere.id}><Link to={`/HistoriqueDetails?idEnchere=${enchere.id}`}>Voir details</Link></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Historique;