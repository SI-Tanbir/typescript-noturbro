// This is like designing a blueprint for a rocket
interface TravelPlan {

    destination: string;
    startDate: Date;
    duration: number;
    budget: number;
    activities: string[];


}


// This is how you'd use it in a React component
const TripCard: React.FC<TravelPlan> = ({ destination, startDate, duration, budget, activities }) => {

    
    return (
        <div>


            <h2>{destination}</h2>
            <p>Duration: {duration} days</p>
            <p>Budget: ${budget}</p>


        </div>
    );
}