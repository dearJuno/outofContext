
import { usePromiseTracker } from "react-promise-tracker";


const Loader = props => {
    const { promiseInProgress } = usePromiseTracker();

    return (
        promiseInProgress &&
        // div to cover results area
        <div className="loader"></div>
    );
}

export default Loader