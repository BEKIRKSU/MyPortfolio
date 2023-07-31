import React from 'react';
import "./profile.css"
const Profile = () => {
  return (
    <div>
    <div className="row">
    </div>
    <div className="modal fade modal-login" id="mygov-login-container" tabIndex={-1} role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
            <h2 className="modal-title"><img className="mygov-nav" src="/content/images/mygov-green.png" /> Sign in or register with myGov</h2>
            <p className="modal-title-description small">You will need a <a href="https://my.gov.au/mygov/content/html/about.html">myGov account</a> to access jobactive's online features</p>
          </div>
          <div className="modal-body">
            <div className="container">
              <div className="row text-center login-info">
                <div className="login-area col-sm-6">
                  <h4>Sign in</h4>
                  <p className="description">Sign in to myGov and link your jobactive account to get started.</p>
                  <a href="https://jobsearch.idc.hosts.testnetwork/Jobseekers" className="btn btn-lg primary">Sign in to myGov</a>
                </div>
                <div className="col-sm-6 registration-area">
                  <h4>Register</h4>
                  <p className="description">Create a myGov account in just a few easy steps and link to jobactive to begin using all the features of the jobactive website.</p>
                  <a href="https://my.gov.au/EnrolService/enrolService.htm?_flowId=enrolment-mg-flow&_flowExecutionKey=e1s1" className="btn btn-lg secondary">Register with myGov</a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer text-center">
            <p className="small">By signing into jobactive, you agree to the <a href="https://jobsearch.idc.hosts.testnetwork/Conditions.aspx">Conditions of Use</a>. These are continually updated, so please ensure you read and understand them before continuing.</p>
          </div>
        </div>
      </div>
    </div>
    <div id="content" tabIndex={-1}>
      <form action="/jobseekers/careerprofile" method="post">
        <input name="__RequestVerificationToken" type="hidden" defaultValue="2PbOI4WhuU9P3p9BN1Xt6TvMJTnqsmhcOX9mQyxp54NAW2ZCFWhxpNAOK3KRxIjNLUcBVmsVyhtzuWOmyox3c53T2MkRcIF6fRt05589vCGxZ1yuxuGh533PPKh1K7lFfuq0og2" />
      </form>
      <div id="CareerProfile" className="careerprofile">
        <div className="heading heading-img">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <ul className="breadcrumb">
                  <li><a href="/">Home</a></li>
                  <li><a href="/jobseekers">Dashboard</a></li>
                  <li className="active">Career profile</li>
                </ul>
                <h1 className="fadeInLeftBig">Career Profile</h1>
                <p>Use your Career Profile to store information about yourself. You can use this information to create a resume and be matched to suitable jobs.</p>
              </div>
              <div className="col-sm-12 col-md-6">
                <div id="VisibilityHeaderContainer">
                  <div className="alert alert-dismissible alert-info">
                    <button type="button" className="close" data-dismiss="alert">×</button>
                    <strong>Your Career Profile visibility is currently set to visible - registered employers only.</strong> Increase your chances of getting a job by increasing your visibility with employers. You can change your privacy settings under <a href="#ProfileAdmin" id="ProfileAdminLink">Profile Admin</a>.
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <a href="/jobseekers/careerprofile/exportasresume" className="btn btn-lg primary" role="button" target="_blank">
                  <span className="fa fa-file-word-o" /> Export as Resume
                  <span className="sr-only">Opens in new window</span>
                </a>
                <div className="btn-group btn-group-lg">
                  <button type="button" className="btn primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="fa fa-user" />
                    Preview your Career Profile for
                    <span className="fa fa-angle-down" />
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/jobseekers/careerprofile/preview" target="_blank">Applications and Sharing
                        <span className="sr-only">Opens in new window</span>
                      </a>
                    </li>
                    <li>
                      <a href="/jobseekers/careerprofile/preview?search=True" target="_blank">
                        Candidate Searches by Employers
                        <span className="sr-only">Opens in new window</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="btn-group btn-group-lg">
                  <a className="cta" href="#/" data-toggle="modal" data-target="#myModal">
                    <button type="button" className="btn primary dropdown-toggle" aria-haspopup="true" aria-expanded="false">
                      <span className="fa fa-file-o" />
                      Choose your Template
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid tab-menu">
      <div className="container">
        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a href="#home" aria-controls="home" role="tab" data-toggle="tab">My Profile</a>
          </li>
          <li role="presentation">
            <a href="#work" aria-controls="work" role="tab" data-toggle="tab">Work History</a>
          </li>
          <li role="presentation">
            <a href="#education" aria-controls="reviews" role="tab" data-toggle="tab">Education History</a>
          </li>
          <li role="presentation">
            <a href="#skills" aria-controls="skills" role="tab" data-toggle="tab">Skills</a>
          </li>
          <li role="presentation">
            <a href="#portfolio" aria-controls="directions" role="tab" data-toggle="tab">Portfolio</a>
          </li>
          <li role="presentation">
            <a href="#licences" aria-controls="admin" role="tab" data-toggle="tab">Licences &amp; Transport</a>
          </li>
          <li role="presentation">
            <a href="#refeeres" aria-controls="admin" role="tab" data-toggle="tab">Refeeres</a>
          </li>
          <li role="presentation">
            <a href="#reviews" aria-controls="admin" role="tab" data-toggle="tab">Reviews</a>
          </li>
          <li role="presentation">
            <a href="#directions" aria-controls="admin" role="tab" data-toggle="tab">Directions</a>
          </li>
          <li role="presentation">
            <a href="#resume" aria-controls="admin" role="tab" data-toggle="tab">Resume</a>
          </li>
        </ul>
        <a href="#/" className="menu-trigger">
          <span className="line" />
        </a>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="progress form-completion" style={{marginBottom: 0}}>
          <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow={40} aria-valuemin={0} aria-valuemax={100} style={{width: '40%'}}>
            Profile 40% Finished
          </div>
        </div>
      </div>
    </div>
    <div className="container buffer">
      <div className="row">
        <div className="col-sm-12 col-md-12">
          <div className="tab-content">
            <div role="tabpanel" className="tab-pane fade in active" id="home">
              <div className="panel panel-default myprofile">
                <div className="panel-heading">
                  <div className="panel-title">
                    My Profile
                    <a data-original-title="Tell employers a little bit about yourself. Share what you like doing and what makes you happy in a job. You may want to write about your future career plans or highlight past achievements. Sum up who you are and how your skills could benefit an employer." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                  </div>
                </div>
                <div className="panel-body">
                  <form action="/jobseekers/careerprofile" method="post">
                    <input name="__RequestVerificationToken" defaultValue="H_4Xe5CHZ4ndsgkmw_8CSyi9UQoDNc95DR_4LJ67goK98UL_zZhrx0VUZSbLFc1va8IPFvtS8UcQKJ9uzwFibM3_brUKeS-a6wYkyVvSzYYD6kwnALpkpMHapnpmXgYhXhvqxg2" type="hidden" />
                    <div className="validation-summary-valid" data-valmsg-summary="true">
                      <div className="icon icon__error" />
                      <h2>The following errors were encountered:</h2>
                      <ul>
                        <li className="is-hidden" />
                      </ul>
                    </div>
                  </form>
                  <div className="col-sm-8">
                    <div className="m-editabledisplayview" data-editabledisplayview="True" id="AboutMeView">
                      <div className="m-displayview" data-displayview="True">
                        <div className="header-utility">
                          <h3>About Me</h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">About Me</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          I am a confident, highly driven graduate with practical hands-on customer service and travel experience. Resourceful and proactive, I combine effective communication skills with detailed product knowledge to identify commercial opportunities and deliver
                          a satisfactory outcome for both customer and company whilst working alone and as part of a larger team. I am currently looking for an opportunity to further my career within the travel and tourism industry.<br /><br />I am an award-winning
                          Senior Sales Executive with over eight years managerial and client handling experience. An effective communicator, I have a proven track-record of combining a strong product knowledge with excellent negotiation skills.</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="m-editabledisplayview" data-editabledisplayview="True" id="ProfilePictureView">
                      <div className="m-displayview" data-displayview="True">
                        <div className="header-utility">
                          <h3>Profile picture</h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-upload" />
                              Upload
                              <span className="sr-only">Profile Picture</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove your profile picture?" data-confirm-title="Remove Profile Picture?" data-controlleractionurl="/jobseekers/careerprofile/deleteprofilepicture" data-removebutton="True" id="RemoveProfilePictureButton" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Profile Picture</span>
                            </button>
                          </div>
                        </div>
                        <input data-val="true" data-val-number="The field ProfilePictureId must be a number." data-val-required="The ProfilePictureId field is required." id="ProfilePictureId" name="ProfilePictureId" defaultValue={244} type="hidden" />
                        <img alt="Profile picture" className="profilepicture" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 socialprofiles">
                    <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="SocialProfiles">
                      <div aria-selected="false" role="option" data-uid="0d58b841-12be-4197-b184-0ef21e11cec9" className="m-listview-item m-listview-firstitem m-listview-lastitem" data-item="true">
                        <div className="header-utility">
                          <span className="socialicon fa fa-2x fa-linkedin-square" />
                          <h3>
                            LinkedIn Profile
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">LinkedIn Profile</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <a title=". External link. Opens in a new window." href="https://www.linkedin.com/in/anthony-holt-58788496" target="_blank">
                            https://www.linkedin.com/in/anthony-holt-58788496
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#work" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Work History
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="work">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    Work History
                    <a data-original-title="List your jobs here. Include your job, the organisation you worked for and the years you worked there. Write a short sentence about your duties and your achievements." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                    <button className="btn btn-secondary btn-sm formadd" data-additembutton="True" data-targetlistview="#Employment" type="button">
                      <span className="fa fa-plus" />
                      Add
                      <span className="sr-only">Work History Item</span>
                    </button>
                  </div>
                </div>
                <div className="panel-body">
                  <fieldset>
                    <legend className="sr-only">
                      Work History
                    </legend>
                    <form action="/jobseekers/careerprofile" method="post">
                      <input name="__RequestVerificationToken" defaultValue="RtuNle0swlhzRuh6aBCXQAFHQ4BX3psjleiqDzV1XPUcYFLRLc8E00UsagI0KEj6laQYeAHNReJZkNnte8qVJbX84osP2nqdc10RldZnEwapXdJE3sQek7AV_oohiP7Xrvg2TA2" type="hidden" />
                      <div className="validation-summary-valid" data-valmsg-summary="true">
                        <div className="icon icon__error" />
                        <h2>The following errors were encountered:</h2>
                        <ul>
                          <li className="is-hidden" />
                        </ul>
                      </div>
                    </form>
                    <div role="listbox" data-role="listview" className="m-listview" data-listview="True" data-targetavailablelistview="#AvailableEmployment" id="Employment">
                      <div aria-selected="false" role="option" data-uid="8d057d3b-7de5-4929-ae71-f83788b5f59e" className="m-listview-item m-listview-firstitem m-listview-lastitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            testing Industry testing Industry
                            (Information &amp; Communication Technology (ICT))
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Work history item testing Industry testing Industry Information &amp; Communication Technology (ICT)</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this work history?" data-confirm-title="Remove Work History?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Work history item testing Industry testing Industry Information &amp; Communication Technology (ICT)</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <p>
                            testing
                            <br /> August 2006 to May 2015
                            <span />
                            <br />
                            <i>testing</i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="panel-footer">
                  <fieldset className="available">
                    <legend>
                      Manage Additional Work History
                      <a data-original-title="Details of the job placements and work activities you have undertaken while participating in employment service programmes are listed for your reference. You can add these records to your profile to enhance your work history." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                    </legend>
                    <div className="alert alert-danger hidden" role="alert" />
                    <div id="AddAvailableEmploymentItemContainer" />
                    <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="AvailableEmployment">
                      <div aria-selected="false" role="option" data-uid="5574fe4b-a22c-460c-8570-2819bdfcb806" className="m-listview-item m-listview-firstitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Box Hill Generic Paid Employment
                          </h3>
                          <div className="actions">
                            <button className="btn btn-secondary btn-sm formadd" data-addavailableitem-button="True" data-addavailableitem-container="#AddAvailableEmploymentItemContainer" data-controlleractionurl="/jobseekers/careerprofile/loadavailableemploymentitem?activityId=40927901" data-targetlistview="#Employment" type="button">
                              <span className="fa fa-plus" />
                              Add to Work History
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <p>
                            The Salvation Army Employment Plus- Box Hill
                            <br /> December 2013 to December 2014
                            <span />
                            <br />
                            <i>Generic paid employment for Box Hill Site</i>
                          </p>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="e5767deb-518f-4906-875c-724589463ab8" className="m-listview-item m-listview-altitem m-listview-lastitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Window Cleaner
                            (Trades &amp; Services)
                          </h3>
                          <div className="actions">
                            <button className="btn btn-secondary btn-sm formadd" data-addavailableitem-button="True" data-addavailableitem-container="#AddAvailableEmploymentItemContainer" data-controlleractionurl="/jobseekers/careerprofile/loadavailableemploymentitem?referralId=88293707" data-targetlistview="#Employment" type="button">
                              <span className="fa fa-plus" />
                              Add to Work History
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <p>
                            SQUEAKY CLEAN PROFESSIONAL WINDOW CLEANERS PTY. LTD.
                            <br />
                            December 2013 to Present
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#home" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: My Profile
                </a>
              </div>
              <div className="action-toolbar buffer">
                <a href="#education" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Education History
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="education">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    Education History
                    <a data-original-title="List your education here. Include any certificates, awards or achievements during your studies that could help you get a job." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                    <button className="btn btn-secondary btn-sm formadd" data-additembutton="True" data-targetlistview="#Education" type="button">
                      <span className="fa fa-plus" />
                      Add
                      <span className="sr-only">Education History Item</span>
                    </button>
                  </div>
                </div>
                <div className="panel-body">
                  <fieldset>
                    <legend className="sr-only">
                      Education History
                    </legend>
                    <form action="/jobseekers/careerprofile" method="post">
                      <input name="__RequestVerificationToken" defaultValue="rj1kuuPK_r9xdWPBL1n9j7Ar4gs_UibozUkyatia7XTOk5V_V1BRpEA_2Kh9W0Oo9BrabBdGb7tbXuJp8h7M7VSYEyEeIK7ZgRogr7w-uDlJrVD5qUoPAWZ_KIJaxHoyjr6SxA2" type="hidden" />
                      <div className="validation-summary-valid" data-valmsg-summary="true">
                        <div className="icon icon__error" />
                        <h2>The following errors were encountered:</h2>
                        <ul>
                          <li className="is-hidden" />
                        </ul>
                      </div>
                    </form>
                    <div role="listbox" data-role="listview" className="m-listview" data-listview="True" data-targetavailablelistview="#AvailableEducation" id="Education">
                      <div aria-selected="false" role="option" data-uid="0d8ce2eb-fe82-4871-999a-d2c43800ad04" className="m-listview-item m-listview-firstitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Certificate IV, 
                            Cert 4
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Education history item Certificate IV Cert 4</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this education history?" data-confirm-title="Remove Education History?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Education history item Certificate IV Cert 4</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <p>
                            ACT Tafe , 2006
                            <br />
                            <i>Advanced Business Analysts, Development and Testing Techniques.</i>
                          </p>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="d1d1f4f5-ed03-4cb1-af17-6198386b98b2" className="m-listview-item m-listview-altitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Certificate I, 
                            Advanced Testing
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Education history item Certificate I Advanced Testing</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this education history?" data-confirm-title="Remove Education History?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Education history item Certificate I Advanced Testing</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <p>
                            Online course , 2001
                            <br />
                            <i>Advanced testing techniques</i>
                          </p>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="0ebd1cc6-8de6-426f-aa1c-bb37681bd46e" className="m-listview-item m-listview-lastitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Certificate I, 
                            Testing basics
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Education history item Certificate I Testing basics</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this education history?" data-confirm-title="Remove Education History?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Education history item Certificate I Testing basics</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <p>
                            Online course , 2000
                            <br />
                            <i>Testing basic disaplines</i>
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="panel-footer">
                  <fieldset className="available">
                    <legend>
                      Manage Additional Education History
                      <a data-original-title="Details of the education activities you have undertaken while participating in employment service programmes are listed for your reference. You can add these records to your profile to enhance your education history." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                    </legend>
                    <div className="alert alert-danger hidden" role="alert">You have added the maximum number of education history.</div>
                    <div id="AddAvailableEducationItemContainer" />
                    <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="AvailableEducation">
                      <div className="m-emptyview" data-emptyview="True">You have no additional education history.</div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#work" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: Work History
                </a>
              </div>
              <div className="action-toolbar buffer">
                <a href="#skills" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Skills
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="skills">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    Skills
                    <a data-original-title="List skills that are relevant to the job that you want. For example, do you have good communications skills, computer skills, physical strength or work well within a team?" className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                    <button className="btn btn-secondary btn-sm formadd" data-additembutton="True" data-targetlistview="#Skills" type="button">
                      <span className="fa fa-plus" />
                      Add
                      <span className="sr-only">Skill</span>
                    </button>
                  </div>
                </div>
                <div className="panel-body">
                  <fieldset>
                    <legend className="sr-only">
                      Education History
                    </legend>
                    <form action="/jobseekers/careerprofile" method="post">
                      <input name="__RequestVerificationToken" defaultValue="qg-3FeyP_MDt8lRvZD2QJDTF1Qv-FSwUf8Ocwsgtsg4QhNHWRUf_ecSwtLvVy4CGLR0tL6iuSbBBq7ocDOjJ0X1uCB7epI-T2FaG8MumXTINZcsswRQul_H0iSDoR0o2YvEbVQ2" type="hidden" />
                      <div className="validation-summary-valid" data-valmsg-summary="true">
                        <div className="icon icon__error" />
                        <h2>The following errors were encountered:</h2>
                        <ul>
                          <li className="is-hidden" />
                        </ul>
                      </div>
                    </form>
                    <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="Skills">
                      <div aria-selected="false" role="option" data-uid="b9ccac3a-b1f5-43e3-9599-e2bb63241381" className="m-listview-item m-listview-firstitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Software Testing
                            <span className="fa fa-star topskill" title="Software Testing is a top skill.">
                              <span className="sr-only">Software Testing is a top skill.</span>
                            </span>
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Skill Software Testing</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this skill?" data-confirm-title="Remove Skill?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Skill Software Testing</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="087a6b0b-b512-429b-b1ee-36ded53743cb" className="m-listview-item m-listview-altitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Business Development
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Skill Business Development</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this skill?" data-confirm-title="Remove Skill?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Skill Business Development</span>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="9bd42474-7a75-4b48-8111-1c67de37ab85" className="m-listview-item m-listview-lastitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Software Developer
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Skill Software Developer</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this skill?" data-confirm-title="Remove Skill?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Skill Software Developer</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#education" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: Education History
                </a>
              </div>
              <div className="action-toolbar buffer">
                <a href="#portfolio" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Portfolio
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="portfolio">
              <div className="panel panel-default portfolio">
                <div className="panel-heading">
                  <div className="panel-title">
                    Portfolio
                    <a data-original-title="Upload up to 10 images of previous work you have done. For example, if you have completed a relevant professional or personal project add a picture and describe how it shows your experience, skills and capabilities." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                    <button className="btn btn-secondary btn-sm formadd" data-additembutton="True" data-addportfoliopicturebutton="True" data-targetlistview="#PortfolioPictures" type="button">
                      <span className="fa fa-plus" />
                      Add
                      <span className="sr-only">Portfolio Picture</span>
                    </button>
                  </div>
                </div>
                <div className="panel-body">
                  <fieldset>
                    <legend className="sr-only">
                      Portfolio
                    </legend>
                    <form action="/jobseekers/careerprofile" method="post">
                      <input name="__RequestVerificationToken" defaultValue="apkISYqTmsKIlnvsfZ4GmFPfNrb63VBvjLt3aYXAkqjKdBF402ZTaZ7DzZtbUiYIWY1a_MVAFkB0Ixv96Um6MwTIvvL7TKELhEawUImqDMiTcSCcYecb_-eGelmoGVx1Pa_N3A2" type="hidden" />
                      <div className="validation-summary-valid" data-valmsg-summary="true">
                        <div className="icon icon__error" />
                        <h2>The following errors were encountered:</h2>
                        <ul>
                          <li className="is-hidden" />
                        </ul>
                      </div>
                    </form>
                    <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="PortfolioPictures">
                      <div aria-selected="false" role="option" data-uid="91a7dbda-0943-49eb-be43-db4d50cbc78e" className="m-listview-item m-listview-firstitem" data-item="true">
                        <div className="header-utility">
                          <h3 aria-label="Title">
                            old
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this portfolio picture?" data-confirm-title="Remove Portfolio Picture?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <div className="row">
                            <div className="col-sm-4">
                              <a href="#" data-toggle="modal" data-target="#PortfolioPictureModal_196">
                                <img src="/jobseekers/careerprofileajax/picture?pictureId=196" alt="Portfolio Picture" className="profilepicture" />
                              </a>
                              <div aria-labelledby="PortfolioPictureModal_196_Label" className="modal modal-vacenter fade" id="PortfolioPictureModal_196" role="dialog" tabIndex={-1}>
                                <div className="modal-lg modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                                        <span aria-hidden="true">×</span>
                                      </button>
                                      <h2 id="PortfolioPictureModal_196_Label" className="modal-title">Portfolio Picture</h2>
                                    </div>
                                    <div className="modal-body">
                                      <img src="/jobseekers/careerprofileajax/picture?pictureId=196" alt="Portfolio Picture" className="profilepicture" />
                                    </div>
                                    <div className="modal-footer">
                                      <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-8">
                              <dl>
                                <dt className="form__label">Description</dt>
                                <dd className="form__value novalue">
                                  No description. </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="c09a4219-347e-4001-95e5-20fa267efc07" className="m-listview-item m-listview-altitem" data-item="true">
                        <div className="header-utility">
                          <h3 aria-label="Title">
                            river
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this portfolio picture?" data-confirm-title="Remove Portfolio Picture?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <div className="row">
                            <div className="col-sm-4">
                              <a href="#" data-toggle="modal" data-target="#PortfolioPictureModal_198">
                                <img src="/jobseekers/careerprofileajax/picture?pictureId=198" alt="Portfolio Picture" className="profilepicture" />
                              </a>
                              <div aria-labelledby="PortfolioPictureModal_198_Label" className="modal modal-vacenter fade" id="PortfolioPictureModal_198" role="dialog" tabIndex={-1}>
                                <div className="modal-lg modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                                        <span aria-hidden="true">×</span>
                                      </button>
                                      <h2 id="PortfolioPictureModal_198_Label" className="modal-title">Portfolio Picture</h2>
                                    </div>
                                    <div className="modal-body">
                                      <img src="/jobseekers/careerprofileajax/picture?pictureId=198" alt="Portfolio Picture" className="profilepicture" />
                                    </div>
                                    <div className="modal-footer">
                                      <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-8">
                              <dl>
                                <dt className="form__label">Description</dt>
                                <dd className="form__value novalue">
                                  No description. </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="19da3811-dd00-4495-aab9-a20aeff4cefc" className="m-listview-item" data-item="true">
                        <div className="header-utility">
                          <h3 aria-label="Title">
                            Not listening
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this portfolio picture?" data-confirm-title="Remove Portfolio Picture?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <div className="row">
                            <div className="col-sm-4">
                              <a href="#" data-toggle="modal" data-target="#PortfolioPictureModal_197">
                                <img src="/jobseekers/careerprofileajax/picture?pictureId=197" alt="Portfolio Picture" className="profilepicture" />
                              </a>
                              <div aria-labelledby="PortfolioPictureModal_197_Label" className="modal modal-vacenter fade" id="PortfolioPictureModal_197" role="dialog" tabIndex={-1}>
                                <div className="modal-lg modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                                        <span aria-hidden="true">×</span>
                                      </button>
                                      <h2 id="PortfolioPictureModal_197_Label" className="modal-title">Portfolio Picture</h2>
                                    </div>
                                    <div className="modal-body">
                                      <img src="/jobseekers/careerprofileajax/picture?pictureId=197" alt="Portfolio Picture" className="profilepicture" />
                                    </div>
                                    <div className="modal-footer">
                                      <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-8">
                              <dl>
                                <dt className="form__label">Description</dt>
                                <dd className="form__value">
                                  I'm not listening. </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="d8c675ea-881a-4fb2-ba52-cc528c5b1b70" className="m-listview-item m-listview-altitem" data-item="true">
                        <div className="header-utility">
                          <h3 aria-label="Title">
                            vw
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this portfolio picture?" data-confirm-title="Remove Portfolio Picture?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <div className="row">
                            <div className="col-sm-4">
                              <a href="#" data-toggle="modal" data-target="#PortfolioPictureModal_195">
                                <img src="/jobseekers/careerprofileajax/picture?pictureId=195" alt="Portfolio Picture" className="profilepicture" />
                              </a>
                              <div aria-labelledby="PortfolioPictureModal_195_Label" className="modal modal-vacenter fade" id="PortfolioPictureModal_195" role="dialog" tabIndex={-1}>
                                <div className="modal-lg modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                                        <span aria-hidden="true">×</span>
                                      </button>
                                      <h2 id="PortfolioPictureModal_195_Label" className="modal-title">Portfolio Picture</h2></div>
                                    <div className="modal-body">
                                      <img src="/jobseekers/careerprofileajax/picture?pictureId=195" alt="Portfolio Picture" className="profilepicture" />
                                    </div>
                                    <div className="modal-footer">
                                      <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-8">
                              <dl>
                                <dt className="form__label">Description</dt>
                                <dd className="form__value novalue">
                                  No description. </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div aria-selected="false" role="option" data-uid="5b561f60-84b8-42c0-87ca-9918910e1ab5" className="m-listview-item m-listview-lastitem" data-item="true">
                        <div className="header-utility">
                          <h3 aria-label="Title">
                            girl
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />Edit<span className="sr-only">Portfolio Picture</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this portfolio picture?" data-confirm-title="Remove Portfolio Picture?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Portfolio Picture</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <div className="row">
                            <div className="col-sm-4">
                              <a href="#" data-toggle="modal" data-target="#PortfolioPictureModal_192">
                                <img src="/jobseekers/careerprofileajax/picture?pictureId=192" alt="Portfolio Picture" className="profilepicture" />
                              </a>
                              <div aria-labelledby="PortfolioPictureModal_192_Label" className="modal modal-vacenter fade" id="PortfolioPictureModal_192" role="dialog" tabIndex={-1}>
                                <div className="modal-lg modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <button aria-label="Close" className="close" data-dismiss="modal" type="button">
                                        <span aria-hidden="true">×</span>
                                      </button>
                                      <h2 id="PortfolioPictureModal_192_Label" className="modal-title">Portfolio Picture</h2>
                                    </div>
                                    <div className="modal-body">
                                      <img src="/jobseekers/careerprofileajax/picture?pictureId=192" alt="Portfolio Picture" className="profilepicture" />
                                    </div>
                                    <div className="modal-footer">
                                      <button className="btn btn-default" data-dismiss="modal" type="button">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-sm-8">
                              <dl>
                                <dt className="form__label">Description</dt>
                                <dd className="form__value novalue">
                                  No description. </dd>
                              </dl>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#skills" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: Skills
                </a>
              </div>
              <div className="action-toolbar buffer">
                <a href="#licences" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Licences &amp; Transport
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="licences">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Licences &amp; Accreditations
                        <a data-original-title="Do you have licences or certificates that support your work? Include things like your driver's licence, first aid certificates, forklift licence or food handling certificates." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                        <button className="btn btn-secondary btn-sm formadd" data-additembutton="True" data-targetlistview="#Licences" type="button"><span className="fa fa-plus" />Add<span className="sr-only">Licence</span></button>
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Education History
                        </legend>
                        <form action="/jobseekers/careerprofile" method="post"><input name="__RequestVerificationToken" defaultValue="r7nA0NdY9GUQ-OUx5M8O-bJK2jt5aYdg6e2OMOo1S1QLmDnkWOMElTm0NP_ehts8t8uonHK3zgB60qtHk8R_J6_MnNaSrFy9SlPwas-7jkwR3O4I9ymiGylldFEfZRyCnqmmwA2" type="hidden" />
                          <div className="validation-summary-valid" data-valmsg-summary="true">
                            <div className="icon icon__error" />
                            <h2>The following errors were encountered:</h2>
                            <ul>
                              <li className="is-hidden" />
                            </ul>
                          </div>
                        </form>
                        <div id="Licences" role="listbox" data-role="listview" className="m-listview" data-listview="True">
                          <div aria-selected="false" role="option" data-uid="3dd093e8-12bb-43ea-834b-49737bc4acbf" className="m-listview-item m-listview-firstitem" data-item="true">
                            <div className="header-utility">
                              <h3>NSW - Loadshifting - Forklift Truck</h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this licence?" data-confirm-title="Remove Licence?" data-removebutton="True" type="button"><span className="fa fa-trash" />Remove<span className="sr-only">Licence NSW Loadshifting - Forklift Truck</span></button>
                              </div>
                            </div>
                          </div>
                          <div aria-selected="false" role="option" data-uid="97054c76-cfa3-4f67-b2ca-b2ea1cabe2ff" className="m-listview-item m-listview-altitem m-listview-lastitem" data-item="true">
                            <div className="header-utility">
                              <h3>NSW - Motor Vehicle - Heavy Rigid vehicle</h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this licence?" data-confirm-title="Remove Licence?" data-removebutton="True" type="button"><span className="fa fa-trash" />Remove<span className="sr-only">Licence NSW Motor Vehicle - Heavy Rigid vehicle</span></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Transport
                        <a data-original-title="Do you have your own car or motorbike? Sometimes you won't be able get to a job by public transport or you may need to use your own vehicle for work." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Transport
                        </legend>
                        <div className="m-editabledisplayview" data-editabledisplayview="True" id="TransportView">
                          <div className="m-displayview" data-displayview="True">
                            <div className="header-utility">
                              <h3>I have my own transport.</h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button"><span className="fa fa-pencil" />Edit<span className="sr-only">Transport</span></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#portfolio" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: Portfolio
                </a>
              </div>
              <div className="action-toolbar buffer">
                <a href="#refeeres" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Refeeres
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="refeeres">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <div className="panel-title">
                    Referees
                    <a data-original-title="Bosses or supervisors from previous jobs can be great referees. If you help in the community with sport, religion or social activities, community leaders are also good referees. List their name, title, phone number and email address if possible." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                    <button className="btn btn-secondary btn-sm formadd" data-additembutton="True" data-targetlistview="#Referees" type="button">
                      <span className="fa fa-plus" />
                      Add
                      <span className="sr-only">Referee</span>
                    </button>
                  </div>
                </div>
                <div className="panel-body">
                  <fieldset>
                    <legend className="sr-only">
                      Referees
                    </legend>
                    <form action="/jobseekers/careerprofile" method="post">
                      <input name="__RequestVerificationToken" defaultValue="q6YF-EqxxsT7Hu42KdjXkAycyBLmudN7ShvVwWmuC-UeBZfUFywbJRJHlmCpnZojI49QF00_9WIb7-ml_oJXPSF0qkf9kFuAzvx0hoJNJJyAJs_i9s7YIiXXqwDJG_JfhuA3JQ2" type="hidden" />
                      <div className="validation-summary-valid" data-valmsg-summary="true">
                        <div className="icon icon__error" />
                        <h2>The following errors were encountered:</h2>
                        <ul>
                          <li className="is-hidden" />
                        </ul>
                      </div>
                    </form>
                    <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="Referees">
                      <div aria-selected="false" role="option" data-uid="022df92c-7c54-4817-9d1e-1d9ea5ca2d64" className="m-listview-item m-listview-firstitem m-listview-lastitem" data-item="true">
                        <div className="header-utility">
                          <h3>
                            Tony
                            <span>(Testing)</span>
                          </h3>
                          <div className="actions">
                            <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                              <span className="fa fa-pencil" />
                              Edit
                              <span className="sr-only">Referee Tony Testing</span>
                            </button>
                            <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this referee?" data-confirm-title="Remove Referee?" data-removebutton="True" type="button">
                              <span className="fa fa-trash" />
                              Remove
                              <span className="sr-only">Referee Tony Testing</span>
                            </button>
                          </div>
                        </div>
                        <div className="maintext">
                          <span>0261219999</span>
                          <span>|</span>
                          <span>Tony@testing.com</span>
                          <br />
                          <span>Director</span>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#licences" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: Licences &amp; Transport
                </a>
              </div>
              <div className="action-toolbar buffer">
                <a href="#reviews" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Reviews
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="reviews">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Reviews
                        <a data-original-title="List any video or audio reviews that have been completed by current or previous supervisors about your participation in employment service programmes and activities. These reviews can be shared with potential employers when applying for positions." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Reviews
                        </legend>
                        <form action="/jobseekers/careerprofile" method="post"><input name="__RequestVerificationToken" defaultValue="004G5puOHRs8JMSRnMc7Crwh-1ji_bQeHbGAAtqAOnhUsRdsIOPLKtG0rRZmbe3IqBsXR90tJ-pBXcF4bNKjDzOi3L4QlSPhZZHn86VaRFbeT1FeJt91w04atW-KtH3gAr8Tjg2" type="hidden" />
                          <div className="validation-summary-valid" data-valmsg-summary="true">
                            <div className="icon icon__error" />
                            <h2>The following errors were encountered:</h2>
                            <ul>
                              <li className="is-hidden" />
                            </ul>
                          </div>
                        </form>
                        <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="MediaReferences">
                          <div className="m-emptyview" data-emptyview="True">You do have any reviews.</div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Evaluations
                        <a data-original-title="List any evaluations that have been completed by current or previous supervisors about your participation in employment service programmes and activities. These evaluations can be shown on your profile so employers can see details of your workplace participation and achievements. Evaluation ratings can be scored from ‘Strongly agree’ to ‘Strongly disagree’ or ‘Not applicable’ to show how well you meet each criterion. You can choose whether employers see these evaluations or not." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Evaluations
                        </legend>
                        <form action="/jobseekers/careerprofile" method="post"><input name="__RequestVerificationToken" defaultValue="-bQFE13JcG8dya8ImrXEmsxtwzusWIGdQVuYDq-7yoLg_YKQgjOS2xo8GQHjPFSELe9RLiwXmv8SBRG-S9jiiLUv2iy30c33DiSkuHhCS7WwgyAikt_MHHhTpTmvIOIAELvQHQ2" type="hidden" />
                          <div className="validation-summary-valid" data-valmsg-summary="true">
                            <div className="icon icon__error" />
                            <h2>The following errors were encountered:</h2>
                            <ul>
                              <li className="is-hidden" />
                            </ul>
                          </div>
                        </form>
                        <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="Evaluations">
                          <div className="m-emptyview" data-emptyview="True">You do have any evaluations.</div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#refeeres" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: Refeeres
                </a>
              </div>
              <div className="action-toolbar buffer">
                <a href="#directions" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Directions
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="directions">
              <div className="row">
                <div className="col-md-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Occupations
                        <a data-original-title="Choose an occupation you’d like to do. First select the industry and then select the Occupation/s that most suit you. You can set up 10 occupations across multiple industries." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Occupations
                        </legend>
                        <div className="m-editabledisplayview" data-editabledisplayview="True" id="OccupationsView">
                          <div className="m-displayview" data-displayview="True">
                            <div className="header-utility">
                              <h3>I am looking for work in these occupations:</h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                                  <span className="fa fa-pencil" />
                                  Edit
                                  <span className="sr-only">Occupations</span>
                                </button>
                              </div>
                            </div>
                            <div className="maintext">
                              <ul>
                                <li>Software and Applications Programmers</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Locations
                        <a data-original-title="Let us know where you are able to work so we only match you with jobs in these locations. You can select up to three locations. If you're searching across a wide area, select one of the 'ALL' options, eg NSW (ALL)." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Locations
                        </legend>
                        <div className="m-editabledisplayview" data-editabledisplayview="True" id="LocationsView">
                          <div className="m-displayview" data-displayview="True">
                            <div className="header-utility">
                              <h3>I can work in these locations:</h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                                  <span className="fa fa-pencil" />
                                  Edit
                                  <span className="sr-only">Locations</span>
                                </button>
                              </div>
                            </div>
                            <div className="maintext">
                              <ul>
                                <li>WA - Regional - Midlands/Wheatbelt </li>
                                <li>WA - Regional - South West</li>
                                <li>NSW (ALL)</li>
                              </ul>
                              <p>
                                <strong>You have added the maximum number of locations.</strong>
                              </p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Tenure Types
                        <a data-original-title="Choose whether you'd like to work Full time, Part time or Casual. Sometimes Part time or Casual jobs can lead to Full time employment." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Tenure Types
                        </legend>
                        <div className="m-editabledisplayview" data-editabledisplayview="True" id="TenureTypesView">
                          <div className="m-displayview" data-displayview="True">
                            <div className="header-utility">
                              <h3>I am available for:</h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                                  <span className="fa fa-pencil" />
                                  Edit
                                  <span className="sr-only">Tenure Types</span>
                                </button>
                              </div>
                            </div>
                            <div className="maintext">
                              <ul>
                                <li>Full time position</li>
                                <li>Part time position</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Job Types
                        <a data-original-title="Select the type of job you are interested in, for example, apprenticeship or traineeship. Also, let Employers know if you are willing to relocate for work, or take a Fly in – Fly out job." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Job Types
                        </legend>
                        <div className="m-editabledisplayview" data-editabledisplayview="True" id="JobTypesView">
                          <div className="m-displayview" data-displayview="True">
                            <div className="header-utility">
                              <h3>I am interested in:</h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                                  <span className="fa fa-pencil" />
                                  Edit
                                  <span className="sr-only">Job Types</span>
                                </button>
                              </div>
                            </div>
                            <div className="maintext">
                              <ul>
                                <li>Relocating for Suitable Positions</li>
                                <li>Shift Work Positions</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12">
                  <div className="panel panel-default availability">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Availability
                        <a data-original-title="Tell us when you are available to work and what hours suit you best. The more flexible you can be, the better." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Availability
                        </legend>
                        <div className="m-editabledisplayview" data-editabledisplayview="True" id="AvailabilityView">
                          <div className="m-displayview" data-displayview="True">
                            <div className="header-utility">
                              <h3>I am available:</h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formedit" data-editbutton="True" type="button">
                                  <span className="fa fa-pencil" />
                                  Edit
                                  <span className="sr-only">Availability</span>
                                </button>
                              </div>
                            </div>
                            <div className="maintext">
                              <ul>
                                <li>Monday - Mornings, Afternoons</li>
                                <li>Tuesday - Mornings, Afternoons</li>
                                <li>Wednesday - Mornings, Afternoons</li>
                                <li>Thursday - Mornings, Afternoons</li>
                                <li>Friday - Mornings, Afternoons</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#reviews" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: Reviews
                </a>
              </div>
              <div className="action-toolbar buffer">
                <a href="#resume" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-right">
                  Next: Resume
                  <i className="fa fa-angle-right" />
                </a>
              </div>
            </div>
            <div role="tabpanel" className="tab-pane fade" id="resume">
              <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Resumes
                        <a data-original-title="Your resume is an important part of your JobSearch journey. Also referred to as a 'curriculum vitae' or 'CV' your resume should summarise your work history, experience, skills and any relevant qualifications you have. It should show the employer that you have what they are looking for. There are a number of online tools available, including templates within Microsoft Word to help you create your resume. You can also automatically generate a resume from your Career Profile information by clicking on the 'Export as Resume' button on this page." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                        <button className="btn btn-secondary btn-sm formadd" data-additembutton="True" data-targetlistview="#Resumes" type="button">
                          <span className="fa fa-upload" />
                          Upload
                          <span className="sr-only">Resume</span>
                        </button>
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Resumes
                        </legend>
                        <form action="/jobseekers/careerprofile" method="post">
                          <input name="__RequestVerificationToken" defaultValue="8cura5kLbScAzBu7c75iaV9cN2hPbJDG-9DJpZxFMqgchCYgCwRhpur85Jx3Duqro4YxNMUUcaObs_JVgEt8ebNrHtloUv0qLBq492qLBVgzUp3QmluevVTmMqHT9HzJY5Fg5A2" type="hidden" />
                          <div className="validation-summary-valid" data-valmsg-summary="true">
                            <div className="icon icon__error" />
                            <h2>The following errors were encountered:</h2>
                            <ul>
                              <li className="is-hidden" />
                            </ul>
                          </div>
                        </form>
                        <p>You can save up to five resumes.</p>
                        <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="Resumes">
                          <div aria-selected="false" role="option" data-uid="bc8af967-4dec-49fb-bbda-3e95e1efe1b3" className="m-listview-item m-listview-firstitem m-listview-lastitem" data-item="true">
                            <div className="header-utility">
                              <h3>
                                <span className="fa fa-lg fa-file-pdf-o" />
                                <a href="/jobseekers/careerprofile/downloaddocument?DocumentId=2000306" title="View Resume named resume">
                                  <span className="maintext">
                                    resume
                                  </span>
                                  <span className="sr-only">View Resume named resume</span>
                                </a>
                              </h3>
                              <div className="actions">
                                <button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this resume?" data-confirm-title="Remove Resume?" data-removebutton="True" type="button">
                                  <span className="fa fa-trash" />
                                  Remove
                                  <span className="sr-only">Document Resume named resume</span>
                                </button>
                              </div>
                            </div>
                            <div className="maintext">
                              <p>
                                06/02/2016
                                <br />
                                <a href="/jobseekers/careerprofile/emailresume?ResumeId=2000306">Email Resume</a>
                              </p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 col-md-6">
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      <div className="panel-title">
                        Cover Letters
                        <a data-original-title="A cover letter is the first step in introducing yourself to potential employers. Your cover letter should be more specific than your resume, targeted at the job you are applying for." className="m-tooltip fa fa-info-circle" data-html="true" data-placement="right" data-toggle="tooltip" title />
                        <button className="btn btn-secondary btn-sm formadd" data-additembutton="True" data-targetlistview="#CoverLetters" type="button">
                          <span className="fa fa-upload" />
                          Upload
                          <span className="sr-only">Cover Letter</span>
                        </button>
                      </div>
                    </div>
                    <div className="panel-body">
                      <fieldset>
                        <legend className="sr-only">
                          Cover Letters
                        </legend>
                        <form action="/jobseekers/careerprofile" method="post">
                          <input name="__RequestVerificationToken" defaultValue="Kfc2ObiqBYtehVBWP48lhAe4mWBkojlPJiEMcQNyzYiTLpfXarmKuLXkEw4ImmAqcnkqF-9sqVUH-CfS02WtdljsPek9TLGc0jVo_mDyNAnMH7UJhu9q9Yo2twXMWUr_rR6gdw2" type="hidden" />
                          <div className="validation-summary-valid" data-valmsg-summary="true">
                            <div className="icon icon__error" />
                            <h2>The following errors were encountered:</h2>
                            <ul>
                              <li className="is-hidden" />
                            </ul>
                          </div>
                        </form>
                        <p>You can save up to five cover letters.</p>
                        <div role="listbox" data-role="listview" className="m-listview" data-listview="True" id="CoverLetters">
                          <div aria-selected="false" role="option" data-uid="0629b373-1e71-4f13-b0e5-a7038d8d2c9f" className="m-listview-item m-listview-firstitem m-listview-lastitem" data-item="true">
                            <div className="header-utility">
                              <h3>
                                <span className="fa fa-lg fa-file-pdf-o" />
                                <a href="/jobseekers/careerprofile/downloaddocument?DocumentId=2000487" title="View Cover Letter named Cover letter">
                                  <span className="maintext">
                                    Cover letter
                                  </span>
                                  <span className="sr-only">View Cover Letter named Cover letter</span>
                                </a>
                              </h3>
                              <div className="actions"><button className="btn btn-default btn-sm formremove" data-confirm="Are you sure you want to remove this cover letter?" data-confirm-title="Remove Cover Letter?" data-removebutton="True" type="button">
                                  <span className="fa fa-trash" />
                                  Remove
                                  <span className="sr-only">Document Cover Letter named Cover letter</span>
                                </button>
                              </div>
                            </div>
                            <div className="maintext">
                              <p>
                                03/06/2016
                              </p>
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action-toolbar buffer">
                <a href="#directions" aria-controls="work" role="tab" data-toggle="tab" className="btn primary btn-lg pull-left">
                  <i className="fa fa-angle-left" />&nbsp;
                  Previous: Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="modal modal-login fade" id="myModal" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="panel-body">
            <fieldset>
              <legend className="sr-only">
                Template
              </legend>
              <div className="m-editabledisplayview" data-editabledisplayview="True" id="TemplateView">
                <form noValidate="novalidate" className="m-editview" data-editform="True" data-editview="True">
                  <input name="__RequestVerificationToken" defaultValue="BPoQ9rMbNrJXpf2vsu7IU3uPj9i7qlzp1MpBP4qPi6DbcZGxwk30RtZQdweA56spcg5lCPCIPrFunnQWjT7zblaIOfh03dRW9lQsI405IFNA-4SXzH6LZCqWpa_hWNGj4D21Jg2" type="hidden" />
                  <div className="well well-sm m-b-0">
                    <div className="validation-summary-valid" data-valmsg-summary="true">
                      <div className="icon icon__error" />
                      <h2>The following errors were encountered:</h2>
                      <ul>
                        <li className="is-hidden" />
                      </ul>
                    </div>
                    <div className="form-group valid">
                      <label htmlFor="TemplateId">Template
                        <img alt="Required" className="mandImage mandatory" src="/images/v4mandatory.png" />
                        <span className="sr-only">This is a required field.</span>
                      </label>
                      <select aria-describedby="TemplateId-error" aria-invalid="false" aria-required="true" className="form-control" data-selectlist="True" data-selectlist-type="DropDownList" data-val="true" data-val-number="The field Template must be a number." data-val-required="Template is required." id="TemplateId" name="TemplateId">
                        <option value>-- Please Select --</option>
                        <option value={2509}>Classic (Horizontal)</option>
                        <option value={2510}>Classic (Vertical)</option>
                        <option selected="selected" value={4565}>Modern (One Page)</option>
                        <option value={4566}>Modern (Tiles)</option>
                      </select>
                      <span className="field-validation-valid" data-valmsg-for="TemplateId" data-valmsg-replace="true" />
                    </div>
                    <div className="container-btn-sm m-t-0">
                      <button className="primary btn btn-sm formsave" data-savebutton="True" name="SaveButton" type="button">Save</button>
                      <button className="btn-default btn btn-sm formcancel" data-cancelbutton="True" name="CancelButton" type="button">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Profile;







