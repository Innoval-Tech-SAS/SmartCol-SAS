import styled from "styled-components";

export const CategorysContainer = styled.div`
  background: linear-gradient(135deg, #b0d48f, #89b35d, #6b8f3e, #456e2a);
  padding: 2rem 2rem;

  .slider-container {
    width: auto;
    margin: 0 auto;
    text-align: center;
  }
  .slick-prev,
  .slick-next {
    width: 40px;
    height: 40px;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 40px;
    color: f9f9f6;
  }
`;

export const Title = styled.h2`
  color: #f9f9f6;
  font-size: 3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const Card = styled.div`
  background: #f9f9f6;
  width: auto;
  max-width: 300px;
  height: 400px;
  border-radius: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  .card-image {
    background: url(${(props) => props.$img});
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 65%;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }

  .card-title {
    margin: 1rem 0;
    padding: 0 0.4rem;
    font-size: 1rem;
    color: #333;
    text-align: center;
    height: 3rem;
    line-height: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* Número máximo de líneas */
    -webkit-box-orient: vertical;
  }

  .card-footer {
    margin-top: auto;
    padding: 0.5rem 0;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
