import axios from 'axios';
import MockAdapter from "axios-mock-adapter";
import { mount, shallow } from 'enzyme';
import React from 'react';
import { MemoryRouter } from "react-router";
import App from "./App";
import ScheduleMeeting from './component/ScheduleMeeting';


describe("Axios Testing for post", () => {
  const ScheduleMeetingWrapper = shallow(<ScheduleMeeting />);
  const mockData = {
    schedulerName: "John Paul",
    dl: "ETAMYSJAVA",
    dateOfMeeting: "2022-05-01",
    purpose: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaasaadasdasdad",
    meetingType: "Weekly",
    distributionList: ["ETA_MYS_JAVA", "ETA_MYS_MS", "ETA_MYS_BI", "ETA_MYS_UI", "ETA_MYS_AI"]    
  }
  
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    
    ScheduleMeetingWrapper.setState({ formValue: mockData});
   
    let formObj = {
      schedulerName: ScheduleMeetingWrapper.state().formValue.schedulerName,
      dl: ScheduleMeetingWrapper.state().formValue.dl,
      dateOfMeeting: ScheduleMeetingWrapper.state().formValue.dateOfMeeting,
      purpose: ScheduleMeetingWrapper.state().formValue.purpose,
      meetingType: ScheduleMeetingWrapper.state().formValue.meetingType,
      distributionList: ScheduleMeetingWrapper.state().formValue.distributionList
    }    
    const scheduleMeetingURL = "http://localhost:8765/meeting/schedule"
    mock
      .onPost(scheduleMeetingURL, formObj)
      .reply(200, { "message": "Meeting Successfully Scheduled For ETAMYSJAVA On 2022-05-19" });

    ScheduleMeetingWrapper.find('form').simulate('submit', { preventDefault: () => { } });
  });


  afterEach(() => {
    mock.restore();
  });

  test('AT1-sets the successMessage state to appropriate message', () => {
    expect(ScheduleMeetingWrapper.state().successMessage).toEqual("Meeting Successfully Scheduled For ETAMYSJAVA On 2022-05-19");
  });
  
})


describe("Testing Routing", () => {
  test("RT1 - navigate to ScheduleMeeting component for /schedule", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["schedule"]}>
        <App />
      </MemoryRouter>
    );

    expect(wrapper.find(ScheduleMeeting)).toHaveLength(1);
  });


  test("RT2 - navigate to ScheduleMeeting component for / path", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );
   
    expect(wrapper.find(ScheduleMeeting)).toHaveLength(1);
  });
  test("RT3 - should not navigate to ScheduleMeeting component for wrong path", () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={["/wrong"]}>
        <App />
      </MemoryRouter>
    );
   
    expect(wrapper.find(ScheduleMeeting)).toHaveLength(0);
  });


  describe("ScheduleMeeting Component - input fields data types", () => {
    test("SMT1 - type of schedulerName field is text", () => {
      const wrapper = shallow(<ScheduleMeeting />);

      expect(wrapper.find('input[name="schedulerName"]').props().type).toEqual("text");
    });

    test("SMT2 - type of meetingType field is radio", () => {
      const wrapper = shallow(<ScheduleMeeting />);
      expect(wrapper.find('input[name="meetingType"]').at(0).props().type.toLowerCase() === "radio"
        && wrapper.find('input[name="meetingType"]').at(1).props().type.toLowerCase() === "radio"
        && wrapper.find('input[name="meetingType"]').at(2).props().type.toLowerCase() === "radio").toEqual(true)
    });



    test("SMT3 - type of purpose field is textarea", () => {
      const wrapper = shallow(<ScheduleMeeting />);
      expect(wrapper.find('textarea[name="purpose"]').props().name).toEqual("purpose");
    });
  });

  test("SMT4 - type of dateOfMeeting field is date", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find('input[name="dateOfMeeting"]').props().type.toLowerCase()).toEqual("date");
  });
})

