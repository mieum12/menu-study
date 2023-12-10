import {Console} from "@woowacourse/mission-utils";

/**
 *
 * @param {string} str
 * @return {string}
 * @description 인덴트를 삭제해주는 함수를 따로 분리, 비즈니스 로직과 관련 없으니 밖으로 클래스 밖으로 뺐다
 */
function stripIndent(str) {
  // return str.replace(/(\n)\s+/g, "\n");
  return str.replaceAll(/^ {2,}/gm, "");
  // return str.replaceAll(/^(\s+)/gm, "");
}

class OutputView {
  /**
   * @return {void}
   */
  static printStartLine() {
    Console.print("\n점심 메뉴 추천을 시작합니다.");
  }

  /**
   *
   * @param {CoachesDto} coaches
   */
  static printResults(coaches) {
    const renderedCategories = this.renderCategories(coaches.weeklyCategories);
    const renderedCoaches = coaches.coaches
      .map((c) => this.renderCoach(c))
      .join("\n");

    const str = `
        메뉴 추천 결과입니다.
        [ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]
        ${renderedCategories}
        ${renderedCoaches}
        
        추천을 완료했습니다.
        `;

    Console.print(stripIndent(str));
  }

  /**
   *
   * @param {string[]} categories
   * @return {string}
   */
  static renderCategories(categories) {
    return `[ 카테고리 | ${categories[0]} | ${categories[1]} | ${categories[2]} | ${categories[3]} | ${categories[4]} ]`;
    // const categoriesArray = ["카테고리"];
    // const weeklyMenus = coaches.coaches[0].recommendedMenus; //추천하는 메뉴 5가지 나올 것
    // // 카테고리만 뽑아서 배열로 만든다
    // const weeklyMenuCategories = weeklyMenus.map((menu) => menu.category);
    // const resultArr = categoriesArray.concat(weeklyMenuCategories).join(" | ");
    // Console.print(`[ ${resultArr} ]`);
  }

  // /**
  //  *
  //  * @param {CoachesDto} coaches
  //  */
  // static printCoaches(coaches) {
  //   coaches.coaches.map((coach) => {
  //     const coachArray = [coach.name];
  //     const recommendMenu = coach.recommendedMenus.map((menu) => menu.name);
  //     const resultArr = coachArray.concat(recommendMenu).join(" | ");
  //     Console.print(`[ ${resultArr} ]`);
  //   });
  // }

  /**
   * @param {CoachDto} coach
   * @return {string}
   */
  static renderCoach(coach) {
    const m = coach.recommendedMenus.map((m) => m.name);
    return `[ ${coach.name} | ${m[0]} | ${m[1]} | ${m[2]} | ${m[3]} | ${m[4]} ]`;
  }
}

export default OutputView;
