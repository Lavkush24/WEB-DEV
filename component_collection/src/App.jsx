import { Profile } from "./components/Profile"
import { BackgroundChanger, ColorButton, GroupButton } from "./components/BackgroundChanger"
import { RecoilRoot } from "recoil"

function App() {
  return(
    <>
      <RecoilRoot>
        <BackgroundChanger/>
      </RecoilRoot>
    </>
  )
}


function ProfileSetup() {
  return(
    <>
      <div className="flex flex-col justify-center items-center pt-30">
        <Profile name={"Lavkush"} place={"Greater noida"} followers={23} likes={45} photos={2.7} img={"lav.jpg"}></Profile>
      </div>
    </>
  )
}
export default App
