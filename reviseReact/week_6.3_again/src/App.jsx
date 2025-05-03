import { useEffect, useState, useMemo } from 'react'
import './App.css'

function App() {
  const [count,setCount] = useState(0);
  const [exchangeData,setExchangeData] = useState({});
  const [bankData,setBankData] = useState({});


  //for demo of useMemo
  const [exchange1Data,setExchange1Data] = useState({});
  const [exchange2Data,setExchange2Data] = useState({});
  const [balance,setBalance] = useState({});


  
  // these cause rerendered again and agian if not use useEffect
  useEffect(() => {
    setTimeout(() => {
      setBankData({income: 100});
    }, 3000);
  },[])
  
  useEffect(() => {
    setTimeout(() => {
      setExchangeData({return:100})
    },1000)
  },[])
  
  
  //use case of useMemo
  useEffect(() => {
    setExchange1Data({return:1000});
  },[])
  
  useEffect(() => {
    setExchange2Data({return:10000});
  },[])
  
  useEffect(() => {
    setTimeout(() => {
      setBalance({income: 20000});
    }, 5000);
  },[])
  
  /* here we not need to recalculate the cryptoreturn if 
  excahnge return are not changes but they recalcualte with every rendered */
  const cryptoReturn = useMemo(() => {
    console.log("Rerendered");
    return exchange1Data.return + exchange2Data.return; 
  },[exchange1Data,exchange2Data])
  const income = (cryptoReturn + balance.income) * 0.3;


  return (
    <div>
      <h1>counter: {count}</h1>
      <button onClick={() => setCount(count+1)}>Increase count</button>
      
      <div>Hi,there your income is {income}</div>

      
    </div>   
  )
}
export default App

/* when you want to render the something only once(at time of mount )
 then we write that code in the useEffect()  
 
 useEffect(() => {
      // fetch req
      // settimeout
},[dependencies])

on chaging dependencies the useEffect code is rerendered

*/


/* 
when you some data which is complex calculation and is calculated again on every 
rerendering then write that code in useMemo so it not recalculated agian  only if associated 
value are changes 

const data = useMemo(() => {
    //calculation
},[dependend values])

*/

/*  useCallback() use when a fucntion take props as another function and you do not want
to re-rendering the child when parent is not rerendred */

/* useRef() it is reference to the any element of dom for dom manipulation 
rather using the getElementById we use useRef() to pointing
*/