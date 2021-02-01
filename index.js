const readline = require('readline-sync')

function start (){
    const content = {}
    content.seachTerm = askAndReturnSearchTerm()
    content.prefix = askAnReturnoPrefix()
    function askAndReturnSearchTerm(){
        return readline.question('Escolha um terma da serach Team:')
    }

    function askAnReturnoPrefix(){
        const prefixes =  ['who is', 'what is','The History of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes,'Choose one option:')
        const selectPrefixText = prefixes[selectedPrefixIndex]
        
        return selectPrefixText
    }
    console.log(content)
}

start()