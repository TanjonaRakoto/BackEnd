import React from "react";
import { useEffect, useState } from "react";
import axios from 'axios'
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/Navbar-Centered-Brand-icons.css'

function HistoriqueDetails() {
    const params = new URLSearchParams(window.location.search);
    var idEnchere = params.get('idEnchere');

    const [data,setData]=useState([]);
    useEffect(()=>{
        axios.get(`https://wss5enchere-production.up.railway.app/histoEnchereDetaille?idEnchere=${idEnchere}`)
        .then(
            res=>{
                setData(res.data);
            }
        ).catch(
            error=>{
                console.error(error);
            }
        )
    },[idEnchere])

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
            <div className="container" style={{width: 'auto',margin: '5%'}}>
                <h1 style={{textAlign: 'center'}}>Historique details</h1>
                <h3 style={{textAlign: 'center'}}> </h3>
                <form style={{marginRight: '10%',marginLeft: '10%'}} method="post">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody id="liste" style={{borderRadius: '0.25rem'}}>
                                <tr style={{background: 'var(--bs-border-color-translucent)',borderBottom: '5px solid rgb(255,255,255)',borderRadius: '10px'}}>
                                    <td style={{textAlign: 'left',width: '30%'}}>Joueur</td>
                                    <td>Mise</td>
                                    <td style={{textAlign: 'right'}}>Date</td>
                                </tr>
                                {data.map(enchere=>
                                    <tr>
                                        <td key={enchere.id}> {enchere.nom} </td>
                                        <td key={enchere.id}> {enchere.montantapayer} </td>
                                        <td key={enchere.id}> {enchere.dateajout} </td>
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

export default HistoriqueDetails;