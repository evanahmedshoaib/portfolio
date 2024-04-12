
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
import React from "react";
import Timeline from "./Timeline";

const timelineData = [
  { id: 1, date: 'Ongoing', description: "Bachelor's in Computer science and Engineering",  institution: "Southeast University" },
  { id: 2, date: '2021', description: 'Diploma in Computer Engineering' , institution: "Dhaka Polytechnic Institute" , grade: "CGPA: 3.45"},
  { id: 3, date: '2017', description: 'SSC in Science' , institution: "Dhaka Board", grade: "GPA: 5.00" },
  // Add more timeline events as needed
];
const workData = [
  { id: 1, date: 'Present', description: "Freelance Web Developer"},
  { id: 2, date: '2022 - 2022', description: 'Game Developer Intern' , institution: "GameXltd"},
  { id: 3, date: '2021 - 2022', description: 'Network Engineer Intern' , institution: "IT Bangladesh"},
  // Add more timeline events as needed
];

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
          title={title} center centerMobile noMargin
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
              <section className={styles.education}>
                <ProjectSectionHeading>Education</ProjectSectionHeading>
                <Timeline timelineData={timelineData} />
              </section>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <section className={styles.education}>
                <ProjectSectionHeading>Experience</ProjectSectionHeading>
                <Timeline timelineData={workData} />
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
