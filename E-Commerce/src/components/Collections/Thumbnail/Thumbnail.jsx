import React, {useState} from "react"

//images
import product1 from "../../../assets/image-product-1.jpg"
import product2 from "../../../assets/image-product-2.jpg"
import product3 from "../../../assets/image-product-3.jpg"
import product4 from "../../../assets/image-product-4.jpg"

import preview1 from "../../../assets/image-product-1-thumbnail.jpg"
import preview2 from "../../../assets/image-product-2-thumbnail.jpg"
import preview3 from "../../../assets/image-product-3-thumbnail.jpg"
import preview4 from "../../../assets/image-product-4-thumbnail.jpg"


import iconNext from "../../../assets/icon-next.svg"
import iconPrevious from "../../../assets/icon-previous.svg"


export default function Thumbnail() {
    const [isDesktop, setIsDekstop] = useState(false)
    const [productIndex, setProductIndex] = useState(0)
    const products = [product1, product2, product3, product4]

    function setNextImage() {
        setProductIndex(prev => {
            if(prev === products.length - 1)
                return 0
            return prev + 1
        })
    }

    function setPrevImage() {
        setProductIndex(prev => {
            if(prev === 0)
                return products.length - 1
            return prev - 1 
        })
    }

    React.useEffect(() => {
        function handleResize() {
            window.innerWidth >= 768 ? setIsDekstop(true) : setIsDekstop(false)
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    }, [])

    return (
        <div className="thumbnail">
            <div className="thumbnail__container-image">
                <div onClick={setPrevImage} className="thumbnail__icon icon--previous"><img src={iconPrevious} /></div>
                <img className="thumbnail__product" src={products[productIndex]} />
                <div onClick={setNextImage} className="thumbnail__icon icon--next"><img src={iconNext} /></div>
            </div>

            {isDesktop && 
                <div className="thumbnail__container-preview">
                    <img className="thumbnail__preview" src={preview1} />
                    <img className="thumbnail__preview" src={preview2} />
                    <img className="thumbnail__preview" src={preview3} />
                    <img className="thumbnail__preview" src={preview4} />
                </div>
            }
        </div>
    )
}