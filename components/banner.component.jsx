const Banner = ({ img, children }) => {
    return(
        <>
        <article className="col-12 banner banner-home" style={{ backgroundImage: `url('${img}')` }}>
            { children }
        </article>
        </>
    )
}

export default Banner