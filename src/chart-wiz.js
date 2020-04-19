class ChartWiz extends HTMLElement {
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

  render() {
    const html = `
      <style>
        .cwiz-wrapper {
          border: 1px solid red;
          padding: 20px;
        }
    </style>
    ${this.loading ? 'Loading...' : '<div class="cwiz-wrapper" />'}
    `;
    this.shadow.innerHTML = html;
  }
}

customElements.define('chart-wiz', ChartWiz);
