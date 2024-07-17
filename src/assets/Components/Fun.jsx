import styled from 'styled-components';

export const CardContainer = styled.div`
  background: white;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 300px;
  max-width: 100%;
  text-align: center;
  padding: 20px;
  animation: animateBackground 10s infinite;
`;

export const StudentInfo = styled.div`
  margin: 10px 0;
  h2 {
    margin: 0;
  }
`;

export const ToggleButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const EyeIcon = styled.img`
  width: 50px;
  height: 50px;
`;

export const AdditionalContent = styled.div`
  margin-top: 15px;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;