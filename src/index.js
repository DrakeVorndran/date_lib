class D {
  constructor(...args) {
    this.date = new Date(...args)
  }

  get year() {
    return this.date.getFullYear()
  }
  get month() {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return months[this.date.getMonth()]
  }
  get monthNum() {
    return this.date.getMonth()
  }
  get day() {
    return this.date.getDate()
  }
  get hour() {
    return this.date.getHours()
  }
  get minute() {
    return this.date.getMinutes()
  }
  get second() {
    return this.date.getSeconds()
  }
  get mili() {
    return this.date.getMilliseconds()
  }

  format(form='Y M D') {
    const swaps = {
      'Y': this.year,
      'y': String(this.year).slice(2, 4),
      'M': this.month,
      'm': this.month.slice(0, 3),
      'D': this.day < 10 ? '0' + this.day : this.day,
      'd': this.day,
      'H': this.hour < 10 ? '0' + this.hour : this.hour,
      'h': this.hour,
      'I': this.minute < 10 ? '0' + this.minute : this.minute,
      'i': this.minute,
      'S': this.second < 10 ? '0' + this.second : this.second,
      's': this.second,
    }
    return form.split("").map(char => char in swaps ? swaps[char] : char).join("")

  }

  when(curr=new D) {
    const l = ['mili', 'second', 'minute', 'hour', 'day', 'monthNum', 'year']
    return l.reduce((acc, unit) => {
      const printUnit = unit =='monthNum'? 'month' : unit
      if (this[unit] < curr[unit]) {
        return `${curr[unit] - this[unit]} ${printUnit}${curr[unit] - this[unit]===1? "" : "s"} ago`
      }
      else if (this[unit] > curr[unit]) {
        return `${this[unit] - curr[unit]} ${printUnit}${this[unit] - curr[unit]===1? "" : "s"} from now`
      }
      return acc
    }, 'now')
  }

}

module.exports = D