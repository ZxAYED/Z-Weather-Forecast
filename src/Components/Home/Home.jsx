import Navbar from "../Navbar/Navbar";
import SearchBar from "../SearchBar/SearchBar";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto bg-red-400 rounded-lg mt-40  min-h-screen grid grid-cols-3">
         <Navbar></Navbar>
         <SearchBar></SearchBar>
         <Navbar></Navbar>
        </div>
    );
};

export default Home;
