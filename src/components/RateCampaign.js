import React, { useState, useEffect, useRef } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import MultiSelect from "react-multi-select-component";
import axios from "axios";

const RateCampaign = ({ loanScenario }) => {
  const [isEqual, setIsEqual] = useState("");
  const [selectedValue, setSelectedValue] = useState();
  const [selected, setSelected] = useState([]);
  const [loanScenarioContactId, setLoanScenarioContactId] = useState();
  const [loanScenariosName, setLoanScenariosName] = useState("");

  const [rateCampaign, setRateCampaign] = useState({
    contactId: 0,
    loanScenarioId: 0,
    campaignSeries: "",
    campaignStatus: "Active",
    isAppButtonDisplayed: 0,
    isPaused: 0,
    campaignDetails: "Stone HP 30 100k Cashout",
    frequency: "",
    additionalLoanProducts: "",
    isOptedOut: 0,
    startDate: "",
    terminationDate: "",
    additionalEmails: "",
    selectedDays: "",
  });

  const [ScenariosName, setScenariosName] = useState([]);
  const newName = Object.values(ScenariosName);
  const scenarioOptions = newName.map((item) => {
    return { label: item.scenarioName, value: item.id };
  });
  const defaultName = loanScenariosName;

  const frequencyOption = ["Daily (M-F)", "Weekly", "Bi-Weekly", "Monthly"];

  const additionalLoanProductOptions = [
    "10-yr Fixed",
    "15-yr Fixed",
    "20-yr Fixed",
    "25-yr Fixed",
    "30-yr Fixed",
    "5/1 ARM",
    "5/5 ARM",
    "7/1 ARM",
    "10/1 ARM",
  ];

  const selectedDaysOption = [
    { label: "Mon", value: "Monday" },
    { label: "Tue", value: "Tuesday" },
    { label: "Wed", value: "Wednesday" },
    { label: "Thu", value: "Thursday" },
    { label: "Fri", value: "Friday" },
    { label: "Sat", value: "Saturday" },
    { label: "Sun", value: "Sunday" },
  ];

  const onClick = (v, dropdownValue) => {
    setIsEqual(v);
    setSelectedValue(dropdownValue);
  };

  const onSelect = (v) => {
    console.log("Value--", v);
    setSelectedValue(v.value);
  };

  const setDays = (v) => {
    // console.log("days-->", v)
    setSelected(v);
  };
  const onClose = () => {
    setIsEqual("");
    setSelected(prevState);
  };
  const handleSave = (val, field) => {
    // console.log("event", val);
    // console.log("val", field);

    var formData = new FormData();
    formData.append("id", rateCampaign.id);
    formData.append(field, val);

    axios
      .post(
        `https://atlas.keystonefunding.com/api/ratecampaign/update`,
        formData
      )
      .then((res) => {
        setIsEqual("");
        setRateCampaign({ ...rateCampaign, [field]: val });
        console.log("Update-------------------------", res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSelectedDays = (val, field) => {
    // setIsEqual("")
    // setSelected(val)
    const newData = val
      .map((item) => {
        return item.value;
      })
      .join(";");
    // console.log(newData)
    var formData = new FormData();
    formData.append("id", rateCampaign.id);
    formData.append(field, newData);

    axios
      .post(
        `https://atlas.keystonefunding.com/api/ratecampaign/update`,
        formData
      )
      .then((res) => {
        setIsEqual("");
        // setRateCampaign({ ...rateCampaign, [field]: val });
        // setSelected(res)
        console.log("Update-------------------------", res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  function reformatDate(dateStr) {
    const date = new Date(dateStr).toLocaleDateString("en-US");
    let dArr = date.split("/"); // ex input "2010-01-18"
    const month = dArr[0];
    const day = dArr[1];
    const year = dArr[2] ? dArr[2].substring(2) : "";
    const formatedDate = month + "/" + day + "/" + year;
    // console.log(formatedDate)
    return formatedDate;
  }

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevState = usePrevious(selected);

  useEffect(() => {
    getRateCampaignData();
  }, [rateCampaign.contactId, rateCampaign.loanScenarioId]);

  async function getRateCampaignData() {
    try {
      var result = {
        id: 5,
      };
      await axios({
        method: "get",
        url: "https://atlas.keystonefunding.com/api/ratecampaign/details",
        params: result,
      }).then((res) => {
        if (res.status === 200) {
          console.log(res.data.data[0]);
          let newArray = res.data.data[0].selectedDays.split(";");
          let newData = newArray.map((item) => {
            return { label: item.substring(0, 3), value: item };
          });
          // console.log(newData)
          setSelected(newData);
          setRateCampaign(res.data.data[0]);
        }
        var searchId = { id: rateCampaign.contactId };
        axios({
          method: "get",
          url: "https://atlas.keystonefunding.com/api/contact/details",
          params: searchId,
        }).then((res) => {
          if (res.status === 200) {
            // console.log(res.data.data.loanScenarios)
            setScenariosName(res.data.data.loanScenarios);
          }
          var ID = { id: rateCampaign.loanScenarioId };
          axios({
            method: "get",
            url: "https://atlas.keystonefunding.com/api/loanscenario/details",
            params: ID,
          }).then((res) => {
            if (res.status === 200) {
              // console.log(res.data.data[0].scenarioName)
              // console.log(res.data.data[0].contactId)
              setLoanScenarioContactId(res.data.data[0].contactId);
              setLoanScenariosName(res.data.data[0].scenarioName);
            }
          });
        });
      });
    } catch (error) {}
  }

  return (
    <div className="stone">
      <div className="stone-sec mb-20">
        <div className="stone-text">
          <h1>Rate Campaign: {loanScenario.loanProduct}</h1>
          <span className="updated-date">
            Last Updated
            <br />
            {new Date(loanScenario.dateUpdated).toLocaleDateString("en-US")}
          </span>
        </div>
        <div className="rate-sec">
          <div className="rate-box">
            <div className="rate-text">
              <p>Campaign Status</p>
              <h1>{rateCampaign.campaignStatus}</h1>
            </div>
          </div>
          <div className="rate-box">
            <div className="rate-text">
              <p>Start Date</p>
              <h1>{reformatDate(rateCampaign.startDate)}</h1>
            </div>
          </div>
          <div className="rate-box">
            <div className="rate-text">
              <p>Emails Sent</p>
              <h1>15</h1>
            </div>
          </div>
          <div className="rate-box">
            <div className="rate-text">
              <p>Last Email Opened</p>
              <h1>N/A</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="price-tab second-tab">
        <div className="price-box">
          <div className="price-text">
            <ul>
              <li className="head-price">
                <p>Campaign Details</p>
              </li>
              <li>
                <p>Loan Scenario</p>
                {loanScenarioContactId === rateCampaign.contactId &&
                isEqual === "loanScenarioId" ? (
                  <div className="dropdown-main">
                    <div id="wrap">
                      <Dropdown
                        className="cust-select"
                        options={scenarioOptions}
                        onChange={onSelect}
                        value={defaultName}
                        placeholder="Select an option"
                      />
                      <div className="btn-div">
                        <button
                          className="right-arrow icon-btn"
                          onClick={() =>
                            handleSave(selectedValue, "loanScenarioId")
                          }
                        >
                          &#10003;
                        </button>
                        <button
                          className="cross-arrow icon-btn"
                          onClick={() => onClick("", "")}
                        >
                          &#10005;
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main-div w100"
                    onClick={() =>
                      onClick("loanScenarioId", rateCampaign.loanScenarioId)
                    }
                  >
                    <div>
                      <span>{loanScenariosName}</span>
                      <button className="edit-arrow1 icon-btn1">&#9998;</button>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <p>Additional Loan Products</p>
                {isEqual === "additionalLoanProducts" ? (
                  <div className="dropdown-main">
                    <div id="wrap">
                      <Dropdown
                        className="cust-select"
                        options={additionalLoanProductOptions}
                        onChange={onSelect}
                        value={rateCampaign.additionalLoanProducts}
                        placeholder="Select an option"
                      />
                      <div className="btn-div">
                        <button
                          className="right-arrow icon-btn"
                          onClick={() =>
                            handleSave(selectedValue, "additionalLoanProducts")
                          }
                        >
                          &#10003;
                        </button>
                        <button
                          className="cross-arrow icon-btn"
                          onClick={() => onClick("", "")}
                        >
                          &#10005;
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main-div w100"
                    onClick={() =>
                      onClick(
                        "additionalLoanProducts",
                        rateCampaign.additionalLoanProducts
                      )
                    }
                  >
                    <div>
                      <span>{rateCampaign.additionalLoanProducts}</span>
                      <button className="edit-arrow1 icon-btn1">&#9998;</button>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <p>Show Submit Application</p>
                <span>
                  <label className="lab-check">
                    <input
                      type="checkbox"
                      checked={rateCampaign.isAppButtonDisplayed}
                      onChange={(pass) => {
                        if (pass.target.checked) {
                          handleSave(1, "isAppButtonDisplayed");
                        } else {
                          handleSave(0, "isAppButtonDisplayed");
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </span>
              </li>
              <li>
                <p>Additional Emails</p>
                <span>{rateCampaign.additionalEmails}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="price-box pb-1">
          <div className="price-text">
            <ul>
              <li className="head-price">
                <p>Schedule</p>
              </li>
              <li>
                <p>Start Date</p>
                <span>{reformatDate(rateCampaign.startDate)}</span>
              </li>
              <li>
                <p>Frequency</p>
                {isEqual === "frequency" ? (
                  <div className="dropdown-main">
                    <div id="wrap">
                      <Dropdown
                        className="cust-select"
                        options={frequencyOption}
                        onChange={onSelect}
                        value={rateCampaign.frequency}
                        placeholder="Select an option"
                      />
                      <div className="btn-div">
                        <button
                          className="right-arrow icon-btn"
                          onClick={() => handleSave(selectedValue, "frequency")}
                        >
                          &#10003;
                        </button>
                        <button
                          className="cross-arrow icon-btn"
                          onClick={() => onClick("", "")}
                        >
                          &#10005;
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main-div w100"
                    onClick={() => onClick("frequency", rateCampaign.frequency)}
                  >
                    <div>
                      <span>{rateCampaign.frequency}</span>
                      <button className="edit-arrow1 icon-btn1">&#9998;</button>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <p>Selected Days</p>
                {isEqual === "selectedDays" ? (
                  <div id="wrap" className="w100">
                    <MultiSelect
                      className="w100"
                      options={selectedDaysOption}
                      value={selected}
                      onChange={setDays}
                      labelledBy="Select"
                    />
                    <div className="btn-div">
                      <button
                        className="right-arrow icon-btn"
                        onClick={() =>
                          handleSelectedDays(selected, "selectedDays")
                        }
                      >
                        &#10003;
                      </button>
                      <button
                        className="cross-arrow icon-btn"
                        onClick={() => onClose()}
                      >
                        &#10005;
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main-div w100"
                    onClick={() =>
                      onClick("selectedDays", rateCampaign.selectedDays)
                    }
                  >
                    <div>
                      <span>
                        {selected
                          .map((item) => {
                            return item.label;
                          })
                          .join(", ")}
                      </span>
                      <button className="edit-arrow1 icon-btn1">&#9998;</button>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <p>Pause Campaign</p>
                <span>
                  <label className="lab-check">
                    <input
                      type="checkbox"
                      checked={rateCampaign.isPaused}
                      onChange={(pass) => {
                        if (pass.target.checked) {
                          handleSave(1, "isPaused");
                        } else {
                          handleSave(0, "isPaused");
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </span>
              </li>
              <li>
                <p>Opted Out</p>
                <span>
                  <label className="lab-check">
                    <input
                      type="checkbox"
                      checked={rateCampaign.isOptedOut}
                      onChange={(pass) => {
                        if (pass.target.checked) {
                          handleSave(1, "isOptedOut");
                        } else {
                          handleSave(0, "isOptedOut");
                        }
                      }}
                    />
                    <span className="checkmark"></span>
                  </label>
                </span>
              </li>
              <li>
                <p>Termination Date</p>
                <span>{reformatDate(rateCampaign.terminationDate)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateCampaign;
