import React, { Suspense, useContext, lazy, useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Competitors from './pages/Competitors';
import DashboardHome from './components/Dashboard/DashboardHome';
import ViewAll from './components/Dashboard/ViewAll';
import CompetitorHome from './components/Competitors/CompetitorHome';
import ResearchHome from './components/ResearchTab/ResearchHome';
import OrganicKeyword from './components/ResearchTab/OrganicPaidKeywords/OrganicKeyword';
import PaidKeyword from './components/ResearchTab/OrganicPaidKeywords/PaidKeyword';
import PaidCompetitors from './components/ResearchTab/PaidCompetitors';
import Home from './components/InventoryManagement/Home';
import OrderListPage from './components/InventoryManagement/OrderListPage';
import MonitoredURL from './components/Competitors/MonitoredURL';
import MapInfragment from './components/Competitors/MapInfragment';
import RepricingHome from './pages/RepricingHome';
import RepricingRules from './components/Repricing/RepricingRules';
import RepricingOverview from './components/Repricing/RepricingOverview';
import RepricingHistory from './components/Repricing/RepricingHistory';
import ReportHome from './components/Report/ReportHome';
import MyCatalogs from './pages/MyCatalogs';
import SettingHome from './components/Settings/SettingHome';
import AddNew from './pages/AddNew';
import OrganicCompetitors from './components/ResearchTab/OrganicCompetitors';
import MyProduct from './pages/MyProduct';
import AlertHome from './pages/AlertHome';
import AlertRules from './components/Alert/AlertRules';
import PriceAlert from './components/Alert/PriceAlert';
import InventoryAlert from './components/Alert/InventoryAlert';
import ResearchAlert from './components/Alert/ResearchAlert';
import Apps from './components/Apps/Apps';
import SettingsGeneral from './components/Settings/SettingsGeneral';
import SettingsCommPrefrence from './components/Settings/SettingsCommPrefrence';
import SettingsAPIKeys from './components/Settings/SettingsAPIKeys';
import ManageUsersHome from './components/ManageUsers/ManageUsersHome';
import Profiles from './components/ManageUsers/Profiles';
import ChangePassword from './components/ManageUsers/ChangePassword';
import Users from './components/ManageUsers/Users';
import Admin from './components/ManageUsers/Admin';
import HelpCenter from './components/HelpCenter/HelpCenter';
import PaymentHome from './components/Payment/PaymentHome';
import PaymentBilling from './components/Payment/PaymentBilling';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import PaymentPlans from './components/Payment/PaymentPlans';
import SuggestFeature from './components/SuggestFeature/SuggestFeature';
import Feedback from './components/SuggestFeature/Feedback';
import Roadmap from './components/SuggestFeature/Roadmap';
import Keyword from './components/ResearchTab/Keyword/Keyword';
import ViewAllTable from './components/InventoryManagement/ViewAllTable'
import AddNewReport from './components/Report/AddNewReport';
import ReportLayout from './components/Report/ReportLayout'
import CreateEditRule from './components/Repricing/CreateEditRule'
import Clicks from './components/ResearchTab/Clicks';
import Change from './components/ResearchTab/Change';
import OwnerDashboard from './components/Superuser/OwnerDashboard'
import AdminDashboard from './components/Admin/AdminDashboard';
import EditUser from './components/Superuser/EditUser';
import AdminEditUser from './components/Admin/AdminEditUser';
import AdminAddUser from './components/Admin/AdminAddUser';
import UserAccess from './components/Superuser/UserAccess';
import Organization from './pages/Organization';

import { NextUIProvider } from "@nextui-org/react";
import AddNewMarketplace from './components/Competitors/AddNewMarketplace';
import InProgress from './components/SuggestFeature/InProgress';
import FeedbackFeedback from './components/SuggestFeature/FeedbackFeedback';
import OwnerAddUser from './components/Superuser/OwnerAddUser';
// import { getUserData } from './utility/Utils';

function App() {

  // const user = getUserData();

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
