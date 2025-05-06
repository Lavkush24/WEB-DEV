import { Card,CardColor } from './components/Card'
import { Header } from './components/header'
import { Button } from './components/Button'

function App() {

  return (
    <>
      <Cards/>
    </>
  )
}

function Cards() {
  return (
    <>
    <Header brand={"Payouts"}/>
    <div className='p-5 font-medium text-sm'>Overview</div>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ps-5 pe-5 gap-3'>
      <CardColor title={"Next Payout"} countOrder={23} amount={2312.23} date={"Today, 4:00PM"}/>
      <Card title={"Amount Pending"} countOrder={13} amount={23467.89}/>
      <Card title={"Amount Processed"} countOrder={13} amount={23923123.89}/>
    </div>
    <div className='p-5 font-medium text-sm'>Transactions | This Month</div>
    <div className='ps-5 flex gap-3'>
      <Button head={"Payouts"} count={22}></Button>
      <Button head={"Refunds"} count={6}></Button>
    </div>
    </>
  )
}

export default App
