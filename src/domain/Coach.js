import CoachDto from "./dto/CoachDto.js";

const MIN_NAME_LEN = 2;
const MAX_NAME_LEN = 4;

class Coach {
  /**
   * @type {string}
   */
  #name;
  /**
   * @type {MenuItem[]}
   */
  #refusedMenus;
  /**
   * @type {MenuItem[]}
   */
  #recommendedMenus;

  constructor(name) {
    this.#name = name;
    this.#refusedMenus = [];
    this.#recommendedMenus = [];
    this.#validate(name);
  }

  /**
   * @return {string}
   */
  get name() {
    return this.#name;
  }

  /**
   * @return {MenuItem[]}
   */
  get recommendedMenus() {
    return this.#recommendedMenus;
  }

  // [].some - one of them returns true
  // [].every - every of them returns true
  /**
   * @param {string} category
   * @param {MenuGenerator} menuGenerator
   * @return {void}
   */
  recommendMenu(category, menuGenerator) {
    const menuItem = menuGenerator.generateByCategory(category);
    // 1. 못먹는 메뉴에 존재하면 -> 다시
    const cannotEat = this.#refusedMenus.some((m) => m.name === menuItem.name);
    // 2. 이미 추천 메뉴에 존재하면(중복) -> 다시
    const alreadyRecommended = this.#recommendedMenus.some(
      (m) => m.name === menuItem.name,
    );
    // 1,2면 재추첨하기
    if (cannotEat || alreadyRecommended) {
      this.recommendMenu(category, menuGenerator);
      return;
    }
    this.#recommendedMenus.push(menuItem);
  }

  /**
   * @param {MenuItem} refusedMenu
   */
  addRefusedMenus(refusedMenu) {
    this.#refusedMenus.push(refusedMenu);
  }

  #validate(name) {
    if (name.length < MIN_NAME_LEN || name.length > MAX_NAME_LEN) {
      throw new Error(
        `[ERROR] 이름의 길이는 최소 ${MIN_NAME_LEN}이상 ${MAX_NAME_LEN}이하여야합니다.`,
      );
    }
  }

  /**
   * @return {CoachDto}
   */
  toCoachDto() {
    const menuDtos = this.#recommendedMenus.map((m) => m.toMenuDto());
    return new CoachDto(this.#name, menuDtos);
  }
}

export default Coach;
