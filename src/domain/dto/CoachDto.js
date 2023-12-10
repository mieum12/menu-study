class CoachDto {
  /**
   * @type {string}
   */
  #name;

  /**
   * @type {MenuDto[]}
   */
  #recommendedMenus;

  /**
   * @param {string} name
   * @param {MenuDto[]} recommendedMenus
   */
  constructor(name, recommendedMenus) {
    this.#name = name;
    this.#recommendedMenus = recommendedMenus;
  }

  /**
   * @return {string}
   */
  get name() {
    return this.#name;
  }

  /**
   * @return {MenuDto[]}
   */
  get recommendedMenus() {
    return this.#recommendedMenus;
  }
}

export default CoachDto;
