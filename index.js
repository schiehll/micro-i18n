export default class i18n {
  static setLang(lang){
    this.lang = lang
  }

  static t(key, args = {}){
    if(args !== {}){
      let txt = this.lang[key]
      if(args.hasOwnProperty('n')){
        txt = txt[args.n] || txt.n
      }

      if(typeof txt === 'undefined'){
        console.warn('[i18n] Key not found.')
        return key
      }

      if(typeof txt === 'object'){
        console.warn('[i18n] Key is a plural and expect a "n" argument.')
        return key
      }

      let re
      Object.keys(args).forEach(k => {
        re = new RegExp(`{{${k}}}`, 'g')
        txt = txt.replace(re, args[k])
      })

      return txt
    }

    return this.lang[key]
  }
}