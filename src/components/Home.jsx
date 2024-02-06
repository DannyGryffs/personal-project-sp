function Home() {
    return (
        <section className="page-container">
            <div id="homeContainer">
                <div id="homeTxt">
                    <h1 id="homeHead">Welcome to the future of creativity and expression!</h1>
                    <section className="para1">
                        <span>
                            <h3 className="para1txtHead">StickerPlug is passionate about pushing the boundaries of art and design</h3>
                            <p className="para1txt">This platform is focused on delivering a diverse range of unique, AI-crafted sticker images suitable for every occasion.</p>
                            <img className="para1Img" src="../../pageImages/Artist.png" alt="AI Artist" />
                        </span>
                    </section>
                    <section className="para2">
                        <p className="para2txt">Whether you're looking to add a touch of flair to your laptop, personalize your phone case, or enhance your scrapbooking projects, our AI-generated stickers are the perfect solution.</p>
                        <img className="para2Img" src="../../pageImages/Laptop.png" alt="Laptop mockup" />
                    </section>
                    <section className="para3">
                        <img className="para3Img" src="../../pageImages/AI.png" alt="AI Bot" />
                        <p className="para3txt" >We utilize AI technology powered by Midjouney to create unique and eye-catching stickers that transcend traditional boundaries</p>
                    </section>
                </div>
            </div>
        </section>
    )
}

export default Home