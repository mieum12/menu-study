import Category from "./Category.js";

class MenuItem {
  /**
   * @type {string}
   */
  #name;

  /**
   * @type {string}
   */
  #category;

  /**
   * @param {string} name
   * @param {string} category
   */
  constructor(name, category) {
    this.#name = name;
    this.#category = category;
  }

  /**
   * @return {string}
   */
  get name() {
    return this.#name;
  }

  /**
   * @return {string}
   */
  get category() {
    return this.#category;
  }
}

class Menu {
  // static M1 /** @type {MenuItem} */ = new MenuItem("규동", Category.JAPANESE);
  // static M2 /** @type {MenuItem} */ = new MenuItem("우동", Category.JAPANESE);
  // static M3 /** @type {MenuItem} */ = new MenuItem(
  //   "미소시루",
  //   Category.JAPANESE,
  // );
  // static M4 /** @type {MenuItem} */ = new MenuItem("스시", Category.JAPANESE);
  // static M5 /** @type {MenuItem} */ = new MenuItem("가츠동", Category.JAPANESE);
  // static M6 /** @type {MenuItem} */ = new MenuItem(
  //   "오니기리",
  //   Category.JAPANESE,
  // );
  // static M7 /** @type {MenuItem} */ = new MenuItem(
  //   "하이라이스",
  //   Category.JAPANESE,
  // );
  // static M8 /** @type {MenuItem} */ = new MenuItem("라멘", Category.JAPANESE);
  // static M9 /** @type {MenuItem} */ = new MenuItem(
  //   "오코노미야끼",
  //   Category.JAPANESE,
  // );
  //
  // static M10 /** @type {MenuItem} */ = new MenuItem("김밥", Category.KOREAN);
  // static M11 /** @type {MenuItem} */ = new MenuItem(
  //   "김치찌개",
  //   Category.KOREAN,
  // );
  // static M12 /** @type {MenuItem} */ = new MenuItem("쌈밥", Category.KOREAN);
  // static M13 /** @type {MenuItem} */ = new MenuItem(
  //   "된장찌개",
  //   Category.KOREAN,
  // );
  // static M14 /** @type {MenuItem} */ = new MenuItem("비빔밥", Category.KOREAN);
  // static M15 /** @type {MenuItem} */ = new MenuItem("칼국수", Category.KOREAN);
  // static M16 /** @type {MenuItem} */ = new MenuItem("불고기", Category.KOREAN);
  // static M17 /** @type {MenuItem} */ = new MenuItem("떡볶이", Category.KOREAN);
  // static M18 /** @type {MenuItem} */ = new MenuItem(
  //   "제육볶음",
  //   Category.KOREAN,
  // );
  //
  // static M19 /** @type {MenuItem} */ = new MenuItem("깐풍기", Category.CHINESE);
  // static M20 /** @type {MenuItem} */ = new MenuItem("볶음면", Category.CHINESE);
  // static M21 /** @type {MenuItem} */ = new MenuItem("동파육", Category.CHINESE);
  // static M22 /** @type {MenuItem} */ = new MenuItem("짜장면", Category.CHINESE);
  // static M23 /** @type {MenuItem} */ = new MenuItem("짬뽕", Category.CHINESE);
  // static M24 /** @type {MenuItem} */ = new MenuItem(
  //   "마파두부",
  //   Category.CHINESE,
  // );
  // static M25 /** @type {MenuItem} */ = new MenuItem("탕수육", Category.CHINESE);
  // static M26 /** @type {MenuItem} */ = new MenuItem(
  //   "토마토 달걀볶음",
  //   Category.CHINESE,
  // );
  // static M27 /** @type {MenuItem} */ = new MenuItem(
  //   "고추잡채",
  //   Category.CHINESE,
  // );
  //
  // static M28 /** @type {MenuItem} */ = new MenuItem("팟타이", Category.ASIAN);
  // static M29 /** @type {MenuItem} */ = new MenuItem("카오 팟", Category.ASIAN);
  // static M30 /** @type {MenuItem} */ = new MenuItem("나시고렝", Category.ASIAN);
  // static M31 /** @type {MenuItem} */ = new MenuItem(
  //   "파인애플 볶음밥",
  //   Category.ASIAN,
  // );
  // static M32 /** @type {MenuItem} */ = new MenuItem("쌀국수", Category.ASIAN);
  // static M33 /** @type {MenuItem} */ = new MenuItem("똠얌꿍", Category.ASIAN);
  // static M34 /** @type {MenuItem} */ = new MenuItem("반미", Category.ASIAN);
  // static M35 /** @type {MenuItem} */ = new MenuItem("월남쌈", Category.ASIAN);
  // static M36 /** @type {MenuItem} */ = new MenuItem("분짜", Category.ASIAN);
  //
  // static M37 /** @type {MenuItem} */ = new MenuItem("라자냐", Category.WESTERN);
  // static M38 /** @type {MenuItem} */ = new MenuItem("그라탱", Category.WESTERN);
  // static M39 /** @type {MenuItem} */ = new MenuItem("뇨끼", Category.WESTERN);
  // static M40 /** @type {MenuItem} */ = new MenuItem("끼슈", Category.WESTERN);
  // static M41 /** @type {MenuItem} */ = new MenuItem(
  //   "프렌치 토스트",
  //   Category.WESTERN,
  // );
  // static M42 /** @type {MenuItem} */ = new MenuItem("바게트", Category.WESTERN);
  // static M43 /** @type {MenuItem} */ = new MenuItem(
  //   "스파게티",
  //   Category.WESTERN,
  // );
  // static M44 /** @type {MenuItem} */ = new MenuItem("피자", Category.WESTERN);
  // static M45 /** @type {MenuItem} */ = new MenuItem("파니니", Category.WESTERN);

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

    // MenuItem.M1,
    // MenuItem.M2,
    // MenuItem.M3,
    // MenuItem.M4,
    // MenuItem.M5,
    // MenuItem.M6,
    // MenuItem.M7,
    // MenuItem.M8,
    // MenuItem.M9,
    // MenuItem.M10,
    // MenuItem.M11,
    // MenuItem.M12,
    // MenuItem.M13,
    // MenuItem.M14,
    // MenuItem.M15,
    // MenuItem.M16,
    // MenuItem.M17,
    // MenuItem.M18,
    // MenuItem.M19,
    // MenuItem.M20,
    // MenuItem.M21,
    // MenuItem.M22,
    // MenuItem.M23,
    // MenuItem.M24,
    // MenuItem.M25,
    // MenuItem.M26,
    // MenuItem.M27,
    // MenuItem.M28,
    // MenuItem.M29,
    // MenuItem.M30,
    // MenuItem.M31,
    // MenuItem.M32,
    // MenuItem.M33,
    // MenuItem.M34,
    // MenuItem.M35,
    // MenuItem.M36,
    // MenuItem.M37,
    // MenuItem.M38,
    // MenuItem.M39,
    // MenuItem.M40,
    // MenuItem.M41,
    // MenuItem.M42,
    // MenuItem.M43,
    // MenuItem.M44,
    // MenuItem.M45,
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
