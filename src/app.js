const dummyData = [{
  x: 5,
  y: 2
}, {
  x: 1,
  y: 1
}];

class AppRoot extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ["loading", "data"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.render();
  }

  get loading() {
    return JSON.parse(this.getAttribute("loading"));
  }

  set loading(v) {
    this.setAttribute("loading", JSON.stringify(v));
  }

  get data() {
    return JSON.parse(this.getAttribute("data"));
  }

  set data(v) {
    this.setAttribute("data", JSON.stringify(v));
  }

  async fetchData() {
    this.loading = true;
    const promise = () => new Promise(resolve => {
      setTimeout(() => {
        resolve(dummyData);
      }, 3000);
    });
    this.data = await promise();
    this.loading = false;
  }

  async connectedCallback() {
    await this.fetchData();
  }

  disconnectedCallback() {
  }

  render() {
    const html = `
      <style>
          #root {
            width: 100%;
            height: 100%;
            background: green;
          }
      </style>
      <div id="root" >
          <chart-wiz loading=${this.loading} data=${this.data} />
      </div>
    `;
    this.shadow.innerHTML = html;
  }
}

customElements.define('app-root', AppRoot);
