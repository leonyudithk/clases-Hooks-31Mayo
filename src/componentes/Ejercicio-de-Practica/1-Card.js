import React, { useEffect, useState } from 'react';


const Card = ({categoria}) => {
    
console.log(categoria)

    const [images, setImages]=useState([])

    useEffect(()=>{
        apiFetch(categoria)
        .then(imgData =>setImages(imgData))
    }, [categoria])


       //Consumir la Api a traves de un fetch
       const apiFetch = async(categoria)=>{
        const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=5&api_key=VB3008QFTwD5SgXniRnEa6UjwcBpXkIt`
        const resp = await fetch(url)
        const {data}= await resp.json()
        console.log(data)

        const imgData = data.map((img) =>{
            return {
                id: img.id,
                title: img.title,
                url: img.images.downsized_medium.url
            }
        })
        return imgData


    }

    console.log(images)
    return (
        categoria !== undefined ?
        <ol>
            {images.map((img)=>(
                <li key={img.id}>
                        <h1>{img.title}</h1>
                        <img src={img.url} alt="imagen"/>
                </li>
            ))}
        </ol>
        : null
    );
};

export default Card;