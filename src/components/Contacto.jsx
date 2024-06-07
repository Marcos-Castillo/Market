import React, { useState } from 'react';

function Contacto() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState('');
  const [textarea, setTextarea] = useState('');
  const [radio, setRadio] = useState('Minorista');
  const [checkboxDefault, setCheckboxDefault] = useState(false);
  const [checkboxChecked, setCheckboxChecked] = useState(true);
  const [errorMessages, setErrorMessages] = useState([]);
  const [info, setInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];

    if (!email) errors.push('El campo Email es requerido.');
    if (!password) errors.push('El campo Password es requerido.');
    if (!select) errors.push('El campo Te interesa es requerido.');
    if (!radio) errors.push('El campo Cliente es requerido.');

    if (errors.length > 0) {
      setErrorMessages(errors);
    } else {
      setErrorMessages([]);
      setInfo(`
        <h2>Ficha de Datos de la Persona</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Password:</strong> ${password.replace(/./g, '*')}</p>
        <p><strong>Te interesa:</strong> ${select}</p>
        <p><strong>Tu Comentario:</strong> ${textarea.trim() === '' ? 'sin datos' : textarea.trim()}</p>
        <p><strong>Cliente:</strong> ${radio}</p>
        <p><strong>Recibir novedades:</strong> ${checkboxDefault ? 'Sí' : 'No'}</p>
        <p><strong>Términos y condiciones:</strong> ${checkboxChecked ? 'Sí' : 'No'}</p>
        <button class="btn btn-primary" onClick="window.print()">Imprimir</button>
      `);
    }
  };

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
                  <form onSubmit={handleSubmit}>
                    <fieldset>
                      <div>
                        <label htmlFor="exampleInputEmail1" className="form-label mt-4">Correo</label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleInputEmail1"
                          placeholder="Ingrese correo..."
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="exampleInputPassword1" className="form-label mt-4">Contraseña</label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleInputPassword1"
                          placeholder="Contraseña..."
                          autoComplete="off"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                      <div>
                        <label htmlFor="exampleSelect1" className="form-label mt-4">Selecciona qué productos te interesan</label>
                        <select
                          className="form-select"
                          id="exampleSelect1"
                          value={select}
                          onChange={(e) => setSelect(e.target.value)}
                        >
                          <option value="">Selecciona una opción</option>
                          <option>Moda</option>
                          <option>Tecnología</option>
                          <option>Cocina</option>
                          <option>Bazar</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="exampleTextarea" className="form-label mt-4">Déjanos un comentario</label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea"
                          rows="3"
                          value={textarea}
                          onChange={(e) => setTextarea(e.target.value)}
                        ></textarea>
                      </div>
                      <fieldset>
                        <legend className="mt-4">Tipo de cliente</legend>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios1"
                            value="Minorista"
                            data-text="Minorista"
                            checked={radio === 'Minorista'}
                            onChange={(e) => setRadio(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="optionsRadios1">
                            Minorista
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="optionsRadios"
                            id="optionsRadios2"
                            value="Mayorista"
                            data-text="Mayorista"
                            checked={radio === 'Mayorista'}
                            onChange={(e) => setRadio(e.target.value)}
                          />
                          <label className="form-check-label" htmlFor="optionsRadios2">
                            Mayorista
                          </label>
                        </div>
                      </fieldset>
                      <fieldset>
                        <legend className="mt-4">Generar usuario</legend>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckDefault"
                            checked={checkboxDefault}
                            onChange={(e) => setCheckboxDefault(e.target.checked)}
                          />
                          <label className="form-check-label" htmlFor="flexCheckDefault">
                            Recibir novedades
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="flexCheckChecked"
                            checked={checkboxChecked}
                            onChange={(e) => setCheckboxChecked(e.target.checked)}
                          />
                          <label className="form-check-label" htmlFor="flexCheckChecked">
                            Términos y condiciones
                          </label>
                        </div>
                      </fieldset>
                      <div id="errorMessages" className="mt-3">
                        {errorMessages.map((msg, index) => (
                          <p key={index} className="text-danger">{msg}</p>
                        ))}
                      </div>
                      <button type="submit" className="btn btn-primary mt-4">Enviar</button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div id="infoPersona" className="mt-4" dangerouslySetInnerHTML={{ __html: info }}></div>
      </main>
    </div>
  );
}

export default Contacto;
