// 타입스트립트 체크는 파일 가장 위에 1번만 선언
// @ts-check
/**
 * initialize the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns boolean
 */
export function init(config) {
    return true;
}

/**
 * exit the project
 * @param {number} code 
 * @returns number
 */
export function exit(code) {
    return code + 1;
}