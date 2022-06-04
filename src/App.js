import './App.css';

function App() {
  const openFileUploader = () => {
    console.log('open');
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={openFileUploader}>File Upload</button>
      </header>
    </div>
  );
}

export default App;
