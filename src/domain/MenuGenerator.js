import { Random } from "@woowacourse/mission-utils";
import Menu from "./Menu.js";

class MenuGenerator {
  /**
   * @param {string} category
   * @return {MenuItem}
   */
  generateByCategory(category) {
    // 해당 카테고리의 메뉴들 9가지
    const menuItems = Menu.findMenuNamesByCategory(category);
    // 메뉴를 숫자(인덱스)로 변환 [0,1,2, ...,8]
    const indexArr = menuItems.map((_, index) => index);
    // 인덱스 랜덤 뽑기
    const pickedIndex = Random.shuffle(indexArr)[0];
    // 해당인덱스의 메뉴를 리턴
    return menuItems[pickedIndex];
  }
}

export default MenuGenerator;
