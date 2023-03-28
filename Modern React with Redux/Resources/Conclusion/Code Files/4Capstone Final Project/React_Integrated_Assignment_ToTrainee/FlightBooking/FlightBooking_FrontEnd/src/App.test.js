import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { mount, shallow } from "enzyme";
import React from "react";
import { MemoryRouter } from "react-router";
import App from "./App";
import CreateBooking from "./components/CreateBooking";
import ViewFlights from "./components/ViewFlights";


describe("Axios Testing for post", () => {
  const FlightBookingWrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
  const mockData = {
    customerId: "G1001",
    flightId: "IND-102",
    noOfTickets: 3,
    flightIds: ["F-101", "F-102", "F-103", "F-104", "F-106"]
  }

  const mock = new MockAdapter(axios);
  beforeEach(() => {
    FlightBookingWrapper.setState({ formValue: mockData });
    let formObj = {
      customerId: FlightBookingWrapper.state().formValue.customerId,
      flightId: FlightBookingWrapper.state().formValue.flightId,
      noOfTickets: FlightBookingWrapper.state().formValue.noOfTickets,
      flightIds: FlightBookingWrapper.state().formValue.flightIds
    }
    const flightBookingURL = "http://localhost:8765/flight/bookflight/"
    mock
      .onPost(flightBookingURL, formObj)
      .reply(200, "Flight is booked with booking id=2005 and total cost is=1000");

    FlightBookingWrapper.find('form').simulate('submit', { preventDefault: () => { } });
  });


  afterEach(() => {
    mock.restore();
  });

  // test('AT1-Sets the `successMessage` state to appropriate message', () => {
  //    expect(FlightBookingWrapper.state().successMessage).toEqual("Flight is booked with booking id=2005 and total cost is=1000");
  //  });

})

describe("Testing Routing", () => {
  // test.only("RT1 - Navigate to CreateBooking component for /bookflight/Vistara", () => {
  //   const wrapper = mount(
  //     <MemoryRouter initialEntries={["/bookflight/:Vistara"]}>
  //       <App />
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find(CreateBooking)).toHaveLength(1);

  // });



  test("RT2 - Navigate to ViewFlights component for unrouted path", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/wrongPath"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(ViewFlights)).toHaveLength(1);
  });

  test("RT1 - Navigate to ViewFlights component for /viewflights", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/viewflights"]}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(ViewFlights)).toHaveLength(1);

  });

});

//****************************************************************************************************************//
describe("CreateBooking COMPONENT - Input fields data types", () => {

  test("RJT1 - Type of flightName field is text", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    expect(wrapper.find('input[name="flightName"]').props().type).toEqual("text");
  });
  test("RJT2 - Type of customerId field is text", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    expect(wrapper.find('input[name="customerId"]').props().type).toEqual("text");
  });

  test("RJT3 - Type of noOfTickets field is number", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    expect(wrapper.find('input[name="noOfTickets"]').props().type).toEqual("number");
  });
  test("RJT4 - Type of flightID field is select", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    expect(wrapper.find('select[name="flightId"]').props().type);
  });
})

//****************************************************************************************************************//
// describe("CreateBooking COMPONENT - test for formcontrol in form fields", () => {
//   test("SMT1 - flightName field has form control class", () => {
//     const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);

//     expect(wrapper.find('input[name="flightName"]').hasClass('form-control')).toEqual(true);
//   });
//   test("SMT2 - customerId field has form control class", () => {
//     const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
//     expect(wrapper.find('input[name="customerId"]').hasClass('form-control')).toEqual(true);
//   });


//   test("SMT4 - flightId field has formcontrol class", () => {
//     const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
//     expect(wrapper.find('select[name="flightId"]').hasClass('form-control')).toEqual(true);
//   });
//   test("SMT3 - noOfTickets field has form control class", () => {
//     const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
//     expect(wrapper.find('input[name="noOfTickets"]').hasClass('form-control')).toEqual(true);
//   })
//****************************************************************************************************************//

describe("CreateBooking COMPONENT - input fields error message have text-danger class", () => {
  test("SMT4 - Error message of customerId has text danger class", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let customerIdError = wrapper.find('[name="customerIdError"]').hasClass('text-danger')
    expect(customerIdError).toEqual(true);
  });

  test("SMT5 - Error message of flightId has text danger class", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let customerIdError = wrapper.find('[name="flightIdError"]').hasClass('text-danger')
    expect(customerIdError).toEqual(true);
  });

  test("SMT6 - Error message of noOfTickets has text danger class", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let noOfTicketsError = wrapper.find('[name="noOfTicketsError"]').hasClass('text-danger')
    expect(noOfTicketsError).toEqual(true);
  });
})

