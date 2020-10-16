import MessageApp from './model'

let messageApp
if (process.env.npm_lifecycle_event == "test"){
  messageApp = new MessageApp("/\///json/\//testMessages.json")  
} else {
  messageApp = new MessageApp("/\///json/\//messages.json")
}

function getAll() {
  return new Promise((resolve, reject) => {
    let result = messageApp.getAll()
    if(result !== []) {
      resolve(result)
    } else {
      reject(result)
    }
  })
}

function post(content) {
  return new Promise((resolve, reject) => {
    let message = messageApp.post(content)
    if (message !== []) {
      resolve(message)
    } else {
      reject (message)
    }
  })
}

module.exports = {
  getAll,
  post
}