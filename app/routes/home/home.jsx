import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import ThomasStoner from '~/assets/thomas-stoner.png';
import Webbting from '~/assets/webbting-homepage.png';
import FutureTechLearning from '~/assets/future-tech-learning.png';
import LahoreOnline from "~/assets/lahore-online.png";
import CandyRific from "~/assets/candyrific.png";
import CyptoLinks from "~/assets/cypto-links.png";
import CARERFINDER from "~/assets/carerfinder.png";
import Naqdina from "~/assets/naqdina.png";
import Verity from "~/assets/verity.png";
import ParentHelpMain from "~/assets/parent-help-signup.jpg";
import ParentHelpHome from "~/assets/parent-help-chat.jpg";
;import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const projectSeven = useRef();
  const projectEight = useRef();
  const projectNine = useRef();
  const projectTen = useRef();
  const projectEleven = useRef();
  const projectTwelve = useRef();
  const projectThirteen = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix,projectSeven,projectEight, projectNine,projectTen,projectEleven,projectTwelve,projectThirteen,details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />

      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Designing the future of education"
        description="Designing a platform to help educators build better online courseware"
        buttonText="View project"
        buttonLink="/projects/smart-sparrow"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Video game progress tracking"
        description="Design and development for a video game tracking app built in React Native"
        buttonText="View website"
        buttonLink="https://gamestack.hamishw.com"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Biomedical image collaboration"
        description="Increasing the amount of collaboration in Slice, an app for biomedical imaging"
        buttonText="View project"
        buttonLink="/projects/slice"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Parent Help"
        description="Navigate your parenting
journey with ease using
our comprehensive guide!
The 'Parent Help' app
provides expert advice,
practical solutions, and
insightful tips to tackle
every parenting challenge."
        buttonText="view website"
        buttonLink="#"
        model={{
          type: 'phone',
          alt: 'Navigate you parenting journey',
          textures: [
            {
              srcSet: `${ParentHelpHome} 375w, ${ParentHelpHome} 750w`,
              placeholder: ParentHelpHome,
            },
            {
              srcSet: `${ParentHelpMain} 375w, ${ParentHelpMain} 750w`,
              placeholder: ParentHelpMain,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="THOMAS STONER"
        description="Office Solutions Provider for Stationery,
Furniture, Technology Products & More in West
Yorkshire."
        buttonText="View project"
        buttonLink="/projects/thomas-stoner"
        model={{
          type: 'laptop',
          alt: 'Office Solutions Provider',
          textures: [
            {
              srcSet: `${ThomasStoner} 800w, ${ThomasStoner} 1920w`,
              placeholder: ThomasStoner,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        alternate={true}

        title="WEBBTING"
        description="A DIGITAL MARKETING SERVICES PROVIDER PLATFORM"
        buttonText="View website"
        buttonLink="https://www.webbting.com/"
        model={{
          type: 'laptop',
          alt: 'Digital marketing services provider',
          textures: [
            {
              srcSet: `${Webbting} 800w, ${Webbting} 1920w`,
              placeholder: Webbting,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-7"
        sectionRef={projectSeven}
        visible={visibleSections.includes(projectSeven.current)}
        index={7}
        title="FUTURE TECH LEARNING"
        description="Elevate your career with hands-on courses and
professional certificates. Learn from industry
professionals."
        buttonText="View website"
        buttonLink="https://futuretechlearning.com/"
        model={{
          type: 'laptop',
          alt: 'learning platform',
          textures: [
            {
              srcSet: `${FutureTechLearning} 800w, ${FutureTechLearning} 1920w`,
              placeholder: FutureTechLearning,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-8"
        sectionRef={projectEight}
        visible={visibleSections.includes(projectEight.current)}
        index={8}
        alternate={true}

        title="LAHORE ONLINE"
        description="A TOURIST GUIDE WEBSITE
HELPS FIND DIFFERENT TOURISM SPOTS
ACCROSS CITY"
        buttonText="View website"
        buttonLink="https://lahore.online/"
        model={{
          type: 'laptop',
          alt: 'tour guide platform',
          textures: [
            {
              srcSet: `${LahoreOnline} 800w, ${LahoreOnline} 1920w`,
              placeholder: LahoreOnline,
            },
          ],
        }}
      />

      <ProjectSummary
        id="project-9"
        sectionRef={projectNine}
        visible={visibleSections.includes(projectNine.current)}
        index={9}

        title="CANDYRIFIC"
        description="A PREMIUM CANDY AND BEVERAGES STORE"
        buttonText="View website"
        buttonLink="https://www.candyrific.com/"
        model={{
          type: 'laptop',
          alt: 'candy and beverage store',
          textures: [
            {
              srcSet: `${CandyRific} 800w, ${CandyRific} 1920w`,
              placeholder: CandyRific,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-10"
        sectionRef={projectTen}
        visible={visibleSections.includes(projectTen.current)}
        index={10}
        alternate={true}

        title="CAREER FINDER"
        description="JOB OPPORTUNITY FINDER IN YOUR AREA"
        buttonText="View website"
        buttonLink="https://carerfinder.com/"
        model={{
          type: 'laptop',
          alt: 'cryptocurrency guide site',
          textures: [
            {
              srcSet: `${CARERFINDER} 800w, ${CARERFINDER} 1920w`,
              placeholder: CARERFINDER,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-11"
        sectionRef={projectEleven}
        visible={visibleSections.includes(projectEleven.current)}
        index={11}
        title="NAQDINA"
        description="A PAYMENT SERVICES PROVIDER SITE"
        buttonText="View project"
        buttonLink="/projects/carerfinder"
        model={{
          type: 'laptop',
          alt: 'payment services provider',
          textures: [
            {
              srcSet: `${Naqdina} 800w, ${Naqdina} 1920w`,
              placeholder: Naqdina,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-12"
        sectionRef={projectTwelve}
        visible={visibleSections.includes(projectTwelve.current)}
        index={12}
        title="Verity"
        alternate={true}
        description="UNDISPUTED NEWS SITE"
        buttonText="View website"
        buttonLink="https://www.verity.news/"
        model={{
          type: 'laptop',
          alt: 'news site',
          textures: [
            {
              srcSet: `${Verity} 800w, ${Verity} 1920w`,
              placeholder: Verity,
            },
          ],
        }}
      />

<ProjectSummary
        id="project-13"
        sectionRef={projectThirteen}
        visible={visibleSections.includes(projectThirteen.current)}
        index={13}
        title="CYPTO LINKS"
        description="A CRYPTOCURRENCY GUIDE SITE FOR BEGINNERS"
        buttonText="View website"
        buttonLink="https://cryptolinks.com/"
        model={{
          type: 'laptop',
          alt: 'cryptocurrency guide site',
          textures: [
            {
              srcSet: `${CyptoLinks} 800w, ${CyptoLinks} 1920w`,
              placeholder: CyptoLinks,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
