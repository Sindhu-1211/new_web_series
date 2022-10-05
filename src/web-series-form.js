import { html, css, LitElement } from "lit";
import "@lion/form/define";
import "@lion/input/define";
import { LionSelect } from '@lion/select';
import { Ajax } from "@lion/ajax";
// import { LionButton, LionButtonReset, LionButtonSubmit } from '@lion/button';
import {IsString } from "@lion/form-core"

customElements.define("lion-select", LionSelect);
// customElements.define("lion-button", LionButton)

export class webSeriesForm extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      director: { type: String },
      stars: { type: String },
      streaming: { type: String },
    };
  }
  static styles = css`
    :host {
      border-radius: 20px;
      background-image: linear-gradient(rgb(223, 172, 223), rgb(216, 216, 116));
      padding: 2rem;
      flex: 50%;
      border: 1px solid rgb(197, 131, 188);
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    input,
    select {
      width: 100%;
      padding: 8px;
      border: 2px solid #ccc;
      border-radius: 8px;
      box-sizing: border-box;
      margin-top: 0.6rem;
      margin-bottom: 30px;
    }

    .clkBtn{
      background-color: rgb(63, 117, 63);
      color: white;
      padding: 12px 30px;
      border: none;
      border-radius: 7px;
      cursor: pointer;
    }
    
  `;
  render() {
    const fetchHandler = name => {
      ajax
        .fetch(`${name}.json`)
        .then(cards => cards.json())
        .then(result => {
          console.log(result.cards);
        });
    };
    return html`
      <lion-form>
        <form>
          <lion-input label="Title" id = "title" name="input" .validators="${[new IsString()]}"></lion-input>
          <lion-input label="Director" id = "director" name="input" .validators="${[new IsString()]}"></lion-input>
          <lion-input label="Stars" id = "stars" name="input" .validators="${[new IsString()]}"></lion-input>
          <lion-select name="Streaming on" label="Streaming on">
          <select slot="input" id = "streaming">          >
          <option style="text-align: center">--- Select ---</option>
          <option value="netflix">Netflix</option>
          <option value="hotstar">Hotstar</option>
          <option value="prime">Prime</option>
          <option value="youtube">YouTube</option>
          </select>   
          </lion-select>     
        <p><button class="clkBtn" @click=${this._dispatchLogin}>Add</button></p>
    </form>
  </lion-form>
    `;
  }

  _dispatchLogin(e) {
    e.preventDefault();
    const title = this.shadowRoot.getElementById("title").value;
    const director = this.shadowRoot.getElementById("director").value;
    const stars = this.shadowRoot.getElementById("stars").value;
    const streaming = this.shadowRoot.getElementById("streaming").value;
    const serDetails = { title, director, stars, streaming };
    const form = this.shadowRoot.querySelector("form").reset();
    console.log(serDetails);

    this.dispatchEvent(new CustomEvent("mylogin", { detail: serDetails }));
  }
}
