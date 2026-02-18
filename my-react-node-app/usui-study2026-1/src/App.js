import 'reactjs-popup/dist/index.css';
import ContentView  from './PostEval';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const order = queryParameters.get("order")
  const caseToken = queryParameters.get("caseToken")
  const pid = queryParameters.get("pid")
  const uid = uuidv4()

  console.log(process.env.REACT_APP_NODE_URL_R)

  /* useEffect(() => {
    axios.get(process.env.REACT_APP_NODE_URL_A)
      .then(response => {
        setData(response.data.message);
      })
      .catch(error => {
        console.error(error);
      });
  }, []); */

  /* useEffect(() => {
    axios.post(process.env.REACT_APP_NODE_URL_R, {
      fname: 'Finn',
      lastName: 'Williams'
    })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }, []); */

  return (
    <div className="App">
      <div>
        <ContentView order={order} uid={uid} ct={caseToken} pid={pid}/>
      </div>
      
    </div>
  );
}

export default App;