import { Console } from "@woowacourse/mission-utils";

class RetryHandler {
  /**
   * @param {any} callback
   * @return  {any}
   */
  static async handleRetry(callback) {
    while (true) {
      try {
        return await callback();
      } catch (e) {
        Console.print(`[ERROR] ${e.message}`);
      }
    }
  }
}

export default RetryHandler;
