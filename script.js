const superheroes = [
    {
    "name": "Batman",
    "publisher": "DC Comics",
    "alter_ego": "Bruce Wayne",
    "first_appearance": "Detective Comics #27",
    "weight": "210"
    },
    {
    "name": "Superman",
    "publisher": "DC Comics",
    "alter_ego": "Kal-El",
    "first_appearance": "Action Comics #1",
    "weight": "220"
    },
    {
    "name": "Flash",
    "publisher": "DC Comics",
    "alter_ego": "Jay Garrick",
    "first_appearance": "Flash Comics #1",
    "weight": "195"
    },
    {
    "name": "Green Lantern",
    "publisher": "DC Comics",
    "alter_ego": "Alan Scott",
    "first_appearance": "All-American Comics #16",
    "weight": "186"
    },
    {
    "name": "Green Arrow",
    "publisher": "DC Comics",
    "alter_ego": "Oliver Queen",
    "first_appearance": "All-American Comics #16",
    "weight": "195"
    },
    {
    "name": "Wonder Woman",
    "publisher": "DC Comics",
    "alter_ego": "Princess Diana",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "165"
    },
    {
    "name": "Blue Beetle",
    "publisher": "DC Comics",
    "alter_ego": "Dan Garret",
    "first_appearance": "Mystery Men Comics #1",
    "weight": "145"
    },
    {
    "name": "Spider Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Peter Parker",
    "first_appearance": "Amazing Fantasy #15",
    "weight": "167"
    },
    {
    "name": "Captain America",
    "publisher": "Marvel Comics",
    "alter_ego": "Steve Rogers",
    "first_appearance": "Captain America Comics #1",
    "weight": "220"
    },
    {
    "name": "Iron Man",
    "publisher": "Marvel Comics",
    "alter_ego": "Tony Stark",
    "first_appearance": "Tales of Suspense #39",
    "weight": "250"
    },
    {
    "name": "Thor",
    "publisher": "Marvel Comics",
    "alter_ego": "Thor Odinson",
    "first_appearance": "Journey into Myster #83",
    "weight": "200"
    },
    {
    "name": "Hulk",
    "publisher": "Marvel Comics",
    "alter_ego": "Bruce Banner",
    "first_appearance": "The Incredible Hulk #1",
    "weight": "1400"
    },
    {
    "name": "Wolverine",
    "publisher": "Marvel Comics",
    "alter_ego": "James Howlett",
    "first_appearance": "The Incredible Hulk #180",
    "weight": "200"
    },
    {
    "name": "Daredevil",
    "publisher": "Marvel Comics",
    "alter_ego": "Matthew Michael Murdock",
    "first_appearance": "Daredevil #1",
    "weight": "200"
    },
    {
    "name": "Silver Surfer",
    "publisher": "Marvel Comics",
    "alter_ego": "Norrin Radd",
    "first_appearance": "The Fantastic Four #48",
    "weight": "unknown"
    }
    ]

    //OPDRACHT 1

    const superheroesNames = superheroes.map((item) => {
        return item.name
    })
    console.log("Opdracht 1 superheores names:")
    console.log(superheroesNames)

    //OPDRACHT 2 

    const superheroesWeight = superheroes.filter((item) => {
        return item.weight < 190 || "unknown"
    })

    console.log("Opdracht 2 superheroes weight:")
    console.log(superheroesWeight)

    //OPDRACHT 3 

    const superheroesWeight200 = superheroes.filter((item) => {
        return item.weight === "200"
    })

    console.log("Opdracht 3 superheroes weight 200")
    console.log(superheroesWeight200)

    //OPDRACHT 4 

    const superheroesFirstAppearances = superheroes.map((item) => {
        return item.first_appearance
    })

    console.log("Opdracht 4 superheroes first appearance:")
    console.log(superheroesFirstAppearances)

    //OPDRACHT 5 

    const superheroesDC = superheroes.filter((item) => {
        return item.publisher === "DC Comics"
    })

    console.log("Opdracht 5 superheroes of DC Comics:")
    console.log(superheroesDC)

    const superheroesMarvel = superheroes.filter((item) => {
        return item.publisher === "Marvel Comics"
    })

    console.log("Opdracht 5 superheroes of Marvel:")
    console.log(superheroesMarvel)

    //OPDRACHT 6 

    const superheroesDCWeight = superheroesDC.map((item) => {
        return item.weight
    })
    const superheroesDCWeightToNumbers = superheroesDCWeight.map((i) => Number(i)) 

    const superheroesDCWeightTotal = superheroesDCWeightToNumbers.reduce((accumulator, currentValue)  => {
        return accumulator + currentValue
        } , 0) 

    console.log(`Opdracht 6 total weight of DC superheroes: ${superheroesDCWeightTotal} pounds`)
    // console.log(superheroesDCWeightToNumbers)
    console.log(superheroesDCWeightTotal)

    
    //OPDRACHT 7 
    
    const superheroesMarvelWeight = superheroesMarvel.map((item) => {
        return item.weight
    })
    const superheroesMarvelWeightToNumbers = superheroesMarvelWeight.map((i) => Number(i)) 

    const superheroesMarvelWeightToNumbersNumbersCheck = superheroesMarvelWeightToNumbers.filter((item) => {
        return (parseInt(item) == item)
    })

    const superheroesMarvelWeightTotal = superheroesMarvelWeightToNumbersNumbersCheck.reduce((accumulator, currentValue)  => {
        return accumulator + currentValue
        } , 0) 

    console.log(`Opdracht 7 total weight of Marvel superheroes: ${superheroesMarvelWeightTotal} pounds`)
    // console.log(superheroesMarvelWeightToNumbers)
    // console.log(superheroesMarvelWeightToNumbersNumbersCheck)
    console.log(superheroesMarvelWeightTotal)

    //OPDRACHT 8 

    const superheroesTotalWeightInNumbers = superheroesMarvelWeightToNumbersNumbersCheck.concat(superheroesDCWeightToNumbers)

    const HighestWeightSuperheroes = superheroesTotalWeightInNumbers.reduce((a, b) => {
        return Math.max(a, b)
    })

    const HighestWeightSuperheroesToString = HighestWeightSuperheroes.toString() 

    function findTheHeaviestSuperhero(array) {
        return array.weight == HighestWeightSuperheroesToString
        }
    
    // console.log(superheroesTotalWeightInNumbers)
    // console.log(HighestWeightSuperheroes)
    // console.log(HighestWeightSuperheroesToString)
    
    console.log("Opdracht 8 the heaviest superhero is: ")
    console.log(superheroes.find(findTheHeaviestSuperhero))