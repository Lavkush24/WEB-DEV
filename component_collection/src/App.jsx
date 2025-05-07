import { Profile } from "./components/Profile"

function App() {
  return(
    <>
      <div className="flex flex-col justify-center items-center pt-30">
        <Profile name={"Lavkush"} place={"Greater noida"} followers={23} likes={45} photos={2.7} img={"lav.jpg"}></Profile>
      </div>
    </>
  )
}

export default App
