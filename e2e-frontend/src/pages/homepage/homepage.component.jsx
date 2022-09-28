import {useEffect} from "react";
import axios from "axios";

const HomePage = () => {
    let url = 'http://localhost:8080/notes';
    useEffect(() => {

        axios.get(url).then((res) => {
            console.log(res, `response`);
        }).catch(err => {
            console.log(err, `error while Trying get Daata`);
        })

    })
    return (

        <div className={'container text-center'}>
            <h1>
                Homepage
            </h1>
        </div>
    )
}

export default HomePage;