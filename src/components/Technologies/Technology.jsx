const Technology = ({ title, src, classname }) => {
    return (
        <div className={`${classname} technologies__list--item`}>
            <img loading='lazy' src={`./${src}`} alt="" className="technologies__list--item--img" />
            <h3>{title}</h3>
        </div>


    )
}

export default Technology