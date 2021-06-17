import React from "react";
import "@innovaccer/design-system/css";
import {
  Card,
  Label,
  Input,
  Button,
  DatePicker,
} from "@innovaccer/design-system";

export const Advanced = () => {
  class InlineForm extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        searchDisabled: true,
        data: {},
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const updatedData = { ...this.state.data, [name]: value };

      this.setState({
        data: updatedData,
        searchDisabled: Object.keys(updatedData).every(
          (key) => !updatedData[key]
        ),
      });
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state.data);
      return false;
    }

    render() {
      const options = [];
      for (let i = 1; i <= 10; i++) {
        options.push({
          label: `Option ${i}`,
          value: `Option ${i}`,
        });
      }

      return (
        <div className="w-100">
          <Card className="px-6 py-6">
            <form onSubmit={this.onSubmit}>
              <div className="d-flex flex-wrap">
                <div className="mr-6 mb-6">
                  <Label withInput={true}>Last Name</Label>
                  <Input
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    icon="person"
                    autocomplete={"off"}
                    onChange={(event) =>
                      this.onChange(event.target.value, event.target.name)
                    }
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>First Name</Label>
                  <Input
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    icon="person"
                    autocomplete={"off"}
                    onChange={(event) =>
                      this.onChange(event.target.value, event.target.name)
                    }
                  />
                </div>

                <div
                  className="mr-6 mb-6"
                  style={{ width: "var(--spacing-9)" }}
                >
                  <Label withInput={true}>Date of Birth</Label>
                  <DatePicker
                    withInput={true}
                    onDateChange={(currentDate) =>
                      this.onChange(currentDate, "date")
                    }
                    inputOptions={{
                      placeholder: "MM/DD/YYYY",
                      icon: "cake",
                      mask: [
                        /\d/,
                        /\d/,
                        "/",
                        /\d/,
                        /\d/,
                        "/",
                        /\d/,
                        /\d/,
                        /\d/,
                        /\d/,
                      ],
                    }}
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>EMPI</Label>
                  <Input
                    name="empi"
                    type="text"
                    placeholder="EMPI"
                    icon="fingerprint"
                    autocomplete={"off"}
                    onChange={(event) =>
                      this.onChange(event.target.value, event.target.name)
                    }
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>Patient ID</Label>
                  <Input
                    name="patient id"
                    type="text"
                    placeholder="Patient ID"
                    icon="account_box"
                    autocomplete={"off"}
                    onChange={(event) =>
                      this.onChange(event.target.value, event.target.name)
                    }
                  />
                </div>
                <div className="mr-6 mb-6">
                  <Label withInput={true}>Phone No.</Label>
                  <Input
                    name="phone no"
                    type="text"
                    placeholder="Phone number"
                    icon="phone"
                    autocomplete={"off"}
                    onChange={(event) =>
                      this.onChange(event.target.value, event.target.name)
                    }
                  />
                </div>
              </div>
              <Button
                disabled={this.state.searchDisabled}
                appearance="primary"
                type="submit"
              >
                Search
              </Button>
            </form>
          </Card>
        </div>
      );
    }
  }

  return <InlineForm />;
};
