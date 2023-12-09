class Category {
  /**
   * @type {string}
   */
  static JAPANESE = "일식";
  /**
   * @type {string}
   */
  static KOREAN = "한식";
  /**
   * @type {string}
   */
  static CHINESE = "중식";
  /**
   * @type {string}
   */
  static ASIAN = "아시안";
  /**
   * @type {string}
   */
  static WESTERN = "양식";

  /**
   * @param {number} num
   * @return {string}
   */
  static from(num) {
    switch (num) {
      case 1:
        return this.JAPANESE;
      case 2:
        return this.KOREAN;
      case 3:
        return this.CHINESE;
      case 4:
        return this.ASIAN;
      case 5:
        return this.WESTERN;
      default:
        throw new Error("[ERROR] 추천할 수 없는 카테고리. 재추첨 필요.");
    }
  }
}

export default Category;
