
import CollapseList from '../../Components/Collapse/CollapseList/CollapseList';
import HeroHeader from '../../Components/HeroHeader/HeroHeader';
import image from '../../assets/img/HeroImgAbout.png';


const About = () => {
  return (
   
          <div>
            <HeroHeader image={image}/>
           <CollapseList />           
          </div>

  );
};

export default About;