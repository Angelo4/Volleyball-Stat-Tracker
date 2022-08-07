import ResponsiveAppBar from './components/ResponsiveAppBar';
import TrackGame from './features/TrackGame';

function App() {
  // const test = useSelector((state: VolleyBallStats) => state.attack.success);
  return (
    <div>
      <ResponsiveAppBar />
      <TrackGame />
    </div>
  );
}

export default App;
