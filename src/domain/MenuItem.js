import MenuDto from "./dto/MenuDto.js";

class MenuItem {
  /**
   * @type {string}
   */
  #name;

  /**
   * @type {string}
   */
  #category;

  /**
   * @param {string} name
   * @param {string} category
   */
  constructor(name, category) {
    this.#name = name;
    this.#category = category;
  }

  /**
   * @return {string}
   */
  get name() {
    return this.#name;
  }

  /**
   * @return {string}
   */
  get category() {
    return this.#category;
  }

  /**
   * @return {MenuDto}
   */
  toMenuDto() {
    return new MenuDto(this.#name);
  }
}

export default MenuItem;