describe("ScheduleMeeting COMPONENT - test for formcontrol, formcheck in form fields", () => {
  test("SMT5 - schedulerName field has formcontrol class", () => {
    const wrapper = shallow(<ScheduleMeeting />);

    expect(wrapper.find('input[name="schedulerName"]').hasClass('form-control')).toEqual(true);
  });

  test("SMT6 - dl field has formcontrol class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find('select[name="dl"]').hasClass('form-control')).toEqual(true);
  });

  test("SMT7 - purpose field has formcontrol class", () => {
    const wrapper = shallow(<ScheduleMeeting />);

    expect(wrapper.find('textarea[name="purpose"]').hasClass('form-control')).toEqual(true);
  });

  test("SMT8 - meetingType field has formcheckinline class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find('.form-check-inline')).toHaveLength(3);
  });

  test("SMT9 - meetingType field has formchecklabel class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find('.form-check-label')).toHaveLength(3);
  });

  test("SMT10 - meetingType field has formcheckinput class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find('.form-check-input')).toHaveLength(3);
  });
})


describe("ScheduleMeeting COMPONENT - input fields error message have text-danger class", () => {
  test("SMT11 - error message of schedulerName has textdanger class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let schedulerNameError = wrapper.find('[name="schedulerNameError"]').hasClass('text-danger')
    expect(schedulerNameError).toEqual(true);
  });

  test("SMT12 - errror message of dl has textdanger class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let dlError = wrapper.find('[name="dlError"]').hasClass('text-danger')
    expect(dlError).toEqual(true);
  });

  test("SMT13 - error message of purpose has textdanger class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let purposeError = wrapper.find('[name="purposeError"]').hasClass('text-danger')
    expect(purposeError).toEqual(true);
  });
  test("SMT14 - error message of dateOfMeeting has textdanger class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let dateOfMeetingError = wrapper.find('[name="dateOfMeetingError"]').hasClass('text-danger')
    expect(dateOfMeetingError).toEqual(true);
  });
})


describe("ScheduleMeeting COMPONENT - success and error messages have appropriate classes", () => {
  test("SMT15 - success message tag has textsuccess class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find('[name="successMessage"]').hasClass('text-success')).toEqual(true);
  });

  test("SMT16 - error message tag has textdanger class", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find('[name="errorMessage"]').hasClass('text-danger')).toEqual(true);
  });
})

describe("ScheduleMeeting COMPONENT - check for field error message being displayed on browser", () => {

  test("SMT17 - error message of schedulerName is being displayed", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let formErrorMessage = Object.assign({}, wrapper.state().formErrorMessage);
    formErrorMessage.schedulerName = "Field Required";
    wrapper.setState({ formErrorMessage });
    let ret1=wrapper.find('[name="schedulerNameError"]').props().children
    if(typeof ret1==="object")
    {
      let count=0
      ret1.forEach(x=>{
        if(x.toLowerCase().trim()==="field required")
        {
          count+=1
        }
      })
      expect(count).toEqual(1)
    }
    else{
      expect(wrapper.find('[name="schedulerNameError"]').props().children.toLowerCase().trim()).toEqual("field required");
    }
   
  });

  test("SMT18 - error message of dl is being displayed", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let formErrorMessage = Object.assign({}, wrapper.state().formErrorMessage);
    formErrorMessage.dl = "Field Required";
    wrapper.setState({ formErrorMessage });
    let ret1=wrapper.find('[name="dlError"]').props().children
    if(typeof ret1==="object")
    {
      let count=0
      ret1.forEach(x=>{
        if(x.toLowerCase().trim()==="field required")
        {
          count+=1
        }
      })
      expect(count).toEqual(1)
    }
    else{
      expect(wrapper.find('[name="dlError"]').props().children.toLowerCase().trim()).toEqual("field required");
    }
   
    
  });

  test("SMT19 - error message of purpose is being displayed", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let formErrorMessage = Object.assign({}, wrapper.state().formErrorMessage);
    formErrorMessage.purpose = "Field Required";
    wrapper.setState({ formErrorMessage });
    let ret1=wrapper.find('[name="purposeError"]').props().children
    if(typeof ret1==="object")
    {
      let count=0
      ret1.forEach(x=>{
        if(x.toLowerCase().trim()==="field required")
        {
          count+=1
        }
      })
      expect(count).toEqual(1)
    }
    else{
      expect(wrapper.find('[name="purposeError"]').props().children.toLowerCase().trim()).toEqual("field required");
    }

    
  });
  test("SMT20 - error message of dateOfMeeting is being displayed", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let formErrorMessage = Object.assign({}, wrapper.state().formErrorMessage);
    formErrorMessage.dateOfMeeting = "Field Required";
    wrapper.setState({ formErrorMessage });
    let ret1=wrapper.find('[name="dateOfMeetingError"]').props().children
    if(typeof ret1==="object")
    {
      let count=0
      ret1.forEach(x=>{
        if(x.toLowerCase().trim()==="field required")
        {
          count+=1
        }
      })
      expect(count).toEqual(1)
    }
    else{
      expect(wrapper.find('[name="dateOfMeetingError"]').props().children.toLowerCase().trim()).toEqual("field required");
    }
  
  });
})

