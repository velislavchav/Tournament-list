import './App.css';
import { getAllTournaments } from "./services/tournament";
import React, { useState, useEffect } from 'react';
import { getAllTournamentNames, getAllTournamentCountries, filterTournaments } from "./utils";

// components
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";
import ListTable from "./components/Tournament/ListTable/ListTable";

function App() {
  const [searchedTournament, setSearchedTournament] = useState(null);
  const [searchedCountry, setSearchedCountry] = useState(null);
  const [defaultTournaments, setDefaultTournaments] = useState([]);
  const [filteredTournaments, setFilteredTournaments] = useState([]);
  const [tournamentsNames, setTournamentsNames] = useState([]);
  const [tournamentsCountries, setTournamentsCountries] = useState([]);
  const [tournamentListPage, setTournamentListPage] = useState(0);

  useEffect(() => {
    getAllTournaments().then(response => {
      setDefaultTournaments(response)
      setFilteredTournaments(response)
      setTournamentsNames(getAllTournamentNames(response))
      setTournamentsCountries(getAllTournamentCountries(response))
    })
  }, [])

  useEffect(() => {
    if (searchedTournament || searchedCountry) {
      const filteredTournamentsResult = filterTournaments(defaultTournaments, searchedTournament, searchedCountry);
      setFilteredTournaments(filteredTournamentsResult);
      setTournamentListPage(0);
    } else if (defaultTournaments.length > 0) {
      setFilteredTournaments(defaultTournaments);
      setTournamentListPage(0);
    }
  }, [searchedTournament, searchedCountry, defaultTournaments])

  return (
    <>
      <Header />
      <main>
        <div className="filter-section">
          <Filter setSearchedText={setSearchedTournament} values={tournamentsNames} searchLabel="Tournament name" />
          <Filter setSearchedText={setSearchedCountry} values={tournamentsCountries} searchLabel="Country name" />
        </div>
        <ListTable tournaments={filteredTournaments} page={tournamentListPage} setPage={setTournamentListPage} />
      </main>
    </>
  );
}

export default App;