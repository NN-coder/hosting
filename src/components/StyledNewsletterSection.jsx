import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledWrapper from './StyledWrapper';
import Svg from './Svg';
import StandardSectionTitle from './StandardSectionTitle';
import StandardBtn from './StandardBtn';

const NewsletterWrapper = styled(StyledWrapper)`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    align-items: center;
    row-gap: 30px;
  }
`;
const NewsletterForm = styled.form`
  width: 100%;
  margin-left: 30px;

  @media screen and (max-width: 950px) {
    display: contents;
  }
`;

const NesletterFormInput = styled.input`
  width: calc(100% - 195px);
  height: 55px;
  padding: 0 25px;
  color: var(--text-color);
  font-size: 1.35rem;
  letter-spacing: 0.01em;
  border: none;

  @media screen and (max-width: 950px) {
    width: 80%;
  }
`;
const NewsletterFormSubmit = styled(StandardBtn)`
  width: 195px;
  font-weight: 700;
  font-size: 1.35rem;
`;

const image = (
  <Svg width="25px" height="25px">
    <g>
      <path
        d="M498.208,68.235c-8.945-8.947-19.701-13.418-32.261-13.418H45.682c-12.562,0-23.318,4.471-32.264,13.418
        C4.471,77.18,0,87.935,0,100.499v310.633c0,12.566,4.471,23.312,13.418,32.257c8.945,8.953,19.701,13.422,32.264,13.422h420.266
        c12.56,0,23.315-4.469,32.261-13.422c8.949-8.945,13.418-19.697,13.418-32.257V100.499
        C511.626,87.935,507.158,77.18,498.208,68.235z M475.078,411.125c0,2.475-0.903,4.616-2.714,6.424
        c-1.81,1.81-3.949,2.706-6.42,2.706H45.679c-2.474,0-4.616-0.896-6.423-2.706c-1.809-1.808-2.712-3.949-2.712-6.424V191.858
        c6.09,6.852,12.657,13.134,19.7,18.843c51.012,39.209,91.553,71.374,121.627,96.5c9.707,8.186,17.607,14.561,23.697,19.13
        c6.09,4.571,14.322,9.185,24.694,13.846c10.373,4.668,20.129,6.991,29.265,6.991h0.287h0.284c9.134,0,18.894-2.323,29.263-6.991
        c10.376-4.661,18.613-9.274,24.701-13.846c6.089-4.569,13.99-10.944,23.698-19.13c30.074-25.126,70.61-57.291,121.624-96.5
        c7.043-5.708,13.613-11.991,19.694-18.843V411.125L475.078,411.125z M475.078,107.92v3.14c0,11.229-4.421,23.745-13.271,37.543
        c-8.851,13.798-18.419,24.792-28.691,32.974c-36.74,28.936-74.897,59.101-114.495,90.506c-1.14,0.951-4.474,3.757-9.996,8.418
        c-5.514,4.668-9.894,8.241-13.131,10.712c-3.241,2.478-7.471,5.475-12.703,8.993c-5.236,3.518-10.041,6.14-14.418,7.851
        c-4.377,1.707-8.47,2.562-12.275,2.562h-0.284h-0.287c-3.806,0-7.895-0.855-12.275-2.562c-4.377-1.711-9.185-4.333-14.417-7.851
        c-5.231-3.519-9.467-6.516-12.703-8.993c-3.234-2.471-7.614-6.044-13.132-10.712c-5.52-4.661-8.854-7.467-9.995-8.418
        c-39.589-31.406-77.75-61.57-114.487-90.506c-27.981-22.076-41.969-49.106-41.969-81.083c0-2.472,0.903-4.615,2.712-6.421
        c1.809-1.809,3.949-2.714,6.423-2.714h420.266c1.52,0.855,2.854,1.093,3.997,0.715c1.143-0.385,1.998,0.331,2.566,2.138
        c0.571,1.809,1.095,2.664,1.57,2.57c0.477-0.096,0.764,1.093,0.859,3.571c0.089,2.473,0.137,3.718,0.137,3.718V107.92
        L475.078,107.92z"
      />
    </g>
  </Svg>
);

const NewsletterSection = ({ className }) => (
  <section className={className}>
    <NewsletterWrapper>
      <StandardSectionTitle rowOne="Sign up your" rowTwo="Newsletter" beforeImg={image} />
      <NewsletterForm action="" method="post">
        <NesletterFormInput type="text" placeholder="Enter your domain name" />
        <NewsletterFormSubmit type="submit">Sign up now</NewsletterFormSubmit>
      </NewsletterForm>
    </NewsletterWrapper>
  </section>
);

NewsletterSection.propTypes = {
  className: PropTypes.string.isRequired,
};

const StyledNewsletterSection = styled(NewsletterSection)`
  padding: 100px 0 85px;
  background-color: var(--section-bg-blue);

  @media screen and (max-width: 1250px) {
    padding: 100px 20px 85px;
  }
`;

export default StyledNewsletterSection;
