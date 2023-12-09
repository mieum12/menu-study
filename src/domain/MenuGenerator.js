import { Random } from "@woowacourse/mission-utils";
import Menu from "./Menu.js";

class MenuGenerator {
  /**
   * @param {string} category
   * @return {MenuItem}
   */
  generateByCategory(category) {
    const menuItems = Menu.findMenusByCategory(category);
    return Random.shuffle(menuItems)[0];
  }
}

export default MenuGenerator;
