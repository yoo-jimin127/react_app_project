import './App.css';
import {useState} from 'react';
import moment from 'moment';

const App =()=>{

  const [getMoment, setMoment]=useState(moment());     
  const today = getMoment;

  return(
    <div className="App">

        <div className="control">
        <button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
          <span>{today.format('YYYY 년 MM 월')}</span>
          <button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
        </div>
        <table>
          <tbody>

          </tbody>
        </table>
    </div>
  );
}
export default App;