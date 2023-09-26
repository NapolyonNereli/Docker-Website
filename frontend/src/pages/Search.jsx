import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import ImagesList from "../components/ImagesList";
import services from "../services/searchImages";
function Search() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const submitSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await services.searchImages(search);

      const lines = response.split("\n");
      lines.shift();
      lines.pop();
      const data = lines.map((line) => {
        const [name, description, stars, official, automated] =
          line.split(/\s{2,}/);
        return {
          name,
          description,
          stars,
          official: official === "[OK]",
          automated: automated === "[OK]",
        };
      });
      setList(data);
    } catch (error) {
      console.error("Hata oluştu: ", error);
    }
  };

  return (
    <>
      <NavBar />
      <SearchBar submit={submitSearch} search={search} setsearch={setSearch} />
      <SideBar>
        <ImagesList list={list} />
      </SideBar>
    </>
  );
}

export default Search;
