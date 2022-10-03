// eslint-disable-next-line max-classes-per-file
import { LitElement, html, css } from "lit";

import "./webSeriesCard.js";

export class webSeriesOverview extends LitElement {
  static get properties() {
    return {
      lists: { type: Array },
    };
  }

  constructor() {
    super();
    this.lists = [];
  }

  static get styles() {
    return css`
      @media (min-width: 800px) {
        :host {
          border-radius: 20px;
          background-image: linear-gradient(
            rgb(223, 172, 223),
            rgb(216, 216, 116)
          );
          padding: 2rem;
          flex: 50%;
          flex-direction: row;
          border: 1px solid rgb(197, 131, 188);
          display: grid;
          grid-gap: 15px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          grid-template-rows: repeat(3, minmax(0, 1fr));
        }
      }
      @media (max-width: 800px) {
        :host {
          border-radius: 20px;
          background-image: linear-gradient(
            rgb(223, 172, 223),
            rgb(216, 216, 116)
          );
          padding: 2rem;
          border: 1px solid rgb(197, 131, 188);
          display: grid;
          grid-gap: 15px;
          grid-template-columns: 1fr;
          grid-template-columns: repeat(0, minmax(0, 1fr));
          grid-template-rows: repeat(6, minmax(0, 1fr));
        }
      }
    `;
  }

  // connecting values
  render() {
    return html`
      ${this.lists.map(
        (item) =>
          html`<web-series-card
            id="card"
            title=${item.title.toUpperCase()}
            director=${item.director}
            stars=${item.stars}
            streaming=${item.streaming}
          ></web-series-card>`
      )}
    `;
  }
}
