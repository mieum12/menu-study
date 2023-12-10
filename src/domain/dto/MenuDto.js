class MenuDto {
  /**
   * @type {string}
   */
  #name;

  /**
   * @param {string} name
   */
  constructor(name) {
    this.#name = name;
  }

  /**
   * @return {string}
   */
  get name() {
    return this.#name;
  }
}

export default MenuDto;
