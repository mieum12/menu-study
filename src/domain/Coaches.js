import Coach from "./Coach.js";
import CoachesDto from "./dto/CoachesDto.js";

const MIN_COACH_LEN = 2;
const MAX_COACH_LEN = 5;

class Coaches {
  /**
   * @type {Coach[]}
   */
  #coaches;

  /**
   * @type {string[]}
   */
  #weeklyCategories;

  /**
   * @param {string[]} names
   */
  constructor(names) {
    const coaches = names.map((name) => new Coach(name));
    this.#validate(names);
    this.#coaches = coaches;
    this.#weeklyCategories = [];
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
  recommendWeeklyMenus(categoryGenerator, menuGenerator) {
    /**
     * @type {string[]}
     */
    while (this.#weeklyCategories.length < 5) {
      // 카테고리 뽑기
      const category = this.pickNextCategory(categoryGenerator);
      this.#weeklyCategories.push(category);
      this.recommendDailyMenus(category, menuGenerator);
    }
  }

  /**
   * @param {string} category
   * @param menuGenerator
   * @description 한 요일의 모든 코치에게 메뉴 추천
   */
  recommendDailyMenus(category, menuGenerator) {
    for (const coach of this.#coaches) {
      coach.recommendMenu(category, menuGenerator);
    }
  }

  /**
   * @param {CategoryGenerator} categoryGenerator
   * @return {string}
   * @description 카테고리가 중복이면 재추첨을 위한 메서드
   */
  pickNextCategory(categoryGenerator) {
    const category = categoryGenerator.generate(); // 카테고리 뽑기
    // 카테고리 중복이면 다시 뽑기
    const cannotRecommendCategory =
      this.#weeklyCategories.filter((c) => c === category).length >= 2;
    if (cannotRecommendCategory) {
      return this.pickNextCategory(categoryGenerator);
    }
    return category;
  }

  // Model
  /**
   * @return {CoachesDto}
   */
  toCoachesDto() {
    const coachDtos = this.#coaches.map((c) => c.toCoachDto());
    return new CoachesDto(this.#weeklyCategories, coachDtos);
  }
}

export default Coaches;
