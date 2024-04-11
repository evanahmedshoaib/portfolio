
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


const title = 'Identity';
const description =
  'My Skills in detail.';


export function VolkiharKnight() {


  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
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
              <div className={styles.skill}>
                <li>PYTHON
                    <span className={styles.bar}><span className={styles.python}></span></span>
                  </li>
                  <li>JAVA
                    <span className={styles.bar}><span className={styles.java}></span></span>
                  </li>
                  <li>C#
                    <span className={styles.bar}><span className={styles.csharp}></span></span>
                  </li>
                  <li>C
                    <span className={styles.bar}><span className={styles.clan}></span></span>
                  </li>
                  <li>HTML
                    <span className={styles.bar}><span className={styles.html}></span></span>
                  </li>
                  <li>CSS
                    <span className={styles.bar}><span className={styles.css}></span></span>
                  </li>
                  <li>JAVASCRIPT
                    <span className={styles.bar}><span className={styles.js}></span></span>
                  </li>
                  <li>PHP
                    <span className={styles.bar}><span className={styles.php}></span></span>
                  </li>

              </div>
            </div>
            <div className={styles.textSection}>
            <div>
              <ProjectSectionHeading>Software Fluency</ProjectSectionHeading>
              <div className={styles.skill}>
                <li>Unity
                  <span className={styles.bar}><span className={styles.unity}></span></span>
                </li>
                <li>Unreal Engine
                  <span className={styles.bar}><span className={styles.unrengine}></span></span>
                </li>
                <li>Cinema 4D
                  <span className={styles.bar}><span className={styles.cine4d}></span></span>
                </li>
                <li>Cisco Packet Tracer
                  <span className={styles.bar}><span className={styles.cisco}></span></span>
                </li>
                <li>Adobe Photoshop
                  <span className={styles.bar}><span className={styles.photoshop}></span></span>
                </li>
                <li>Adobe Lightroom
                  <span className={styles.bar}><span className={styles.lightroom}></span></span>
                </li>
                <li>Adobe Illustrator
                  <span className={styles.bar}><span className={styles.illustrator}></span></span>
                </li>
                <li>Android Studio
                  <span className={styles.bar}><span className={styles.adb}></span></span>
                </li>
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
                <div className={styles.educationitem}>
                  <div>
                    <ProjectSectionText>
                      Bachelor of Science
                    </ProjectSectionText>
                    <h5>Southeast University (2022-Ongoing)</h5>
                    <li>Department: Computer Science and Engineering</li>
                  </div>
                </div>
                <div className={styles.educationitem}>
                  <div>
                    <ProjectSectionText>
                      Diploma in Computer Engineering
                    </ProjectSectionText>
                    <h5>Dhaka Polytechnic Institute (2017-2021)</h5>
                    <li>CGPA: 4.87</li>
                  </div>
                </div>
                <div className={styles.educationitem}>
                  <div>
                    <ProjectSectionText>
                      Secondary School Certificate
                    </ProjectSectionText>
                    <h5>Rayhan School And College, Dhaka (2017)</h5>

                    <li>Section: Science</li>
                    <li>CGPA: 4.87</li>
                  </div>
                </div>
              </section>
            </ProjectSectionContent>
            <ProjectSectionContent>
              <section className={styles.education}>
                <ProjectSectionHeading>Experience</ProjectSectionHeading>
                <div className={styles.educationitem}>
                  <div>
                    <ProjectSectionText>
                      Freelancer
                    </ProjectSectionText>
                    <p>Private Clients (2022-Ongoing)</p>
                  </div>
                </div>
                <div className={styles.educationitem}>
                  <div>
                    <ProjectSectionText>
                      Junior Game Developer (Intern)
                    </ProjectSectionText>
                    <p>GameXltd | July 2022 - December 2022</p>
                  </div>
                </div>
                <div className={styles.educationitem}>
                  <div>
                    <ProjectSectionText>
                      Network Engineer (Intern)
                    </ProjectSectionText>
                      <p>IT Bangladesh | November 2021 - March 2022</p>
                  </div>
                </div>
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
