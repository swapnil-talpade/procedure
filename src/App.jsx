import RightContainer from './components/RightContainer/RightContainer';
import SquareContainer from './components/SquareContainer/SquareContainer';

const App = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="RightContainer"><RightContainer /></div>
        <div className="Col1"><SquareContainer title={'Work'} totalHours={32} lastWeekHours={36} /></div>
        <div className="Col2"><SquareContainer title={'Play'} totalHours={10} lastWeekHours={8} /></div>
        <div className="Col3"><SquareContainer title={'Study'} totalHours={4} lastWeekHours={7} /></div>
        <div className="Col4"><SquareContainer title={'Exercise'} totalHours={4} lastWeekHours={5} /></div>
        <div className="Col5"><SquareContainer title={'Social'} totalHours={5} lastWeekHours={10} /></div>
        <div className="COl6"><SquareContainer title={'Self Care'} totalHours={2} lastWeekHours={2} /></div>
      </div>
    </div>
  );
}

export default App;
