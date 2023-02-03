import React from 'react' ;
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/css/Navbar-Centered-Brand-icons.css'

function Login() {
    
    return(
        <section className='position-relative py-4 py-xl-5'>
        <div className='container'>
            <div className='row d-flex justify-content-center'>
                <div className='col-md-6 col-xl-4'>
                    <div className='card mb-5'>
                        <div className='card-body d-flex flex-column align-items-center'>
                            <form>
                                <div className='mb-3'>
                                    <label className='form-label' style={{textAlign: 'left'}}>Nom</label>
                                    <input className='form-control' type='text' id='nom' name='nom' placeholder='mic'></input>
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label' style={{textAlign: 'left'}}>Password</label>
                                    <input className='form-control' type='password' id='mdp' name='mdp' placeholder='root'></input>
                                </div>
                                <div className='mb-3'>
                                    <button className='btn btn-primary d-block w-100' type='button'onClick={ () =>
                                    {
                                        var http = new XMLHttpRequest();
                                        var nom = document.getElementById("nom") ;
                                        var mdp = document.getElementById("mdp") ;
                                        http.onreadystatechange=function(){
                                            if(http.readyState  === 4){
                                                if(http.status  === 200) {
                                                    var retour = JSON.parse(http.responseText);
                                                    console.log(retour);
                                                    window.location.href = '/Accueil';
                                                } else {
                                                    document.dyn="Error code " + http.status;
                                                }
                                            }
                                        };
                                        http.open("GET","https://wss5enchere-production.up.railway.app/login?nom="+nom.value+"&mdp="+mdp.value,  true);
                                        http.send(null);
                                    }

                                    }>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Login;