describe("ScheduleMeeting COMPONENT - binding of input fields with corresponding state", () => {
  
  test("SMT24 - meetingType field is binded to formValue state", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let ScheduleMeetingForm = Object.assign({}, wrapper.state().formValue);
    ScheduleMeetingForm.meetingType = "Weekly";
    wrapper.setState({ ScheduleMeetingForm });
    expect(wrapper.find('input[name="meetingType"]').at(0).props().value.toLowerCase().trim()).toEqual("weekly");
  });

  // test("SMT25 - meetingType field  has 1st value as Weekly ", () => {
  //   const wrapper = shallow(<ScheduleMeeting />);
 
  //   expect(wrapper.find('input[name="meetingType"]').at(0).props().value.toLowerCase().trim()).toEqual("weekly");
  // });

  // test("SMT26 - meetingType field  has 2nd value as Monthly ", () => {
  //   const wrapper = shallow(<ScheduleMeeting />);
  //   expect(wrapper.find('input[name="meetingType"]').at(1).props().value.toLowerCase().trim()).toEqual("monthly");
  // });

  // test("SMT27 - meetingType field  has 3rd value as Quarterly ", () => {
  //   const wrapper = shallow(<ScheduleMeeting />);
  //   expect(wrapper.find('input[name="meetingType"]').at(2).props().value.toLowerCase().trim()).toEqual("quarterly");
  // });


  // test("SMT29 - dl field first option value is empty", () => {
  //   const wrapper = shallow(<ScheduleMeeting />);
  //   let formValue = Object.assign({}, wrapper.state().formValue);
  //   formValue.dl = "ETA_MYS_JAVA";
  //   formValue.meetingList = ["ETA_MYS_JAVA"]
  //   wrapper.setState({ formValue });
  //   expect(wrapper.find('option').at(0).props().value).toEqual("");
  // });
  test("SMT30 - dl field has first option as Select ", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let formValue = Object.assign({}, wrapper.state().formValue);
    formValue.dl = "ETA_MYS_JAVA";
    formValue.meetingList = ["ETA_MYS_JAVA"]
    wrapper.setState({ formValue });
    expect(wrapper.find('option').at(0).props().children).toEqual("--Select--");
  });
})


describe("ScheduleMeeting COMPONENT - success and error messages are getting displayed", () => {
  test("SMT31 - successMessge bound to successMessage state is being displayed", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.setState({ successMessage: "successfully booked" });
    let ret1=wrapper.find('[name="successMessage"]').props().children
    if(typeof ret1==="object")
    {
      let count=0
      ret1.forEach(x=>{
        if(x.toLowerCase().trim()==="successfully booked")
        {
          count+=1
        }
      })
      expect(count).toEqual(1)
    }
    else{
      expect(wrapper.find('[name="successMessage"]').props().children).toEqual("successfully booked");
    }
    
  });

  test("SMT32 - errorMessge bound to errorMessage state is being displayed", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.setState({ errorMessage: "booking failed" });
    let ret1=wrapper.find('[name="errorMessage"]').props().children
    if(typeof ret1==="object")
    {
      let count=0
      ret1.forEach(x=>{
        if(x.toLowerCase().trim()==="booking failed")
        {
          count+=1
        }
      })
      expect(count).toEqual(1)
    }
    else{
      expect(wrapper.find('[name="errorMessage"]').props().children).toEqual("booking failed");
    }
    
  });
})

