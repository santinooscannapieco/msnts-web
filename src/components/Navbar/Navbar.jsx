import { FaYoutube, FaFacebook, FaSpotify, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <section className="w-full sm:h-28 h-16 flex flex-col items-center justify-around bg-zinc-800">
            <div className="font-['Montserrat'] font-bold text-zinc-50 sm:text-4xl text-xl uppercase flex gap-4 ">
                <Link to={"/shows"}>show</Link>
                <Link to={"/bio"}>bio</Link>
                <Link to={"/discografía"}>discografía</Link>
                <Link to={"/videos"}>videos</Link>
            </div>
            <div className="flex gap-4 uppercase text-zinc-50 sm:text-4xl text-xl">
                <a href="https://www.youtube.com/" target="_blank"><FaYoutube /></a>
                <a href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
                <a href="https://www.spotify.com/" target="_blank"><FaSpotify /></a>
                <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
            </div>
        </section>
    )
}

export default Navbar