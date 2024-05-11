import { TypeAnimation } from 'react-type-animation';

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Automation Developer',
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        'Programmer',
        1500,
        'Web developer',
        1500,
        'Blogger',
        1500
      ]}
      //wrapper="span"
      speed={50}
      //style={{ fontSize: '2em', display: 'inline-block' }}
      className='text-[2rem] md:text-[3rem] text-[#55e6a5] font-bold uppercase'
      repeat={Infinity}
    />
  );
};


export default TextEffect;