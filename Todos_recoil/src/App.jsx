import { RecoilRoot, useRecoilValue, useRecoilState, useSetRecoilState, useRecoilValueLoadable } from 'recoil'
import { useEffect, useMemo } from 'react'
import axios from 'axios'
import './App.css'
// import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector, notification} from './store/atom/atoms'
import { notification, todosAtomFamily, todosAtomFamilyBackend, totalNotificationSelector } from './store/atom/atoms'

function App() {
  return (
    <>
    {/* <RecoilRoot>
        <Buttons/>
    </RecoilRoot> */}

    <RecoilRoot>
      <Todos id={5}/>
      <Todos id={4}/>
      <Todos id={3}/>
      <Todos id={1}/>
    </RecoilRoot>
    </>
  )
}

function Todos({id}){
  const currentTodo = useRecoilValue(todosAtomFamily(id));
  const currentTodoBackend = useRecoilValueLoadable(todosAtomFamilyBackend(id));
  if(currentTodoBackend.state === "loading"){
    return <div>
      loading....
    </div>
  }
  else if(currentTodoBackend.state === "hasValue"){
    return (
      <>
        <div>{currentTodoBackend.contents.title}</div>
        <div>{currentTodoBackend.contents.description}</div>
      </>
    )
  }
  else if(currentTodoBackend.state === "hasError"){
    return <div>
      some error on backend side
    </div>
  }
}

function Buttons() {
    // const notificationCount = useRecoilValue(notificationAtom);
    // const jobCount = useRecoilValue(jobsAtom);
    // const networkCount = useRecoilValue(networkAtom);
    // const messagingCount= useRecoilValue(messagingAtom);

    // const finalCount = useMemo(() => {
    //   return notificationCount + jobCount +networkCount+networkCount;
    // },[notificationCount,jobCount,networkCount,networkCount]) 

    // using selector 
    const finalCount = useRecoilValue(totalNotificationSelector)

    const notificationCount = useRecoilValue(notification);
    // useEffect(() => {
    //   axios.get("http://localhost:8080/recoil")
    //   .then(res => {
    //     setNotification(res.data);
    //   })
    // },[])

    return (
        <>
            <button>Home</button>
            <button>Jobs ({notificationCount.job})</button>
            <button>My Network ({notificationCount.network})</button>
            <button>Notification ({notificationCount.notification > 99 ? "99+": notificationCount.notification})</button>
            <button>Messaging ({notificationCount.message})</button>
            <button>Me({finalCount})</button>
        </>
    )
}

export default App


/**------------------- Recoil deep dive ------------ */

/*
 what are Atoms? 
 most smallest unit of state that you store just like useState()
 eg. on linkledin wesite jobCount,notificationCount, networkCount etc are all atom 

 what are selectors? 
 these are like derived form other atoms.

 what are asynchronous data queries ? 
 directly sending req using axios in the useeffect we send inside atom where the deafault is another selector which
 send req and get data
  const atom_name = atom({
    key: "atom_name",
    default: selector({
      key: "selector_name",
      key: async () => {
        //getting res and return to store in atom
        }
    })
  })


  What is the atomFamily() ? 
when we need to create multiple atom every atom associated to element than we use atom family.
like eg. in todo list we need to access the todos using id so we need onew atom for each id.so.we use 
atomFamily();

it also help us in prevent multiple copies of same atom as if access the same atom agian and again it 
not vreate new atom it uses the same atom .

to load data asynchrously need to use selectorFamily() in case of atomFamily as it return a function which 
return another fucntion why selectorFamily????? beacuse atomFamily is generate multiplae atoms not 
one for one atom we use selector so for a family we use selectorFamily().....



----------------useRecoilStateLoadable()---------------------------
----------------useRecoilValueLoadable()---------------------------

explore suspance and errorBoundary-------------------------------
 */