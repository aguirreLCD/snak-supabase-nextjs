
import { useState, useEffect, createContext  } from 'react';

export const DataContext = createContext();

export const DataProvider = (options) => {

    const [dataGit, setDataGit] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        console.log("DataContext useEffect ");

        if (options.url) {
            let isCancelled = false;
            setLoading(true);
            fetch((options.url))
            .then((response) => response.json())
            .then((dataGit) => {
                if(!isCancelled) {
                    console.log(dataGit);
                    setDataGit(dataGit);
                }
            })
            .catch((err) => {
                setError(err);
            }).finally(() => {
                setLoading(false);
            });
            return () => {
                isCancelled = true;
            }
        }
    }, [options.url]);

    return (
        <DataContext.Provider value={{dataGit, loading, error }}>
            
            {props.children}

        </DataContext.Provider>
 
    );
}




// const depCompare = (oldDeps, newDeps) => 
    // oldDeps.length === newDeps.length && oldDeps.every((dep, i) => dep === newDeps[i]);

    // depCompare([], []);