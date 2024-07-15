import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Container from "../../components/container/Container.jsx";
import HomePage from "../../components/home/HomePage.jsx";

const Home = () => {
    return (
        <Container>
            <Navbar/>
            <HomePage/>
            <Footer/>
        </Container>
    )
}
export default Home
