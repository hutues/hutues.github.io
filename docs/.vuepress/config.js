module.exports = {
  title: 'Coder-Monkey',
  head: [
     ['link', {rel: 'icon', href: '/img/icon.jpg'}],
     ['link', {rel: 'stylesheet', href: '/css/style.css'}],
  ],
  description: '一时不学一时爽 一直不学一直爽',
  themeConfig: {
    nav: require('./nav'),
    sidebar: require('./sidebar')	
  }
}
