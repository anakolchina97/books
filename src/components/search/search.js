import { DivComponent } from "../../common/div-component";
import "./search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }

  render() {
    this.el.classList.add("search");
    this.el.innerHTML = `
      <div class="search__wrapper">
        <input class="search__input" type="text" placeholder="Найти книгу или автора..." value="${
          this.state.searchQuery ? this.state.searchQuery : ""
        }" />
        <img src="/static/images/search.svg" alt="search" />
      </div>
      <button aria-label="Искать">
        <img src="/static/images/search-white.svg" alt="search" />
      </button>
    `;
    return this.el;
  }
}
