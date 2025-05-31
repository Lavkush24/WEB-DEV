import { Card,CardColor } from './components/Card'
import { Header } from './components/header'
// import { Button } from './components/Button'
import { Search } from './components/Search'
import { SideBar } from './components/SideBar'
import Button from '@mui/material/Button';

function App() {

  return (
    <>
      <Cards/>
      <Button variant="contained">Contained</Button>
    </>
  )
}

function Cards() {
  return (
    <div className='flex'>
    <div>
      <SideBar></SideBar>
    </div>
    <div className='flex-1'>
      <Header brand={"Payouts"}/>
      <div className='p-5 font-medium text-sm'>Overview</div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ps-5 pe-5 gap-3'>
        <CardColor title={"Next Payout"} countOrder={23} amount={2312.23} date={"Today, 4:00PM"}/>
        <Card title={"Amount Pending"} countOrder={13} amount={23467.89}/>
        <Card title={"Amount Processed"} countOrder={13} amount={23923123.89}/>
      </div>
      <div className='p-5 font-medium text-sm'>Transactions | This Month</div>
      {/* <div className='ps-5 flex gap-3'>
        <Button head={"Payouts"} count={22}></Button>
        <Button head={"Refunds"} count={6}></Button>
      </div> */}
      <div className='ps-5 pt-5'>
        <Search placeText={"Order ID or Transaction ID"} width={"200px"}></Search>
      </div>
    </div>
    </div>
  )
}

export default App
