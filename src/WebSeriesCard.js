import { html, css, LitElement } from "lit";

export class WebSeriesCard extends LitElement {
  constructor() {
    super();
    this.title = "";
    this.stars = "";
    this.director = "";
    this.streaming = "";
  }

  static get properties() {
    return {
      title: { type: String },
      stars: { type: String },
      director: { type: String },
      streaming: { type: String },
    };
  }

  static get styles() {
    return css`
      @media (min-width: 20px) {
        .flip-card {
          background-image: linear-gradient(rgb(223, 172, 223), rgb(216, 216, 116));
          width: auto;
          height: 150px;
          border: 1px solid black;
          perspective: 500px;
          overflow: hidden;
          margin-bottom: 10px;
        }
        
        .flip-card-front {
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
        }

        .flip-card-front {
          background-image: linear-gradient(rgb(223, 172, 223), rgb(216, 216, 116));
          color: black;
          text-align: center;
          padding-top:30px;
          /* padding-top: 50px; */
        }

      @media (max-width: 700px) {
        .flip-card-front{
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
        }
        .flip-card {
          background-color: lightgray;
          width: auto;
          height: 100%;
          border: 1px solid black;
          perspective: 500px;
          overflow: hidden;
          
          
        }
      }
    `;
  }

  render() {
    return html`
      <div class="flip-card">
        <div class="flip-card-front">
          ${this.title}<br />
          ${this.director}<br />
          ${this.stars}<br />
          ${this.streaming}<br />
          <button>DELETE</button>
        </div>
      </div>
    `;
  }
}

customElements.define("web-series-card", WebSeriesCard);
