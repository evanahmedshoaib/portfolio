
import volkiharEnderalLarge from 'assets/volkihar-enderal.jpg';
import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from 'assets/volkihar-enderal.jpg';
import { Button } from 'components/Button';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';

import { Fragment } from 'react';
import styles from './VolkiharKnight.module.css';
import usesBackgroundPlaceholder from 'assets/uses-background-placeholder.jpg';
import usesBackground from 'assets/uses-background.mp4';

import SkillProgressBar from './SkillProgressBar';
import EducationSection from "./EducationSection";


const title = 'Identity';
const description =
  'My Skills in detail.';


const skills = [
    { skill: 'Python', percentage: 85 },
    { skill: 'Java', percentage: 62 },
    { skill: 'C#', percentage: 75 },
    { skill: 'C', percentage: 70 },
    { skill: 'HTML', percentage: 95 },
    { skill: 'CSS', percentage: 80 },
    { skill: 'Javascript', percentage: 65 },
    { skill: 'PHP', percentage: 58 },
  ];
  const softskills = [
    { skill: 'Unity', percentage: 75 },
    { skill: 'Unreal Engine', percentage: 80 },
    { skill: 'Cinema 4D', percentage: 75 },
    { skill: 'Cisco Packet Tracer', percentage: 90 },
    { skill: 'Adobe Photoshop', percentage: 80 },
    { skill: 'Adobe Lightroom', percentage: 90 },
    { skill: 'Adobe Illustrator', percentage: 60 },
    { skill: 'Android Development Studio', percentage: 55 },
  ];

export function VolkiharKnight() {


  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer>
      <ProjectBackground
          src={{ src: usesBackground }}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title={title} centerMobile noMargin
        />
        <ProjectSection>
          <ProjectSectionColumns>
            <div>
              <ProjectSectionHeading>Language Proficiency</ProjectSectionHeading>
              <div className="portfolio-container">

                <div className="skills-list">
                  {skills.map((skill, index) => (
                    <SkillProgressBar key={index} skill={skill.skill} percentage={skill.percentage} />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <ProjectSectionHeading>Software Fluency</ProjectSectionHeading>
              <div className="portfolio-container">

                <div className="skills-list">
                  {softskills.map((skill, index) => (
                    <SkillProgressBar key={index} skill={skill.skill} percentage={skill.percentage} />
                  ))}
                </div>
              </div>
            </div>

          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection backgroundElement={
            <Image
              srcSet={[volkiharEnderal, volkiharEnderalLarge]}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <section>
                <ProjectSectionHeading>Education</ProjectSectionHeading>
                <EducationSection
                  title="Education"
                  items={[ 
                    { degree: "Bachelor of Science", institution: "Southeast University (2022-Ongoing)", year: "" },
                    { degree: "Diploma in Computer Engineering", institution: "Dhaka Polytechnic Institute (2017-2021)", grade: "CGPA: 3.67" },
                    { degree: "Secondary School Certificate", institution: "Rayhan School And College, Dhaka (2017)", grade:"GPA: 5.00" },
                  ]}
                />
              </section>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <section>
                <ProjectSectionHeading>Experience</ProjectSectionHeading>
                <EducationSection
                    items={[
                      { degree: "Freelance Web Developer", institution: "Private Clients | 2022 - Ongoing" },
                      { degree: "Junior Game Developer (Intern)", institution: "GameXltd | July 2022 - December 2022"},
                      { degree: "Network Engineer (Intern)", institution: "IT Bangladesh | November 2021 - March 2022"},
                    ]}
                  />
              </section>
            </ProjectSectionContent>
          </ProjectSectionColumns>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href=""
              >
                Download CV
              </Button>
            </ProjectTextRow>
          </ProjectSectionContent>
          
        </ProjectSection>
        
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
