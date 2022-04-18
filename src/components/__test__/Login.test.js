import Login, { validateEmail } from "../Login";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
const onSubmit = jest.fn();
    describe("Test the Login Component", () => {
        test("render the login form submit button on the screen", async () => {
         const component= render(<Login />);
          const buttonList = await component.findAllByRole("button");
          expect(buttonList).toHaveLength(2);
        });
        test("validate email",()=>{
            const testEmail ="rujaan.com"
            expect(validateEmail(testEmail)).not.toBe(true)
        })
        test("email input field should accept email ", () => {
            render(<Login />);
            const email = screen.getByPlaceholderText("Enter email");
            userEvent.type(email, "dipesh");
            expect(email.value).not.toMatch("dipesh.malvia@gmail.com");
          });
          test("password should have attribute of password",()=>{
              render(<Login/>);
              const password = screen.getByPlaceholderText("Password")
              expect(password).toHaveAttribute("type","password")
          });
          test("display alert if goes wrong",()=>{
              render(<Login/>)
              const email = screen.getByPlaceholderText("Enter email");
              const password = screen.getByPlaceholderText("Password")
              const buttongroup = screen.getAllByRole("button")

              userEvent.type(email,"rujaan")
              userEvent.type(password,"12345")
              userEvent.click(buttongroup[0])
              const error = screen.getByText("Email is not valid")
              expect(error).toBeInTheDocument();

          })

          test("whould be able to reset the form" , ()=>{
              render(<Login/>)
              const email = screen.getByPlaceholderText("Enter email");
              const password = screen.getByPlaceholderText("Password")
              const ResetBtn = screen.getByTestId("reset")

              fireEvent.click(ResetBtn)
              expect(email.value).toMatch("")
              expect(password.value).toMatch("")
          })

          test("whould be able to submit the form" , ()=>{
              render(<Login/>)
              const email = screen.getByPlaceholderText("Enter email");
              const password = screen.getByPlaceholderText("Password")
              const submitBtn = screen.getByTestId("submit")
              
              userEvent.type(email,"rujaan@gmail.com")
              userEvent.type(password,"12345")
              userEvent.click(submitBtn)

              const user = screen.getByText("rujaan@gmail.com")
              expect(user).toBeInTheDocument
          })


        

})