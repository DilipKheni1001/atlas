import "../styles/PDF.css"

const Home2_PDF = ({Atlas_Loan_Scenario, totalLoanAmount, principalInterest}) => {
    const numberWithCommas = (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
      }
    return (
    <html>
        <body>
            <div>
                <table>
                    <tbody>
                        <tr className="border-bottom border-top">
                            <td className="leftCol border-right border-left">
                                {/* <apex:image url="{!$Resource.KeystoneFundingBrand}" width="100%" height="100%"/> */}
                            </td>
                            <td className="rightCol border-right" style={{"lineHeight": "18px"}}>
                                {/* Prepared For: {!Atlas_Loan_Scenario.Contact__r.Name}<br/>
                                Prepared By: {!userMap[Atlas_Loan_Scenario.Contact__r.Owner].Name}, NMLS #{!userMap[Atlas_Loan_Scenario.Contact__r.Owner].NMLS_ID__c}<br/>
                                Phone: {!userMap[Atlas_Loan_Scenario.Contact__r.Owner].Phone}<br/> */}
                                Preparation Date: 
                                <br/>
                            </td>
                        </tr>
                        <tr className="border-bottom">
                            <td colSpan="2" className="border-left border-right" style={{"padding":"5px"}}>
                                <span>The fees listed below are estimates, and your rate varies with market conditions until locked. Your actual rate, payment, and costs could be higher. Get an official Loan Estimate before choosing a loan.</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <br/>
            <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td colSpan="2">ASSUMPTIONS</td>
                    </tr>
                    <tr className="border-top">
                        <td className="leftCol">Loan Purpose:</td>
                        <td className="rightCol">
                            {
                              Atlas_Loan_Scenario.loanPurpose === "Refinance" ?
                                Atlas_Loan_Scenario.isCashout === 1 ? "Refinance- Cash Out" : "Refinance- Rate/Term"
                              : null

                              (Atlas_Loan_Scenario.loanPurpose === "Purchase" ? "Purchase" : null)
                            }
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol">Location:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.propertyCountry + " County, " + Atlas_Loan_Scenario.propertyState}
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol">Est. Value/ Sale Price:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Atlas_Loan_Scenario.houseValue)}
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol">Lock Period:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.lockPeriod}
                            </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol">Credit Score:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.creditScore}
                            </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td colSpan="2">PROPOSED TERMS</td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Loan Program:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.loanTypeSpecial} {Atlas_Loan_Scenario.loanProduct}
                            </td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Loan Amount:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(totalLoanAmount))}
                        </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="leftCol">Interest Rate:</td>
                        <td className="rightCol">
                            {Atlas_Loan_Scenario.interestRate}%
                            </td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Monthly Principal &amp; Interest:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(principalInterest))}
                            <i style={{"fontSize": "10px"}}> <span>(See below for your Estimated Total Monthly Payment)</span></i>
                        </td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Prepayment Penalty:</td>
                        <td className="rightCol">NO</td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Balloon Payment:</td>
                        <td className="rightCol">NO</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td colSpan="2">PROJECTED PAYMENTS</td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Principal &amp; Interest:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Math.round(principalInterest))}
                        </td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Mortgage Insurance:</td>
                        <td className="rightCol">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_monthlyMI__c}"/>
                            </apex:outputText> */}
                        </td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Estimated Taxes:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Atlas_Loan_Scenario.monthlyPropertyTax)}
                        </td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol">Estimated Homeowners Insurance:</td>
                        <td className="rightCol">
                            ${numberWithCommas(Atlas_Loan_Scenario.monthlyHOI)}
                        </td>
                    </tr>
                    {/* <apex:outputPanel rendered="{!Atlas_Loan_Scenario.summary_hoaDues__c != 0}"> */}
                        <tr className="border-bottom border-top">
                            <td className="leftCol">HOA Dues:</td>
                            <td className="rightCol">
                                {/* <apex:outputText value="{0, number, $###,###,##0}">
                                    <apex:param value="{!Atlas_Loan_Scenario.summary_hoaDues__c}"/>
                                </apex:outputText> */}
                            </td>
                        </tr>
                    {/* </apex:outputPanel> */}
                    <tr className="border-bottom border-top">
                        <td className="leftCol"><strong>Estimated Total Monthly Payment:</strong></td>
                        <td className="rightCol">
                            {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_totalMonthlyPayment__c}"/>
                            </apex:outputText> */}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td colSpan="3">COSTS AT CLOSING</td>
                    </tr>
                    <tr className="border-bottom border-top">
                        <td className="leftCol5"><strong>Estimated Closing Costs:</strong></td>
                        <td className="middleCol5">
                            {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_totalClosingCosts__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="rightCol5">Includes lender fees and third-party fees (ie title fees, taxes, recording, etc)</td>
                    </tr>
                    <tr className="border-bottom border-top">
                        
                        <td className="leftCol5"><strong>Estimated Cash to Close:</strong></td>
                        {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.summary_estimatedCashToClose__c > 0}"> */}
                            <td className="middleCol5">
                                {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                    <apex:param value="{!Atlas_Loan_Scenario.summary_estimatedCashToClose__c}"/>
                                </apex:outputText> */}
                            </td>
                            <td className="rightCol5">Includes escrows and prepaids</td>
                        {/* </apex:variable> */}
                        {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.summary_estimatedCashToClose__c <= 0}"> */}
                        {/* <apex:variable value="{!0}" var="zero"/> */}
                            <td className="middleCol5">
                                {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                    <apex:param value="{!zero}"/>
                                </apex:outputText> */}
                            </td>
                            <td className="rightCol5">You will receive 
                                {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                    <apex:param value="{!ABS(Atlas_Loan_Scenario.summary_estimatedCashToClose__c)}"/>
                                </apex:outputText> */}
                                cash at closing
                            </td>
                        {/* </apex:variable> */}
                    </tr>
                </tbody>
            </table>
        </div>
        {/* <apex:outputPanel rendered="{!Atlas_Loan_Scenario.summary_hoaDues__c == 0}">
            <br/><br/>
        </apex:outputPanel> */}
        
            <br/><br/>
        
        
            <br/><br/>
        
        <br/><br/>
        <br/><br/>
        <br/>
        <div>
            <h3>
                Closing Cost Details
            </h3>
            <table> 
                <tbody>
                    <tr>
                        <td width="49%" style={{"verticalAlign": "top"}}>
                            <table>
                                <tr className="blueRow">
                                    <td colSpan="2">Estimated Loan Costs</td>
                                </tr>
                                <tr className="border-top">
                                    <td className="leftCol2"><strong>A. Origination Charges</strong></td>
                                    <td className="rightCol2">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                            <apex:param value="{!Atlas_Loan_Scenario.blockA_totalFees__c}"/>
                                        </apex:outputText> */}
                                    </td>
                                </tr>
                                {Atlas_Loan_Scenario.blockADiscountFee != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Loan Discount Fee (Points)</td>
                                        <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockADiscountFee))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockAprocessingFee != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Loan Processing Fee</td>
                                        <td className="rightCol2">
                                                ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockAprocessingFee))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockATaxService != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Tax Service Fee</td>
                                        <td className="rightCol2">
                                             ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockATaxService))}
                                        </td>
                                    </tr>
                                : null}
                                
                                <tr className="border-bottom">
                                    {Atlas_Loan_Scenario.blockAOriginationFee != 0 ? 
                                        <>
                                            <td className="leftCol2">Loan Origination Fees</td>
                                            <td className="rightCol2">
                                                ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockAOriginationFee))}
                                            </td>
                                        </>
                                    : null}
                                </tr>
                                <tr className="border-top">
                                    <td className="leftCol2"><strong>B. Services You Cannot Shop For</strong></td>
                                    <td className="rightCol2">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                            <apex:param value="{!Atlas_Loan_Scenario.blockB_TotalFees__c}"/>
                                        </apex:outputText> */}
                                    </td>
                                </tr>
                                    {Atlas_Loan_Scenario.blockBAppraisalFee != 0 ? 
                                        <tr>
                                            <td className="leftCol2">Appraisal</td>
                                            <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBAppraisalFee))}
                                            </td>
                                        </tr>
                                    : null}
                                {Atlas_Loan_Scenario.blockBCreditFees != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Credit Report</td>
                                        <td className="rightCol2">
                                            ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBCreditFees))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBFloodCertification != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Flood Certification</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBFloodCertification))}
                                  
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBhoaQuestionnaire != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Condo Questionnaire</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBhoaQuestionnaire))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBsinglePremiumMI != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Upfront Mortgage Insurance Premium</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBsinglePremiumMI))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBtaxReturnVerificationFee != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Tax Return Verification Fee</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBtaxReturnVerificationFee))}
                                        </td>
                                    </tr>
                                : null}
                                {Atlas_Loan_Scenario.blockBverificationEmployment != 0 ? 
                                    <tr>
                                        <td className="leftCol2">Verification of Employment</td>
                                        <td className="rightCol2">
                                        ${numberWithCommas(Math.round(Atlas_Loan_Scenario.blockBverificationEmployment))}
                                        </td>
                                    </tr>
                                : null}
                                <tr className="border-bottom">
                                    {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockB_govFundingFee__c != 0}"> */}
                                        <td className="leftCol2">FHA, VA, or USDA Funding Fee</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockB_govFundingFee__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    {/* </apex:variable> */}
                                </tr>
                                <tr className="border-top">
                                    <td className="leftCol2"><strong>C. Services You Can Shop For</strong></td>
                                    <td className="rightCol2">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                            <apex:param value="{!Atlas_Loan_Scenario.blockC_TotalFees__c}"/>
                                        </apex:outputText> */}
                                    </td>
                                </tr>
                                {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockC_titleServices__c != 0}"> */}
                                    <tr>
                                        <td className="leftCol2">Title Services &amp; Insurance</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockC_titleServices__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                {/* </apex:variable>
                                <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockC_survey__c != 0}"> */}
                                    <tr className="border-bottom">
                                        <td className="leftCol2">Survey (if required)</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockC_survey__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                {/* </apex:variable> */}
                                
                                <tr className="border-bottom border-top">
                                    <td className="leftCol2" height="20px">
                                        <strong>D. Total Loan Costs (A&#43;B&#43;C)</strong></td>
                                    <td className="rightCol2" height="20px">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                            <apex:param value="{!Atlas_Loan_Scenario.blockA_totalFees__c + Atlas_Loan_Scenario.blockB_TotalFees__c + Atlas_Loan_Scenario.blockC_TotalFees__c}"/>
                                        </apex:outputText> */}
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="2%">
                        </td>
                        <td width="49%" style={{"verticalAlign": "top"}}>
                            <table>
                                <tr className="blueRow">
                                    <td colSpan="2">Other Costs</td>
                                </tr>
                                <tr className="border-top">
                                    <td className="leftCol2"><strong>E. Taxes &amp; Other Government Fees</strong></td>
                                    <td className="rightCol2">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                            <apex:param value="{!Atlas_Loan_Scenario.blockE_totalFees__c}"/>
                                        </apex:outputText> */}
                                    </td>
                                </tr>
                                {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockE_recordingCharges__c != 0}"> */}
                                    <tr>
                                        <td className="leftCol2">Recording Fees &amp; Other Taxes</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockE_recordingCharges__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                {/* </apex:variable>
                                <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockE_transferTaxes__c != 0}"> */}
                                    <tr className="border-bottom">
                                        <td className="leftCol2">Transfer Taxes (if required)</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockE_transferTaxes__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                {/* </apex:variable> */}
                                <tr className="border-top">
                                    <td className="leftCol2"><strong>F. Estimated Prepaids</strong></td>
                                    <td className="rightCol2">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                            <apex:param value="{!Atlas_Loan_Scenario.blockF_totalFees__c}"/>
                                        </apex:outputText> */}
                                    </td>
                                </tr>
                                {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockF_prepaidInterest__c != 0}"> */}
                                    <tr>
                                        <td className="leftCol2">Prepaid Interest</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockF_prepaidInterest__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                
                                <tr>
                                    <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i>
                                            {/* <apex:outputText value="{0, number, $###,###,##0.00}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockF_interestperDay__c}"/>
                                            </apex:outputText> */}
                                             per day for      
                                            {/* <apex:outputText value="{0, number, ###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockF_daysPrepaidInterest__c}"/>
                                            </apex:outputText> */}
                                             days
                                        </i>
                                    </td>
                                    <td className="rightCol2"></td>
                                </tr>
                                {/* </apex:variable> */}
                                {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockF_prepaidHOI__c != 0}"> */}
                                    <tr>
                                        <td className="leftCol2">Prepaid Homeowner&#39;s Insurance</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockF_prepaidHOI__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                
                                <tr>
                                    <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i>
                                            {/* <apex:outputText value="{0, number, ###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockF_numMonthsPrepaidHOI__c}"/>
                                            </apex:outputText> */}
                                             months at    
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.monthlyHOI__c}"/>
                                            </apex:outputText> */}
                                             per month
                                        </i>
                                    </td>
                                    <td className="rightCol2"></td>
                                </tr>
                                {/* </apex:variable> */}
                                <tr>
                                    <td className="leftCol2">&nbsp;</td>
                                    <td className="rightCol2">&nbsp;</td>
                                </tr>
                                
                                <tr className="border-top">
                                    <td className="leftCol2"><strong>G. Estimated Escrow Payment</strong></td>
                                    <td className="rightCol2">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                            <apex:param value="{!Atlas_Loan_Scenario.blockG_totalFees__c}"/>
                                        </apex:outputText> */}
                                    </td>
                                </tr>
                                {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockG_totalInsuranceEscrows__c != 0}"> */}
                                    <tr>
                                        <td className="leftCol2">Homeowners Insurance</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockG_totalInsuranceEscrows__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                
                                <tr>
                                    <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i>
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.monthlyHOI__c}"/>
                                            </apex:outputText> */}
                                             per month for    
                                            {/* <apex:outputText value="{0, number, ###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockG_numMonthsInsuranceReserves__c}"/>
                                            </apex:outputText> */}
                                             months
                                        </i>
                                    </td>
                                    <td className="rightCol2"></td>
                                </tr>
                                {/* </apex:variable>
                                <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockG_totalTaxEscrows__c != 0}"> */}
                                    <tr>
                                        <td className="leftCol2">Property taxes</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockG_totalTaxEscrows__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                
                                <tr className="border-bottom">
                                    <td className="leftCol2">&nbsp;&nbsp;&nbsp;&nbsp;
                                        <i>
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.monthlyPropertyTax__c}"/>
                                            </apex:outputText> */}
                                             per month for    
                                            {/* <apex:outputText value="{0, number, ###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockG_numMonthsTaxReserves__c}"/>
                                            </apex:outputText> */}
                                             months
                                        </i>
                                    </td>
                                    <td className="rightCol2"></td>
                                </tr>
                                {/* </apex:variable> */}
                                <tr>
                                    <td className="leftCol2"><strong>H. Other</strong></td>
                                    <td className="rightCol2">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                            <apex:param value="{!Atlas_Loan_Scenario.blockH_totalFees__c}"/>
                                        </apex:outputText> */}
                                    </td>
                                </tr>
                                
                                {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.blockH_ownersTitleInsPremium__c != 0}"> */}
                                    <tr >
                                        <td className="leftCol2">Owner&#39;s Title Insurance</td>
                                        <td className="rightCol2">
                                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                                <apex:param value="{!Atlas_Loan_Scenario.blockH_ownersTitleInsPremium__c}"/>
                                            </apex:outputText> */}
                                        </td>
                                    </tr>
                                {/* </apex:variable> */}
                                <tr className="border-bottom">
                                    <td className="leftCol2">&nbsp;</td>
                                    <td className="rightCol2">&nbsp;</td>
                                </tr>
                                
                                <tr className="border-bottom">
                                    <td className="leftCol2" height="20px">
                                        <strong>I. Total Other Costs (E&#43;F&#43;G&#43;H)</strong></td>
                                        {/* <apex:variable value="{!Atlas_Loan_Scenario.blockE_totalFees__c + Atlas_Loan_Scenario.blockF_totalFees__c + Atlas_Loan_Scenario.blockG_totalFees__c + Atlas_Loan_Scenario.blockH_totalFees__c}" var="totalOtherCost"/> */}
                                    <td className="rightCol2" height="20px">
                                        {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}"> */}
                                            {/* <apex:param value="{!totalOtherCost}"/> */}
                                        {/* </apex:outputText> */}
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <br/>
        <br/>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td align="center" colSpan="4">Total Closing Costs</td>
                    </tr>
                    <tr className="border-top" style={{"padding":"5px 0"}}>
                        <td className="leftCol6">&nbsp;</td>
                        <td className="middleColA6" align="right">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_totalCostsBeforeCredit__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Loan Costs + Other Costs (D+I)</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">&#8211;</td>
                        <td className="middleColA6" align="right">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.lenderCredit__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Lender Credits</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" width="290px" align="right">&#61;</td>
                        <td className="border-top middleColA6" width="53px" align="right">
                            {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_totalClosingCosts__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6"><strong>Total Closing Costs (J)</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td align="center" colSpan="4">Estimated Cash to Close</td>
                    </tr>
                    <tr className="border-top">
                        <td className="leftCol6">&nbsp;</td>
                        <td className="middleColA6" align="right">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_salePriceORpayoff__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Sale Price/Payoffs</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" width="290px" align="right">&#43;</td>
                        <td className="middleColA6" align="right">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_totalClosingCosts__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Total Closing Costs (J)</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">&#8211;</td>
                        <td className="middleColA6" align="right">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.totalLoanAmount__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Total Loan Amount</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">&#8211;</td>
                        <td className="middleColA6" align="right">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_newSecondMortgage__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Second Mortgage</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">&#8211;</td>
                        <td className="middleColA6" align="right">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                                <apex:param value="{!Atlas_Loan_Scenario.summary_sellerCredit__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Seller Credit</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">
                            &#8211;
                        </td>
                        <td className="border-bottom middleColA6" align="right">
                            {/* <apex:outputText value="{0, number, $###,###,##0}">
                            <apex:param value="{!Atlas_Loan_Scenario.summary_otherCreditsAdjustments__c}"/>
                            </apex:outputText> */}
                        </td>
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6">Other Credits and Adjustments</td>
                    </tr>
                    <tr>
                        <td className="operatorPadding leftCol6" align="right">&#61;</td>
                        {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.summary_estimatedCashToClose__c >= 0}"> */}
                            <td className="middleColA6" align="right">
                                {/* <apex:outputText styleClass="strong" value="{0, number, $###,###,##0}">
                                    <apex:param value="{!Atlas_Loan_Scenario.summary_estimatedCashToClose__c}"/>
                                </apex:outputText> */}
                            </td>
                        {/* </apex:variable> */}
                        {/* <apex:variable value="" var="" rendered="{!Atlas_Loan_Scenario.summary_estimatedCashToClose__c < 0}"> */}
                            <td className="middleColA6" align="right">
                                {/* <apex:outputText styleClass="strong" value="{0, number, ($###,###,##0)}">
                                    <apex:param value="{!ABS(Atlas_Loan_Scenario.summary_estimatedCashToClose__c)}"/>
                                </apex:outputText> */}
                            </td>
                        {/* </apex:variable> */}
                        <td className="middleColB6">&nbsp;</td>
                        <td className="rightCol6"><strong>Estimated Cash to Close From (To) Borrower</strong></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td width="700px" align="center">
                            <h4>Please Review Your Options on the Bottom of Page 3</h4>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div style={{"pageBreakAfter": "always"}}></div>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td colSpan="2">Other Considerations</td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>Rate Changes</strong></td>
                        <td className="rightCol4">Rates change multiple times daily until rate is locked. Factors affecting rate include property state, lock period, loan-to-value, credit, and debt-to-income ratio</td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>Escrow Account</strong></td>
                        <td className="rightCol4">If this is a refinance transaction, 
                            <span className="italic-bold-underline">funds held in escrow by your current loan servicer will be returned to you in approximately 30
                                                days following settlement.
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>First Payment</strong></td>
                        <td className="rightCol4">Your payment of a partial month’s interest at settlement (a prepaid charge) constitutes the first payment on your new loan and 
                            <span className="italic-bold-underline">you will not have to make a mortgage payment until the beginning of the second month after settlement, </span>e.g., close in November, your first scheduled payment will be January.
                            
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>Home Owner’s Insurance</strong></td>
                        <td className="rightCol4">This loan requires a homeowner's insurance on the property or, in the case of condominiums, an HO-6 insurance policy. You may obtain
                            this insurance policy from a company of your choice.
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>Origination Fee</strong></td>
                        <td className="rightCol4">The Origination Fee represents the total fees we pay outside parties for their services - the processing, underwriting, a pre-fund
                                                audit, and warehouse bank draw fee.
                        </td>
                    </tr>
                    <tr>
                        <td className="leftCol4"><strong>New Escrow Account &amp; Prepaid</strong></td>
                        <td className="rightCol4">Based on the estimated escrow information, we have conservatively set aside 6 months of property taxes and 4 months of 
                                            hazard insurance premiums for payment at settlement to populate your new escrow account. Additionally, we estimated the 
                                            prepaid interest at 15 days. 
                            <span className="italic-bold-underline">Both the prepaid interest and the amount required for the escrow account will be adjusted to match 
                                                                your specific requirements once the loan is locked; a settlement date is finalized; and escrow amount are verified.
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div>
            <table>
                <tbody>
                    <tr className="blueRow">
                        <td>Options</td>
                    </tr>
                    <tr>
                        <td className="oneCol"><strong>You have options available to you either based on your Loan-to-Value (LTV) or the interest rate you choose:</strong></td>
                    </tr>
                    <tr>
                        <td className="oneCol"><u>If this is a refinance transaction</u>, you might be able to increase the loan amount to reduce the amount needed at settlement; 
                                                you may also select a lower interest rate to save money in interest over the life of the loan, or, on the other hand, you may 
                                                select a higher interest rate and the resultant premium provided by the lender can be used to lower your costs at closing/settlement.  
                                                Discuss the available options with your Mortgage Consultant.
                        </td>
                    </tr>
                    <tr className="border-bottom">
                        <td className="oneCol"><u>If this is a purchase transaction</u>, you may select a lower interest rate to save money in interest over the life of the loan, 
                                                or, on the other hand, you may select a higher interest rate and the resultant premium provided by the lender can be used to lower 
                                                your costs at closing/settlement.  Discuss the available options with your Mortgage Consultant.
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        </body>
    </html>
    ) 
}

export default Home2_PDF;