import { createContext, useState } from "react";

const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

export default FavoritesContext;

export const FavoritesContextProvider = ({children}) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    const addFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
    }

    const removeFavorite = (id) => {
        setFavoriteMealIds((currentFavIds) => currentFavIds.filter((mealId) => mealId !== id));
    }

    return (
        <FavoritesContext.Provider value={{
            ids: favoriteMealIds,
            addFavorite: addFavorite,
            removeFavorite: removeFavorite,
        }}>
            {children}
        </FavoritesContext.Provider>
    )
}