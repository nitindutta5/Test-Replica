import { useRef } from "react";
import useIsomorphicLayoutEffect from './useIsomorphicLayoutEffect'

const VerticalPlantCarousel = () => {
    useIsomorphicLayoutEffect(() => {
        window.addEventListener('scroll', () => {
            if (!mainRef.current) return;
            mainRef.current.scrollBy({ top: window.innerHeight });
            console.log(mainRef.current.getBoundingClientRect());
            console.log(window.innerHeight);
            // if (mainRef.current.getBoundingClientRect().bottom <= 0) {
            //     toggle(true);
            // }
        })
    }, []);
    const mainRef = useRef();
    return (
        <div className="bg2">
            <main className="scroll-container" ref={mainRef}>
                <section>
                    <h2 className="heading text-center">Our Plants</h2>
                </section>
            </main>
        </div>
    );
}

export default VerticalPlantCarousel