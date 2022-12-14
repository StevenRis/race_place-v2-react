import './hero.css'

const Hero = () => {
    return (
        <div class="hero">
            <div class="hero-title text-white">
                <h1>RISE</h1>
                <h1>TO THE</h1>
                <h1>CHALLENGE</h1>
                <p>Race_Place is a resource where you can find the best setup for your vehicle and experience it through a great selection of iconic rally locations from across the globe.</p>
                <div>
                    <a href="{{ url_for('cars')}}" class="btn btn-danger">Choose your vehicle</a>
                </div>
            </div>
        </div>
    );
}

export default Hero;