import { atom, selector } from "recoil"

export const countAtom = atom({
    key: "countAtom",
    default: 0
})


//defining selector for ecen check 
/* here get is define the how the selector is depend upon the other entity like countAtom
it depend upon the other selector or atom  */
export const evenSelector = selector({
    key: "evenSelector",
    get: ({get}) => {
        const count = get(countAtom);
        return count%2;
    }
})