import { Random } from "@woowacourse/mission-utils";
import Category from "./Category.js";

class CategoryGenerator {
  /**
   * @return {string}
   */
  generate() {
    const num = Random.pickNumberInRange(1, 5);
    return Category.from(num);
  }
}

export default CategoryGenerator;
