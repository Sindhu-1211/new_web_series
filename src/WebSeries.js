import { LitElement, html, css } from "lit";
import { ajax } from "@lion/ajax";

import { webSeriesForm } from "../src/web-series-form.js";
import { webSeriesOverview } from "../src/web-series-overview.js";
import { LionTabs } from "@lion/tabs";

window.customElements.define("web-series-form", webSeriesForm);
window.customElements.define("web-series-overview", webSeriesOverview);
customElements.define("lion-tabs", LionTabs);
export class WebSeries extends LitElement {
  static get properties() {
    return {
      lists: { type: Array },
    };
  }

  static styles = css`
    :host {
      font-family: Georgia, "Times New Roman", Times, serif;
      /* display:flex; */
      flex-wrap: nowrap;
    }
    @media (max-width: 800px) {
      :host {
        display: grid;
        grid-template-columns: 1fr;
        box-sizing: border-box;
        gap: 20px;
      }
    }
    button{
      padding: 12px;
      border-radius: 6px;
      font-family:Georgia, "Times New Roman", Times, serif;
      /* margin-right:20px; */
      margin-left:20%;
      width: 20%;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    button:active,button:hover{
      background-color: lightblue;
    }
  `;
  constructor() {
    super();
    this.lists = [];
    this.fetchLists();
  }

  fetchLists() {
    ajax
    .fetch("lists.json")
        .then(response => response.json())
        .then(result => {
          console.log(result.lists);
          this.lists = result.lists;
          this.requestUpdate();
        })
        .catch((err) => {
          console.log(err);
        });        ;
      }
     
  listCard(e) {
    if (this.lists.length <= 5) {
      this.lists = [...this.lists, e.detail];
    } else {
      alert("Maximum 6 lists are allowed!!");
    }
    console.log(this.lists);
  }

  render() {
    
    return html`
      <lion-tabs>
        <button slot="tab">Add WebSeries</button>
        <button slot="tab">WebSeries Lists</button>
        <p slot="panel">
          <web-series-form @mylogin=${this.listCard}></web-series-form>
        </p>
        <p slot="panel">
          <web-series-overview .lists=${this.lists}></web-series-overview>
        </p>
      </lion-tabs>
      <!-- <web-series-form @mylogin=${this.listCard}></web-series-form>
          <web-series-overview .lists=${this.lists}></web-series-overview> -->
    `;
  }
}
customElements.define("web-series", WebSeries);
