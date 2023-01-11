/*
 * This helper wraps WDIO element locator syntax. Mostly the idea was based on a desire to get rid of "~" and "id=" used
 * in mobile tests for accessibilityId and mobileId respectively.
 *
 * Usage example:
 *
 * const by = require('./utils/by')
 * class Page {
 *     get element() { return by.accessibilityId('Big Red Button') }
 * }
 */

class By {
    /**
     * @param {String} locator
     * @returns {WebdriverIO.Element}
     */
    accessibilityId(locator) {
        return $(`~${locator}`)
    }

    /**
     * @param {String} locator
     * @returns {WebdriverIO.Element}
     */
    mobileId(locator) {
        return $(`id=${locator}`)
    }

    /**
     * @param {String} locator
     * @returns {WebdriverIO.Element}
     */
    cssId(locator) {
        return $(`#${locator}`)
    }

    /**
     * @param {String} locator
     * @returns {WebdriverIO.Element}
     */
    dataE2e(locator) {
        return $(`*[data-e2e=${locator}]`)
    }

    /**
     * @param {String} locator
     * @returns {WebdriverIO.Element}
     */
    cssName(locator) {
        return $(`*[name='${locator}']`)
    }

    /**
     * @param {String} locator
     * @returns {WebdriverIO.Element}
     */
    text(locator) {
        return $(`//*[text()='${locator}']`)
    }
}

module.exports = new By();