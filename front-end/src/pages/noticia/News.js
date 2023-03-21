import  { useState, useEffect } from 'react';

import { useParams } from "react-router-dom"

import api from './../../Api'

export default function News() {
    const { slug } = useParams()

    const [news, setNews] = useState(null)

    useEffect(() => {
        console.log(slug)
        api.get('/news/' + slug).then(res => {
            if (res.data.length == 0) {
                window.location.href = '/'
            }

            setNews(res.data)
            console.log(res.data)
        }).catch(err => console.log('API ERROR: ' + err))
    }, [])

    return(
        <div className="newsSingle">
            <h2>{news?.title}</h2>

            <p>{news?.body}</p>
        </div>
    )
}