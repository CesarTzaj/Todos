import React from "react";

function useLocalstore(itemName, initialValue) {
  const [loading,setLoading] = React.useState(initialValue)
  const [error,setError] = React.useState(false)
  const [item, setItem] = React.useState(initialValue);
  React.useEffect(()=>{
    setTimeout(()=>{
      try {
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItem=[];
      if (!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
         parsedItem = JSON.parse(localStorageItem);
      }
      setItem(parsedItem)
      setLoading(false);
      } catch (error) {
        setError(error)
      }
    },1000);
  })

  
  const saveItem = (newList) => {
    try {
      const stringifiedItem = JSON.stringify(newList);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newList);
    } catch (error) {
      setError(error)
    }
  };
  return {item, saveItem, loading, error};
}

export { useLocalstore } 