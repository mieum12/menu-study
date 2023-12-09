import { Console } from "@woowacourse/mission-utils";

class OutputView {
  /**
   * @return {void}
   */
  static printStartLine() {
    Console.print("\n점심 메뉴 추천을 시작합니다.");
  }

  /**
   *
   * @param {Coaches} coaches
   */
  static printResults(coaches) {
    Console.print(
      "메뉴 추천 결과입니다.\n" +
        "[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]",
    );
    this.printCategories(coaches);
    this.printCoaches(coaches);
    Console.print("\n추천을 완료했습니다.");
  }

  /**
   *
   * @param {Coaches} coaches
   */
  static printCategories(coaches) {
    const categoriesArray = ["카테고리"];
    const weeklyMenus = coaches.coaches[0].recommendedMenus; //추천하는 메뉴 5가지 나올 것
    // 카테고리만 뽑아서 배열로 만든다
    const weeklyMenuCategories = weeklyMenus.map((menu) => menu.category);
    const resultArr = categoriesArray.concat(weeklyMenuCategories).join(" | ");
    Console.print(`[ ${resultArr} ]`);
  }

  /**
   *
   * @param {Coaches} coaches
   */
  static printCoaches(coaches) {
    coaches.coaches.map((coach) => {
      const coachArray = [coach.name];
      const recommendMenu = coach.recommendedMenus.map((menu) => menu.name);
      const resultArr = coachArray.concat(recommendMenu).join(" | ");
      Console.print(`[ ${resultArr} ]`);
    });
  }
}

export default OutputView;
