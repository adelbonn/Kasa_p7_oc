
import CollapseList from '../../Components/Collapse/CollapseList/CollapseList';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import image from '../../assets/img/HeroImgAbout.png';


const About = () => {
  return (
   
          <>
            <HeroHeader image={image}/>
           <CollapseList />           
          </>

  );
};

export default About;