//****************************************************************************************************************//
describe("CreateBooking COMPONENT - binding of input fields with corresponding state", () => {


  test("SMT7 - flightId field is binded to formValue state", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let formValue = Object.assign({}, wrapper.state().formValue);
    formValue.flightId = "";
    formValue.flightList = ["F-101"];
    wrapper.setState({ formValue });
    expect(wrapper.find('option').at(1).props().value.toLowerCase().trim()).toEqual("f-101");
  });



  test("SMT8 - flightId field has first option value as empty", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let formValue = Object.assign({}, wrapper.state().formValue);
    formValue.flightId = "F-101";
    formValue.flightList = ["F-101"]
    wrapper.setState({ formValue });
    expect(wrapper.find('option').at(0).props().value).toEqual("");
  });


  test("SMT9 - flightId field has first option as Select Flight ", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let formValue = Object.assign({}, wrapper.state().formValue);
    formValue.flightId = "F-101";
    formValue.flightList = ["F-101"]
    wrapper.setState({ formValue });
    expect(wrapper.find('option').at(0).props().children).toEqual("--Select Flight--");
  });

})

//****************************************************************************************************************//

describe("CreateBooking COMPONENT - check for field error message being displayed on browser", () => {

  test("SMT10 - Error message of customerId is being displayed", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let formErrorMessage = Object.assign({}, wrapper.state().formErrorMessage);
    formErrorMessage.customerId = "Field Required";
    wrapper.setState({ formErrorMessage });
    expect(wrapper.find('[name="customerIdError"]').props().children.toLowerCase().trim()).toEqual("field required");
  });

  test("SMT11 - Error message of flightId is being displayed", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let formErrorMessage = Object.assign({}, wrapper.state().formErrorMessage);
    formErrorMessage.flightId = "Field Required";
    wrapper.setState({ formErrorMessage });
    expect(wrapper.find('[name="flightIdError"]').props().children.toLowerCase().trim()).toEqual("field required");
  });

  test("SMT12 - Error message of noOfTickets is being displayed", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let formErrorMessage = Object.assign({}, wrapper.state().formErrorMessage);
    formErrorMessage.noOfTickets = "Field Required";
    wrapper.setState({ formErrorMessage });
    expect(wrapper.find('[name="noOfTicketsError"]').props().children.toLowerCase().trim()).toEqual("field required");
  });
})
//****************************************************************************************************************//

describe("CreateBooking COMPONENT - success and error messages are getting displayed", () => {
  test("SMT13 - successMessge bound to successMessage state is being displayed", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    wrapper.setState({ successMessage: "Flight is booked with booking id=2005 and total cost is=1000" });
    expect(wrapper.find('[name="successMessage"]').props().children).toEqual("Flight is booked with booking id=2005 and total cost is=1000");
  });

  test("SMT14 - errorMessge bound to errorMessage state is being displayed", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    wrapper.setState({ errorMessage: "The requested flight is unavailable or cancelled" });
    expect(wrapper.find('[name="errorMessage"]').props().children).toEqual("The requested flight is unavailable or cancelled");
  });
})

//****************************************************************************************************************//



describe("CreateBooking COMPONENT - Testing onchange  for Inputs in CreateBooking component", () => {

  test("RHT1 - customerId input field also changes customerId of formValue state", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    wrapper.find("input").at(1).simulate("change", {
      target: { name: "customerId", value: "G1001" }
    });
    expect(wrapper.state().formValue.customerId).toEqual("G1001");
  });

  test("RHT2 - noOfTickets input field also changes noOfTickets of formValue state", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    wrapper.find("input").at(1).simulate("change", {
      target: { name: "noOfTickets", value: 1 }
    });
    expect(wrapper.state().formValue.noOfTickets).toEqual(1);
  });

  test("RHT3 - flightId select field also changes flightId of formValue state", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    wrapper.find("select").at(0).simulate("change", {
      target: { name: "flightId", value: "F-103" }
    });
    expect(wrapper.state().formValue.flightId).toEqual("F-103");
  });
});

//****************************************************************************************************************//

describe("CreateBooking COMPONENT - Testing Validation of customerId", () => {

  test("CVT1 - customerId displays error for '' value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let flag = false; let count = 0
    wrapper.instance().validateField("customerId", "");
    var msgArr = ['Field', 'required'];
    var msg = wrapper.state().formErrorMessage.customerId;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count >= 1 && count <= 2) flag = true;
    expect(flag).toEqual(true);
  });

  test("CVT2 - customerId displays error for invalid value ", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let flag = false; let count = 0
    wrapper.instance().validateField("customerId", "N78787MM");
    var msgArr = ["customer", "Id", "alphabet", "start", "contain", "must", "with", "space", "an", "followed", "by", "4", "digits"];
    var msg = wrapper.state().formErrorMessage.customerId;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count > 5) flag = true;
    expect(flag).toEqual(true);
  });


  test("CVT3 - customerId should not give error for valid value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    wrapper.instance().validateField("customerId", "G1001");
    expect(wrapper.state().formErrorMessage.customerId).toEqual("");
  });
  
  test("CVT4 - customerId should not give error for value P2312", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    wrapper.instance().validateField("customerId", "P2312");
    expect(wrapper.state().formErrorMessage.customerId).toEqual("");
  });
});

