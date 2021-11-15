import './App.css';
import Button from "./Components/Button"
import List from './Components/List';
function App() {
  return (
    <div className="App App-header">
      <Button type="success" title="A"/>
      <Button type="warning" title="B"/>
      <Button type="" title="C"/>
      <button className="button"> </button>
      <img src={process.env.PUBLIC_URL + '/logo192.png'}/>
      <List/>
      {/* <img src="logo512.png"></img> */}
    </div>
  );
}

export default App;
