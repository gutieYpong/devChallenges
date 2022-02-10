import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Footer from "../Footer";
import { fontLayout } from "../../constants/api";
import { BackGround } from "../../assets";

const Container = styled.div`
  grid-area: page;
  display: grid;
  grid-template-areas:
    "left right"
    "footer footer";
  grid-template-columns: auto 88.9rem;
  grid-column-gap: 7.7rem;
`;

const Left = styled.div`
  grid-area: left;
  display: flex;
  flex-direction: column;
  gap: 3.6rem;

  border: 1px solid lightsalmon;
`;

const NavigateBox = styled.div`
  display: flex;
  gap: 1.5rem;
  align-content: center;
  cursor: pointer;

  ${ ({ theme }) => fontLayout('Poppins', '500', '1.4rem', '2.3rem', theme.palette.primary.main) } // ordinary line-height: 21px

  .material-icons-outlined {
    transform: rotate(180deg);
  }
`;

const ContactBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  label {
    ${ ({ theme }) => fontLayout('Poppins', 'bold', '1.4rem', '2.1rem', theme.palette.grey) }
  }

  div {
    ${ ({ theme }) => fontLayout('Poppins', '500', '1.4rem', '2.1rem', theme.palette.primary.dark) }
    a {
      color: ${ ({ theme }) => theme.palette.primary.main };
      cursor: pointer;
    }
  }
`;

const Right = styled.div`
  grid-area: right;
  display: flex;
  flex-direction: column;

  border: 1px solid lightsalmon;
`;

const JobTitleBox = styled.div`
  display: flex;
  gap: 1.7rem;

  ${ ({ theme }) => fontLayout('Roboto', 'bold', '2.4rem', '2.8rem', theme.palette.primary.dark) }
`;

const JobPostTag = styled.button`
  width: 6.3rem;
  height: 2.6rem;
  border: .1rem solid ${ ({ theme }) => theme.palette.primary.dark };
  border-radius: .4rem;
  background-color: transparent;
  cursor: pointer;

  ${ ({ theme }) => fontLayout('Roboto', 'bold', '1.2rem', '2.1rem', theme.palette.primary.dark) }
`;

const TimeInfo = styled.div`
  display: flex;
  gap: .85rem;
  margin-top: .95rem;

  label {
    ${ ({ theme }) => fontLayout('Roboto', '500', '1.2rem', '1.4rem', theme.palette.grey) }
  }
  .material-icons-outlined {
    font-size: 1.5rem;
    color: ${ ({ theme }) => theme.palette.grey };
  }
`;

const RecruiterInfo = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 3.45rem;
  align-items: center;

  img {
    width: 4.2rem;
    height: 4.2rem;
    object-fit: cover;
    border-radius: .4rem;
  }

  .recruiter-info--right-area {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    ${ ({ theme }) => fontLayout('Roboto', 'bold', '1.8rem', '2.1rem', theme.palette.primary.dark) }
  }
`;

const PlaceInfo = styled.div`
  display: flex;
  gap: .75rem;
  align-items: center;

  label {
    ${ ({ theme }) => fontLayout('Roboto', '500', '1.2rem', '1.4rem', theme.palette.grey) }
  }
  .material-icons-outlined {
    font-size: 1.5rem;
    color: ${ ({ theme }) => theme.palette.grey };
  }
`;

const JobDesc = styled.div`
  margin-top: 1.6rem;

  ${ ({ theme }) => fontLayout('Roboto', '400', '1.6rem', '2.4rem', theme.palette.primary.dark) }
`;


const ContentPage = props => {
  let navigate = useNavigate();

  function navigateToHome() {
    navigate('/');
  }

  return (
    <Container>
      <Left>
        <NavigateBox onClick={ navigateToHome }>
          <span class="material-icons-outlined">trending_flat</span>
          Back to search
          {/* <label>Back to search</label> */}
        </NavigateBox>
        <ContactBox>
          <label>HOW TO APPLY</label>
          <div>Please email a copy of your resume and online portfolio to <a>wes@kasisto.com</a> & CC <a>eric@kasisto.com</a></div>
        </ContactBox>
      </Left>
      <Right>
        <JobTitleBox>
          Front-End Software Engineer
          <JobPostTag>Full time</JobPostTag>
        </JobTitleBox>
        <TimeInfo>
          <span className="material-icons-outlined">schedule</span>
          <label>5 days ago</label>
        </TimeInfo>
        <RecruiterInfo>
          <img src={ BackGround } alt="" />
          <div className="recruiter-info--right-area">
            Kasisto
            <PlaceInfo>
              <span className="material-icons-outlined">public</span>
              <label>New York</label>
            </PlaceInfo>
          </div>
        </RecruiterInfo>
        <JobDesc>
          <p>Humanizing Digital Experiences®</p>
          
          <p>Kasisto’s Digital Experience Platform, KAI, is designed for financial institutions to deliver the industry’s most amazing Conversational AI powered intelligent virtual assistants to their customers. KAI is open and extensible, and also fluent in the language of banking and finance. From simple retail transactions to the complex demands of corporate banks and wealth management, financial institutions can deliver meaningful digital interactions with KAI that help build their digital brand.</p>

          <p>Financial institutions around the world use KAI, including DBS Bank, J.P. Morgan, Mastercard, Standard Chartered, TD Bank, and Manulife Bank among others. They chose KAI for its proven track record to drive business results while improving customer experiences. The platform is used by millions of consumers around the world, all the time, across multiple channels, in different languages, and is optimized for performance, scalability, security, and compliance.</p>

          <p>This position</p>

          <p>We are looking for a Full-Stack, client side software engineer to help build and integrate responsive chat interfaces, analytics dashboards and reporting tools.</p>

          <p>What you’ll be doing</p>

          <p>Working closely with clients and internal engineering, product and design teams to gather requirements Building and integrating front-end applications with CSS, HTML, Javascript, jQuery, Vue.js, Webpack, Handlebars.js, LESS, Backbone, Python, Django and Java Working to improve user experience and functionality for tools Writing testable code utilizing common front-end unit and BDD testing frameworks What you need for this position</p>

          <p>3+ years in client-side web development with CSS, HTML, Javascript and jQuery Proven, full-stack front-end experience using Python and Django Other Modern Web Framework(s) experience is a plus (React, Vue, Angular, Ember) Experience working collaboratively to build scalable, modular, production software in an Agile environment Experience using RESTful json services Node.js and API development familiarity is plus D3.js is a plus</p>

          <p>What we offer:</p>

          <p>Competitive compensation package Ground floor opportunity within rapidly growing tech startup Great collaborative team environment Full Benefits Fun perks</p>

          <p>Location - NYC, Flatiron District</p>

          <p>We welcome your cover letter with a description of your previous complete experience and your resume. Applicants must be authorized to work in the US as we are unable to sponsor. Kasisto is an equal opportunity employer.</p>
        </JobDesc>
      </Right>
      <Footer />
    </Container>
  )
}

export default ContentPage;