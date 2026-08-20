
import LinkButton from "@/components/linkbtn";
import { useContext } from "react";
import { UserContext } from "../context/usercontext";

function Home() {

    const { user } = useContext(UserContext);

    if (!user) return <div>Loading...</div>;
    return (
        <div>
            <h1>What's up, {user.fname}</h1>
            <h2>What would you like to do today</h2>
            <p>Username: {user.username}</p>
            <LinkButton to="/meals">Meal</LinkButton>
            <LinkButton to="/drinks">Drink</LinkButton>
            <LinkButton to="/workout">Workout</LinkButton>
            <LinkButton to="/mealsprofile">MealProfile</LinkButton>
            <LinkButton to="/drinksprofile">DrinkProfile</LinkButton>

        </div>

        
    );
}

export default Home;