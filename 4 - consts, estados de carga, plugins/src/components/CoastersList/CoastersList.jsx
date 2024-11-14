import axios from "axios"
import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Loader from "../Loader/Loader"
import * as IMAGE_PATHS from "../../consts/image-paths"

import Calendar from 'react-calendar'

const API_URL = 'https://multiapi-app.fly.dev'

const CoastersList = () => {

    const [coasters, setCoasters] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [dateValue, onDateChange] = useState(new Date());

    useEffect(() => {
        fetchCoasters()
    }, [])

    const fetchCoasters = () => {

        axios
            .get(`${API_URL}/coasters/coastersSelection`)
            .then(response => {
                setCoasters(response.data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (

        <div className="CoastersList">

            <Calendar onChange={onDateChange} value={dateValue} />

            <img src={IMAGE_PATHS.CAKE2} alt="" />
            <img src={IMAGE_PATHS.CAKE1} alt="" />

            <Container>

                {

                    isLoading ? <Loader /> : coasters.map(elm => {
                        return (
                            <p>{elm.title}</p>
                        )
                    })
                }

            </Container>

        </div>
    )
}


export default CoastersList