import './App.css';
import Dashboard from '../../my-app/src/dashboard';
import { useHistory,  BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const history = useHistory();
  const goToDashboard = () => history.push('/dashboard');
  return (
    <div className="App">
      <Router>
      <Route path="/dashboard" component={Dashboard}>
      </Route>
      </Router>
        <button
          onClick={goToDashboard}
        >
          Go to Dashboard
        </button>
    </div>
  );
}

export default App;
