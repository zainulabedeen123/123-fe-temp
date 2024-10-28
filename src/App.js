import React, { Suspense, useContext, lazy, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';

import RepricingHistory from './components/Repricing/RepricingHistory';
import ReportHome from './components/Report/ReportHome';
import MyCatalogs from './pages/MyCatalogs';

  return (
    <>
      <NextUIProvider>
        <BrowserRouter>
          <Routes>

            <Route path='/' element={<Navbar />}>

              <Route path='/' element={<Dashboard />} >

                <Route path='/' element={<DashboardHome />} />

                <Route path='/dashboard/view' element={<ViewAll />} />

                <Route path='/dashboard/research' element={<ResearchHome />} />

                <Route path="/dashboard/research/keyword" element={<Keyword />} />

                <Route path='/dashboard/research/organicKeyword' element={<OrganicKeyword />} />

                <Route path='/dashboard/research/paidkeyword' element={<PaidKeyword />} />

                <Route path='/dashboard/research/ppcclicks' element={<Clicks />} />

                <Route path='/dashboard/research/seoclicks' element={<Clicks />} />

                <Route path="/dashboard/research/seoclickschange" element={<Change />} />

                <Route path="/dashboard/research/googleadsbudget" element={<Change />} />

                <Route path='/dashboard/research/paidcompetitors' element={<PaidCompetitors />} />

                <Route path='/dashboard/research/organiccompetitors' element={<OrganicCompetitors />} />

                <Route path='/dashboard/inventorymanagement' element={<Home />} />

                <Route path='/dashboard/inventorymanagement/table' element={<ViewAllTable />} />

              </Route>

              <Route path='/competitors' element={<Competitors />}>

                <Route path='/competitors' element={<CompetitorHome />} />

                <Route path='/competitors/addnewmarketplace' element={<AddNewMarketplace />} />

                <Route path='/competitors/montioredurl' element={<MonitoredURL />} />

                <Route path='/competitors/mapinfragment' element={<MapInfragment />} />

              </Route>

              <Route path='/repricing' element={<RepricingHome />}>

                <Route path='/repricing' element={<RepricingRules />} />

                <Route path='/repricing/repricingoverview' element={<RepricingOverview />} />

                <Route path='/repricing/repricinghistory' element={<RepricingHistory />} />

              </Route>

              <Route path='/repricing/create' element={<CreateEditRule />} />

              <Route path="/report" element={<ReportLayout />}>

                <Route index element={<ReportHome />} />

                <Route path="addnew" element={<AddNewReport />} />

              </Route>

              <Route path='/catalog' element={<MyCatalogs />} />

              <Route path='/settings' element={<SettingHome />} >

                <Route path='/settings' element={<SettingsGeneral />} />

                <Route path='/settings/communicationprefrence' element={<SettingsCommPrefrence />} />

                <Route path='/settings/APIkeys' element={<SettingsAPIKeys />} />

              </Route>

              <Route path='/addnew' element={<AddNew />} />

              <Route path='/myproduct' element={<MyProduct />} />

              <Route path='/alert' element={<AlertHome />} >

                <Route path='/alert' element={<AlertRules />} />

                <Route path='/alert/pricealert' element={<PriceAlert />} />

                <Route path='/alert/inevntoryalert' element={<InventoryAlert />} />

                <Route path='/alert/researchalert' element={<ResearchAlert />} />

              </Route>

              <Route path='/apps' element={<Apps />} />

              <Route path='/manageuser' element={<ManageUsersHome />} >

                <Route path='/manageuser' element={<Profiles />} />

                <Route path='/manageuser/changepassword' element={<ChangePassword />} />

                {/* <Route path='/manageuser/users' element={<Users />} />

                <Route path='/manageuser/admin' element={<Admin />} /> */}

              </Route>

              <Route path='/helpcenter' element={<HelpCenter />} />

              <Route path='/payment' element={<PaymentHome />} >

                <Route path='/payment' element={<PaymentBilling />} />

                <Route path='/payment/plans' element={<PaymentPlans />} />

              </Route>

              <Route path='/suggestfeature' element={<SuggestFeature />} >

                <Route path='/suggestfeature' element={<Roadmap />} />

                <Route path='/suggestfeature/feedback' element={<Feedback />} />

                <Route path='/suggestfeature/feedback/feedback' element={<FeedbackFeedback />} />

              </Route>


              {/* User/Admin/Superuser(Owner) */}
              <Route path='/organization' element={<Organization />} >
                <Route path='/organization' element={<OwnerDashboard />} />
                <Route path='/organization/owner/dashboard' element={<OwnerDashboard />} />
                <Route path="/organization/owner/dashboard/edit" element={<EditUser />} />
                <Route path="/organization/owner/dashboard/useraccess" element={<UserAccess />} />
                <Route path='/organization/admin/dashboard' element={<AdminDashboard />} />
                <Route path="/organization/admin/dashboard/edit" element={<AdminEditUser />} />
                <Route path="/organization/admin/dashboard/add" element={<AdminAddUser />} />
                <Route path="/organization/owner/dashboard/add" element={<OwnerAddUser />} />
              </Route>


            </Route>


          </Routes>
        </BrowserRouter>
      </NextUIProvider>
    </>
  );
}

export default App;
