
import { useState, useContext  } from 'react';

import { DataContext } from '../utils/DataContext';

export default function Chat() {
    console.log("chat");

    const [url, setUrl] = useState(null);
    console.log(url);
   
    const dataGit = useContext(DataContext);
    console.log("chat", dataGit);
   


    return (
        <div className="App">
            <div>Hello World</div>
            <div>chat</div>
            {/* <h1>{dataGit.name}</h1> */}
            {/* <div>{JSON.stringify(dataGit)}</div> */}
            <div>
                <button onClick={() => setUrl("https://api.github.com/users/aguirreLCD")}>Lili</button>
                <button onClick={() => setUrl("https://api.github.com/users/aguirreSL")}>Ginho</button>
            </div>

        </div>

    );
}

  
   




