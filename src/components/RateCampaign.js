import React, { useState, useEffect, useRef } from "react";
import Dropdown from "react-dropdown";
import EdiText from "react-editext";
import "react-dropdown/style.css";
import MultiSelect from "react-multi-select-component";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import axios from "axios";

const RateCampaign = ({ loanScenario, RateId }) => {
  const [isEqual, setIsEqual] = useState("");
  const [selectedValue, setSelectedValue] = useState();
  const [selected, setSelected] = useState([]);
  const [defaultDays, setDefaultDays] = useState(['N/A'])
  const [loanScenarioContactId, setLoanScenarioContactId] = useState();
  const [loanScenariosName, setLoanScenariosName] = useState("");
  const [rateCampaign, setRateCampaign] = useState({
    contactId: 0,
    loanScenarioId: 0,
    campaignSeries: "",
    campaignStatus: "",
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
    sentCampaignItem: [],
  });

  const [dateState, setDateState] = useState();
  const [tDateState, setTDateState] = useState();

  const changeDate = (e) => {
    setDateState(e);
  };
  const changeTDate = (e) => {
    setTDateState(e);
  };

  const [ScenariosName, setScenariosName] = useState([]);
  const newName = Object.values(ScenariosName);
  const scenarioOptions = newName.map((item) => {
    return { label: item.scenarioName, value: item.id };
  });
  const defaultName = loanScenariosName?loanScenariosName:"Default";

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
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
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
    setSelected(
      v?.map((item) => {
        return { label: item.label.substring(0, 3), value: item.value };
      })
    );
  };

  const onClose = () => {
    setIsEqual("");
    setSelected(prevState);
  };

  const onDateClose = () => {
    setIsEqual("");
    setDateState(prevSdate);
  };
  const onTDateClose = () => {
    setIsEqual("");
    setTDateState(prevTdate);
  };

  const handleSave = (val, field) => {
    // console.log("event", val);
    // console.log("val", field);

    var formData = new FormData();
    formData.append("id", rateCampaign.id);
    formData.append(field, val);

    axios
      .post(
        `https://atlas-admin.keystonefunding.com/api/ratecampaign/update`,
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

  function formateDate(datePick) {
    const date = new Date(datePick).toLocaleDateString("en-US");
    const newdate = date.split("/");
    return newdate[2] + "-" + newdate[0] + "-" + newdate[1];
  }

  const handleStartDate = (val, field) => {
    // setDateState(val)
    const sDate = formateDate(val);

    var formData = new FormData();
    formData.append("id", rateCampaign.id);
    formData.append(field, sDate);

    axios
      .post(
        `https://atlas-admin.keystonefunding.com/api/ratecampaign/update`,
        formData
      )
      .then((res) => {
        setIsEqual("");
        setDateState(val);
        // setRateCampaign({ ...rateCampaign, [field]: val });
        // setSelected(res)
        console.log("Update-------------------------", res.data);
        // console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const handleTerminationDate = (val, field) => {
    // setDateState(val)
    const tDate = formateDate(val);

    var formData = new FormData();
    formData.append("id", rateCampaign.id);
    formData.append(field, tDate);

    axios
      .post(
        `https://atlas-admin.keystonefunding.com/api/ratecampaign/update`,
        formData
      )
      .then((res) => {
        setIsEqual("");
        setTDateState(val);
        // setRateCampaign({ ...rateCampaign, [field]: val });
        // setSelected(res)
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
        `https://atlas-admin.keystonefunding.com/api/ratecampaign/update`,
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
  const prevSdate = usePrevious(dateState);
  const prevTdate = usePrevious(tDateState);

  useEffect(() => {
    getRateCampaignData(RateId);
  }, [rateCampaign.loanScenarioId, RateId]);

  function getRateCampaignData(RateId) {
    try {
      var result = {
        id: RateId,
      };
      axios({
        method: "get",
        url: "https://atlas-admin.keystonefunding.com/api/ratecampaign/details",
        params: result,
      }).then((res) => {
        if (res.status === 200) {
          // console.log(res.data.data);
          let newArray = res.data.data.selectedDays.split(";");
          let newData = newArray.map((item) => {
            return { label: item.substring(0, 3), value: item };
          });
          // console.log(newData)
          setSelected(newData);
          setDateState(new Date(res.data.data.startDate));
          setTDateState(new Date(res.data.data.terminationDate));
          setRateCampaign(res.data.data);
          var contactId = { id: res.data.data.contactId };
          axios({
            method: "get",
            url: "https://atlas-admin.keystonefunding.com/api/contact/details",
            params: contactId,
          }).then((res) => {
            if (res.status === 200) {
              setScenariosName(res.data.data.loanScenarios);
            }
          });
          var loanId = { id: res.data.data.loanScenarioId };
          axios({
            method: "get",
            url: "https://atlas-admin.keystonefunding.com/api/loanscenario/details",
            params: loanId,
          }).then((res) => {
            if (res.status === 200) {
              setLoanScenarioContactId(res.data.data[0].contactId);
              setLoanScenariosName(res.data.data[0].scenarioName);
            }
          });
        }
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
              <h1
                style={
                  rateCampaign.campaignStatus === "Unsubscribed"
                    ? { fontSize: "30px" }
                    : {}
                }
              >
                {rateCampaign.campaignStatus}
              </h1>
            </div>
          </div>
          <div className="rate-box">
            <div className="rate-text">
              <p>Start Date</p>
              <h1>{reformatDate(dateState)}</h1>
            </div>
          </div>
          <div className="rate-box">
            <div className="rate-text">
              <p>Emails Sent</p>
              <h1>{rateCampaign.sentCampaignItem.length}</h1>
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
                      <span>{loanScenariosName?loanScenariosName:"N/A" }</span>
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
                      <span>{rateCampaign.additionalLoanProducts?rateCampaign.additionalLoanProducts:"N/A"}</span>
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
                <div className="w100">
                  <EdiText
                    viewContainerClassName="view-wrapper"
                    type="text"
                    value={rateCampaign.additionalEmails?rateCampaign.additionalEmails:"N/A"}
                    tabIndex={1}
                    onSave={(pass) => {
                      handleSave(pass, "additionalEmails");
                    }}
                    submitOnUnfocus
                    startEditingOnFocus
                  />
                </div>
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
                {isEqual === "startDate" ? (
                  <div id="wrap">
                    <Calendar value={dateState} onChange={changeDate} />
                    <div className="btn-div">
                      <button
                        className="right-arrow icon-btn"
                        onClick={() => handleStartDate(dateState, "startDate")}
                      >
                        &#10003;
                      </button>
                      <button
                        className="cross-arrow icon-btn"
                        onClick={() => onDateClose()}
                      >
                        &#10005;
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main-div w100"
                    onClick={() => onClick("startDate", rateCampaign.startDate)}
                  >
                    <div>
                      <span>{reformatDate(dateState)}</span>
                      <button className="edit-arrow1 icon-btn1">&#9998;</button>
                    </div>
                  </div>
                )}
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
                      <span>{rateCampaign.frequency?rateCampaign.frequency:"N/A"}</span>
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
                        {selected.length !==0?selected
                          .map((item) => {
                            return item.label;
                          })
                          .join(", "):defaultDays.map(item =>{return item}).join(", ")}
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
                {isEqual === "terminationDate" ? (
                  <div id="wrap">
                    <Calendar value={tDateState} onChange={changeTDate} />
                    <div className="btn-div">
                      <button
                        className="right-arrow icon-btn"
                        onClick={() =>
                          handleTerminationDate(tDateState, "terminationDate")
                        }
                      >
                        &#10003;
                      </button>
                      <button
                        className="cross-arrow icon-btn"
                        onClick={() => onTDateClose()}
                      >
                        &#10005;
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="main-div w100"
                    onClick={() =>
                      onClick("terminationDate", rateCampaign.terminationDate)
                    }
                  >
                    <div>
                      <span>{reformatDate(tDateState)}</span>
                      <button className="edit-arrow1 icon-btn1">&#9998;</button>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateCampaign;
