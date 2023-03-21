import  { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import PreviousNews from '../previous-news/PreviousNews';

import api from './../../Api'

export default function Home() {
    const [news, setNews] = useState(null)

    useEffect(() => {
        api.get('/news').then(res => {
            setNews(res.data)
        }).catch(err => console.log('API ERROR: ' + err))
    }, [])

    return(
        <div className="home">
            {
                news?.map(data => {
                    let slug = '/news/' + data.slug

                    return(
                        <Link style={{textDecoration: 'none', color: 'black'}} to={slug}>
                            <PreviousNews title={data.title} body={data.body} />
                        </Link>
                    )
                })
            }
        </div>
    )
}