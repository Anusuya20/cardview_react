import './App.css';
import './style1.css';
import cat from './cat.jpg';
import dog from './dog.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <center>
          <h1>Exercise 2</h1>
          <h1>card view </h1>
      <div class="cards">
    <article class="card">
        <header>
            <h2>Dogs</h2>
        </header>    
        <center>
        <img src={dog}></img>
        </center>
        <div class="content">
            <p> Dogs are cute pets</p>
            <footer>
        <a
          className="App-link"
          href="https://www.akc.org/dog-breeds/"
          target="_blank"
          rel="noopener 
          noreferrer"
        >
          <button className='button'>Learn More</button>
        </a>
        </footer>
        <br></br>
        </div>
            
    </article>
            
     <article class="card">
        <header>
            <h2>Cats</h2>
        </header>    
        <center>
        <img src={cat}></img>
        </center>
        <div class="content">
            <p>Cats are cute animals</p>
        <footer>
        
        <a
          className="App-link"
          href="https://www.britannica.com/animal/cat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='button'>Learn More</button>
        </a>
        </footer>
        </div>
    </article>
            
   
</div>
            
</center>
<br></br>
<br></br>
      </header>
    </div>
  );
}

export default App;
