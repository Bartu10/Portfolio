
import image from '../pictures/giphy.gif'  

const About = () =>{
  return (
    <div className='About'>
      <header className='About-header'>
      <img src={image}/>
      <h1 class="text-3xl font-bold underline">
      Hello world!
      </h1>
      </header>
    </div>
  );
}

export default About;
