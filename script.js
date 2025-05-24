
const whosPaying = () => {
    var firstName = document.getElementById('first').value
    var secondName = document.getElementById('second').value
    var thirdName = document.getElementById('third').value
    var fourthName = document.getElementById('fourth').value
    var fifthName = document.getElementById('fifth').value
    var sixthName = document.getElementById('sixth').value

    var names = [firstName, secondName, thirdName, fourthName, fifthName, sixthName].filter(name => name.trim() !== "");


    if(names.length === 0) {
        document.getElementById('result').innerHTML = `You forgot to type a name!`
        return;
    }

    var numberOfPeople = names.length
    var randomIndex = Math.floor(Math.random() * numberOfPeople)
    var randomPerson = names[randomIndex]

    var cappedName = randomPerson.slice(0,1).toUpperCase()
    var restOfName = randomPerson.slice(1)
    var finalName = cappedName + restOfName

    document.getElementById('result').innerHTML = `${finalName} is going to pay today!`
}