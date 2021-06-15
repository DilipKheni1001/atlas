import React, { useState, useEffect } from "react";
import { Button, Accordion, Card, Tabs, Tab, ModalTitle, ModalBody, ModalFooter } from "react-bootstrap";
import EdiText from "react-editext";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

const Home_2 = () => {
  const [loanScenario, setLoanScenario] = useState({
    "id": 0,
    "contactId": 0,
    "scenarioName": "",
    "loanPurpose": "",
    "cashoutRequest": 0,
    "isPayingOffSecondMortgage": 0,
    "isCashout": 0,
    "propertyStreet": null,
    "propertyStreet2": null,
    "propertyCity": null,
    "propertyZip": null,
    "propertyState": null,
    "propertyCountry": "",
    "propertyType": "",
    "creditScore": "",
    "occupancy": "",
    "isVaEligible": 0,
    "isVaDisability": 0,
    "isVaUsedBefore": 0,
    "houseValue": 0,
    "baseLoanAmount": 0,
    "currentLoanBalance": 0,
    "secondMortgageBalance": 0,
    "loanProduct": "",
    "loanType": "",
    "currentLoanType": "",
    "loanTypeSpecial": null,
    "interestRate": 0,
    "lockPeriod": "",
    "loanPrice": 0,
    "lenderCredit": 0,
    "isFirstTimeHomeBuyer": 0,
    "isTaxEscrowsWaived": 0,
    "monthlyPropertyTax": 0,
    "monthlyHOI": 0,
    "blockAOriginationFee": 0,
    "blockADiscountFee": 0,
    "blockBAppraisalFee": 0,
    "blockBCreditFees": 0,
    "blockBFloodCertification": 0,
    "blockATaxService": 0,
    "blockCTitleServices": 0,
    "blockCSurvey": 0,
    "blockETransferTaxes": 0,
    "blockERecordingCharges": 0,
    "blockHOwnersTitleInsPremium": 0,
    "created_at": "",
    "updated_at": "",
    "deleted_at": null,
    "governmentFundingFeePercent": null,
    "isFinancedFundingFeeMI": 0,
    "annualMortgageInsuranceRate": null,
    "mortgageInsurancePremiumType": null,
    "secondMortgageRequest": "",
    "monthlyHOA":0,
    "blockAprocessingFee": 0,
    "blockBtaxReturnVerificationFee": 0,
    "blockBverificationEmployment": 0,
    "blockBhoaQuestionnaire": 0,
    "blockBcondoProjectApproval": 0,
    "blockBsinglePremiumMI": 0,
    "blockFdaysPrepaidInterest": 0,
    "blockFnumMonthsPrepaidHOI": 0,
    "blockGnumMonthsTaxReserves": null,
    "sellerCredit": null,
    "otherCredits": null
  });

  const [address, setAddress] = useState({ 
    "propertyStreet": null,
    "propertyCity": null,
    "propertyZip": null,
    "propertyState": null,
  });

  const [open, setOpen] = useState(false);
  
  const [isEqual, setIsEqual] = useState();
  const [selectedValue, setSelectedValue] = useState();

  const propertyStateOptions = ["DC", "DE", "FL", "MD", "NJ", "PA", "VA"];

  const lockPeriodOptions = [
    "15 days",
    "30 days",
    "45 days",
    "60 days",
    "90 days",
  ];

  const loanProductOptions = [
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

  const loanTypeOptions = [
    "Conforming",
    "Fannie",
    "Freddie",
    "Non-Conforming",
    "FHA",
    "USDA",
    "VA",
  ];

  const occupancyOptions = ["Owner-Occupied", "Second Home", "Investment"];

  const propertyCountryOptions = [
    "Accomack",
    "Adams",
    "Alachua",
    "Alamance",
    "Albany",
    "Albemarle",
    "Alexander",
    "Alexandria City",
    "Allegany",
    "Alleghany",
    "Allegheny",
    "Amelia",
    "Amherst",
    "Anne Arundel",
    "Anson",
    "Appomattox",
    "Arlington",
    "Armstrong",
    "Ashe",
    "Atlantic",
    "Augusta",
    "Avery",
    "Baker",
    "Baltimore",
    "Baltimore City",
    "Bath",
    "Bay",
    "Beaufort",
    "Beaver",
    "Bedford",
    "Bedford City",
    "Bergen",
    "Berks",
    "Bertie",
    "Bladen",
    "Blair",
    "Bland",
    "Botetourt",
    "Bradford",
    "Brevard",
    "Bristol City",
    "Bronx",
    "Broome",
    "Broward",
    "Brunswick",
    "Buchanan",
    "Buckingham",
    "Bucks",
    "Buena Vista City",
    "Buncombe",
    "Burke",
    "Burlington",
    "Butler",
    "Cabarrus",
    "Caldwell",
    "Calhoun",
    "Calvert",
    "Cambria",
    "Camden",
    "Cameron",
    "Campbell",
    "Cape May",
    "Carbon",
    "Caroline",
    "Carroll",
    "Carteret",
    "Caswell",
    "Catawba",
    "Cattaraugus",
    "Cayuga",
    "Cecil",
    "Centre",
    "Charles",
    "Charles City",
    "Charlotte",
    "Charlottesville City",
    "Chatham",
    "Chautauqua",
    "Chemung",
    "Chenango",
    "Cherokee",
    "Chesapeake City",
    "Chester",
    "Chesterfield",
    "Chowan",
    "Citrus",
    "Clarion",
    "Clarion",
    "Clarke",
    "Clay",
    "Clearfield",
    "Cleveland",
    "Clinton",
    "Collier",
    "Colonial Heights City",
    "Columbia",
    "Columbus",
    "Cortland",
    "Covington City",
    "Craig",
    "Craven",
    "Crawford",
    "Culpeper",
    "Cumberland",
    "Currituck",
    "Danville City",
    "Dare",
    "Dauphin",
    "Davidson",
    "Davie",
    "Delaware",
    "De Soto",
    "Dickenson",
    "Dinwiddie",
    "District of Columbia",
    "Dixie",
    "Dorchester",
    "Duplin",
    "Durham",
    "Dutchess",
    "Duval",
    "Edgecombe",
    "Elk",
    "Emporia City",
    "Erie",
    "Escambia",
    "Essex",
    "Fairfax",
    "Fairfax City",
    "Falls Church City",
    "Fauquier",
    "Fayette",
    "Flagler",
    "Floyd",
    "Fluvanna",
    "Forest",
    "Forsyth",
    "Franklin",
    "Franklin City",
    "Frederick",
    "Fredericksburg City",
    "Fulton",
    "Gadsden",
    "Galax City",
    "Garrett",
    "Gaston",
    "Gates",
    "Genesee",
    "Gilchrist",
    "Giles",
    "Glades",
    "Gloucester",
    "Goochland",
    "Graham",
    "Granville",
    "Grayson",
    "Greene",
    "Greensville",
    "Guilford",
    "Gulf",
    "Halifax",
    "Hamilton",
    "Hampton City",
    "Hanover",
    "Hardee",
    "Harford",
    "Harnett",
    "Harrisonburg City",
    "Haywood",
    "Henderson",
    "Hendry",
    "Henrico",
    "Henry",
    "Herkimer",
    "Hernando",
    "Hertford",
    "Highland",
    "Highlands",
    "Hillsborough",
    "Hoke",
    "Holmes",
    "Hopewell City",
    "Howard",
    "Hudson",
    "Hunterdon",
    "Huntingdon",
    "Hyde",
    "Indiana",
    "Indian River",
    "Iredell",
    "Isle of Wight",
    "Jackson",
    "James City",
    "Jefferson",
    "Johnston",
    "Jones",
    "Juniata",
    "Kent",
    "King and Queen",
    "King George",
    "Kings",
    "King William",
    "Lackawanna",
    "Lafayette",
    "Lake",
    "Lancaster",
    "Lawrence",
    "Lebanon",
    "Lee",
    "Lehigh",
    "Lenoir",
    "Leon",
    "Levy",
    "Lewis",
    "Lexington City",
    "Liberty",
    "Lincoln",
    "Livingston",
    "Loudoun",
    "Louisa",
    "Lunenburg",
    "Luzerne",
    "Lycoming",
    "Lynchburg City",
    "Macon",
    "Madison",
    "Manassas City",
    "Manassas Park City",
    "Manatee",
    "Marion",
    "Martin",
    "Martinsville City",
    "Mathews",
    "Mcdowell",
    "McKean",
    "Mecklenburg",
    "Mercer",
    "Miami-Dade",
    "Middlesex",
    "Mifflin",
    "Mitchell",
    "Monmouth",
    "Monroe",
    "Montgomery",
    "Montour",
    "Moore",
    "Morris",
    "Nash",
    "Nassau",
    "Nelson",
    "New Castle",
    "New Hanover",
    "New Kent",
    "Newport News City",
    "New York",
    "Niagara",
    "Norfolk City",
    "Northampton",
    "Northumberland",
    "Norton City",
    "Nottoway",
    "Ocean",
    "Okaloosa",
    "Okeechobee",
    "Oneida",
    "Onondaga",
    "Onslow",
    "Ontario",
    "Orange",
    "Orleans",
    "Osceola",
    "Oswego",
    "Otsego",
    "Page",
    "Palm Beach",
    "Pamlico",
    "Pasco",
    "Pasquotank",
    "Passaic",
    "Patrick",
    "Pender",
    "Perquimans",
    "Perry",
    "Person",
    "Petersburg City",
    "Philadelphia",
    "Pike",
    "Pinellas",
    "Pitt",
    "Pittsylvania",
    "Polk",
    "Poquoson City",
    "Portsmouth City",
    "Potter",
    "Powhatan",
    "Prince Edward",
    "Prince George",
    "Prince Georges",
    "Prince William",
    "Pulaski",
    "Putnam",
    "Queen Annes",
    "Queens",
    "Radford",
    "Randolph",
    "Rappahannock",
    "Rensselaer",
    "Richmond",
    "Richmond City",
    "Roanoke",
    "Roanoke City",
    "Robeson",
    "Rockbridge",
    "Rockingham",
    "Rockland",
    "Rowan",
    "Russell",
    "Rutherford",
    "Salem",
    "Salem City",
    "Sampson",
    "Santa Rosa",
    "Sarasota",
    "Saratoga",
    "Schenectady",
    "Schoharie",
    "Schuyler",
    "Schuylkill",
    "Scotland",
    "Scott",
    "Seminole",
    "Seneca",
    "Shenandoah",
    "Smyth",
    "Snyder",
    "Somerset",
    "Southampton",
    "Spotsylvania",
    "Saint Johns",
    "St. Lawrence",
    "Saint Lucie",
    "Saint Marys",
    "Stafford",
    "Stanly",
    "Staunton City",
    "Steuben",
    "Stokes",
    "Suffolk",
    "Suffolk City",
    "Sullivan",
    "Sumter",
    "Surry",
    "Susquehanna",
    "Sussex",
    "Suwannee",
    "Swain",
    "Talbot",
    "Taylor",
    "Tazewell",
    "Tioga",
    "Tompkins",
    "Transylvania",
    "Tyrrell",
    "Ulster",
    "Union",
    "Vance",
    "Venango",
    "Virginia Beach City",
    "Volusia",
    "Wake",
    "Wakulla",
    "Walton",
    "Warren",
    "Washington",
    "Watauga",
    "Wayne",
    "Waynesboro City",
    "Westchester",
    "Westmoreland",
    "Wicomico",
    "Wilkes",
    "Williamsburg City",
    "Wilson",
    "Winchester City",
    "Wise",
    "Worcester",
    "Wyoming",
    "Wythe",
    "Yadkin",
    "Yancey",
    "Yates",
    "York",
  ];

  const propertyTypeOptions = [
    "Single Family",
    "Single Family- PUD",
    "Condo",
    "Condo 5+",
    "Condotel",
    "Co-op",
    "Duplex",   
    "Triplex",
    "Fourplex",
    "Manufactured",
  ];

  const loanPurposeOptions = ["Purchase", "Refinance"];

  const currentLoanTypeOptions = ["Conventional", "FHA", "USDA", "VA", "Other"];

  const mortgageInsurancePremiumTypeOptions = ["Monthly", "Single Premium"];

  const secondMortgageRequestOptions = [
    "Payoff existing 2nd mortgage",
    "Re-subordinate existing 2nd mortgage",
    "New 2nd mortgage",
  ];

  const monthsOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

  const [blockA , setBlockA] = useState(0);
  const [blockB , setBlockB] = useState(0);
  const [blockC , setBlockC] = useState(0);
  const [blockD , setBlockD] = useState(0);
  const [blockE , setBlockE] = useState(0);
  const [blockF , setBlockF] = useState(0);
  const [blockG , setBlockG] = useState(0);
  const [blockH , setBlockH] = useState(0);
  const [blockI , setBlockI] = useState(0);
  const [blockJ , setBlockJ] = useState(0);

  useEffect(() => {
    
    setBlockA(Number(loanScenario.blockADiscountFee) +
    Number(loanScenario.blockAOriginationFee) +
    Number(loanScenario.blockAprocessingFee) +
    Number(loanScenario.blockATaxService));


    setBlockB(
      Number(loanScenario.blockBAppraisalFee) +
      Number(loanScenario.blockBCreditFees) +
      Number(loanScenario.blockBFloodCertification) +
      Number(loanScenario.blockBtaxReturnVerificationFee) +
      Number(loanScenario.blockBverificationEmployment) +
      Number(loanScenario.blockBhoaQuestionnaire) +
      Number(loanScenario.blockBcondoProjectApproval) +
      Number(loanScenario.blockBsinglePremiumMI));
    
    setBlockC(
      Number(loanScenario.blockCTitleServices) +
      Number(loanScenario.blockCSurvey));
    
      setBlockD(
        Number(loanScenario.blockADiscountFee) +
        Number(loanScenario.blockAOriginationFee) +
        Number(loanScenario.blockAprocessingFee) +
        Number(loanScenario.blockATaxService) +
        Number(loanScenario.blockBAppraisalFee) +
        Number(loanScenario.blockBCreditFees) +
        Number(loanScenario.blockBFloodCertification) +
        Number(loanScenario.blockBtaxReturnVerificationFee) +
        Number(loanScenario.blockBverificationEmployment) +
        Number(loanScenario.blockBhoaQuestionnaire) +
        Number(loanScenario.blockBcondoProjectApproval) +
        Number(loanScenario.blockBsinglePremiumMI) + 
        Number(loanScenario.blockCTitleServices) +
        Number(loanScenario.blockCSurvey));

    setBlockE(Number(loanScenario.blockERecordingCharges) +
    Number(loanScenario.blockETransferTaxes));
    
    setBlockF( Number(loanScenario.blockFdaysPrepaidInterest) +
    Number(loanScenario.blockFnumMonthsPrepaidHOI));

    setBlockG(Number(loanScenario.blockGnumMonthsTaxReserves));
    
    setBlockH(Number(loanScenario.blockHOwnersTitleInsPremium));

    setBlockI(
        Number(loanScenario.blockERecordingCharges) +
        Number(loanScenario.blockETransferTaxes) +

        Number(loanScenario.blockFdaysPrepaidInterest) +
        Number(loanScenario.blockFnumMonthsPrepaidHOI) +
        
        Number(loanScenario.blockGnumMonthsTaxReserves) +

        Number(loanScenario.blockHOwnersTitleInsPremium));
    
    // setBlockJ();

  }, [loanScenario]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      var result = {
        id: 1,
      };

      const data = await axios({
        method: "get",
        url: "https://atlas.keystonefunding.com/api/loanscenario/details",
        params: result,
      }).then((res) => {
        if (res.status === 200) {
          setLoanScenario(res.data.data[0]);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  const onClick = (v, dropdownValue) => {
    setIsEqual(v);
    setSelectedValue(dropdownValue);
  };

  const onSelect = (v) => {
    console.log("Value--", v);
    setSelectedValue(v.value);
  };

  const handleSave = (val, field) => {
    console.log("event", val);
    console.log("val", field);

    var formData = new FormData();
    formData.append("id", loanScenario.id);
    formData.append(field, val);

    axios
      .post(
        `https://atlas.keystonefunding.com/api/loanscenario/update`,
        formData
      )
      .then((res) => {
        setIsEqual("");
        setLoanScenario({ ...loanScenario, [field]: val });
        console.log("Update-------------------------", res);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({...address, [name]: value });
  };

  const onOpenModal = () => {
    
     setAddress({  
      propertyStreet : loanScenario.propertyStreet,
      propertyCity : loanScenario.propertyCity,
      propertyState : loanScenario.propertyState,
      propertyZip : loanScenario.propertyZip
    });
    setOpen(true);
  }

  const onCloseModal = () => setOpen(false);

  const handleSubmit = () => {

    var formData = new FormData();
    formData.append("id", loanScenario.id);
    formData.append("propertyStreet", address.propertyStreet);
    formData.append("propertyCity", address.propertyCity);
    formData.append("propertyZip", address.propertyZip);
    formData.append("propertyState", address.propertyState);
    
    axios
      .post(
        `https://atlas.keystonefunding.com/api/loanscenario/update`,
        formData
      )
      .then((res) => {
        setOpen(false);
        setIsEqual("");
        setLoanScenario({ ...loanScenario, 
          propertyStreet : address.propertyStreet,
          propertyCity : address.propertyCity,
          propertyState : address.propertyState,
          propertyZip : address.propertyZip
        });
        setAddress({ 
          "propertyStreet": null,
          "propertyCity": null,
          "propertyZip": null,
          "propertyState": null,
        });
        console.log("Update-------------------------", res);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  
  console.log("loanScenario", loanScenario);

  return (
    <>
      <div className="maindiv">
        <div className="pro-class">
          <div className="profile-sec">
            <div className="profile-main">
              <div className="profile">
                <div className="protb-img"></div>
                <div className="text-pro">
                  <p>John Christensen</p>
                  <h5>Loan stage</h5>
                </div>
              </div>
              <div className="pro-main">
                <div className="pro-detail">
                  <div className="pro-detail-text">
                    <p>Stage</p>
                    <h3>Pre-Approved</h3>
                  </div>
                  <div className="pro-detail-text">
                    <p>Loan Purpose</p>
                    <h3>Purchase-FTHB</h3>
                  </div>
                  <div className="pro-detail-text">
                    <p>Location</p>
                    <h3>Prince William County, VA</h3>
                  </div>
                  <div className="pro-detail-text">
                    <p>Occupancy</p>
                    <h3>Owner-Occupied</h3>
                  </div>
                  <div className="pro-detail-text">
                    <p>Credit Score</p>
                    <h3>742</h3>
                  </div>
                  <div className="pro-detail-text">
                    <p>Source</p>
                    <h3>Bankrate</h3>
                  </div>
                </div>
              </div>
              <div className="accro-pro">
                <Accordion defaultActiveKey="0">
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <div className="aco-left">
                          <svg
                            width="14"
                            height="19"
                            viewBox="0 0 14 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 11.7637C6.7031 11.7637 6.46154 11.514 6.46154 11.207C6.46154 10.9828 6.59059 10.7815 6.79033 10.694C7.03145 10.5885 7.31999 10.6785 7.58219 10.9411C7.79577 11.155 8.13666 11.1494 8.34357 10.9287C8.55052 10.7079 8.54509 10.3555 8.33154 10.1416C8.08844 9.89811 7.81821 9.72603 7.53846 9.62892V8.98047C7.53846 8.67305 7.29738 8.42383 7 8.42383C6.70263 8.42383 6.46154 8.67305 6.46154 8.98047V9.63252C6.43099 9.64376 6.40055 9.65564 6.37036 9.66885C5.77156 9.93102 5.38462 10.5348 5.38462 11.207C5.38462 12.1278 6.10928 12.877 7 12.877C7.29691 12.877 7.53846 13.1267 7.53846 13.4336C7.53846 13.6669 7.39613 13.8772 7.1843 13.9569C6.90771 14.061 6.58575 13.9198 6.30101 13.5693C6.10975 13.3339 5.77013 13.3034 5.54239 13.5011C5.31466 13.6988 5.28512 14.0499 5.47638 14.2853C5.76747 14.6436 6.1063 14.8893 6.46158 15.013V15.6602C6.46158 15.9676 6.70267 16.2168 7.00004 16.2168C7.29741 16.2168 7.5385 15.9676 7.5385 15.6602V15.008C7.54331 15.0063 7.54812 15.0048 7.55289 15.003C8.18838 14.7637 8.61538 14.133 8.61538 13.4336C8.61538 12.5128 7.89072 11.7637 7 11.7637Z"
                              fill="#2CC14E"
                            />
                            <path
                              d="M11.9868 8.35922C11.3469 7.5453 10.6153 6.89685 9.81217 6.43054C9.9437 6.26967 10.0475 6.08104 10.1145 5.87081C10.3775 5.04294 9.99334 4.05954 9.01288 3.73918L10.3874 1.26157C10.5608 0.948887 10.405 0.550629 10.0706 0.450137C9.07681 0.151443 8.04375 0 7 0C5.95625 0 4.92319 0.151443 3.92941 0.450137C3.59463 0.55074 3.43944 0.949258 3.61265 1.26157L4.98712 3.73921C4.01053 4.05795 3.62155 5.0399 3.88565 5.87126C3.95245 6.08093 4.0562 6.26944 4.18812 6.43039C3.38491 6.8967 2.65325 7.54523 2.0132 8.35922C0.733779 9.98636 0 12.0388 0 13.9902C0 18.0385 3.12476 19 7 19C10.878 19 14 18.0369 14 13.9902C14 12.0388 13.2662 9.98636 11.9868 8.35922ZM4.89986 1.34403C5.58683 1.19073 6.29059 1.11328 7 1.11328C7.7094 1.11328 8.41317 1.19073 9.10014 1.34403L7.91434 3.4816C7.307 3.39395 6.69318 3.39399 6.08569 3.48164L4.89986 1.34403ZM5.25165 4.82036C6.17834 4.50612 7.14786 4.44656 8.09042 4.64134L8.09379 4.64201C8.31349 4.68758 8.53171 4.74688 8.74759 4.8201C9.02979 4.91625 9.184 5.23179 9.09149 5.52299C9.02426 5.73388 8.84674 5.87913 8.63793 5.90265C8.10105 5.72887 7.55343 5.64062 7 5.64062C6.44768 5.64062 5.90114 5.7285 5.3653 5.90158C5.15326 5.87902 4.97531 5.73273 4.90865 5.52351C4.816 5.23179 4.97022 4.91621 5.25165 4.82036ZM7 17.8941C2.79296 17.8941 1.07692 16.7579 1.07692 13.9902C1.07692 12.315 1.73934 10.4725 2.84882 9.06144C4.0189 7.57339 5.49313 6.75391 7 6.75391C8.65868 6.75391 10.1095 7.73664 11.1512 9.06144C12.2607 10.4725 12.9231 12.315 12.9231 13.9902C12.9231 16.7579 11.207 17.8941 7 17.8941Z"
                              fill="#2CC14E"
                            />
                          </svg>
                          <p>Loan Scenarios</p>
                        </div>
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="10" cy="10" r="10" fill="#70C3FF" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.38284 13.6452C9.38284 13.986 9.65916 14.2623 10 14.2623C10.3409 14.2623 10.6172 13.986 10.6172 13.6452V10.6172H13.6452C13.986 10.6172 14.2623 10.3408 14.2623 9.99999C14.2623 9.65914 13.986 9.38282 13.6452 9.38282H10.6172V6.35484C10.6172 6.01398 10.3409 5.73767 10 5.73767C9.65916 5.73767 9.38284 6.01399 9.38284 6.35484V9.38282H6.35484C6.01398 9.38282 5.73767 9.65914 5.73767 9.99999C5.73767 10.3408 6.01399 10.6172 6.35484 10.6172H9.38284V13.6452Z"
                              fill="white"
                            />
                          </svg>
                          <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5.5 5.5L10 1"
                              stroke="#CCCCCC"
                              strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                      <Card.Body>
                        <div className="pro-detail-text new-pro">
                          <h3>StoneHP 30y 100k 2.500% Cashout</h3>
                          <p>And this loan scenario is...</p>
                        </div>
                        <div className="pro-detail-text new-pro">
                          <h3>FHA 30y 100K 2.000% PMI</h3>
                          <p>And this loan scenario is...</p>
                        </div>
                        <div className="pro-detail-text new-pro">
                          <h3>HP/HR 10-yr 1.4M PMI</h3>
                          <p>And this loan scenario is...</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                    <div className="border-bottom"></div>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <div className="aco-left">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3.39685 13.6713C3.20265 13.6705 3.01094 13.6276 2.83492 13.5455C2.6589 13.4635 2.50277 13.3442 2.3773 13.196C2.25182 13.0478 2.15998 12.8741 2.10811 12.687C2.05624 12.4998 2.04558 12.3037 2.07685 12.112L2.59248 8.93492L0.379585 6.64975C0.207987 6.47309 0.0882803 6.25264 0.0335614 6.01251C-0.0211574 5.77238 -0.00878104 5.52183 0.0693368 5.28827C0.147455 5.0547 0.288305 4.84712 0.476478 4.68823C0.664651 4.52934 0.892899 4.42526 1.13625 4.38738L4.13332 3.92738L5.45395 1.10612C5.56459 0.87878 5.73692 0.687136 5.95127 0.553065C6.16562 0.418994 6.41336 0.3479 6.66618 0.3479C6.91901 0.3479 7.16675 0.418994 7.3811 0.553065C7.59545 0.687136 7.76778 0.87878 7.87842 1.10612L9.19468 3.92335L12.1961 4.38738C12.4394 4.42526 12.6677 4.52934 12.8558 4.68823C13.044 4.84712 13.1848 5.0547 13.263 5.28827C13.3411 5.52183 13.3535 5.77238 13.2987 6.01251C13.244 6.25264 13.1243 6.47309 12.9527 6.64975L10.7421 8.92579L11.2558 12.1125C11.2966 12.3607 11.2667 12.6155 11.1695 12.8476C11.0723 13.0796 10.9116 13.2796 10.706 13.4246C10.5003 13.5695 10.258 13.6536 10.0067 13.6672C9.75548 13.6808 9.50548 13.6234 9.28539 13.5015L6.66788 12.0481L4.04712 13.5015C3.84837 13.6125 3.62453 13.671 3.39685 13.6713ZM6.66605 10.7134C6.89305 10.7136 7.11625 10.7717 7.31448 10.8823L9.93232 12.3361L9.42322 9.14859C9.39022 8.94175 9.40575 8.73007 9.46856 8.53026C9.53138 8.33045 9.63977 8.14797 9.78518 7.99722L11.9961 5.72072L8.99638 5.24515C8.7786 5.21176 8.57245 5.12508 8.39624 4.99281C8.22004 4.86054 8.07925 4.68678 7.98638 4.48698L6.67062 1.67058C6.66981 1.66823 6.66827 1.66603 6.66672 1.66408L5.34508 4.48765C5.25233 4.68728 5.11168 4.86089 4.93564 4.99304C4.7596 5.1252 4.55363 5.2118 4.33605 5.24515L1.33865 5.70515L3.54665 7.99682C3.69214 8.14753 3.8006 8.33 3.86347 8.52981C3.92635 8.72963 3.94192 8.94132 3.90895 9.14819L3.39302 12.3259L6.01735 10.8826C6.21564 10.7718 6.43893 10.7136 6.66605 10.7134Z"
                              fill="#FFC6AE"
                            />
                          </svg>
                          <p>Rate Campains</p>
                        </div>
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="10" cy="10" r="10" fill="#70C3FF" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.38284 13.6452C9.38284 13.986 9.65916 14.2623 10 14.2623C10.3409 14.2623 10.6172 13.986 10.6172 13.6452V10.6172H13.6452C13.986 10.6172 14.2623 10.3408 14.2623 9.99999C14.2623 9.65914 13.986 9.38282 13.6452 9.38282H10.6172V6.35484C10.6172 6.01398 10.3409 5.73767 10 5.73767C9.65916 5.73767 9.38284 6.01399 9.38284 6.35484V9.38282H6.35484C6.01398 9.38282 5.73767 9.65914 5.73767 9.99999C5.73767 10.3408 6.01399 10.6172 6.35484 10.6172H9.38284V13.6452Z"
                              fill="white"
                            />
                          </svg>
                          <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5.5 5.5L10 1"
                              stroke="#CCCCCC"
                              strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body>
                        <div className="pro-detail-text new-pro">
                          <h3>Some Rate Campain</h3>
                          <p>This campain is...</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                    <div className="border-bottom"></div>
                  </Card>
                  <Card>
                    <Card.Header>
                      <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <div className="aco-left">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M13.4522 3.85697C13.7542 3.85697 13.999 3.61217 13.999 3.31018V2.73605C13.999 1.22739 12.7716 0 11.263 0C11.263 0 2.69174 0.00128497 2.67061 0.00377288C1.94914 0.0289801 1.25611 0.338575 0.756557 0.862021C0.244512 1.39853 -0.0224323 2.09635 0.00269291 2.83056C0.001654 2.84448 0.00110721 10.7172 0.00110721 10.7172C0.00110721 12.5273 1.47379 14 3.28395 14H11.263C12.7716 14 13.999 12.7726 13.999 11.264V7.11248C13.999 5.60382 12.7716 4.37643 11.263 4.37643H2.73505C1.85714 4.37643 1.1374 3.69026 1.09647 2.81429C1.07567 2.36888 1.2359 1.94369 1.54763 1.61703C1.86387 1.28568 2.308 1.09567 2.76611 1.09567C2.78226 1.09567 11.2629 1.09359 11.2629 1.09359C12.1686 1.09359 12.9054 1.83039 12.9054 2.73605V3.31018C12.9054 3.61217 13.1502 3.85697 13.4522 3.85697ZM2.73505 5.47002H11.263C12.1686 5.47002 12.9054 6.20682 12.9054 7.11248V11.264C12.9054 12.1696 12.1686 12.9064 11.263 12.9064H3.28395C2.07679 12.9064 1.09469 11.9243 1.09469 10.7172V4.92544C1.55203 5.268 2.12029 5.47002 2.73505 5.47002ZM11.8119 9.18821C11.8119 9.56569 11.5058 9.87171 11.1284 9.87171C10.2217 9.8357 10.222 8.54059 11.1284 8.50472C11.5058 8.50472 11.8119 8.81074 11.8119 9.18821ZM11.8119 2.73605C11.8119 2.43405 11.5671 2.18925 11.2651 2.18925H2.73508C2.00959 2.21812 2.01014 3.25422 2.73508 3.28284H11.2651C11.567 3.28284 11.8119 3.03804 11.8119 2.73605Z"
                              fill="#70C3FF"
                            />
                          </svg>
                          <p>Borrower Apps</p>
                        </div>
                        <span>
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="10" cy="10" r="10" fill="#70C3FF" />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M9.38284 13.6452C9.38284 13.986 9.65916 14.2623 10 14.2623C10.3409 14.2623 10.6172 13.986 10.6172 13.6452V10.6172H13.6452C13.986 10.6172 14.2623 10.3408 14.2623 9.99999C14.2623 9.65914 13.986 9.38282 13.6452 9.38282H10.6172V6.35484C10.6172 6.01398 10.3409 5.73767 10 5.73767C9.65916 5.73767 9.38284 6.01399 9.38284 6.35484V9.38282H6.35484C6.01398 9.38282 5.73767 9.65914 5.73767 9.99999C5.73767 10.3408 6.01399 10.6172 6.35484 10.6172H9.38284V13.6452Z"
                              fill="white"
                            />
                          </svg>
                          <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1L5.5 5.5L10 1"
                              stroke="#CCCCCC"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body>
                        <div className="pro-detail-text new-pro">
                          <h3>Some Borrower App</h3>
                          <p>This campain is...</p>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                    <div className="border-bottom"></div>
                  </Card>
                </Accordion>
              </div>
            </div>
          </div>
          <div className="stone">
            <div className="stone-sec">
              <div className="stone-text">
                <h1>Stone HP 30 100k Cashout</h1>
                <span>
                  Last Updated
                  <br />
                  04/27/2021
                </span>
              </div>
              <div className="rate-sec">
                <div className="rate-box">
                  <div className="rate-text">
                    <p>
                      Rate
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M6.54458 0.90033C5.38393 0.90033 4.24936 1.2445 3.28432 1.88932C2.31928 2.53413 1.56713 3.45064 1.12297 4.52293C0.678812 5.59522 0.5626 6.77514 0.78903 7.91348C1.01546 9.05182 1.57436 10.0975 2.39506 10.9182C3.21576 11.7388 4.26139 12.2977 5.39973 12.5242C6.53807 12.7506 7.71799 12.6344 8.79028 12.1902C9.86257 11.7461 10.7791 10.9939 11.4239 10.0289C12.0687 9.06385 12.4129 7.92927 12.4129 6.76863C12.411 5.21283 11.7922 3.72127 10.6921 2.62114C9.59194 1.52102 8.10038 0.902165 6.54458 0.90033ZM6.54458 11.57C5.59496 11.57 4.66667 11.2884 3.87709 10.7608C3.08752 10.2332 2.47212 9.48336 2.10872 8.60603C1.74531 7.7287 1.65023 6.76331 1.83549 5.83194C2.02075 4.90057 2.47804 4.04505 3.14952 3.37357C3.821 2.70209 4.67651 2.24481 5.60788 2.05955C6.53925 1.87429 7.50464 1.96937 8.38197 2.33277C9.2593 2.69618 10.0092 3.31158 10.5367 4.10115C11.0643 4.89073 11.3459 5.81902 11.3459 6.76863C11.3444 8.04155 10.838 9.26189 9.93792 10.162C9.03783 11.0621 7.81749 11.5684 6.54458 11.57Z"
                            fill="#70C3FF"
                          />
                          <path
                            d="M6.54478 5.16815C6.40329 5.16815 6.2676 5.22436 6.16755 5.32441C6.0675 5.42445 6.01129 5.56015 6.01129 5.70163V9.43601C6.01129 9.5775 6.0675 9.71319 6.16755 9.81324C6.2676 9.91329 6.40329 9.96949 6.54478 9.96949C6.68627 9.96949 6.82196 9.91329 6.92201 9.81324C7.02206 9.71319 7.07827 9.5775 7.07827 9.43601V5.70163C7.07827 5.56015 7.02206 5.42445 6.92201 5.32441C6.82196 5.22436 6.68627 5.16815 6.54478 5.16815Z"
                            fill="#70C3FF"
                          />
                          <path
                            d="M6.54478 4.63465C6.83942 4.63465 7.07827 4.3958 7.07827 4.10117C7.07827 3.80654 6.83942 3.56769 6.54478 3.56769C6.25014 3.56769 6.01129 3.80654 6.01129 4.10117C6.01129 4.3958 6.25014 4.63465 6.54478 4.63465Z"
                            fill="#70C3FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="12.8036"
                              height="12.8036"
                              fill="white"
                              transform="translate(0.142883 0.366821)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                    <h1>
                      2.750
                      <svg
                        width="14"
                        height="13"
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.232178 3.23432C0.232178 2.36937 0.480901 1.6922 0.978346 1.20282C1.4871 0.71344 2.13717 0.46875 2.92856 0.46875C3.71995 0.46875 4.36437 0.71344 4.86181 1.20282C5.37056 1.6922 5.62494 2.36937 5.62494 3.23432C5.62494 4.11066 5.37056 4.79351 4.86181 5.28289C4.36437 5.77227 3.71995 6.01696 2.92856 6.01696C2.13717 6.01696 1.4871 5.77227 0.978346 5.28289C0.480901 4.79351 0.232178 4.11066 0.232178 3.23432ZM11.1195 0.673607L4.45481 12.6236H2.14847L8.79616 0.673607H11.1195ZM2.9116 1.90275C2.28979 1.90275 1.97889 2.34661 1.97889 3.23432C1.97889 4.13342 2.28979 4.58296 2.9116 4.58296C3.21685 4.58296 3.45427 4.47485 3.62385 4.25861C3.79344 4.03099 3.87823 3.68956 3.87823 3.23432C3.87823 2.34661 3.55602 1.90275 2.9116 1.90275ZM7.6769 10.0458C7.6769 9.16949 7.92563 8.49232 8.42307 8.01432C8.93182 7.52494 9.58189 7.28025 10.3733 7.28025C11.1647 7.28025 11.8034 7.52494 12.2896 8.01432C12.787 8.49232 13.0357 9.16949 13.0357 10.0458C13.0357 10.9222 12.787 11.605 12.2896 12.0944C11.8034 12.5838 11.1647 12.8285 10.3733 12.8285C9.57059 12.8285 8.92052 12.5838 8.42307 12.0944C7.92563 11.605 7.6769 10.9222 7.6769 10.0458ZM10.3563 8.71425C9.71191 8.71425 9.3897 9.15811 9.3897 10.0458C9.3897 10.9449 9.71191 11.3945 10.3563 11.3945C10.9894 11.3945 11.306 10.9449 11.306 10.0458C11.306 9.15811 10.9894 8.71425 10.3563 8.71425Z"
                          fill="#2CC14E"
                        />
                      </svg>
                    </h1>
                  </div>
                </div>
                <div className="rate-box">
                  <div className="rate-text">
                    <p>
                      Upfront costs
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M6.54458 0.90033C5.38393 0.90033 4.24936 1.2445 3.28432 1.88932C2.31928 2.53413 1.56713 3.45064 1.12297 4.52293C0.678812 5.59522 0.5626 6.77514 0.78903 7.91348C1.01546 9.05182 1.57436 10.0975 2.39506 10.9182C3.21576 11.7388 4.26139 12.2977 5.39973 12.5242C6.53807 12.7506 7.71799 12.6344 8.79028 12.1902C9.86257 11.7461 10.7791 10.9939 11.4239 10.0289C12.0687 9.06385 12.4129 7.92927 12.4129 6.76863C12.411 5.21283 11.7922 3.72127 10.6921 2.62114C9.59194 1.52102 8.10038 0.902165 6.54458 0.90033ZM6.54458 11.57C5.59496 11.57 4.66667 11.2884 3.87709 10.7608C3.08752 10.2332 2.47212 9.48336 2.10872 8.60603C1.74531 7.7287 1.65023 6.76331 1.83549 5.83194C2.02075 4.90057 2.47804 4.04505 3.14952 3.37357C3.821 2.70209 4.67651 2.24481 5.60788 2.05955C6.53925 1.87429 7.50464 1.96937 8.38197 2.33277C9.2593 2.69618 10.0092 3.31158 10.5367 4.10115C11.0643 4.89073 11.3459 5.81902 11.3459 6.76863C11.3444 8.04155 10.838 9.26189 9.93792 10.162C9.03783 11.0621 7.81749 11.5684 6.54458 11.57Z"
                            fill="#70C3FF"
                          />
                          <path
                            d="M6.54478 5.16815C6.40329 5.16815 6.2676 5.22436 6.16755 5.32441C6.0675 5.42445 6.01129 5.56015 6.01129 5.70163V9.43601C6.01129 9.5775 6.0675 9.71319 6.16755 9.81324C6.2676 9.91329 6.40329 9.96949 6.54478 9.96949C6.68627 9.96949 6.82196 9.91329 6.92201 9.81324C7.02206 9.71319 7.07827 9.5775 7.07827 9.43601V5.70163C7.07827 5.56015 7.02206 5.42445 6.92201 5.32441C6.82196 5.22436 6.68627 5.16815 6.54478 5.16815Z"
                            fill="#70C3FF"
                          />
                          <path
                            d="M6.54478 4.63465C6.83942 4.63465 7.07827 4.3958 7.07827 4.10117C7.07827 3.80654 6.83942 3.56769 6.54478 3.56769C6.25014 3.56769 6.01129 3.80654 6.01129 4.10117C6.01129 4.3958 6.25014 4.63465 6.54478 4.63465Z"
                            fill="#70C3FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="12.8036"
                              height="12.8036"
                              fill="white"
                              transform="translate(0.142883 0.366821)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                    <h1>
                      <svg
                        width="9"
                        height="16"
                        viewBox="0 0 9 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.53571 10.2507C8.53571 10.8224 8.38875 11.3597 8.09482 11.8628C7.81265 12.3659 7.38939 12.7889 6.82504 13.1319C6.27246 13.4749 5.61405 13.6807 4.84984 13.7493V15.1384H3.70351V13.7493C2.59834 13.6464 1.70479 13.3091 1.02287 12.7375C0.340958 12.1658 0 11.4112 0 10.4737H2.15156C2.18684 10.9196 2.3338 11.2912 2.59246 11.5884C2.85112 11.8742 3.22147 12.0572 3.70351 12.1372V8.36425C2.91578 8.16988 2.27501 7.97552 1.78121 7.78115C1.28741 7.57535 0.864153 7.25522 0.511437 6.82076C0.170479 6.3863 0 5.79177 0 5.03718C0 4.08822 0.340958 3.30505 1.02287 2.68765C1.70479 2.05883 2.59834 1.69296 3.70351 1.59006V0.200928H4.84984V1.59006C5.88447 1.68153 6.71335 2.00166 7.33648 2.55045C7.97137 3.08782 8.32996 3.83097 8.41226 4.77993H6.2607C6.22543 4.4255 6.08434 4.11109 5.83744 3.83669C5.59054 3.55086 5.26134 3.3565 4.84984 3.2536V6.95796C5.63757 7.14089 6.27833 7.33526 6.77214 7.54105C7.26594 7.73542 7.68332 8.04983 8.02428 8.48429C8.36523 8.90732 8.53571 9.49613 8.53571 10.2507ZM2.04575 4.93428C2.04575 5.40304 2.18684 5.76891 2.46901 6.03187C2.76294 6.29483 3.17444 6.50635 3.70351 6.66641V3.20215C3.19795 3.25931 2.79233 3.43653 2.48664 3.73379C2.19271 4.03106 2.04575 4.43122 2.04575 4.93428ZM4.84984 12.1372C5.36715 12.0572 5.77278 11.8571 6.06671 11.537C6.36064 11.2054 6.5076 10.811 6.5076 10.3536C6.5076 9.8963 6.36064 9.54187 6.06671 9.29034C5.78453 9.02737 5.37891 8.81586 4.84984 8.65579V12.1372Z"
                          fill="#2CC14E"
                        />
                      </svg>
                      1,234
                    </h1>
                  </div>
                </div>
                <div className="rate-box">
                  <div className="rate-text">
                    <p>
                      Mo. payment
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M6.54458 0.90033C5.38393 0.90033 4.24936 1.2445 3.28432 1.88932C2.31928 2.53413 1.56713 3.45064 1.12297 4.52293C0.678812 5.59522 0.5626 6.77514 0.78903 7.91348C1.01546 9.05182 1.57436 10.0975 2.39506 10.9182C3.21576 11.7388 4.26139 12.2977 5.39973 12.5242C6.53807 12.7506 7.71799 12.6344 8.79028 12.1902C9.86257 11.7461 10.7791 10.9939 11.4239 10.0289C12.0687 9.06385 12.4129 7.92927 12.4129 6.76863C12.411 5.21283 11.7922 3.72127 10.6921 2.62114C9.59194 1.52102 8.10038 0.902165 6.54458 0.90033ZM6.54458 11.57C5.59496 11.57 4.66667 11.2884 3.87709 10.7608C3.08752 10.2332 2.47212 9.48336 2.10872 8.60603C1.74531 7.7287 1.65023 6.76331 1.83549 5.83194C2.02075 4.90057 2.47804 4.04505 3.14952 3.37357C3.821 2.70209 4.67651 2.24481 5.60788 2.05955C6.53925 1.87429 7.50464 1.96937 8.38197 2.33277C9.2593 2.69618 10.0092 3.31158 10.5367 4.10115C11.0643 4.89073 11.3459 5.81902 11.3459 6.76863C11.3444 8.04155 10.838 9.26189 9.93792 10.162C9.03783 11.0621 7.81749 11.5684 6.54458 11.57Z"
                            fill="#70C3FF"
                          />
                          <path
                            d="M6.54478 5.16815C6.40329 5.16815 6.2676 5.22436 6.16755 5.32441C6.0675 5.42445 6.01129 5.56015 6.01129 5.70163V9.43601C6.01129 9.5775 6.0675 9.71319 6.16755 9.81324C6.2676 9.91329 6.40329 9.96949 6.54478 9.96949C6.68627 9.96949 6.82196 9.91329 6.92201 9.81324C7.02206 9.71319 7.07827 9.5775 7.07827 9.43601V5.70163C7.07827 5.56015 7.02206 5.42445 6.92201 5.32441C6.82196 5.22436 6.68627 5.16815 6.54478 5.16815Z"
                            fill="#70C3FF"
                          />
                          <path
                            d="M6.54478 4.63465C6.83942 4.63465 7.07827 4.3958 7.07827 4.10117C7.07827 3.80654 6.83942 3.56769 6.54478 3.56769C6.25014 3.56769 6.01129 3.80654 6.01129 4.10117C6.01129 4.3958 6.25014 4.63465 6.54478 4.63465Z"
                            fill="#70C3FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="12.8036"
                              height="12.8036"
                              fill="white"
                              transform="translate(0.142883 0.366821)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                    <h1>1,234</h1>
                  </div>
                </div>
                <div className="rate-box">
                  <div className="rate-text">
                    <p>
                      Cash to Close
                      <svg
                        width="13"
                        height="14"
                        viewBox="0 0 13 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0)">
                          <path
                            d="M6.54458 0.90033C5.38393 0.90033 4.24936 1.2445 3.28432 1.88932C2.31928 2.53413 1.56713 3.45064 1.12297 4.52293C0.678812 5.59522 0.5626 6.77514 0.78903 7.91348C1.01546 9.05182 1.57436 10.0975 2.39506 10.9182C3.21576 11.7388 4.26139 12.2977 5.39973 12.5242C6.53807 12.7506 7.71799 12.6344 8.79028 12.1902C9.86257 11.7461 10.7791 10.9939 11.4239 10.0289C12.0687 9.06385 12.4129 7.92927 12.4129 6.76863C12.411 5.21283 11.7922 3.72127 10.6921 2.62114C9.59194 1.52102 8.10038 0.902165 6.54458 0.90033ZM6.54458 11.57C5.59496 11.57 4.66667 11.2884 3.87709 10.7608C3.08752 10.2332 2.47212 9.48336 2.10872 8.60603C1.74531 7.7287 1.65023 6.76331 1.83549 5.83194C2.02075 4.90057 2.47804 4.04505 3.14952 3.37357C3.821 2.70209 4.67651 2.24481 5.60788 2.05955C6.53925 1.87429 7.50464 1.96937 8.38197 2.33277C9.2593 2.69618 10.0092 3.31158 10.5367 4.10115C11.0643 4.89073 11.3459 5.81902 11.3459 6.76863C11.3444 8.04155 10.838 9.26189 9.93792 10.162C9.03783 11.0621 7.81749 11.5684 6.54458 11.57Z"
                            fill="#70C3FF"
                          />
                          <path
                            d="M6.54478 5.16815C6.40329 5.16815 6.2676 5.22436 6.16755 5.32441C6.0675 5.42445 6.01129 5.56015 6.01129 5.70163V9.43601C6.01129 9.5775 6.0675 9.71319 6.16755 9.81324C6.2676 9.91329 6.40329 9.96949 6.54478 9.96949C6.68627 9.96949 6.82196 9.91329 6.92201 9.81324C7.02206 9.71319 7.07827 9.5775 7.07827 9.43601V5.70163C7.07827 5.56015 7.02206 5.42445 6.92201 5.32441C6.82196 5.22436 6.68627 5.16815 6.54478 5.16815Z"
                            fill="#70C3FF"
                          />
                          <path
                            d="M6.54478 4.63465C6.83942 4.63465 7.07827 4.3958 7.07827 4.10117C7.07827 3.80654 6.83942 3.56769 6.54478 3.56769C6.25014 3.56769 6.01129 3.80654 6.01129 4.10117C6.01129 4.3958 6.25014 4.63465 6.54478 4.63465Z"
                            fill="#70C3FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0">
                            <rect
                              width="12.8036"
                              height="12.8036"
                              fill="white"
                              transform="translate(0.142883 0.366821)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </p>
                    <h1>($101,234)</h1>
                  </div>
                </div>
              </div>
              <div className="stone-btn">
                <div className="st-btn">
                  <button>Reprice</button>
                </div>
                <div className="st-btn">
                  <button>Clone</button>
                </div>
                <div className="st-btn">
                  <button>Create PDF</button>
                </div>
                <div className="st-btn">
                  <button>Email</button>
                </div>
              </div>
            </div>
            <div className="two-btn">
              <Tabs
                defaultActiveKey="Loan Scenario"
                id="uncontrolled-tab-example"
              >
                <Tab eventKey="Loan Scenario" title="Loan Scenario">
                  <div className="price-tab second-tab">
                    <div className="price-box">
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>Loan Terms</p>
                          </li>

                          <li>
                            <p>Base Loan Amount</p>
                            <EdiText
                              value={loanScenario.baseLoanAmount}
                              tabIndex={1}
                              onSave={(pass) => {
                                handleSave(pass, "baseLoanAmount");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Total Loan Amount</p>
                            {/* <EdiText
                              value={loanScenario.TotalLoanAmount}
                              tabIndex={2}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "TotalLoanAmount",
                                  "loanScenario"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                          <li>
                            <p>Loan Product</p>
                            {isEqual === "loanProduct" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={loanProductOptions}
                                    onChange={onSelect}
                                    value={loanScenario.loanProduct}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(selectedValue, "loanProduct")
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
                                className="main-div"
                                onClick={() =>
                                  onClick(
                                    "loanProduct",
                                    loanScenario.loanProduct
                                  )
                                }
                              >
                                <div>
                                  <span>{loanScenario.loanProduct}</span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>

                          <li>
                            <p>Loan Type</p>
                            {isEqual === "loanType" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={loanTypeOptions}
                                    onChange={onSelect}
                                    value={loanScenario.loanType}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(selectedValue, "loanType")
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
                                className="main-div"
                                onClick={() =>
                                  onClick("loanType", loanScenario.loanType)
                                }
                              >
                                <div>
                                  <span>{loanScenario.loanType}</span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>
                          <li>
                            <p>Interest Rate</p>
                            <EdiText
                              value={loanScenario.interestRate}
                              tabIndex={3}
                              onSave={(pass) => {
                                handleSave(pass, "interestRate");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>

                          <li>
                            <p>Lock Period</p>
                            {isEqual === "lockPeriod" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={lockPeriodOptions}
                                    onChange={onSelect}
                                    value={loanScenario.lockPeriod}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(selectedValue, "lockPeriod")
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
                                className="main-div"
                                onClick={() =>
                                  onClick("lockPeriod", loanScenario.lockPeriod)
                                }
                              >
                                <div>
                                  <span>{loanScenario.lockPeriod}</span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>

                          <li>
                            <p>Loan Price</p>
                            <EdiText
                              value={loanScenario.loanPrice}
                              tabIndex={4}
                              onSave={(pass) => {
                                handleSave(pass, "loanPrice");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Lender Credit</p>

                            <EdiText
                              value={loanScenario.lenderCredit}
                              tabIndex={5}
                              onSave={(pass) => {
                                handleSave(pass, "lenderCredit");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                        </ul>
                      </div>

                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>Gov. Funding Fee or Mortgage</p>
                          </li>
                          <li>
                            <p>Government Funding Fee </p>
                            <EdiText
                              value={loanScenario.governmentFundingFeePercent}
                              tabIndex={6}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "governmentFundingFeePercent"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Finance Funding Fee/MI</p>
                            <span>
                              <label className="lab-check">
                                <input
                                  type="checkbox"
                                  checked={loanScenario.isFinancedFundingFeeMI}
                                  onChange={(pass) => {
                                    if (pass.target.checked) {
                                      handleSave(
                                        1,
                                        "isFinancedFundingFeeMI"
                                      );
                                    } else {
                                      handleSave(
                                        0,
                                        "isFinancedFundingFeeMI"
                                      );
                                    }
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>
                          </li>
                          <li>
                            <p>Mortgage Insurance Rate</p>
                            <EdiText
                              value={loanScenario.annualMortgageInsuranceRate}
                              tabIndex={7}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "annualMortgageInsuranceRate"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Premium Type</p>
                            {isEqual === "mortgageInsurancePremiumType" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={
                                      mortgageInsurancePremiumTypeOptions
                                    }
                                    onChange={onSelect}
                                    value={
                                      loanScenario.mortgageInsurancePremiumType
                                    }
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(
                                          selectedValue,
                                          "mortgageInsurancePremiumType"
                                        )
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
                                className="main-div"
                                onClick={() =>
                                  onClick(
                                    "mortgageInsurancePremiumType",
                                    loanScenario.mortgageInsurancePremiumType
                                  )
                                }
                              >
                                <div>
                                  <span>
                                    {loanScenario.mortgageInsurancePremiumType}
                                  </span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>Mortgage Insurance Rate</p>
                          </li>
                          <li>
                            <p>Second Mortgage Request</p>
                            {isEqual === "secondMortgageRequest" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={secondMortgageRequestOptions}
                                    onChange={onSelect}
                                    value={loanScenario.secondMortgageRequest}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(
                                          selectedValue,
                                          "secondMortgageRequest"
                                        )
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
                                className="main-div"
                                onClick={() =>
                                  onClick(
                                    "secondMortgageRequest",
                                    loanScenario.secondMortgageRequest
                                  )
                                }
                              >
                                <div>
                                  <span>
                                    {loanScenario.secondMortgageRequest}
                                  </span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>
                          <li>
                            <p>Second Mortgage Balance</p>
                            <EdiText
                              value={loanScenario.secondMortgageBalance}
                              tabIndex={8}
                              onSave={(pass) => {
                                handleSave(pass, "secondMortgageBalance");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Payoff Second Mortgage</p>
                            <span>
                              <label className="lab-check">
                                <input
                                  type="checkbox"
                                  checked={
                                    loanScenario.isPayingOffSecondMortgage
                                  }
                                  onChange={(pass) => {
                                    if (pass.target.checked) {
                                      handleSave(
                                        1,
                                        "isPayingOffSecondMortgage"
                                      );
                                    } else {
                                      handleSave(
                                        0,
                                        "isPayingOffSecondMortgage"
                                      );
                                    }
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="price-box pb-1">
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>Borrower Request and Profile</p>
                          </li>
                          <li>
                            <p>Loan Purpose</p>
                            {isEqual === "loanPurpose" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={loanPurposeOptions}
                                    onChange={onSelect}
                                    value={loanScenario.loanPurpose}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(selectedValue, "loanPurpose")
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
                                className="main-div"
                                onClick={() =>
                                  onClick(
                                    "loanPurpose",
                                    loanScenario.loanPurpose
                                  )
                                }
                              >
                                <div>
                                  <span>{loanScenario.loanPurpose}</span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>
                          <li>
                            <p>Cashout Refinance</p>
                            <span>
                              <label className="lab-check">
                                <input
                                  type="checkbox"
                                  checked={loanScenario.isCashout}
                                  onChange={(pass) => {
                                    if (pass.target.checked) {
                                      handleSave(1, "isCashout");
                                    } else {
                                      handleSave(0, "isCashout");
                                    }
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>
                          </li>
                          <li>
                            <p>Occupancy</p>
                            {isEqual === "occupancy" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={occupancyOptions}
                                    onChange={onSelect}
                                    value={loanScenario.occupancy}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(selectedValue, "occupancy")
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
                                className="main-div"
                                onClick={() =>
                                  onClick("occupancy", loanScenario.occupancy)
                                }
                              >
                                <div>
                                  <span>{loanScenario.occupancy}</span>

                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>

                          <li>
                            <p>Current Loan Balance</p>
                            <EdiText
                              value={loanScenario.currentLoanBalance}
                              tabIndex={9}
                              onSave={(pass) => {
                                handleSave(pass, "currentLoanBalance");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Cashout Request</p>
                            <EdiText
                              value={loanScenario.cashoutRequest}
                              tabIndex={10}
                              onSave={(pass) => {
                                handleSave(pass, "cashoutRequest");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Waives Tax Escrows</p>
                            <span>
                              <label className="lab-check">
                                <input
                                  type="checkbox"
                                  checked={loanScenario.isTaxEscrowsWaived}
                                  onChange={(pass) => {
                                    if (pass.target.checked) {
                                      handleSave(1, "isTaxEscrowsWaived");
                                    } else {
                                      handleSave(0, "isTaxEscrowsWaived");
                                    }
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>
                          </li>
                          <li>
                            <p>Waives Insurance Escrows</p>
                            <span>
                              <label className="lab-check">
                                <input
                                  type="checkbox"
                                  checked={loanScenario.isInsuranceEscrowsWaived}
                                  onChange={(pass) => {
                                    if (pass.target.checked) {
                                      handleSave(1, "isInsuranceEscrowsWaived");
                                    } else {
                                      handleSave(0, "isInsuranceEscrowsWaived");
                                    }
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>
                          </li>
                          <li>
                            <p>Credit Score</p>
                            <EdiText
                              value={loanScenario.creditScore}
                              tabIndex={11}
                              onSave={(pass) => {
                                handleSave(pass, "creditScore");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Current Loan Type</p>
                            {isEqual === "currentLoanType" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={currentLoanTypeOptions}
                                    onChange={onSelect}
                                    value={loanScenario.currentLoanType}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(
                                          selectedValue,
                                          "currentLoanType"
                                        )
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
                                className="main-div"
                                onClick={() =>
                                  onClick(
                                    "currentLoanType",
                                    loanScenario.currentLoanType
                                  )
                                }
                              >
                                <div>
                                  <span>{loanScenario.currentLoanType}</span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>
                          <li>
                            <p>VA Eligible?</p>
                            <span>
                              <label className="lab-check">
                                <input
                                  type="checkbox"
                                  checked={loanScenario.isVaEligible}
                                  onChange={(pass) => {
                                    if (pass.target.checked) {
                                      handleSave(1, "isVaEligible");
                                    } else {
                                      handleSave(0, "isVaEligible");
                                    }
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>
                          </li>
                          <li>
                            <p>VA Used Before?</p>
                            <span>
                              <label className="lab-check">
                                <input
                                  type="checkbox"
                                  checked={loanScenario.isVaUsedBefore}
                                  onChange={(pass) => {
                                    if (pass.target.checked) {
                                      handleSave(1, "isVaUsedBefore");
                                    } else {
                                      handleSave(0, "isVaUsedBefore");
                                    }
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>
                          </li>
                          <li>
                            <p>VA Disability?</p>
                            <span>
                              <label className="lab-check">
                                <input
                                  type="checkbox"
                                  checked={loanScenario.isVaDisability}
                                  onChange={(pass) => {
                                    if (pass.target.checked) {
                                      handleSave(1, "isVaDisability");
                                    } else {
                                      handleSave(0, "isVaDisability");
                                    }
                                  }}
                                />
                                <span className="checkmark"></span>
                              </label>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>Property Details</p>
                          </li>
                          <li>
                            <p>Address</p>
                             <button
                              onClick={onOpenModal}
                              className="edit-arrow1 icon-btn1"
                            >
                              {" "}
                              &#9998;
                            </button>
                            <Modal open={open} onClose={onCloseModal}>
                              <ModalTitle> Edit Addresses</ModalTitle>
                              <ModalBody>
                                  <input
                                    type="text"
                                    name="propertyStreet"
                                    placeholder="propertyStreet"
                                    onChange={handleChange}
                                    value={address.propertyStreet}
                                  />
                                  <input
                                    type="text"
                                    name="propertyCity"
                                    placeholder="propertyCity"
                                    onChange={handleChange}
                                    value={address.propertyCity}
                                  />
                                  <Dropdown
                                        className="cust-select"
                                        options={propertyStateOptions}
                                        onChange={(e)=>setAddress({...address,propertyState:e.value})}
                                        value={address.propertyState}
                                        placeholder="Select State"
                                      />
                                  <input
                                    type="text"
                                    name="propertyZip"
                                    placeholder="propertyZip"
                                    onChange={handleChange}
                                    value={address.propertyZip}
                                  />
                                  
                              </ModalBody>
                              <ModalFooter>
                                  <button onClick={onCloseModal}>
                                    Cancel
                                  </button>
                                  
                                  <button onClick={handleSubmit}>
                                    Save Addresses
                                  </button>
                              </ModalFooter>
                              
                            </Modal>
                          </li>
                          <li>
                            <p>County</p>
                            {isEqual === "propertyCountry" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={propertyCountryOptions}
                                    onChange={onSelect}
                                    value={loanScenario.propertyCountry}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(
                                          selectedValue,
                                          "propertyCountry"
                                        )
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
                                className="main-div"
                                onClick={() =>
                                  onClick(
                                    "propertyCountry",
                                    loanScenario.propertyCountry
                                  )
                                }
                              >
                                <div>
                                  <span>{loanScenario.propertyCountry}</span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>
                          <li>
                            <p>Property Type</p>
                            {isEqual === "propertyType" ? (
                              <div className="dropdown-main">
                                <div id="wrap">
                                  <Dropdown
                                    className="cust-select"
                                    options={propertyTypeOptions}
                                    onChange={onSelect}
                                    value={loanScenario.propertyType}
                                    placeholder="Select an option"
                                  />
                                  <div className="btn-div">
                                    <button
                                      className="right-arrow icon-btn"
                                      onClick={() =>
                                        handleSave(
                                          selectedValue,
                                          "propertyType"
                                        )
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
                                className="main-div"
                                onClick={() =>
                                  onClick(
                                    "propertyType",
                                    loanScenario.propertyType
                                  )
                                }
                              >
                                <div>
                                  <span>{loanScenario.propertyType}</span>
                                  <button className="edit-arrow1 icon-btn1">
                                    &#9998;
                                  </button>
                                </div>
                              </div>
                            )}
                          </li>
                          <li>
                            <p>House Value</p>
                            <EdiText
                              value={loanScenario.houseValue}
                              tabIndex={13}
                              onSave={(pass) => {
                                handleSave(pass, "houseValue");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Monthly HOA</p>
                            <EdiText
                              value={loanScenario.monthlyHOA}
                              tabIndex={14}
                              onSave={(pass) => {
                                handleSave(pass, "monthlyHOA");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Monthly Property Taxes</p>
                            <EdiText
                              value={loanScenario.monthlyPropertyTax}
                              tabIndex={15}
                              onSave={(pass) => {
                                handleSave(pass, "monthlyPropertyTax");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Monthly HOI</p>
                            <EdiText
                              value={loanScenario.monthlyHOI}
                              tabIndex={16}
                              onSave={(pass) => {
                                handleSave(pass, "monthlyHOI");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>Projected Payments</p>
                          </li>
                          <li>
                            <p>Projected Payments</p>
                            {/* <EdiText
                              value={loanScenario.ProjectedPayments1}
                              tabIndex={61}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "ProjectedPayments1",
                                  "loanScenario"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                          <li>
                            <p>Estimated Escrow</p>
                            {/* <EdiText
                              value={loanScenario.EstimatedEscrow}
                              tabIndex={62}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "EstimatedEscrow",
                                  "loanScenario"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                          <li className="Total">
                            <p>Total Monthly Payment</p>
                            {/* <EdiText
                              value={loanScenario.TotalMonthlyPayment}
                              tabIndex={63}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "TotalMonthlyPayment",
                                  "loanScenario"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab
                  eventKey="Closing Cost Details"
                  title="Closing Cost Details"
                >
                  <div className="price-tab">
                    <div className="price-box">
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>A. Origination Charges </p>
                            <span>
                              ${blockA}
                            </span>
                          </li>
                          <li>
                            <p>Discount Fee </p>
                            <EdiText
                              value={loanScenario.blockADiscountFee}
                              tabIndex={101}
                              onSave={(pass) => {
                                handleSave(pass, "blockADiscountFee");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Origination Fee</p>
                            <EdiText
                              value={loanScenario.blockAOriginationFee}
                              tabIndex={102}
                              onSave={(pass) => {
                                handleSave(pass, "blockAOriginationFee");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Processing Fee</p>
                            <EdiText
                              value={loanScenario.blockAprocessingFee}
                              tabIndex={103}
                              onSave={(pass) => {
                                handleSave(pass, "blockAprocessingFee");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Tax Service</p>
                            <EdiText
                              value={loanScenario.blockATaxService}
                              tabIndex={104}
                              onSave={(pass) => {
                                handleSave(pass, "blockATaxService");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>B. Services You Cannot Shop For</p>
                            <span>
                              ${blockB}
                            </span>
                          </li>
                          <li>
                            <p>Appraisal Fee</p>
                            <EdiText
                              value={loanScenario.blockBAppraisalFee}
                              tabIndex={106}
                              onSave={(pass) => {
                                handleSave(pass, "blockBAppraisalFee");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Credit Report Fees</p>
                            <EdiText
                              value={loanScenario.blockBCreditFees}
                              tabIndex={107}
                              onSave={(pass) => {
                                handleSave(pass, "blockBCreditFees");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Flood Certification Fee</p>
                            <EdiText
                              value={loanScenario.blockBFloodCertification}
                              tabIndex={108}
                              onSave={(pass) => {
                                handleSave(pass, "blockBFloodCertification");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Tax Return Verification Fee</p>
                            <EdiText
                              value={
                                loanScenario.blockBtaxReturnVerificationFee
                              }
                              tabIndex={109}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "blockBtaxReturnVerificationFee"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Verification of Employment </p>
                            <EdiText
                              value={loanScenario.blockBverificationEmployment}
                              tabIndex={110}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "blockBverificationEmployment"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>HOA Questionnaire</p>
                            <EdiText
                              value={loanScenario.blockBhoaQuestionnaire}
                              tabIndex={111}
                              onSave={(pass) => {
                                handleSave(pass, "blockBhoaQuestionnaire");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Condo Project Approval</p>
                            <EdiText
                              value={loanScenario.blockBcondoProjectApproval}
                              tabIndex={112}
                              onSave={(pass) => {
                                handleSave(pass, "blockBcondoProjectApproval");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Single Premium MI</p>
                            <EdiText
                              value={loanScenario.blockBsinglePremiumMI}
                              tabIndex={113}
                              onSave={(pass) => {
                                handleSave(pass, "blockBsinglePremiumMI");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>FHA, USDA, VA Funding Fee</p>
                            {/* <EdiText
                              value={loanScenario.blockBsinglePremiumMI}
                              tabIndex={113}
                              onSave={(pass) => {
                                handleSave(pass, "blockBsinglePremiumMI");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>C. Services You Can Shop For</p>
                            <span>
                              ${blockC}
                            </span>
                          </li>
                          <li>
                            <p>Title Services & Insurance</p>
                            <EdiText
                              value={loanScenario.blockCTitleServices}
                              tabIndex={113}
                              onSave={(pass) => {
                                handleSave(pass, "blockCTitleServices");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Survey</p>
                            <EdiText
                              value={loanScenario.blockCSurvey}
                              tabIndex={114}
                              onSave={(pass) => {
                                handleSave(pass, "blockCSurvey");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>D. Total Loan Costs (A + B + C)</p>
                            <span>
                              ${blockD}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="price-box pb-1">
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>E. Taxes & Government Fees</p>
                            <span>
                              ${blockE}
                            </span>
                          </li>
                          <li>
                            <p>Recording Fees </p>
                            <EdiText
                              value={loanScenario.blockERecordingCharges}
                              tabIndex={115}
                              onSave={(pass) => {
                                handleSave(pass, "blockERecordingCharges");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                          <li>
                            <p>Transfer Taxes</p>
                            <EdiText
                              value={loanScenario.blockETransferTaxes}
                              tabIndex={116}
                              onSave={(pass) => {
                                handleSave(pass, "blockETransferTaxes");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>F. Prepaids</p>
                            <span>${blockF}</span>
                          </li>

                          <li>
                            <p>Homeowner’s Insurance Premium</p>
                            {"("} <EdiText
                              value={loanScenario.blockFnumMonthsPrepaidHOI}
                              tabIndex={119}
                              onSave={(pass) => {
                                handleSave(pass, "blockFnumMonthsPrepaidHOI");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> { "months)" }
                          </li>
                          <li>
                            <p>Prepaid Interest for </p>
                            <EdiText
                              value={loanScenario.blockFdaysPrepaidInterest}
                              tabIndex={118}
                              onSave={(pass) => {
                                handleSave(pass, "blockFdaysPrepaidInterest");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> { "days" }
                          </li>
                          <li>
                            <p>Prepaid Taxes</p>
                            {/* <EdiText
                              value={loanScenario.blockFnumMonthsPrepaidHOI}
                              tabIndex={119}
                              onSave={(pass) => {
                                handleSave(pass, "blockFnumMonthsPrepaidHOI");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>G. Initial Escrow Payment at Closing</p>
                            <span>${blockG}</span>
                          </li>
                          <li>
                            <p>
                              Homeowner’s Insurance
                              <span className="light-text">
                                { "$100 per month for" } 
                                </span>
                                {isEqual === "blockGHOI" ? (
                                    <div className="dropdown-main">
                                      <div id="wrap">
                                        <Dropdown
                                          className="cust-select"
                                          options={monthsOptions}
                                          onChange={onSelect}
                                          value={loanScenario.blockGHOI}
                                          placeholder="Select an option"
                                        />
                                        <div className="btn-div">
                                          <button
                                            className="right-arrow icon-btn"
                                            onClick={() =>
                                              handleSave(selectedValue, "blockGHOI")
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
                                      className="main-div"
                                      onClick={() =>
                                        onClick(
                                          "blockGHOI",
                                          loanScenario.blockGHOI
                                        )
                                      }
                                    >
                                    <div>
                                    <span className="light-text">{loanScenario.blockGHOI}</span>
                                      <button className="edit-arrow1 icon-btn1">
                                        &#9998;
                                      </button>
                                    </div>
                                  </div>
                                )} 
                                <span className="light-text">{"months"}</span>
                              
                            </p>
                            {/* <EdiText
                              value={
                                loanScenario.HomeownersInsurance100permonthfor2months
                              }
                              tabIndex={120}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "HomeownersInsurance100permonthfor2months",
                                  "loanScenario"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                          <li>
                            <p>
                              Property{" "}
                              <span className="light-text">
                                {"Taxes $273 per month for"}
                              </span>
                              {isEqual === "blockGnumMonthsTaxReserves" ? (
                                    <div className="dropdown-main">
                                      <div id="wrap">
                                        <Dropdown
                                          className="cust-select"
                                          options={monthsOptions}
                                          onChange={onSelect}
                                          value={loanScenario.blockGnumMonthsTaxReserves}
                                          placeholder="Select an option"
                                        />
                                        <div className="btn-div">
                                          <button
                                            className="right-arrow icon-btn"
                                            onClick={() =>
                                              handleSave(selectedValue, "blockGnumMonthsTaxReserves")
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
                                      className="main-div"
                                      onClick={() =>
                                        onClick(
                                          "blockGnumMonthsTaxReserves",
                                          loanScenario.blockGnumMonthsTaxReserves
                                        )
                                      }
                                    >
                                    <div>
                                    <span className="light-text">{loanScenario.blockGnumMonthsTaxReserves}</span>
                                      <button className="edit-arrow1 icon-btn1">
                                        &#9998;
                                      </button>
                                    </div>
                                  </div>
                                )} 
                                <span className="light-text">{"months"}</span>
                              
                            </p>
                            {/* <EdiText
                              value={
                                loanScenario.PropertyTaxes273permonthfor13months
                              }
                              tabIndex={121}
                              onSave={(pass) => {
                                handleSave(
                                  pass,
                                  "PropertyTaxes273permonthfor13months",
                                  "loanScenario"
                                );
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>H. Other</p>
                            <span>
                              ${blockH}
                            </span>
                          </li>
                          <li>
                            <p>Owner's Title Insurance</p>
                            <EdiText
                              value={loanScenario.blockHOwnersTitleInsPremium}
                              tabIndex={122}
                              onSave={(pass) => {
                                handleSave(pass, "blockHOwnersTitleInsPremium");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            />
                          </li>
                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>I. Total Other Costs (E + F + G + H)</p>
                            <span>
                               ${blockI}
                            </span>
                          </li>

                        </ul>
                      </div>
                      <div className="price-text">
                        <ul>
                          <li className="head-price">
                            <p>J. Total Closing Costs</p>
                            <span>
                               ${blockD + blockI + loanScenario.lenderCredit}
                            </span>
                          </li>
                          <li>
                            <p>D+I</p>
                            <span>
                               {blockD + blockI}
                            </span>
                            {/* <EdiText
                              value={loanScenario.DI}
                              tabIndex={123}
                              onSave={(pass) => {
                                handleSave(pass, "DI", "loanScenario");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                          <li>
                            <p>Lender Credit </p>
                            <span>
                              {loanScenario.lenderCredit}
                            </span>
                            {/* <EdiText
                              value={loanScenario.Property}
                              tabIndex={124}
                              onSave={(pass) => {
                                handleSave(pass, "Property", "loanScenario");
                              }}
                              submitOnUnfocus
                              startEditingOnFocus
                            /> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home_2;
