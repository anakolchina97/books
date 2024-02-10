import { DivComponent } from "../../common/div-component";
import "./header.css";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add("header");
    this.el.innerHTML = `
      <div>
        <img src="/static/images/logo.svg" alt="logo" />
      </div>
      <div class="menu">
        <a class="menu__item" href="#">
          <img src="/static/images/search.svg" alt="search" />
          Поиск книг
        </a>
        <a class="menu__item" href="#favorites">
          <img src="/static/images/favorites.svg" alt="favorites" />
          Поиск книг
          <span class="menu__counter">${this.appState.favorites.length}</span>
        </a>
      </div>
    `;
    return this.el;
  }
}
