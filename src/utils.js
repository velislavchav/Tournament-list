export const getAllTournamentNames = (tournaments) => {
    const uniqueNames = [...new Set(tournaments.map(item => item.name))];
    return uniqueNames;
}

export const getAllTournamentCountries = (tournaments) => {
    const uniqueCountries = [...new Set(tournaments.map(item => item.country.name))];
    return uniqueCountries;
}

export const filterTournaments = (tournaments, searchedTournament, searchedCountry) => {
    let filteredContent = [...tournaments];
    
    if(searchedTournament && searchedCountry) { 
        filteredContent = filteredContent.filter(tournament => tournament.name === searchedTournament && tournament.country.name === searchedCountry);
    } else {
        if(searchedTournament) {
            filteredContent = filteredContent.filter(tournament => tournament.name === searchedTournament);
        } else if (searchedCountry) {
            filteredContent = filteredContent.filter(tournament => tournament.country.name === searchedCountry);
        }
    }

    return filteredContent;
}

export const reverseString = (string) => {
    return string.split("").reverse().join("");
}