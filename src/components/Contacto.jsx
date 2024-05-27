import React from 'react';

function Contacto() {
  return (
    <div>
      <main className="container mt-5">
        <section>
          <div className="bs-docs-section">
            <div className="row">
              <div className="col-lg-12">
                <div className="page-header">
                  <h1 id="forms">Contacto</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="bs-component">
                  <form action="POST">
                    <fieldset>
                      <div>
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Correo</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Ingrese correo..." />
                      </div>
                      <div>
                        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Contraseña</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Contraseña..." autoComplete="off" />
                      </div>
                      <div>
                        <label htmlFor="exampleSelect1" className="form-label mt-4">Seleciona que productos te interesan</label>
                        <select className="form-select" id="exampleSelect1">
                          <option>Moda</option>
                          <option>Tecnologia</option>
                          <option>Cocina</option>
                          <option>Bazar</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="exampleTextarea" className="form-label mt-4">Dejanos un comentario</label>
                        <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                      </div>
                      <fieldset>
                        <legend className="mt-4">Tipo de cliente</legend>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" data-text="Minorista" defaultChecked />
                          <label className="form-check-label" htmlFor="optionsRadios1">
                            Minorista
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" data-text="Mayorista" value="option2" />
                          <label className="form-check-label" htmlFor="optionsRadios2">
                            Mayorista
                          </label>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend className="mt-4">Generar usuario</legend>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Recibir novedades
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" defaultChecked />
                          <label className="form-check-label" htmlFor="flexCheckChecked">
                            Terminos y condiciones
                          </label>
                        </div>
                      </fieldset>
                      <div id="errorMessages" className="mt-3"></div>
                      <button type="submit" className="btn btn-primary mt-4">Enviar</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="infoPersona" className="mt-4"></div>
      </main>
    </div>
  );
}

export default Contacto;
