import Error from "../Error"
import { render } from "@testing-library/react"


describe('componect Error', () => {
    it('sholud render Page Not Found', () => {
      const component = render(<Error/>);
      expect(component).toMatchSnapshot();
    })
  })


   