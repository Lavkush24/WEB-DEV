import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";
import { colorAtom } from "../Atoms";

export function BackgroundChanger() {
    const colorValue = useRecoilValue(colorAtom);
    return(
        <>
            <div 
                className="h-dvh bg-gray-500"
                style={{backgroundColor:`${colorValue}`}}
            >
                <div 
                    className="fixed start-[340px] bottom-10 shadow-md rounded-full bg-gray-100"
                >
                    <GroupButton/>
                </div>
            </div>
        </>
    )
}


export function ColorButton({
    color,
    text
}) {
    const setColorValue = useSetRecoilState(colorAtom);

    return (
        <>
            <button
                style={{backgroundColor:`${color}`}} className="text-white w-[100px] rounded-lg p-1 m-5 hover:cursor-pointer"
                onClick={() => setColorValue(color)}
            >{text}</button>
        </>
    )
} 


export function GroupButton() {
    return(
        <>
            <ColorButton text={"Red"} color={"red"}/>
            <ColorButton text={"Yellow"} color={"yellow"}/>
            <ColorButton text={"Blue"} color={"blue"}/>
            <ColorButton text={"Pink"} color={"pink"}/>
            <ColorButton text={"Gray"} color={"gray"}/>
            <ColorButton text={"Default"} color={"black"}/>
        </>
    )
}