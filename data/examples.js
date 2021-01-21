//code pulled from county department status board as an example of webeoc export to excel/pdf code



<html lang="en">   <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
      <link href="css/8.3.0.0/boards.css" rel="stylesheet" media="screen"/>
   </head>   <body>
      <table class="webeoc-header" cellpadding="0" cellspacing="0">
         <tr>
            <td class="webeoc-header-logo" rowspan="2" width="1%">
               <agencyinfo type="primarylogo"/>
            </td>
            <td class="webeoc-header-board" selected="false">Department Personnel Status</td>
            <td class="webeoc-header-actions" align="right" rowspan="2" selected="true">
               <boardpermission name="Edit">
                  <viewlink class="webeoc-create" name="Input" target="dialog">
                     <i class="icon-plus"/>Create            </viewlink>
               </boardpermission>
               <space/>
               <div class="webeoc-dropdown">
                  <a href="#" class="webeoc-dropdown-toggle" onclick="if(this.webeocOpen) {{this.blur();this.webeocOpen=false;}} else {{this.webeocOpen=true;}}">              Actions              <span class="caret"/>
                  </a>
                  <ul class="webeoc-dropdown-menu">
                     <li>
                        <pdflink class="webeoc-actions-link" view="List - PDF">
                           <i class="icon-print"/>Print PDF                </pdflink>
                     </li>
                     <li>
                        <exportlink>
                           <i class="icon-list"/>Export to Excel				<field name="department_name" label="Department"/>
                           <field name="dataid" label="Data Id"/>
                           <field name="DataDate" label="Date of the Data"/>
                           <field name="medSurg_Capacity" label="medSurg_Capacity"/>
                           <field name="icuAdult_Capacity" label="icuAdult_Capacity"/>
                           <field name="vent_Capacity" label="vent_Capacity"/>
                           <field name="edCovidPts" label="edCovidPts"/>
                           <field name="covid_Admissions" label="covid_Admissions"/>
                           <field name="covid_Inpatients" label="covid_Inpatients"/>
                           <field name="medSurgBed_Avail" label="medSurgBed_Avail"/>
                           <field name="medSurg_InUseCovid" label="medSurg_InUseCovid"/>
                           <field name="MedSurg_InUseOther" label="MedSurg_InUseOther"/>
                           <field name="icuAdult_Avail" label="icuAdult_Avail"/>
                           <field name="icuAdult_InUseCovid" label="icuAdult_InUseCovid"/>
                           <field name="icuAdult_InUseOther" label="icuAdult_InUseOther"/>
                           <field name="vent_Avail" label="vent_Avail"/>
                           <field name="vent_InUseOther" label="vent_InUseOther"/>
                           <field name="vent_InUseCovid" label="vent_InUseCovid"/>
                           <field name="remove" label="remove"/>
                        </exportlink>
                     </li>
                  </ul>
               </div>
            </td>
         </tr>
         <tr>
            <td class="webeoc-header-incident" selected="false">
               <incidentname/>
            </td>
         </tr>
      </table>
      <table class="webeoc-datagrid" cellpadding="0" cellspacing="0">
         <tr>
            <td selected="false" rowSpan="1" colSpan="1" align="right" style="font-size: 14pt; font-weight: bold;">County Departments in COOP</td>
            <td selected="false" rowSpan="1" colSpan="1" width="" style="font-size: 14pt; font-weight: bold;">
               <expression name="count_departments" useboardlevelfilters="true">sum(case when COOP_Status = 'Yes' then 1 else 0 end)</expression>
            </td>
            <td selected="false" rowSpan="1" colSpan="1" width="" style="font-size: 14pt; font-weight: bold;">Number Out Sick: <expression name="totalSick" useboardlevelfilters="true">sum(out_sick)</expression>
            </td>
            <td selected="false" rowSpan="1" colSpan="1" width="" style="font-size: 14pt; font-weight: bold;">Number Teleworking: <expression name="totalTeleworking" useboardlevelfilters="true">sum(teleworking)</expression>
            </td>
            <td selected="" rowSpan="1" colSpan="1" width="" style="font-size: 14pt; font-weight: bold;"> </td>
            <td selected="false" rowSpan="1" colSpan="1" width="" style="font-size: 14pt; font-weight: bold;">Number Out, NOT Sick: <expression name="totalPTO" useboardlevelfilters="true">sum(pto_leave)</expression>
            </td>
            <td selected="false"/>
         </tr>
      </table>
      <table class="webeoc-datagrid" cellpadding="0" cellspacing="0">
         <tr>
            <td class="webeoc-search" colSpan="10">
               <search>
                  <field name="department_name"/>
               </search>
               <searchbutton class="webeoc-btn webeoc-btn-small"/>
            </td>
         </tr>
         <tr>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1">Department</td>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1" width="">Entered COOP Status</td>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1" width=""># out sick</td>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1" width=""># out, NOT sick (PTO or other)</td>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1" width=""># teleworking</td>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1" width=""># in office</td>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1" width="">Reduction in Services</td>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1" width="">Services Suspended<br/>(hover over Details)</td>
            <td class="webeoc-header" selected="false" rowSpan="1" colSpan="1" width="">Services Providing<br/>(hover over Details)</td>
            <td class="webeoc-header" selected="" rowSpan="1" colSpan="1" width=""/>
         </tr>
         <eocrepeatallrecords sort="out_sick desc" rowcount="0">
            <tr>
               <td selected="false" rowSpan="1" colSpan="1">
                  <eocfield name="department_name"/>
               </td>
               <td selected="false" rowSpan="1" colSpan="1" width="">
                  <eocfield name="COOP_Status"/>
               </td>
               <td selected="false" rowSpan="1" colSpan="1" width="">
                  <eocfield name="out_sick"/>
               </td>
               <td selected="false" rowSpan="1" colSpan="1" width="">
                  <eocfield name="pto_leave"/>
               </td>
               <td selected="false" rowSpan="1" colSpan="1" width="">
                  <eocfield name="teleworking"/>
               </td>
               <td selected="false" rowSpan="1" colSpan="1" width="">
                  <eocfield name="in_office"/>
               </td>
               <td selected="false" rowSpan="1" colSpan="1" width="">
                  <eocfield name="reduction_in_services"/>
               </td>
               <td selected="false" rowSpan="1" colSpan="1" width="">
                  <span>
                     <attribute name="title">
                        <value-of select="@services_suspended"/>
                     </attribute>	Details</span>
                  <if test="1=0">
                     <eocfield name="services_suspended"/>
                  </if>
               </td>
               <td selected="false" rowSpan="1" colSpan="1" width="">
                  <span>
                     <attribute name="title">
                        <value-of select="@services_providing"/>
                     </attribute>Details</span>
                  <if test="1=0">
                     <eocfield name="services_providing"/>
                  </if>
               </td>
               <td selected="false">
                  <boardpermission name="Edit">
                     <viewlink class="webeoc-link" type="link" name="Update" target="dialog">
                        <i class="icon-edit"/>Edit              </viewlink>
                  </boardpermission>
               </td>
            </tr>
         </eocrepeatallrecords>
      </table>
   </body>
</html>