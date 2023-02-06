import styled, { keyframes } from "styled-components";

const Title = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

// const animation = keyframes`
// 0%{
//   transform: rotate(0deg);
//   border-radius:0px ;
// }
// 50%{
//   border-radius:100px ;

// }
// 100%{
//   transform: rotate(360deg);
//   border-radius:0px ;
// }
// `;

// const Emoji = styled.span`
//   font-size: 36px;
// `;

// const Box = styled.div`
//   height: 200px;
//   width: 200px;
//   background-color: tomato;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: ${animation} 1s linear infinite;
/* span {
    &:hover {
      font-size: 45px;
    } */

/* ${Emoji} {
    &:hover {
      font-size: 45px;
    }
  }
`; */

// const Father = styled.div`
//   display: flex;
// `;

// const Input = styled.input`
//   background-color: tomato;
// `;

// const Box = styled.div`
//   background-color: ${(props) => props.bgColor};
//   width: 100px;
//   height: 100px;
// `;
// const Circle = styled(Box)`
//   border-radius: 50px;
// `;
// const Text = styled.span`
//   color: white;
// `;

// const Btn = styled.button`
//   color: white;
//   background-color: tomato;
//   border: 0;
//   border-radius: 15px;
// `;

// const Input = styled.input.attrs({required:true})`
// background-color: tomato;
// `
function App() {
  return (
    <Wrapper>
      <Title>Hello</Title>
    </Wrapper>
  );
}

export default App;

//<Box>
{
  /* <Btn>Log in</Btn>
      <Btn as="a">Log in</Btn> */
}
{
  /* <Box bgColor="teal" />
      <Circle bgColor="tomato" /> */
}
{
  /* <Input /> */
}
// <Emoji>😊</Emoji>
//  </Box>