describe("ScheduleMeeting COMPONENT - Testing onchange handler for Inputs in ScheduleMeeting component", () => {

  test("RHT1 - schedulerName input field also change schedulerName of formValue state", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.find("input").at(0).simulate("change", {
      target: { name: "schedulerName", value: "John Paul" }
    });
    expect(wrapper.state().formValue.schedulerName).toEqual("John Paul");
  });

  test("RHT2 - meetingType input field also change meetingType of formValue state", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.find("input").at(1).simulate("change", {
      target: { name: "meetingType", value: "Weekly" }
    });
    expect(wrapper.state().formValue.meetingType).toEqual("Weekly");
  });

  test("RHT02 - dateOfMeeting input field also changes dateOfMeeting of formValue state", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.find("input").at(2).simulate("change", {
      target: { name: "dateOfMeeting", value: "2022-10-10" }
    });
    expect(wrapper.state().formValue.dateOfMeeting).toEqual("2022-10-10");
  });

  test("RHT3 - purpose textarea field also changes purpose of formValue state", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.find("textarea").at(0).simulate("change", {
      target: { name: "purpose", value: "anant" }
    });
    expect(wrapper.state().formValue.purpose).toEqual("anant");
  });
  test("RHT03 - dl select field also changes dl of formValue state", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.find("select").at(0).simulate("change", {
      target: { name: "dl", value: "anant" }
    });
    expect(wrapper.state().formValue.dl).toEqual("anant");
  });
});

describe("ScheduleMeeting COMPONENT - Testing Validation of schedulerName", () => {

  test("CVT1 - schedulerName displays error for '' value", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let flag = false; let count = 0
    wrapper.instance().validateField("schedulerName", "");
    var msgArr = ['field', 'required'];
    var msg = wrapper.state().formErrorMessage.schedulerName;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count >= 1 && count <= 2) flag = true;
    expect(flag).toEqual(true);
  });

  test("CVT2 - schedulerName displays error for value anant12", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let flag = false; let count = 0
    wrapper.instance().validateField("schedulerName", "anant12");
    var msgArr = ["name", "should", "contain", "alphabets", "and", "space"];
    var msg = wrapper.state().formErrorMessage.schedulerName;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count > 5) flag = true;
    expect(flag).toEqual(true);
  });

  test("CVT5 - schedulerName should not give error for value John", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.instance().validateField("schedulerName", "John");
    expect(wrapper.state().formErrorMessage.schedulerName).toEqual("");
  });
  // test("CVT05 - schedulerName should not give error for value John Paul", () => {
  //   const wrapper = shallow(<ScheduleMeeting />);
  //   wrapper.instance().validateField("schedulerName", "John Paul");
  //   expect(wrapper.state().formErrorMessage.schedulerName).toEqual("");
  // });
  // test("CVT005 - schedulerName should not give error for value John Paul paul john JOHN", () => {
  //   const wrapper = shallow(<ScheduleMeeting />);
  //   wrapper.instance().validateField("schedulerName", "John Paul paul john JOHN");
  //   expect(wrapper.state().formErrorMessage.schedulerName).toEqual("");
  // });
});

