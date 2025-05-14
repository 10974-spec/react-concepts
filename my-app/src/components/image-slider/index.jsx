import { useEffect, useState } from "react"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsArrowUpRightCircleFill } from 'react-icons/bs'

export default function ImageSlider({ url, limit = 5, page = 1 }) {

    const [images, setImages] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    async function fetchImages(getUrl) {
        try {
            setLoading(true);

            const response = await fetch(
                `${getUrl}?page=${page}&limit=${limit}`
            );
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }


        } catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (url !== '') {
            fetchImages(url)
        }
    }, [url]);

    console.log(images);

    if (loading) {
        return <div>Loading...</div>
    }

    if (errorMsg !== null) {
        return <div>Error Occurred! {errorMsg}</div>
    }


    return <div className="container">
        <BsArrowLeftCircleFill className="arrow arrow-left" />
        {images && images.length > 0 ?
            images.map(imageItem => (
                <img
                    key={imageItem.id}
                    alt={imageItem.download_url}
                    src={imageItem.download_url}
                    className="current-image"
                />
            ))
            : null}
            <BsArrowRightCircleFill className="arrow arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length > 0?
                    images.map{(index) => <button
                        key={index}
                        >
                        </button> }
                    :null
                }
            </span>
    </div>

}