import React from 'react'
import CocktailListWrapper from "../assets/wrappers/CocktailList"
import CocktailCard from './CocktailCard'
const CocktailLists = ({drinks}) => {

  const formattedDrinks = drinks.map((item) => {
     const {idDrink, strAlcoholic, strDrink, strDrinkThumb, strGlass} = item;
     return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
     }
  })
  return (
    <CocktailListWrapper>
      {formattedDrinks.map((drink) => {
        return <CocktailCard key={drink.id} {...drink}/>
      })}
    </CocktailListWrapper>
  )
}

export default CocktailLists
