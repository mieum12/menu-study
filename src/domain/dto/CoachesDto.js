class CoachesDto {
  /**
   * @type {string[]}
   */
  #weeklyCategories;

  /**
   * @type {CoachDto[]}
   */
  #coaches;

  /**
   * @param {string[]} weeklyCategories
   * @param {CoachDto[]} coaches
   */
  constructor(weeklyCategories, coaches) {
    this.#weeklyCategories = weeklyCategories;
    this.#coaches = coaches;
  }

  /**
   * @return {string[]}
   */
  get weeklyCategories() {
    return this.#weeklyCategories;
  }

  /**
   * @return {CoachDto[]}
   */
  get coaches() {
    return this.#coaches;
  }
}

export default CoachesDto;
