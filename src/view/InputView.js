import {Console} from "@woowacourse/mission-utils";
import InputValidator from "./InputValidator.js";
import Coaches from "../domain/Coaches.js";
import RetryHandler from "../utils/RetryHandler.js";
import Menu from "../domain/Menu.js";

/**
 *
 * @type {string}
 */
const INPUT_COACH_MESSAGE = "코치의 이름을 입력해 주세요. (, 로 구분)\n";
/**
 *
 * @type {string}
 */
const INPUT_MENU_MESSAGE = `(이)가 못 먹는 메뉴를 입력해 주세요.\n`;

class InputView {
  /**
   *
   * @return {Promise<Coaches>}
   */
  static async readCoaches() {
    // 코치 이름 입력
    const coaches = await InputView.#inputCoaches(); // ['토미','제임스','포코']
    // 각 코치 별로 못 먹는 메뉴 추가
    for (const coach of coaches.coaches) {
      await InputView.#inputRefusedMenus(coach);
    }
    return coaches;
  }

  /**
   *
   * @return {Promise<Coaches>}
   * @description 코치를 입력받는 곳
   */
  static async #inputCoaches() {
    return await RetryHandler.handleRetry(this.#_inputCoaches);
  }

  /**
   *
   * @return {Promise<Coaches>}
   * @description 코치를 입력받는 곳
   */
  static async #_inputCoaches() {
    const input = await Console.readLineAsync(INPUT_COACH_MESSAGE);
    InputValidator.validateInputFormat(input);
    return new Coaches(input.split(",")); // ['토미','제임스','포코']
  }

  /**
   * @param {Coach} coach
   * @return {Promise<void>}
   * @description 못먹는 메뉴를 입력받는 곳
   */
  static async #inputRefusedMenus(coach) {
    await RetryHandler.handleRetry(
      async () => await this.#_inputRefusedMenus(coach),
    );
  }

  /**
   * @param {Coach} coach
   * @return {Promise<void>}
   * @description 못먹는 메뉴를 입력받는 곳
   */
  static async #_inputRefusedMenus(coach) {
    const input = await Console.readLineAsync(
      `\n${coach.name}` + INPUT_MENU_MESSAGE,
    );
    InputValidator.validateInputFormat(input);
    // '뇨끼,월남쌈,마파두부'를 ['뇨끼','월남쌈','마파두부']인 배열로 변환, 근데 빈값인 경우 ""가 아닌 진짜 빈값으로 들어가게 필터링 추가
    const refusedMenus = input.split(",").filter((s) => s !== "");
    this.#toMenuItems(coach, refusedMenus);
  }

  /**
   * @param {Coach} coach
   * @param {string[]} refusedMenus
   * @description new MenuItem으로 만들어서 보내주기
   */
  static #toMenuItems(coach, refusedMenus) {
    refusedMenus.forEach((menu) => {
      const refusedMenu = Menu.ITEMS.find((menuItem) => menuItem.name === menu);
      coach.addRefusedMenus(refusedMenu);
    });
  }
}

export default InputView;
