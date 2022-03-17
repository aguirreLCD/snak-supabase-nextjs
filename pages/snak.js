
import { useFetch } from '../utils/useFetch';
import { useState  } from 'react';

export default function Snak() {
    console.log("snak");

    const [url, setUrl] = useState(null);
   
    const { data  } = useFetch({ url });    



    return (
        <>
        <div className="App">
            <div>Hello World</div>
            <div>Snak</div>


            <div>
                
                {JSON.stringify(data)}
            
            </div>

            <div>
                <button onClick={() => setUrl("https://api.github.com/users/aguirreLCD")}>Lili</button>
                <button onClick={() => setUrl("https://api.github.com/users/aguirreSL")}>Ginho</button>
            </div>





        </div>


        </>
    );
}

  
   




