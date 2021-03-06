/**
 * @description 全局公用方法
 * @author zr
 */

const _tools = {
  /**
   * 处理promise错误捕获
   * @param {*} promise
   * @returns
   */
  awaitWrap (promise, _this) {
    return promise
      .then(result => result)
      .catch(err => {
        return _this.$notify({
          title: '失败',
          message: err.data.msg || err.data.message,
          type: 'error',
          position: 'bottom-right'
        })
      })
  },

  /**
  * 格式化时间
  * @param {string} value 时间对象
  * @param {string} type 类型（year-年，month-月，day-日，all-年月日时分秒）
  * @returns
  */
  getTime (value, type) {
    const date = new Date(value)
    const tf = function (i) { return (i < 10 ? '0' : '') + i }
    const YY = tf(date.getFullYear())
    const MM = tf(date.getMonth() + 1)
    const DD = tf(date.getDate())
    const HH = tf(date.getHours())
    const mm = tf(date.getMinutes())
    const SS = tf(date.getSeconds())
    let time = null
    switch (type) {
      case 'year':
        time = `${YY}`
        break
      case 'month':
        time = `${YY}-${MM}`
        break
      case 'day':
        time = `${YY}-${MM}-${DD}`
        break
      case 'all':
        time = `${YY}-${MM}-${DD} ${HH}:${mm}:${SS}`
        break
    }
    return time
  }
}

export default _tools
