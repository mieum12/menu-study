import Coach from "./Coach.js";

const MIN_COACH_LEN = 2;
const MAX_COACH_LEN = 5;

class Coaches {
  #coaches;

  constructor(names) {
    const coaches = names.map((name) => new Coach(name));
    this.#validate(names);
    this.#coaches = coaches;
  }

  /**
   * @return {Coach[]}
   */
  get coaches() {
    return this.#coaches;
  }

  #validate(names) {
    const uniqueNamesSize = new Set(names).size;
    if (names.length !== uniqueNamesSize) {
      throw new Error(`[ERROR] 중복된 이름이 존재합니다.`);
    }

    if (names.length < MIN_COACH_LEN || names.length > MAX_COACH_LEN) {
      throw new Error(
        `[ERROR] 코치는 최소 ${MIN_COACH_LEN}명 최대 ${MAX_COACH_LEN}명이어야 합니다.`,
      );
    }
  }

  /**
   * @param {CategoryGenerator} categoryGenerator
   * @param {MenuGenerator} menuGenerator
   */
  recommendMenus(categoryGenerator, menuGenerator) {
    /**
     * @type {string[]}
     */
    const categories = [];
    while (categories.length < 5) {
      const category = this.pickNextCategory(categoryGenerator, categories);
      // menu recommend
      this.recommendDailyMenus(category, menuGenerator);
    }
  }

  /**
   * @param {string} category
   * @param menuGenerator
   */

  recommendDailyMenus(category, menuGenerator) {
    for (const coach of this.#coaches) {
      coach.recommendMenu(category, menuGenerator);
    }
  }

  /**
   * @param {CategoryGenerator} categoryGenerator
   * @param {string[]} categories
   * @return {string}
   */
  pickNextCategory(categoryGenerator, categories) {
    const category = categoryGenerator.generate();
    const canRecommendCategory =
      categories.filter((c) => c === category).length >= 2;
    if (!canRecommendCategory) {
      return this.pickNextCategory(categoryGenerator, categories);
    }
    return category;
  }
}

export default Coaches;
