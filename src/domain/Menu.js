import Category from "./Category.js";
import MenuItem from "./MenuItem.js";

class Menu {
  /**
   * @type {MenuItem[]}
   */
  static ITEMS = [
    new MenuItem("규동", Category.JAPANESE),
    new MenuItem("우동", Category.JAPANESE),
    new MenuItem("미소시루", Category.JAPANESE),
    new MenuItem("스시", Category.JAPANESE),
    new MenuItem("가츠동", Category.JAPANESE),
    new MenuItem("오니기리", Category.JAPANESE),
    new MenuItem("하이라이스", Category.JAPANESE),
    new MenuItem("라멘", Category.JAPANESE),
    new MenuItem("오코노미야끼", Category.JAPANESE),

    new MenuItem("김밥", Category.KOREAN),
    new MenuItem("김치찌개", Category.KOREAN),
    new MenuItem("쌈밥", Category.KOREAN),
    new MenuItem("된장찌개", Category.KOREAN),
    new MenuItem("비빔밥", Category.KOREAN),
    new MenuItem("칼국수", Category.KOREAN),
    new MenuItem("불고기", Category.KOREAN),
    new MenuItem("떡볶이", Category.KOREAN),
    new MenuItem("제육볶음", Category.KOREAN),

    new MenuItem("깐풍기", Category.CHINESE),
    new MenuItem("볶음면", Category.CHINESE),
    new MenuItem("동파육", Category.CHINESE),
    new MenuItem("짜장면", Category.CHINESE),
    new MenuItem("짬뽕", Category.CHINESE),
    new MenuItem("마파두부", Category.CHINESE),
    new MenuItem("탕수육", Category.CHINESE),
    new MenuItem("토마토 달걀볶음", Category.CHINESE),
    new MenuItem("고추잡채", Category.CHINESE),

    new MenuItem("팟타이", Category.ASIAN),
    new MenuItem("카오 팟", Category.ASIAN),
    new MenuItem("나시고렝", Category.ASIAN),
    new MenuItem("파인애플 볶음밥", Category.ASIAN),
    new MenuItem("쌀국수", Category.ASIAN),
    new MenuItem("똠얌꿍", Category.ASIAN),
    new MenuItem("반미", Category.ASIAN),
    new MenuItem("월남쌈", Category.ASIAN),
    new MenuItem("분짜", Category.ASIAN),

    new MenuItem("라자냐", Category.WESTERN),
    new MenuItem("그라탱", Category.WESTERN),
    new MenuItem("뇨끼", Category.WESTERN),
    new MenuItem("끼슈", Category.WESTERN),
    new MenuItem("프렌치 토스트", Category.WESTERN),
    new MenuItem("바게트", Category.WESTERN),
    new MenuItem("스파게티", Category.WESTERN),
    new MenuItem("피자", Category.WESTERN),
    new MenuItem("파니니", Category.WESTERN),
  ];

  /**
   * @param {string} category
   * @return {MenuItem[]}
   */
  static findMenusByCategory(category) {
    return Menu.ITEMS.filter((menuItem) => menuItem.category === category);
  }
}

export default Menu;