describe("ScheduleMeeting COMPONENT - Testing Validation of dl", () => {

  test("DVT1 - dl displays error for '' value", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let flag = false; let count = 0
    wrapper.instance().validateField("dl", "");
    var msgArr = ['field', 'required'];
    var msg = wrapper.state().formErrorMessage.dl;
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

describe("ScheduleMeeting COMPONENT - Testing Validation of dateOfMeeting", () => {

  test("RVT1 - dateOfMeeting displays error for '' value", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let flag = false; let count = 0
    wrapper.instance().validateField("dateOfMeeting", "");
    var msgArr = ['field', 'required'];
    var msg = wrapper.state().formErrorMessage.dateOfMeeting;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count >= 1 && count <= 2) flag = true;
    expect(flag).toEqual(true);
  });

  test("RVT2 - dateOfMeeting displays error for value 2017 01 01", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let flag = false; let count = 0
    wrapper.instance().validateField("dateOfMeeting", "2017-01-01");
    var msgArr = ["date", "of", "meeting", "should", "be", "after", "todays", "date", "and", "can't", "be", "on", "weekends"];
    var msg = wrapper.state().formErrorMessage.dateOfMeeting;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count > 9) flag = true;
    expect(flag).toEqual(true);
  });

  test("RVT02 - dateOfMeeting displays error for value 2022 01 15", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let flag = false; let count = 0
    wrapper.instance().validateField("dateOfMeeting", "2022-01-15");
    var msgArr = ["date", "of", "meeting", "should", "be", "after", "todays", "date", "and", "can't", "be", "on", "weekends"];
    var msg = wrapper.state().formErrorMessage.dateOfMeeting;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count > 9) flag = true;
    expect(flag).toEqual(true);
  });
  test("RVT002 - dateOfMeeting displays error for value 2022 01 16", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let flag = false; let count = 0
    wrapper.instance().validateField("dateOfMeeting", "2022-01-16");
    var msgArr = ["date", "of", "meeting", "should", "be", "after", "todays", "date", "and", "can't", "be", "on", "weekends"];
    var msg = wrapper.state().formErrorMessage.dateOfMeeting;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count > 9) flag = true;
    expect(flag).toEqual(true);
  });

  // test("RVT002 - dateOfMeeting displays error for value 2019-01-19", () => {
  //   const wrapper = shallow(<ScheduleMeeting />);
  //   let flag = false; let count = 0
  //   wrapper.instance().validateField("dateOfMeeting", "2019-01-19");
  //   var msgArr = ["date", "of", "meeting", "should", "be", "after", "todays", "date", "and", "cannot", "be", "on", "weekends"];
  //   var msg = wrapper.state().formErrorMessage.dateOfMeeting;
  //   msg = msg.toLowerCase().split(" ");
  //   msgArr.forEach(element => {
  //     if (msg.indexOf(element) != -1) {
  //       count += 1
  //     }
  //   });
  //   if (count > 9) flag = true;
  //   expect(flag).toEqual(true);
  // });
  test("RVT002 - dateOfMeeting displays error for value today date", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let flag = false; let count = 0
    wrapper.instance().validateField("dateOfMeeting", new Date());
    var msgArr = ["date", "of", "meeting", "should", "be", "after", "todays", "date", "and", "can't", "be", "on", "weekends"];
    var msg = wrapper.state().formErrorMessage.dateOfMeeting;
    msg = msg.toLowerCase().split(" ");
    msgArr.forEach(element => {
      if (msg.indexOf(element) != -1) {
        count += 1
      }
    });
    if (count > 9) flag = true;
    expect(flag).toEqual(true);
  });
  test("RVT3 - dateOfMeeting should not give error for date future date", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.instance().validateField("dateOfMeeting", "2022-01-12");
    expect(wrapper.state().formErrorMessage.dateOfMeeting).toEqual("");
  });
});


describe("ScheduleMeeting COMPONENT - Testing if validateField is called in handleChange method", () => {
  test("OCMC1 - validateField is called in handleChange method", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.find("input").at(0).simulate("change", {
      target: { name: "schedulerName", value: "" }
    });
    expect(wrapper.state().formErrorMessage.schedulerName).not.toEqual("");
  })
})

describe("ScheduleMeeting COMPONENT - form level messages on invoking validateField", () => {
  test("FLMT1 - form level success message should be set to '' on invoking validateField", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.setState({ successMessage: "booking successful" })
    wrapper.instance().validateField("schedulerName", "John Paul");
    expect(wrapper.state().successMessage).toEqual("");
  })

  test("FLMT2 - form level error message should be set to '' on invoking validateField", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.setState({ errorMessage: "booking failed" })
    wrapper.instance().validateField("schedulerName", "John Paul");
    expect(wrapper.state().errorMessage).toEqual("");
  })
})

