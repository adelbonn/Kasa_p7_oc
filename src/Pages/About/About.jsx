import Layout from '../../Components/Layout/Layout';
import styles from '../About/About.module.css';
import Collapse from '../../Components/Collapse/Collapse';
import data from '../../Data/Collapse.json';



const About = () => {
  return (
      <Layout page='about'>
          <>
              {data.map((item, id) => (
                  <Collapse key={id} title={item.title}>
                      {item.content}
                  </Collapse>
              ))}
          </>
      </Layout>
  );
};

export default About;