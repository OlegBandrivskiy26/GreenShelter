let initalState = {
    Texts: [
        'Johd +38065779',
        'Max +38065776',
        'Jack +380667',
        'Louis +3845677',
        'Kodn +38066778',
        'Jenson +380678',
        'Sherlock +38066777',
        'Lana +38066789',
        'lari +38066789',
        'Leven +38066778',
        'Janen +380667898',
        'Shorel +380667344',
        'Levieree +379800890',
        'Jako +380667454',
        'Jana +380667466',
        'Jala +3806671244',
        'Shonte +380667',
        'Neret +38066744',
        'Veve +38066766',
        'Jack +380667667',
        'Charles +38066700',
        'Maximilian +38066567',
        'Maxi +384066567',
        'Fredi +380466567',
        'Folvi +38066567',
        'Jack Denvert +380665667',
        'Carl +3806656776',







    ],

    searchResult: []
}

let reducer = (state = initalState, action) => {
    switch (action.type) {
        case "Searching":
            return ({
                ...state,
                searchResult: [...state.Texts].filter(text => {
                    return new RegExp(`${action.payload}`, "gi").test(text)
                })

            })


        default:
            return state
    }
}

export default reducer