import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      inputText: '',
      entendendoCheckbox: false,
      favoriteFood: '',
      textArea: '',
      selectCity: '',
    };
  }
  handleChange({ target }) {
    const { name, type } = target;
    const value = type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({ [name]: value });
  }
  render() {
    return (
      <div className="container-sm">
      <h1 className="display-6 text-center">Componentes Controlados no React</h1>
        <dl className="row">
          <dt className="col-sm-5">
            <p className="code">constructor() &#123;</p>
            <div className="indent">
              <p className="code">super();</p>
              <p className="code">this.handleChange = this.handleChange.bind(this);</p>
              <p className="code">this.state = &#123;</p>
              <div className="indent">
                <p className="code">...</p>
              </div>
              <p className="code">&#125;</p>
            </div>
            <p className="code">&#125;</p>
          </dt>
          <dd className="col-sm-7">
            <p className="code">handleChange(&#123; target &#125;) &#123;</p>
            <div className="indent">
              <p className="code">const &#123; name, type &#125; = target;</p>
              <p className="code">const value = type === 'checkbox</p>
              <div className="indent">
                <p className="code">? target.checked</p>
                <p className="code">: target.value;</p>
              </div>
              <p className="code">this.setState(&#123; [name]: value &#125;);</p>
            </div>
            <p className="code">&#125;</p>
          </dd>
          <hr />
          <dt className="col-sm-5">
            <p className="code">&lt;input</p>
            <p className="code indent">type="text"</p>
            <p className="code indent">name="inputText"</p>
            <p className="code indent">value=&#123;this.state.inputText&#125;</p>
            <p className="code indent">onChange=&#123;this.handleChange&#125;</p>
            <p className="code">/&gt;</p>
          </dt>
          <dd className="col-sm-7">
            <input 
              className="form-control form-control-sm"
              type="text"
              name="inputText"
              placeholder="Digite algo..."
              aria-label="type text exemple"
              onChange={this.handleChange}
              value={this.state.inputText}
            />
            <hr />
            <p className="code">state</p>
            <p className="code indent">inputText: "{this.state.inputText}"</p>
          </dd>
          <hr />
          <dt className="col-sm-5">
            <p className="code">&lt;input</p>
            <p className="code indent">type="checkbox"</p>
            <p className="code indent">name="entendendoCheckbox"</p>
            <p className="code indent">checked=&#123;this.state.entendendoCheckbox&#125;</p>
            <p className="code indent">onChange=&#123;this.handleChange&#125;</p>
            <p className="code">/&gt;</p>
          </dt>
          <dd className="col-sm-7">
            <input
              className="form-check-input"
              type="checkbox" 
              checked={this.state.entendendoCheckbox}
              id="inputCheckbox"
              name="entendendoCheckbox"
              onChange={this.handleChange}
            />
            <label className="form-check-label" htmlFor="inputCheckbox">
              Entendendo o conteúdo
            </label>
            <hr />
            <p className="code">state</p>
            <p className="code indent">entendendoCheckbox: {this.state.entendendoCheckbox ? 'true' : 'false'}</p>
          </dd>
          <hr />
          <dt className="col-sm-5">
            <p className="code">&lt;div onChange=&#123;this.handleChange&#125;</p>
            <div className='indent'>
              <p className="code">&lt;input</p>
              <p className="code indent">type="radio"</p>
              <p className="code indent">name="favoriteFood"</p>
              <p className="code indent">value="Pizza"</p>
              <p className="code indent">checked=&#123;this.state.favoriteFood === 'Pizza'&#125;</p>
              <p className="code">/&gt;</p>
            </div>
            <div className='indent'>
              <p className="code">&lt;input</p>
              <p className="code indent">type="radio"</p>
              <p className="code indent">name="favoriteFood"</p>
              <p className="code indent">value="Lasanha"</p><p className="code indent">checked=&#123;this.state.favoriteFood === 'Lasanha'&#125;</p>
              <p className="code">/&gt;</p>
            </div>
            <div className='indent'>
              <p className="code">&lt;input</p>
              <p className="code indent">type="radio"</p>
              <p className="code indent">name="favoriteFood"</p>
              <p className="code indent">value="Sushi"</p><p className="code indent">checked=&#123;this.state.favoriteFood === 'Sushi'&#125;</p>
              <p className="code">/&gt;</p>
            </div>
            <p className="code">/&gt;</p>
          </dt>
          <dd className="col-sm-7">
            <fieldset onChange={this.handleChange}>
              <input
                className="form-check-input"
                type="radio"
                name="favoriteFood"
                value="Pizza"
                checked={this.state.favoriteFood === 'Pizza'}
                id="inputRadioPizza"
              />
              <label className="form-check-label" htmlFor="inputRadioPizza">
                Pizza
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="favoriteFood"
                value="Lasanha"
                checked={this.state.favoriteFood === 'Lasanha'}
                id="inputRadioLasanha"
              />
              <label className="form-check-label" htmlFor="inputRadioLasanha">
                Lasanha
              </label>
              <input
                className="form-check-input"
                type="radio"
                name="favoriteFood"
                value="Sushi"
                checked={this.state.favoriteFood === 'Sushi'}
                id="inputRadioSushi"
              />
              <label className="form-check-label" htmlFor="inputRadioSushi">
                Sushi
              </label>
            </fieldset>
            <hr />
            <p className="code">state</p>
            <p className="code indent">favoriteFood: "{this.state.favoriteFood}"</p>
          </dd>
          <hr />
          <dt className="col-sm-5">
            <p className="code">&lt;textarea</p>
            <p className="code indent">name="textArea"</p>
            <p className="code indent">value=&#123;this.state.textArea&#125;</p>
            <p className="code indent">onChange=&#123;this.handleChange&#125;</p>
            <p className="code">/&gt;</p>
          </dt>
          <dd className="col-sm-7">
            <textarea 
              className="form-control"
              name="textArea"
              value={this.state.textArea}
              onChange={this.handleChange}
            />
            <hr />
            <p className="code">state</p>
            <p className="code indent">textArea: "{this.state.textArea}"</p>
          </dd>
          <hr />
          <dt className="col-sm-5">
            <p className="code">&lt;select</p>
            <p className="code indent">name="selectCity"</p>
            <p className="code indent">value="&#123;this.state.selectCity&#125;"</p>
            <p className="code indent">onChange=&#123;this.handleChange&#125;&gt;</p>
            <p className="code indent">&lt;option value="Vitória"&gt;Vitória&lt;/option&gt;</p>
            <p className="code indent">&lt;option value="Recife"&gt;Recife&lt;/option&gt;</p>
            <p className="code indent">&lt;option value="Manaus"&gt;Manaus&lt;/option&gt;</p>
            <p className="code indent">&lt;option value="Ribeirão Preto"&gt;Ribeirão Preto&lt;/option&gt;</p>
            <p className="code indent">&lt;option value="Brasília"&gt;Brasília&lt;/option&gt;</p>
            <p className="code indent">&lt;option value="Campos"&gt;Campos&lt;/option&gt;</p>
            <p className="code">&lt;/select&gt;</p>
          </dt>
          <dd className="col-sm-7">
            <div className="form-floating">
              <select
                name="selectCity"
                value={this.state.selectCity}
                onChange={this.handleChange}
                className="form-select"
                id="selectCity">
                <option value="Vitória">Vitória</option>
                <option value="Recife">Recife</option>
                <option value="Manaus">Manaus</option>
                <option value="Ribeirão Preto">Ribeirão Preto</option>
                <option value="Brasília">Brasília</option>
                <option value="Campos">Campos</option>
              </select>
              <label htmlFor="selectCity">Escolha uma cidade</label>
            </div>
            <hr />
            <p className="code">state</p>
            <p className="code indent">selectCity: "{this.state.selectCity}"</p>
          </dd>
        </dl>
      </div>
    );
  }
}

export default App;
