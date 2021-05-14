const Home = () => {
    return (
        <div className="row justify-content-center">
            <div className="col-md-5 shadow bg-white border border-secondary rounded-3 p-3">
                <h2 className="text-center mb-3">Studio Ghibli API Lab</h2>
                <p className="text-justify">This lab shows off my awesome React skillz. It utilizes conditional rendering, fetching data from a REST API utilizing an useEffect hook, managing multiple array maps utilizing an useState hook, and Bootstrape for that iconic style. Click a button to view the resources from Studio Ghibli and enjoy!</p>
                <p className="text-center text-muted mb-0"><small>If you like what you see, then hit me up<br />at <a href="mailto:agarwala@me.com">agarwala@me.com</a> and let's talk!</small></p>
            </div>
        </div>
    )
}

export default Home
