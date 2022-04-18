import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("Test the App component",()=>{
  test("the redering of app component",()=>{
    const component = render(<App/>);
    const linkElement = component.getByText("React Testing using Jest");
    expect(linkElement).toBeInTheDocument();
  });
  test("render login component in the document",()=>{
    const component  = render(<App/>)
    const linkElement = component.getByLabelText("email")
    expect(linkElement).toBeInTheDocument();
  })
})
