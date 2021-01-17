import React, { useState, useEffect, createContext } from "react";
import { getGenres } from "../api/movie-api";

export const GenresContext = createContext(null)

const GenresContextProvider = props => {
    let aa = 0;
    const [genres, setGenres] = useState([{ id: aa, name: "All" }]);
    useEffect(() => {
      getGenres().then(allGenres => {
        
        setGenres([genres[aa], ...allGenres]);
        aa ++

        console.log("G0-"+ genres[0].id)
        console.log("G0-"+ genres[0].name)
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <GenresContext.Provider
          value={{
            genres
          }}
        >
          {props.children}
        </GenresContext.Provider>    
    )
}

export default GenresContextProvider;