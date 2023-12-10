import InputView from "../view/InputView.js";
import OutputView from "../view/OutputView.js";
import MenuGenerator from "../domain/MenuGenerator.js";
import CategoryGenerator from "../domain/CategoryGenerator.js";

class Controller {
  static async run() {
    // 1.입력 - 코치 이름, 못먹는 메뉴
    const coaches = await this.makeCoaches();
    // 2.실행 - 메뉴 추천
    await this.recommendStart(coaches);
    // 3.출력 - 결과 출력
    OutputView.printResults(coaches.toCoachesDto());
  }

  /**
   *
   * @description 코치 이름과 못먹는 메뉴 입력받아서 하나로(Coach) 저장하기
   */
  static async makeCoaches() {
    OutputView.printStartLine();
    return await InputView.readCoaches();
  }

  /**
   * @param coaches
   * @return {Promise<void>}
   * @description 메뉴 추첨을 진행
   */
  static async recommendStart(coaches) {
    // 카테고리, 메뉴 추천
    // 이렇게 랜덤 값은 밖에서 따로 빼서 넣어주기
    const categoryGenerator = new CategoryGenerator();
    const menuGenerator = new MenuGenerator();
    coaches.recommendWeeklyMenus(categoryGenerator, menuGenerator);
  }
}

export default Controller;
