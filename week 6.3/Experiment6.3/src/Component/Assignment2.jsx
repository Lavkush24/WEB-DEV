import { useMemo, useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const words = ["if", "you", "are", "good", "at", "something", "never", "do", "it", "for", "free"];
const Total_lines = 1000;
const All_words = [];
for(let i = 0; i < Total_lines; i++) {
    let sentence = "";
    for(let j=0; j<words.length; j++) {
        sentence += (words[Math.floor(Math.random() * words.length)]);
        sentence += " ";
    }
    All_words.push(sentence);
};


export function Assignment2() {
    const [sentence, setSentence] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get("http://localhost:8080/sentence")
        .then((response) => {
            setSentence(response.data);
        });
    },[]);


    // axios.get("http://localhost:8080/sentence")
    // .then((response) => {
    //     setSentence(response.data);
    // });

    const filterSentence = useMemo(() => {
        return sentence.filter(x => x.includes(filter));      
    }, [filter,sentence]);

    return (
        <div>
            <b>Filter : </b><input type="text" onChange={(e) => {
                setFilter(e.target.value);
            }}/>
            <h1>
                {filterSentence.map((sentence) => {
                    return <p>{sentence}</p>
                })}
            </h1>
        </div>
    )
};
