import { useState } from 'react';
import { 
  CardContainer,
  StudentInfo,
  ToggleButton,
  EyeIcon,
  AdditionalContent,
} from './Fun';
import photo from './images.png'; // Replace with your photo

function StudentCard() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <CardContainer>
      { <EyeIcon src={photo} alt="eye icon" /> }
      <StudentInfo>
        <h2>Ragul M</h2>
        <p>Registration Number: 212221230080</p>
      </StudentInfo>
      <ToggleButton onClick={toggleVisibility}>
        {isVisible ? 'Hide Details' : 'Show Details'}
      </ToggleButton>
      {isVisible && (
        <AdditionalContent>
          <p>No,52 THoppalamman Koil street,sholinghur,Ranipet District</p>
        </AdditionalContent>
      )}
    </CardContainer>
  );
};

export default StudentCard;