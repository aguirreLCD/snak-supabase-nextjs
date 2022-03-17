
import { useState, useEffect  } from 'react';

export const useFetch = (options) => {
    const [data, setData] = useState([null]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {
        console.log("useFetch useEffect ");

        if (options.url) {
            let isCancelled = false;
            setLoading(true);
            fetch((options.url))
            .then((response) => response.json())
            .then((data) => {
                if(!isCancelled) {

                    console.log(data);
                    setData(data);
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

    return { data, loading, error };
 
};

// export default useFetch; 


// const depCompare = (oldDeps, newDeps) => 
    // oldDeps.length === newDeps.length && oldDeps.every((dep, i) => dep === newDeps[i]);

    // depCompare([], []);