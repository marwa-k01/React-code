import logo from './logo.svg';
import './App.css';
import PasswordToggle from './componets/PasswordToggle';


const App = () => {
 return (
  <div className='text-center text-slate-800 mt-20 bg-blue-400 w-96 m-auto rounded-lg'>
      <h1 className='pt-8 font-bold text-2xl'>Login Up</h1>
      <PasswordToggle />
      <button type='submit' className='bg-blue-800 px-10 py-2 text-white rounded-lg mb-10'>Submit</button>
  </div>
 );
}

export default App;
