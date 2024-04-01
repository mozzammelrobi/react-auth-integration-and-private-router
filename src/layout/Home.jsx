import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";


const Home = () => {
    const authInfo = useContext(AuthContext)
console.log(authInfo)

    return (
        <div>
            <h1 className="text-3xl">HOme</h1>
        </div>
    );
};

export default Home;