describe("CreateBooking COMPONENT - Testing Validation of flight", () => {

  test("DVT1 - flightId displays error for '' value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let flag = false; let count = 0
    wrapper.instance().validateField("flightId", "");
    var msgArr = ['Select', 'a', 'flight'];
    var msg = wrapper.state().formErrorMessage.flightId;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count >= 1 && count <= 2) flag = true;
    expect(flag).toEqual(true);
  });
});

describe("CreateBooking COMPONENT - Testing Validation of noOfTickets", () => {

  test("CVT6 - noOfTickets displays error for '' value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let flag = false; let count = 0
    wrapper.instance().validateField("noOfTickets", "");
    var msgArr = ['Field', 'required'];
    var msg = wrapper.state().formErrorMessage.noOfTickets;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count >= 1) flag = true;
    expect(flag).toEqual(true);
  });

  test("CVT7 - noOfTickets should not give error for valid value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    wrapper.instance().validateField("noOfTickets", 2);
    expect(wrapper.state().formErrorMessage.noOfTickets).toEqual("");
  });
});

//****************************************************************************************************************//
test("CBJT1-Create Booking component has a form", () => {
  const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
  expect(wrapper.find("form")).toHaveLength(1);
});

test("CBJT2-Create Booking component has 4 fields (3 inputs & 1 dropdown)", () => {
  const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
  expect(wrapper.find("form").find("input").length + wrapper.find("form").find("select").length).toEqual(4);
});

test("CBJT3-Create Booking component has a button", () => {
  const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
  expect(wrapper.find("form").find("button")).toHaveLength(1);
});


test("CBJT4-Name properties of all the input fields are proper", () => {
  const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
  let status = false;
  if (wrapper.find("form").find("input").at(0).props().name == "flightName" && wrapper.find("form").find("input").at(1).props().name == "customerId" &&
    wrapper.find("form").find("input").at(2).props().name == "noOfTickets" &&
    wrapper.find("form").find("select").at(0).props().name == "flightId") { status = true; }
  expect(status).toEqual(true);
});

test("CBJT5-Error message tags for all the fields have proper name attribute", () => {
  const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
  let formErrorMessage = Object.assign({}, wrapper.state().formErrorMessage);
  formErrorMessage.customerId = true;
  wrapper.setState({ formErrorMessage });
  expect(wrapper.find('[name="customerIdError"]').length +
    wrapper.find('[name="flightIdError"]').length + wrapper.find('[name="noOfTicketsError"]').length
  ).toEqual(3);
});

test("CBJT6-Form level success and error messages of CreateBooking component have proper name attribute", () => {
  const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
  wrapper.setState({ errorMessage: true });
  expect(wrapper.find('[name="errorMessage"]').length + wrapper.find('[name="successMessage"]').length).toEqual(2);
});

test("CBJT7-All input fields of CreateBooking component have form control class", () => {
  const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
  let flightName = wrapper.find('input[name="flightName"]').hasClass('form-control');
  let customerId = wrapper.find('input[name="customerId"]').hasClass('form-control');
  let noOfTickets = wrapper.find('input[name="noOfTickets"]').hasClass('form-control');
  let flightId = wrapper.find('select[name="flightId"]').hasClass('form-control');
  expect(flightName && customerId && noOfTickets && flightId).toEqual(true);
});






//********************************   Structural Test    ****/

describe("CreateBooking COMPONENT -- return value of methods", () => {

  test("RVT13 - validateField method should not return any value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let data = wrapper.instance().validateField();
    expect(data).toEqual(undefined);
  })

  test("RVT14 - handleChange method should not return any value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let event = { target: { name: "flightName", value: "Vistara" } }
    let data = wrapper.instance().handleChange(event);
    expect(data).toEqual(undefined);
  })

  test("RVT15 - submitBooking method should not return any value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let event = { preventDefault: () => { } }
    let data = wrapper.instance().submitBooking();
    expect(data).toEqual(undefined);
  })

  test("RVT16 - handleSubmit method should not return any value", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    let event = { preventDefault: () => { wrapper.setState({ dummy: "dummy state" }) } }
    let data = wrapper.instance().handleSubmit(event);
    expect(data).toEqual(undefined);
  })

  test("RVT17 - render method of  CreateBooking should have proper return", () => {
    const wrapper = shallow(<CreateBooking match={{ params: { flightName: "Vistara" } }} />);
    expect(wrapper.instance().render()).toBeTruthy()
  })
})
describe("ViewFlights COMPONENT -- return value of methods", () => {
  test("RVT15 - fetchFlights method should not return any value", () => {
    const wrapper = shallow(<ViewFlights />);
    let event = { preventDefault: () => { } }
    let data = wrapper.instance().fetchFlights(event);
    expect(data).toEqual(undefined);
  })

  test("RVT16 - render method of ViewFlights should have proper return", () => {
    const wrapper = shallow(<ViewFlights />);
    expect(wrapper.instance().render()).toBeTruthy()
  })
});
