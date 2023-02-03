import React from 'react';
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/Navbar-Centered-Brand-icons.css'

function UpdateEnchere() {
    const params = new URLSearchParams(window.location.search);
    var idEnchere = params.get('idEnchere');

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
            <div className='container' style={{width: 'auto',marginRight: '5%',marginLeft: '5%'}}>
                <h1 style={{textAlign: 'center'}}>Update enchere numero : {idEnchere}</h1>
                
                    <div className='table-responsive'>
                        <table className='table'>
                            <thead>
                                <tr></tr>
                            </thead>
                            <tbody style={{borderRadius: '0.25rem'}}>
                                <tr style={{background: 'var(--bs-gray-600)',borderBottom: '5px solid rgb(255,255,255) '}}>
                                    <td style={{color: 'rgb(255,255,255)',width: '50%'}}>Quantite</td>
                                    <td style={{color: 'rgb(255,255,255)',width: '50%'}}>
                                        <input id='quantite' className='form-control' type='number'></input>
                                        </td>
                                </tr>
                                <tr style={{background: 'var(--bs-gray-600)',borderBottom: '5px solid rgb(255,255,255) '}}>
                                    <td style={{color: 'rgb(255,255,255)',width: '50%'}}>Duree</td>
                                    <td style={{color: 'rgb(255,255,255)',width: '50%'}}>
                                        <input id='duree' className='form-control' type='number'></input></td>
                                </tr>
                                <tr style={{background: 'var(--bs-gray-600)',borderBottom: '5px solid rgb(255,255,255) '}}>
                                    <td style={{color: 'rgb(255,255,255)',width: '50%'}}>Status</td>
                                    <td style={{color: 'rgb(255,255,255)',width: '50%'}}>
                                        <select id='status' className='form-select' style={{width: '100%'}}>
                                            <option value='1'>terminer</option>
                                            <option value='0'>En cours</option>
                                        </select></td>
                                </tr>
                                <tr style={{background: 'var(--bs-gray-600)'}}>
                                    <td style={{color: 'rgb(255,255,255)',width: '50%'}}>Commission</td>
                                    <td style={{color: 'rgb(255,255,255)',width: '50%'}}>
                                        <input id='commission' className='form-control' type='number'></input></td>
                                </tr>
                            </tbody>
                        </table>
                    </div><button className='btn btn-secondary d-block w-100' type='button'onClick={ () =>
                                    {
                                        var http = new XMLHttpRequest();
                                        var quantite = document.getElementById("quantite");
                                        var duree = document.getElementById("duree");
                                        var status = document.getElementById("status");
                                        var commission = document.getElementById("commission");

                                        http.onreadystatechange=function(){
                                            if(http.readyState  === 4){
                                                if(http.status  === 200) {
                                                    console.log(http.responseText);
                                                    window.location.href = '/Accueil';
                                                } else {
                                                    document.dyn="Error code " + http.status;
                                                }
                                            }
                                        };
                                        http.open("GET", "https://wss5enchere-production.up.railway.app/updateEnchere?idEnchere=" + idEnchere + "&qte=" + quantite.value + "&duree=" + duree.value + "&status=" + status.value + "&commision=" + commission.value,  true);
                                        http.send(null);
                                    }

                                    }>Update</button>
            </div>
        </div>
    );
}

export default UpdateEnchere;