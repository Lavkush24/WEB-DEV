import { atom, atomFamily, selector, selectorFamily } from "recoil"
import axios from "axios";
import { todos } from "../../todos";

export const notification = atom({
    key: "notification",
    default: selector({
        key: "notificationSelector",
        get: async () => {
            const res = await axios.get("http://localhost:8080/recoil")
            return res.data;
        }
    })
})

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 10
// })

// export const notificationAtom = atom({
//     key: "notificationAtom",
//     default: 119
// })

// export const messagingAtom = atom({
//     key: "messagingAtom",
//     default: 34
// })

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 45
// })

export const totalNotificationSelector = selector({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const allNotification = get(notification);
        return allNotification.network + allNotification.notification + allNotification.job + allNotification.message;
    }
})


//accessing from hardcoded files
export const todosAtomFamily = atomFamily({
    key: "todosAtomFamily",
    default: id => {
        return todos.find(x => x.id === id);
    },
})


//accessing by hitting backend
export const todosAtomFamilyBackend = atomFamily({
    key: "todosAtomFamilyBackend",
    default: selectorFamily({
        key: "todosAtomFamilySelector",
        get: (id) => async () => {
            await new Promise(r => setTimeout(r, 5000));
            const res = await axios.get(`http://localhost:8080/todo/${id}`);
            return res.data;
        }
    })
})