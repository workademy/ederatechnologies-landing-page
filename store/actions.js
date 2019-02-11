import init from './init'

export default {
  init () {
    init.init()
  },
  subscribeNewsletter ({}, email) {
    let url = 'https://emailoctopus.com/lists/1cd6ea21-2c9b-11e9-a3c9-06b79b628af2/members/embedded/1.3/add'
    return $.post(url, {
      field_0: email,
      field_1: 'Olgaska',
      field_2: 'Boapessoa',
      'hp1cd6ea21-2c9b-11e9-a3c9-06b79b628af2': '',
      successRedirectUrl: ''
  }).then(cenas => {
      console.log(cenas)
    })
  }
}
