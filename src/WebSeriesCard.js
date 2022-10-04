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
      @media (min-width: 800px) {
        .flip-card {
          background-color: lightgrey;
          width: auto;
          height: 150px;
          border: 1px solid #f1f1f1;
          perspective: 500px;
          border: 0.1rem solid #1b4f72;
          overflow: hidden;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;

          transition: transform 1s;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
        }

        /* Do an horizontal flip when you move the mouse over the flip box container */
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
          transition: transform 0.5s;
        }

        /* Position the front and back side */
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          text-align: center;
          backface-visibility: hidden;
        }

        /* Style the front side (fallback if image is missing) */
        .flip-card-front {
          background-color: lightgrey;
          color: black;
          text-align: center;
          padding-top:50px;
          /* padding-top: 50px; */
        }

        /* Style the back side */
        .flip-card-back {
          background-color: white;
          color: black;
          text-align: center;
          padding-top:50px;
          /* padding-top: 50px; */
          transform: rotateY(180deg);
        }

      @media (max-width: 800px) {
        .flip-card-front,
        .flip-card-back {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          backface-visibility: hidden;
        }
        .flip-card {
          background-color: lightgray;
          width: auto;
          height: 100%;
          border: 1px solid #f1f1f1;
          perspective: 500px;
          border: 0.1rem solid #1b4f72;
          overflow: hidden;
          background-color: lightgrey;
        }
        .flip-card-front {
          color: black;
          text-align: center;
          padding-top: 50px;
        }

        /* Do a verticle flip when you move the mouse over the flip box container */
        .flip-card:hover .flip-card-inner {
          transform: rotateX(180deg);
          transition: transform 0.5s;
          background-color: rgb(255, 255, 255);
        }
        .flip-card-inner {
          position: relative;
          text-align: center;
          transition: transform 1s;
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          transform-style: preserve-3d;
        }
        /* Style the back side */
        .flip-card-back {
          background-color: rgb(255, 255, 255);
          color: black;
          text-align: center;
          transform: rotateX(180deg);
          padding-top: 10px;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="flip-card">
        <div class="flip-card-inner">
          <div class="flip-card-front">${this.title}</div>
          <div class="flip-card-back">
            ${this.director}<br />
            ${this.stars}<br />
            ${this.streaming}<br />
            <button @click=${this._dispatchLogin}>DELETE</button>
          </div>
        </div>
      </div>
    `;
  }

  _dispatchLogin(e) {
    e.preventDefault();
    console.log(this.director);
  }

}

customElements.define("web-series-card", WebSeriesCard);
