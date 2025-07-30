import { HeroSlider } from '../components/hero-slider';

export function Home() {
    return(
        <>
            <HeroSlider />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Bienvenido a IFCET</h1>
                <p className="text-lg">Tu centro de formación profesional de confianza</p>
                <img src="https://www.ifcet.com.pe/wp-content/uploads/2025/01/studen1-1.jpg" alt="IFCET" />
            </div>
        </>
    )
}