const INVALID_FORMAT_INPUT_ERROR_MESSAGE = "[ERROR] 입력 형식이 올바르지 않습니다."

class InvalidFormatInputError extends Error {
  constructor() {
    super(INVALID_FORMAT_INPUT_ERROR_MESSAGE);
  }
}
export default InvalidFormatInputError