describe("ScheduleMeeting COMPONENT - testing button and its enable & disable ", () => {

  test("BBT1 - button should be enabled when all inputs are valid", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let formValid = wrapper.state().formValid;
    formValid.schedulerName = true; formValid.dl = true;
    formValid.purpose = true; formValid.dateOfMeeting = true;
    formValid.meetingType = true;
    wrapper.instance().validateField();
    expect(wrapper.state().formValid.buttonActive).toEqual(true);
  })

  test("BBT2 - button should be disabled when any of the input fields is invalid", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let formValid = wrapper.state().formValid;
    formValid.schedulerName = true; formValid.dl = true;
    formValid.purpose = true; formValid.dateOfMeeting = true;
    formValid.meetingType = false;
    wrapper.instance().validateField();
    expect(wrapper.state().formValid.buttonActive).toEqual(false);
  })

  test("BBT3 - button has disabled property", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find("form").find("button").props().disabled).toEqual(true);
  })



  test("BBT5 - button is bound to buttonActive of formValid", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let formValid = Object.assign({}, wrapper.state().formValid);
    formValid.buttonActive = true;
    wrapper.setState({ formValid });
    expect(wrapper.find("form").find("button").props().disabled).toEqual(false);
  })

  // test("BBT6 - button is disabled until the form becomes valid", () => {
  //   const wrapper = shallow(<ScheduleMeeting />);
  //   let formValid = Object.assign({}, wrapper.state().formValid);
  //   formValid.buttonActive = true;
  //   wrapper.setState({ formValid });
  //   expect(wrapper.find("form").find("button").props().disabled).toEqual(false);
  // })

  test("BBT7 - button is displayed with name Schedule", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    expect(wrapper.find("form").find("button").props().children.toLowerCase().trim()).toEqual("schedule");
  })
})


describe("ScheduleMeeting COMPONENT - return value of methods", () => {
  test("RVT1 - validateField method should not return any value", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let data = wrapper.instance().validateField();
    expect(data).toEqual(undefined);
  })

  test("RVT2 - handleChange method should not return any value", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let event = { target: { name: "schedulerName", value: "John Paul" } }
    let data = wrapper.instance().handleChange(event);
    expect(data).toEqual(undefined);
  })

  test("RVT3 - scheduleMeeting method should not return any value", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let event = { preventDefault: () => { } }
    let data = wrapper.instance().scheduleMeeting(event);
    expect(data).toEqual(undefined);
  })
})
describe("ScheduleMeeting COMPONENT - testing handleSubmit method", () => {

  test("BRMT1 - preventDefault method is invoked", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let event = { preventDefault: () => { wrapper.setState({ dummy: "dummy state" }) } }
    wrapper.instance().handleSubmit(event);
    expect(wrapper.state().dummy).toEqual('dummy state');
  })
  test("BRMT01 - handleSubmit method should not return any value", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    let event = { preventDefault: () => { wrapper.setState({ dummy: "dummy state" }) } }
    let data = wrapper.instance().handleSubmit(event);
    expect(data).toEqual(undefined);
  })
  test("BRMT03 - handleSubmit method is invoked on form submission", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.find("form").at(0).simulate("submit", {
      preventDefault: () => { wrapper.setState({ dummy: "dummy state" }) }
    });
    expect(wrapper.state().dummy).toEqual("dummy state");
  })
});

describe("ScheduleMeeting COMPONENT - testing scheduleMeeting method", () => {
  

  test("BRMT2 - success and error messages are set to ''", () => {
    const wrapper = shallow(<ScheduleMeeting />);
    wrapper.setState({ successMessage: "success", errorMessage: "error" })
    let event = { preventDefault: () => { wrapper.setState({ dummy: "dummy state" }) } }
    wrapper.instance().scheduleMeeting(event);
    let sm = wrapper.state().successMessage;
    let em = wrapper.state().errorMessage;
    expect(sm === "" && em === "").toEqual(true);
  })
  

})























